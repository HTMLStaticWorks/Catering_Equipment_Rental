const fs = require('fs');
const path = require('path');

const dir = 'd:\\project 2\\Catering Equipment Rental';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let changedFiles = 0;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Replace hardcoded dark background sections
    content = content.replace(/bg-\[#1C2B39\] text-white/g, 'bg-surface dark:bg-[#1C2B39] text-on-surface dark:text-white');
    content = content.replace(/bg-\[#1C2B39\]/g, 'bg-surface dark:bg-[#1C2B39]');
    
    // 2. Replace primary/tertiary backgrounds in light mode
    // We only want to replace bg-primary if it doesn't have dark: in front of it.
    content = content.replace(/(?<!dark:)bg-primary/g, 'bg-surface dark:bg-primary');
    content = content.replace(/(?<!dark:)bg-tertiary/g, 'bg-surface dark:bg-tertiary');
    
    // 3. Replace text colors that were meant for dark backgrounds
    content = content.replace(/(?<!dark:)text-on-primary/g, 'text-on-surface dark:text-on-primary');
    content = content.replace(/(?<!dark:)text-on-tertiary/g, 'text-on-surface dark:text-on-tertiary');
    
    // 4. Fix specific gray texts that are invisible on white
    content = content.replace(/(?<!dark:)text-gray-300/g, 'text-on-surface-variant dark:text-gray-300');
    content = content.replace(/(?<!dark:)text-gray-400/g, 'text-on-surface-variant dark:text-gray-400');
    
    // 5. Fix text-white in headings and spans that are now on white backgrounds
    // This is tricky. We can look for common heading classes.
    content = content.replace(/class="([^"]*)text-white([^"]*)"/g, (match, p1, p2) => {
        // Don't replace if it's already got dark:text-white or it's inside a dark overlay/gradient
        if (p1.includes('dark:text-white') || p2.includes('dark:text-white')) return match;
        if (p1.includes('from-black') || p1.includes('to-black') || p1.includes('bg-black')) return match;
        if (p2.includes('from-black') || p2.includes('to-black') || p2.includes('bg-black')) return match;
        // Don't replace button texts
        if (p1.includes('bg-accent-flame') || p1.includes('bg-secondary')) return match;
        
        return `class="${p1}text-on-surface dark:text-white${p2}"`;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        changedFiles++;
        console.log(`Updated ${file}`);
    }
}

console.log(`Updated ${changedFiles} files.`);
