const fs = require('fs');

const file = 'src/pages/about.astro';
let content = fs.readFileSync(file, 'utf8');

// Fix broken import statements
console.log('[READING] about.astro - checking for corrupt imports...');

if (content.includes("import Header from ''") || content.includes("import ''../")) {
    console.log('[FOUND] Corrupt import syntax detected');
    
    content = content.replace(
        /import Header from ['"]\s*['"].*?(?=^|\n)/gm, 
        'import Header from \'../components/Header.astro\';'
    );
    console.log('[FIXED] Replaced corrupt Header import');
}

fs.writeFileSync(file, content, 'utf8');
console.log('[OK] about.astro fixed and persisted');
console.log('[SIZE] ', (content.length || fs.readFileSync(file,'utf8').length), ' bytes');
