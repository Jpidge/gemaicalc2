# Deploying Commodore 110 to GitHub Pages

If you pushed this project to GitHub and saw the **Commodore Boot Screen** (`INITIALIZING RULE 110 CELLULAR ALU PIPELINE...`) without the calculator loading, here is why:

### Why That Happened
Modern React & TypeScript projects use `<script type="module" src="/src/main.tsx">`. Web browsers **cannot execute uncompiled TypeScript (`.tsx`) files**. 

When GitHub Pages hosts a raw repository root, it serves static files without running Vite to compile TypeScript. Therefore, the browser fails to load `/src/main.tsx`, and the boot screen never transitions to the calculator.

---

## 3 Instant Solutions for GitHub

We have configured the repository to support all three deployment paths out-of-the-box:

### Option 1: Automatic Standalone Fallback (Zero Setup)
We added a smart bootloader to `index.html`. If you simply push this repository to GitHub:
- When visitors open your `https://<username>.github.io/<repo>/` site, `index.html` detects the static host and **automatically launches the pre-compiled `commodore-110-standalone.html`** bundled in your repo.
- No build steps or configuration needed!

---

### Option 2: Deploy from the `/docs` Folder (Recommended for Manual Pages)
We created a pre-built `/docs` folder that contains the production-compiled static web assets with relative paths.

1. Go to your repository on GitHub.
2. Click **Settings** &rarr; **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` (or `master`) and change the folder from `/(root)` to **`/docs`**.
4. Click **Save**.
5. Your live calculator will be ready at `https://<username>.github.io/<repo>/` in ~30 seconds!

---

### Option 3: GitHub Actions (Automated CI/CD)
We added `.github/workflows/deploy.yml` to the repository.

1. In your GitHub repository, click **Settings** &rarr; **Pages**.
2. Under **Build and deployment**:
   - **Source**: Select **`GitHub Actions`** (instead of "Deploy from a branch").
3. That's it! GitHub will automatically compile the project on every push and deploy it to GitHub Pages.

---

## Local Development
To run locally with hot-reloading:
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.
