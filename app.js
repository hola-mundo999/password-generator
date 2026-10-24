/* PassForge — cryptographically random passwords and passphrases.
   Uses crypto.getRandomValues (never Math.random) with rejection sampling so every
   character (and every word) is equally likely. */

/* 2117 short, unambiguous words — 11.0 bits each, so a 6-word passphrase beats a 16-character password. */
const WORDS = `aboard absorb abstract acacia access accord acorn acre acreage action active actor adapt
adept adjust admire adobe adopt adult advance aerial affair afford afloat afraid agency
agenda agree ahead aide aisle alaska alchemy alert align alike alive alley allow alloy
almost aloof aloud alpha alpine altar alter amber amble amend amine amino amiss ample amuse
anchor andes anemia angle ankle annex annoy annul anode answer antic anvil apart apex apple
approve april apron arbor arcade arch archer arctic arena argue arise armor army aroma array
arrow arson artsy ascot ashore aside askew aspen asset atlas attic audio audit august aunt
aurora auto autumn avatar avenue avoid await awake award aware away awful bacon badge badger
bagel baker balance balcony bald bale bali balk ball bamboo band bandit bane banjo banner
barge bark barley barn barrel basil basin basket batch bath baton beach beacon beads beam
bean bear beard beast beaver become bedding beebe begin behind being belgium belief bell
belly belong bench bend benefit berry berth best bezel bicycle bidet biggie billy bind biome
birch bird birth bishop bison black blade blame bland blank blast blaze bleak bleed blend
bless blind blink bliss blitz bloat block blond blood bloom blouse blue blunt blur blush
board boast boat body boil bold bolt bonus boost boot booth border borne boston bottle
bottom boulder bounce bound bounty bow bowl boxer brain brake branch brand brass brave bread
break breed breeze bribe brick bridge brief bright bring brink brisk broad broil broke
bronze brook broom brown brush buckle buddy budget buffalo buggy build bulb bulk bull bullet
bump bunch bunny burrow bush bust busy butter butterfly button buyer cabin cable cactus
cagey cairo calcium calla camel cameo campus canal candle candy cane canoe canyon caper
carbon card cargo carol carry carve cast castle casual cattle caught cause cave cease cedar
ceiling cellar cello cement census chain chair chalk champ chance change chant chapel charm
chart chase cheap cheat check cheek cheer cherry chess chest chick chief child chill chime
china chip chisel chop chord chorus chrome chunk churn cider cigar cinch cinder circle
circus cite citrus city civic claim clamp clasp class clean clear clerk click cliff climb
cling cloak clock clone close cloth cloud clout clover clown club clue clump clutch coach
coast cobalt cobra cocoa code coffee coil coin coke collar colony color column comb combat
combo come comet comic comma common compass cope copper copy coral cord core cork corn
corner cornet cosmic cost cotton couch cougar count county coup courier cover covet crab
craft crag crane crash crate crater crave crawl craze crazy cream creed creek creep crepe
crest crew cricket cried crime crimson crisp critic crop cross crowd crown crude cruel crumb
crush crust crystal curly curve cycle cypress daddy dairy daisy dance dandy danger dapper
daring dark dart dash data date dawn decay decor decoy deed deem deep deer defy degree delay
delta deluxe demon denim dense depot depth derby desert design desk detail detect detour
devil diamond diary dicey diesel differ digest digger dilute dim diner dinghy dinner diode
dirty disco ditch diver dizzy dodge dogma doing dolphin donor donut dough dowel down dozen
draft drain drake drama draw dream dress dried drift drill drink drive droll drum dry duck
dudley duel duke dune dusk dust duty dwarf dwell dyed eager eagle early earth easel east
easy eaten eater ebony echo eclipse ecology edit eel effect effort egg eight either elbow
elder elect elite elope elude email embed ember emcee emerald empty enact ended enemy engine
enjoy enroll ensign ensure enter entry envoy epoch equal equip erase error erupt essay evade
event every evict exact exam excel exert exile exist expel extra fable fabric facade face
fact fade fail faint fairy faith falcon false fancy farce farm fast fatal fathom fault favor
feast feather fence fern ferry fetal fetch fever fiber fiddle field fiend fifth fifty fig
fight filet filly filmy filth final finch find fine fire firm fish fist five fix fjord flag
flake flame flank flare flash flask fleet flesh flick flier fling flint float flock flood
floor flora floss flour fluid fluke flung flush flute foamy focal focus foggy folio folks
foray force forest forge forgo forte forth forty forum fossil found fox foyer frail frame
frank fraud freak fresh fried frill frisk frock front frost frown frozen fruit fudge fuel
full fume fun fund funny fur furnace fury fuse fuss fuzzy gable gadget gaily gain gait gala
galaxy gale galleon gallon gallop gamble gamma gap garden gargoyle garlic garnet gate gauge
gaunt gavel gaze gecko gem gene genius genre ghost giant giddy ginger girth given giver
glacier glade glass glaze gleam glide glint globe gloom glory gloss glove glow glued goal
goat going gold golly gooey goofy goose gorge gouge grace grade grain grand granite grant
grape graph grasp grass grate grave gravel gravy graze great greed green greet grief grill
grind groan groom grope gross group grout grove growl grown gruel gruff grunt guard guava
guess guest guide guild guile guilt guitar gulf gully gummy gust gusto gusty gutter habit
hairy halve handy happy harbor hardy harsh harvest haste hasty hatch hater haunt haven havoc
hazel head heal heap heart heavy hedge hefty heist hello helm hence heron hickory hilly
hinge hippo hitch hoard hobby hoist holly homer honed honey hook horizon horn horse hotel
hound house hover howdy human humid humor hunch hunter hurry husky hutch hydro hyena hymn
ideal idiom idiot igloo image imply inbox incur index indigo inept inert infer ingot inlet
inner input insect insert inside insight insist intact intake intend invert invest invite
iris island ivory jacket jade jaguar jargon jasmine jelly jetty jewel jiffy jigsaw joint
joker jolly joust judge juice juicy jumbo jumpy juniper junky junta juror kayak keen keep
kelp kept kernel kettle key keystone kick kid kidney kind king kiosk kite kitty knack knave
knead knee knelt knife knock knoll knot known koala label labor laden lager lagoon lance
lantern lapse large lark larva laser latch later lathe latte laugh lava layer leaf leaky
leapt learn lease leash least leave lecture ledge lee left leggy lemon lemur level lever
libel light lilac lily limbo lime limit linen liner lingo lion lipid liter lithe liver llama
loading lobby lobster locket locust lodge lofty logic login loopy loose lorry loser lotus
loud lounge lovely loyal lucid lucky lumber lumen lunar lunch lunge lupin lurch lurid lusty
lymph lynx lyric macaw macho macro madam magic magma magnet maize major maker mango mania
manor maple marble march marina marry marsh mason match mate mayor meadow meager medal media
medic melee mellow melody melon mercy merge merry mesa messy metal meteor meter metro micro
midge miner minor mint minty minus mirror mirth miser missy mist modal mode moist molar
moldy money monk month moody moral morgan morse moss motel moth motor motto mound mount
mourn mouse mousy mouth mover movie mucus muddy mulberry mulch mummy mumps mural murky mused
music musky mustard musty muted myrrh nacho naive naked nanny nasal nasty naval navel nebula
nectar needy nerve never newer newly newt niche nickel niece night ninja ninth noble nobly
noise noisy nomad noose north nosey notch novel nurse nutmeg nylon oak oaken oarman oasis
ocean octal octet often oiled olden olive omega onion onset onward onyx opal open opera
optic orbit orchid order organ other otter ought ounce outer ovary overt owing owl owner
oxide ozone paced paddle paddy pagan paint palace pale palsy panda panel panic pansy panther
pants papal papaya paper parka parry parse parsley party pasta paste pastry patch patio
patty pause paver peace peach pearl pebble pecan pedal penal pence penny peony pepper perch
peril perky pest petal petty pewter phase phoenix phone photo piano picky piece piety
pigment pilot pinch pine pinky pious pipe pitch pithy pivot pixel pizza place plaid plain
plane planet plank plant plate plaza plead pleat plied pluck plum plumb plume plump plush
poem poetic point poise poker polar polka polyp pooch poppy porch portal poser posit pouch
pound power prank prawn press price prick pride prime primp print prior prism prize probe
prone prong proof prose proud prove prowl prune psalm pubic puffin pulpy pulse pumpkin punch
pupil puppy puree purge purse pushy putty quail quake quart quartz quell query quest queue
quick quiet quill quilt quince quirk quite quota quote rabbi rabid racer radar radio rainy
raise rally rambo ranch range rapid ratio raven rayon razor reach react ready realm rebel
reef refer reign relax relay relic remix renal renew repay repel reply rerun reset resin
retro reuse revel revue rhino rhyme ribbon rider ridge rifle right rigid rigor rinse ripen
risen risky rival river roast robin robot rocket rocky rodeo roman rookie roomy roost rose
rotor rouge rough round route rover royal ruby ruddy rugby ruler rumor rural rust rusty
saber saddle safari safe saffron saga sage sail saint salad salmon salon salsa salty salve
samba sand sandy sapphire sappy sassy satin sauce saucy sauna saved savor scale scalp scaly
scamp scant scare scarf scarlet scary scene scent scion scoff scold scone scoop scope score
scorn scour scout scowl scrap screw scrub scuba scuff seal search season seat sedan seedy
seize sense serve seven sever sewer shade shady shaft shake shaky shale shall shame shape
shard share shark sharp shave shawl shear sheep sheer sheet shelf shell shift shine shiny
shire shirt shoal shock shone shook shoot shore short shout shove shown showy shrew shrub
shrug shuck shunt shush shyly sider siege sierra silica silicon silk silky silt silver since
sinew singe siren sixth sixty skate skier skiff skill skimp skirt skulk skull skunk slack
slain slang slant slash slate sleek sleep sleet slept slice slick slide slime slimy sling
slink slope slosh sloth slump slurp small smart smash smear smell smelt smile smirk smite
smith smock smoke smoky snack snail snake snaky snare snarl sneak sneer snide sniff snipe
snoop snore snort snout snow snowy snuck soapy sober socks sofa soggy solar solid solve
sonar sonic sooth sorry sound south space spade spank spare spark sparrow spasm spawn speak
spear speck speed spell spend spent spice spicy spied spike spill spilt spine spiny spire
spite splat split spoil spoke spoof spook spool spoon spore sport spout spray spree sprig
spruce spurn spurt squad squat squid stack staff stage staid stain stair stake stale stalk
stall stamp stand stank star stare stark start stash state stave stead steak steal steam
steed steel steep steer stein stern stick stiff still stilt sting stink stint stock stoic
stoke stole stomp stone stony stood stool stoop store stork storm story stout stove strap
straw stray strip strut stuck study stuff stump stung stunk stunt style suave sugar suite
sulky sully summit sunny sunset super surge surly sushi swamp swan swank swarm swath swear
sweat sweep sweet swell swept swift swill swine swing swipe swirl swiss swoop sword swore
sworn synod syrup table taboo tacit tacky taffy taint tally talon tamer tango tangy taper
tapir tardy tarot taste tasty tatty taunt tawny teach teal tease teddy teeth tempo tenet
tenor tense tenth tepee tepid terse testy thank theft their theme there these thick thief
thigh thing think third thong thorn those three threw throb throw thumb thump thunder thyme
tiara tibia tidal tiger tight tile timber timed timer timid tipsy titan title toast today
toddy token tonal tonic tooth topaz topic torch torso total totem touch tough towel tower
toxic trace track tract trade trail train trait tramp trash trawl tread treat trend trial
tribe trick tried tripe tripod triumph trove truck truer truly trump trunk truss trust truth
tulip tumor tundra tunic turbo turtle tutor twang tweet twice twilight twine twirl twist
tying udder ulcer ultra umber uncle uncut under undid undue unfit unify union unite unity
unlit until unwed upper upset urban urine usage usher usual utter vague valet valid valley
value valve vapid vapor vault vegan velvet venom venue verge verse vicar video vigor villa
vinyl viola violet viper viral virus visit visor vista vital vivid vocal vodka vogue voice
voila vortex voter vouch vowel wafer wager wagon waist waive walnut waltz warty waste watch
water wave waver wax weak weave wedge weedy weigh weird weld well welsh whale wharf wheat
wheel where which whiff while whine whiny whirl whisk white whole whoop whose widen widow
width wield willow wimpy wince winch wind windy wiser witch witty woken wolf woman women
woody wooer wooly woozy wordy world worry worse worst worth would wound woven wrack wrath
wreak wreck wren wrest wring wrist write wrong wrote wrung yacht yammer yarrow yeast yield
yodel yokel yonder young yours youth zebra zenith zephyr zesty zinc zinnia zonal`.split(/\s+/);

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
const outputLabel = document.getElementById("outputLabel");
const passwordControls = document.getElementById("passwordControls");
const passphraseControls = document.getElementById("passphraseControls");
const modePassword = document.getElementById("modePassword");
const modePassphrase = document.getElementById("modePassphrase");
const wordSlider = document.getElementById("wordSlider");
const wordValue = document.getElementById("wordValue");
const separatorSelect = document.getElementById("separatorSelect");
const capitalizeWords = document.getElementById("capitalizeWords");
const appendNumber = document.getElementById("appendNumber");
const generateLabel = generateBtn.querySelector(".btn-text");

const checkboxes = {
  uppercase: document.getElementById("inclUppercase"),
  lowercase: document.getElementById("inclLowercase"),
  numbers: document.getElementById("inclNumbers"),
  symbols: document.getElementById("inclSymbols")
};
const avoidAmbiguous = document.getElementById("avoidAmbiguous");

let toastTimer = null;
let hasGenerated = false;
let mode = "password";

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

/* ── passphrase ── */
function pickWords(count) {
  const pool = WORDS.slice();
  const picked = [];
  for (let i = 0; i < count && pool.length > 0; i++) {
    picked.push(pool.splice(secureRandomInt(pool.length), 1)[0]);
  }
  return picked;
}

function buildPassphrase(count, separator, capitalize, withNumber) {
  let words = pickWords(count);

  if (capitalize) {
    words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  }

  let phrase = words.join(separator);

  if (withNumber) {
    phrase += separator + (10 + secureRandomInt(90)); // 10 – 99, never 0-9
  }

  return phrase;
}

/* ── actions ── */
function generate() {
  if (mode === "passphrase") {
    generatePassphrase();
    return;
  }

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

function generatePassphrase() {
  const words = Number(wordSlider.value);
  const count = Math.min(WORDS.length, Math.max(1, words));
  const phrase = buildPassphrase(
    count,
    separatorSelect.value,
    capitalizeWords.checked,
    appendNumber.checked
  );

  output.textContent = phrase;
  hasGenerated = true;

  const bits =
    count * Math.log2(WORDS.length) + (appendNumber.checked ? Math.log2(90) : 0);
  updateStrength(bits, 1);
}

function setMode(next) {
  mode = next === "passphrase" ? "passphrase" : "password";
  const isPassphrase = mode === "passphrase";

  passwordControls.hidden = isPassphrase;
  passphraseControls.hidden = !isPassphrase;

  modePassword.classList.toggle("is-active", !isPassphrase);
  modePassphrase.classList.toggle("is-active", isPassphrase);
  modePassword.setAttribute("aria-selected", String(!isPassphrase));
  modePassphrase.setAttribute("aria-selected", String(isPassphrase));

  outputLabel.textContent = isPassphrase ? "GENERATED PASSPHRASE" : "GENERATED PASSWORD";
  generateLabel.textContent = isPassphrase ? "⚡ Generate Passphrase" : "⚡ Generate Password";

  generate();
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

modePassword.addEventListener("click", () => setMode("password"));
modePassphrase.addEventListener("click", () => setMode("passphrase"));

wordSlider.addEventListener("input", () => {
  wordValue.textContent = wordSlider.value;
  if (hasGenerated) generate();
});

separatorSelect.addEventListener("change", () => {
  if (hasGenerated) generate();
});

[capitalizeWords, appendNumber].forEach((box) => {
  box.addEventListener("change", () => {
    if (hasGenerated) generate();
  });
});

/* ── boot ── */
window.addEventListener("DOMContentLoaded", () => {
  lengthValue.textContent = slider.value;
  wordValue.textContent = wordSlider.value;
  setMode("password");
});
