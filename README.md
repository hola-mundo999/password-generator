# 🔐 PassForge — Password Generator

A cyberpunk-themed password generator built with vanilla HTML, CSS and JavaScript. It uses the
browser's **CSPRNG** (`crypto.getRandomValues`) — never `Math.random` — so the passwords are
actually random.

## ✨ Features

- Cryptographically secure randomness with rejection sampling (no modulo bias)
- **Guaranteed coverage**: at least one character from every selected set, then securely shuffled
- Length from 6 to 64 characters, with the preview regenerating live as you drag
- Toggle Uppercase, Lowercase, Numbers and Symbols independently
- **Avoid look-alikes** mode drops `O 0 I l 1 | \`` for passwords you have to dictate or type by hand
- **Passphrase mode** — a second tab that builds memorable passphrases from a bundled 2,117-word
  list (still drawn with `crypto.getRandomValues`): 3–8 words, your choice of separator, optional
  capitalisation and a trailing number, with entropy reported in bits either way
- **Entropy meter** — shows the real strength in bits, labelled Weak / Fair / Good / Strong
- One-click copy with an inline toast (and a fallback for browsers without the async clipboard API)
- Guards: you cannot turn off every character set, and copying before generating is refused politely
- Neon UI with animated particles, scanlines and a roll-in card (no libraries)

## 🛠️ Built With

- HTML5
- CSS3 (animations, CSS variables, grid)
- Vanilla JavaScript — Web Crypto API, no dependencies

## 📂 Project Structure

```text
password-generator/
├── index.html
├── style.css
└── app.js
```

## 🚀 How to Use

1. Open `index.html` in your browser
2. Pick your character sets and length
3. Hit **Generate Password** (a password is already waiting on load)
4. Press the copy button — the toast confirms it

## 💡 Concepts Applied

- `crypto.getRandomValues` + rejection sampling for uniform randomness
- Fisher–Yates shuffle driven by secure random indices
- Shannon entropy estimate: `length × log2(pool size)`
- Conditional regeneration so controls and preview stay in sync
- Clipboard API with a `document.execCommand` fallback
- CSS keyframe animations and 3D transforms
