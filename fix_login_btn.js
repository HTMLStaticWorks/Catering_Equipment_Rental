const fs = require('fs');
const path = require('path');

const dir = 'd:\\project 2\\Catering Equipment Rental';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const targetContent = '<button class="font-label-bold text-label-bold text-on-surface-variant dark:text-on-tertiary-container border border-outline-variant dark:border-outline/50 px-4 py-2 rounded-lg hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors" onclick="window.location.href=\'login.html\'">Login</button>';

// Improve dark theme visibility: Use white/bright text (dark:text-white) and a clearer border (dark:border-white/30) in dark theme
const replacementContent = '<button class="font-label-bold text-label-bold text-on-surface-variant dark:text-white border border-outline-variant dark:border-white/30 px-4 py-2 rounded-lg hover:bg-surface-container-low dark:hover:bg-white/10 transition-colors" onclick="window.location.href=\'login.html\'">Login</button>';

let changedFiles = 0;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes(targetContent)) {
        content = content.replaceAll(targetContent, replacementContent);
        fs.writeFileSync(filePath, content, 'utf8');
        changedFiles++;
        console.log(`Updated ${file}`);
    }
}

console.log(`Updated ${changedFiles} files.`);
