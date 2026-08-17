const fs = require('fs');
const path = require('path');

const dir = 'd:\\project 2\\Catering Equipment Rental';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let changedFiles = 0;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Replace bg-accent-flame text-white with bg-secondary-container text-on-secondary-container
    if (content.includes('bg-accent-flame text-white')) {
        content = content.replace(/bg-accent-flame text-white/g, 'bg-secondary-container text-on-secondary-container');
        changed = true;
    }
    // Also just in case there are text-accent-flame
    if (content.includes('text-accent-flame')) {
        content = content.replace(/text-accent-flame/g, 'text-secondary-container');
        changed = true;
    }
    // Also bg-accent-flame alone
    if (content.includes('bg-accent-flame')) {
        content = content.replace(/bg-accent-flame/g, 'bg-secondary-container');
        changed = true;
    }
    
    // Also remove the custom CSS block if it exists
    const cssBlock = `        .text-accent-flame { color: #E8570C; }\n        .bg-accent-flame { background-color: #E8570C; }\n        .border-accent-flame { border-color: #E8570C; }`;
    if (content.includes(cssBlock)) {
        content = content.replace(cssBlock, '');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        changedFiles++;
        console.log(`Updated ${file}`);
    }
}

console.log(`Updated ${changedFiles} files.`);
