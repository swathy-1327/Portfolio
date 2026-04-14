# Swathy Umendran Portfolio

A React + Vite personal portfolio site with sections for hero, about, skills, projects, certificates, and contact.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub and Vercel

1. Create a new empty GitHub repository.
2. In this folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

3. Go to Vercel and import the GitHub repository.
4. Use the default Vite settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deploy and copy the generated public URL into your resume.
