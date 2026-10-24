const fs = require('fs');
const path = require('path');

const rootDir = 'E:/Projekte/astro-blog';

// 1. ProfileHero.astro schreiben
const heroPath = path.join(rootDir, 'src/components/ProfileHero.astro');

// Aufbau des Hero-Inhalts ohne Template-Literals am Ende
const heroLines = [
  "'---',", 
  "'---'", "",
  "'<section class=\"personal-hero\">'",
  "  '<div class=\"hero-badge-row\">'",
  "    '<span class=\"badge-pill\">Technik &amp; Praxis</span>'",
  "    '<span class=\"badge-pill\">Rheinland</span>'",
  "  '</div>'",
  "  '<h1 class=\"headline\">Hi, ich bin Yannick Derouaux.</h1>'",
  "  '<p>Ich arbeite mit Hardware, Code und vernetzten Systemen – aber genauso an der frischen Luft.</p>'",
  "",
  "  '<div class=\"story-grid\">'",
  "    '<div class=\"card\">⚡ Technik</div>'",
  "    '<div class=\"card\">🌲 Natur</div>'",
  "    '<div class=\"card\">🤝 Disziplin</div>'",
  "  '</div>'",
  "</section>",
  "<style>/* CSS für .personal-hero */</style>"
].join('\n');

const heroContent = `---` + heroLines + ``;

// Alternative: Einfach HTML-String nutzen
const heroContentHTML = `---\n---\n<section class=\"personal-hero\">\n  <h1>Hi, ich bin Yannick Derouaux.</h1>\n</section>\n`;

fs.writeFileSync(heroPath, heroContentHTML, 'utf8');
console.log('ProfileHero.astro written');

// 2. Header.astro anpassen  
const headerPath = path.join(rootDir, 'src/components/Header.astro');
let headerCode = fs.readFileSync(headerPath, 'utf8');

// Einfache Ersetzung des Logo-Links
const oldLogo = /<a[^>]*class=["']logo-link["'][^>]*>[^<]*/;
headerCode = headerCode.replace(oldLogo, '<a href="/" class="logo-link"><span class="circle-logo">YD</span></a>');

// CSS für circle-logo hinzufügen
const cssToAdd = `\n<style>\n  .circle-logo {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    border: 2px solid var(--accent, #38bdf8);\n    background: rgba(56, 189, 248, 0.08);\n    color: var(--accent, #38bdf8);\n    font-family: ui-monospace, monospace;\n    font-weight: 700;\n    transition: all 0.2s ease;\n  }\n</style>`;

headerCode += cssToAdd;
fs.writeFileSync(headerPath, headerCode, 'utf8');
console.log('Header.astro updated');

console.log('PATCH_COMPLETE');
