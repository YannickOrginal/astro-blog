const fs = require('fs');

// Funktion: SwipeNavigation in eine Datei einfügen
function addSwipe(filePath) {
  let c = fs.readFileSync(filePath, 'utf8');
  
  if (!c.includes('<SwipeNavigation />')) {
    // Import hinzufügen wenn Header import existiert
    if (c.indexOf("import Header") !== -1 && c.indexOf("</main>") !== -1) {
      const headerIdx = c.lastIndexOf("import Header");
      const mainIdx = c.lastIndexOf("</main>");
      
      if (headerIdx !== -1 && mainIdx !== -1) {
        // Import vor Header (mit Zeilenumbruch)
        c = c.substring(0, headerIdx) + "\nimport SwipeNavigation from '../../components/SwipeNavigation.astro';" + c.substring(headerIdx);
        
        // SwipeTag direkt vor schließendem </main>
        const mainStartIdx = c.lastIndexOf("<main");
        if (mainStartIdx !== -1 && mainStartIdx < mainIdx) {
          c = c.substring(0, mainIdx - 2) + "\n" + "// SwipeNavigation component\n" + "<SwaggerNavigation />\n" + "</main>" + c.substring(mainIdx);
          console.log('[DEBUG] Main tag found at', mainStartIdx);
        } else if (mainStartIdx === -1) {
          // Direct replace before </main>
          const closeMain = c.lastIndexOf('</main>');
          if (closeMain !== -1) {
            c = c.substring(0, closeMain) + "\n" + "// SwipeNavigation component\n" + "<SwipeNavigation />\n" + "</main>" + c.substring(closeMain);
          }
        }
      }
    }
    
    // Write back
    if (c.indexOf('<SwipeNavigation />') !== -1 && c.indexOf('import Header') === -1) {
      return fs.writeFileSync(filePath, c);
    } else {
      console.log('[OK] Added Swipe to', filePath);
      return fs.writeFileSync(filePath, c);
    }
  } else {
    console.log('[SKIPPED] Already has Swipe in', filePath);
  }
}

// Update about
try {
  try {
    const c = JSON.stringify(fs.readFileSync('E:/Projekte/astro-blog/src/pages/about.astro', 'utf8'));
    if (c.indexOf('<SwipeNavigation />') !== -1) console.log('[OK] about has Swipe');
    fs.writeFileSync('E:/Projekte/astro-blog/src/pages/about.astro', c.replace(/<\/main>$/g, '\n<!-- Swipe -->\n<SwipeNavigation />\n</main>').replace(/(<\nimport Header)/g, '<\nimport Swipe from \'../../components/SwipeNavigation.astro\'\ng' + '$1'));
    console.log('[OK] about.astro corrected');
  } catch (err) {
    console.log('[ERROR about]', err.message);
  }
} catch(e) { console.log('[X] about error', e.message); }

// Update blog  
try {
  c = JSON.stringify(fs.readFileSync('E:/Projekte/astro-blog/src/pages/blog/index.astro', 'utf8'));
  if (c.indexOf('<SwipeNavigation />') !== -1 && c.replace(/<\/main>/g, '').length === c.length - 10) console.log('[OK] blog has Swipe');
} catch(e) { console.log('[X] blog error', e.message); }

console.log('[SCRIPT_COMPLETE]');
