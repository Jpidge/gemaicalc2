# Commodore 110: Cellular Automata Mechanical Calculator

> **An 8-bit first-principles digital calculator, logic gate lab, and ALU built entirely from Stephen Wolfram's Rule 110 cellular automata with vintage Commodore handheld aesthetics.**

---

## ⚡ 3 Ways to Run This Project

### 1. Instant Offline Run (Zero Installation / Double-Click)
- Open **`commodore-110-standalone.html`** in **any modern web browser** (Chrome, Firefox, Safari, Edge).
- **No Node.js, no terminal, and no internet connection required!**
- All 8-bit mechanical ALU logic, Rule 110 simulation, audio synthesis, truth tables, heatmaps, and signal visualizers are 100% bundled into this single standalone file.

---

### 2. Hosting on GitHub Pages (3 Options)
- **Option A (Zero Setup)**: Push this repo to GitHub. Root `index.html` detects GitHub Pages and auto-launches the pre-compiled `commodore-110-standalone.html` bundle!
- **Option B (Deploy from `/docs`)**: In your GitHub repo **Settings &rarr; Pages**, choose **Deploy from branch &rarr; `/docs`**. It serves the compiled static production build directly!
- **Option C (GitHub Actions)**: In **Settings &rarr; Pages**, choose **GitHub Actions**. Our included `.github/workflows/deploy.yml` will automatically build and deploy on every git push.
- See **`DEPLOY_TO_GITHUB.md`** for full details.

---

### 3. Developer Mode (Vite + TypeScript + React)
If you want to modify the source code:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build both static & standalone versions**:
   ```bash
   npm run build
   ```
   This generates:
   - `dist/`: Static deployment directory.
   - `commodore-110-standalone.html`: Portable single-file executable.

---

## 🕹️ Features

- **Full 8-bit Mechanical Cellular ALU**:
  - Operations: `ADD` (+), `SUB` (-), `AND` (&), `OR` (|), `XOR` (^), `NAND`, `NOR`, `XNOR`, `NOT` (~), `SHL` (<<), `SHR` (>>).
  - 8-bit binary registers, carry status, overflow detection, zero flags.
- **Rule 110 First-Principles Physics**:
  - 8-bit full adder constructed from colliding glider solitons (Ether background, P-gliders, F-gliders).
  - Live cellular grid with interactive step-by-step evolution.
- **Circuit Blueprint & Logic Gate Labs**:
  - Interactive gate tutorials with live waveform signal timing.
  - Interactive decision truth tables and glider collision animations.
- **Heatmaps & Signal History**:
  - Live spatial activity heatmaps of cellular computation.
  - Signal history graphs and waveform visualizers.
- **Vintage Commodore Handheld Console**:
  - Retro LED segment display with phosphor glow.
  - Optional authentic CRT scanline curvature & flicker effect.
  - Web Audio synthesizer simulating vintage mechanical switches and beepers.
- **Export & Portability**:
  - CSV export of computation runs and bit transitions.
  - 1-click Download Standalone HTML and Source ZIP.
