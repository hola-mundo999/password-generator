/* PassForge — cryptographically random passwords.
   Uses crypto.getRandomValues (never Math.random) with rejection sampling so every
   character in a set is equally likely. */

const SETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

// Characters that are easy to confuse when read aloud or typed by hand.
const AMBIGUOUS = new Set(["O", "0", "I", "l", "1", "|", "`"]);

const slider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const output = document.getElementById("passwordOutput");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const strengthLabel = document.getElementById("strengthLabel");
const strengthBits = document.getElementById("strengthBits");
const strengthFill = document.getElementById("strengthFill");
const copyToast = document.getElementById("copyToast");

const checkboxes = {
  uppercase: document.getElementById("inclUppercase"),
  lowercase: document.getElementById("inclLowercase"),
  numbers: document.getElementById("inclNumbers"),
  symbols: document.getElementById("inclSymbols")
};
const avoidAmbiguous = document.getElementById("avoidAmbiguous");

let toastTimer = null;
let hasGenerated = false;

/* ── randomness ── */
function secureRandomInt(max) {
  // Rejection sampling keeps the distribution uniform (no modulo bias).
  if (max <= 0) return 0;
  const limit = Math.floor(0x100000000 / max) * max;
  const buffer = new Uint32Array(1);
  let value;
  do {
    crypto.getRandomValues(buffer);
    value = buffer[0];
  } while (value >= limit);
  return value % max;
}

function shuffle(chars) {
  for (let i = chars.length - 1; i > 0; i--) {
    const j = secureRandomInt(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars;
}

/* ── character pools ── */
function selectedSets() {
  return Object.entries(SETS)
    .filter(([key]) => checkboxes[key].checked)
    .map(([key, chars]) => {
      const pool = avoidAmbiguous.checked
        ? [...chars].filter((c) => !AMBIGUOUS.has(c)).join("")
        : chars;
      return pool;
    })
    .filter((pool) => pool.length > 0);
}

function buildPassword(length) {
  const pools = selectedSets();
  if (pools.length === 0) return { password: "", poolSize: 0 };

  const combined = pools.join("");
  const chars = [];

  // Guarantee at least one character from every selected set.
  pools.forEach((pool) => chars.push(pool[secureRandomInt(pool.length)]));

  while (chars.length < length) {
    chars.push(combined[secureRandomInt(combined.length)]);
  }

  // Trim if length < number of selected sets, then shuffle so the guaranteed
  // characters are not stuck at the front.
  const password = shuffle(chars).slice(0, length).join("");
  return { password, poolSize: combined.length };
}

/* ── strength ── */
function strengthFor(bits) {
  if (bits < 40) return { label: "weak", className: "weak", width: "25%" };
  if (bits < 60) return { label: "fair", className: "fair", width: "50%" };
  if (bits < 80) return { label: "good", className: "good", width: "75%" };
  return { label: "strong", className: "strong", width: "100%" };
}

function updateStrength(bits, poolSize) {
  if (!hasGenerated || !poolSize) {
    strengthLabel.textContent = "—";
    strengthBits.textContent = "";
    strengthFill.style.width = "0%";
    strengthFill.className = "strength-fill";
    return;
  }

  const { label, className, width } = strengthFor(bits);
  strengthLabel.textContent = label;
  strengthBits.textContent = Math.round(bits) + " bits entropy";
  strengthFill.style.width = width;
  strengthFill.className = "strength-fill " + className;
}

/* ── toast ── */
function showToast(message, isError = false) {
  copyToast.textContent = message;
  copyToast.style.background = isError ? "var(--danger)" : "";
  copyToast.style.color = isError ? "#fff" : "";
  copyToast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    copyToast.classList.remove("show");
    copyToast.style.background = "";
    copyToast.style.color = "";
  }, 1700);
}

/* ── actions ── */
function generate() {
  const length = Number(slider.value);

  if (selectedSets().length === 0) {
    checkboxes.lowercase.checked = true;
    showToast("Pick at least one character set.", true);
  }

  const { password, poolSize } = buildPassword(length);

  if (!password) {
    output.textContent = "—";
    hasGenerated = false;
    updateStrength(0, 0);
    return;
  }

  output.textContent = password;
  hasGenerated = true;

  const bits = length * Math.log2(poolSize);
  updateStrength(bits, poolSize);
}

async function copyPassword() {
  if (!hasGenerated || !output.textContent || output.textContent === "—") {
    showToast("Generate a password first.", true);
    return;
  }

  const password = output.textContent;

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(password);
    } else {
      // Fallback for browsers without the async clipboard API
      const area = document.createElement("textarea");
      area.value = password;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    showToast("Copied to clipboard!");
  } catch {
    showToast("Couldn’t copy — select the text manually.", true);
  }
}

/* ── events ── */
generateBtn.addEventListener("click", generate);
copyBtn.addEventListener("click", copyPassword);

slider.addEventListener("input", () => {
  lengthValue.textContent = slider.value;
  if (hasGenerated) generate(); // keep the preview in sync with the slider
});

Object.values(checkboxes).forEach((box) => {
  box.addEventListener("change", () => {
    const anyChecked = Object.values(checkboxes).some((c) => c.checked);
    if (!anyChecked) {
      box.checked = true;
      showToast("Keep at least one character set on.", true);
    }
    if (hasGenerated) generate();
  });
});

avoidAmbiguous.addEventListener("change", () => {
  if (hasGenerated) generate();
});

/* ── boot ── */
window.addEventListener("DOMContentLoaded", () => {
  lengthValue.textContent = slider.value;
  generate();
});
