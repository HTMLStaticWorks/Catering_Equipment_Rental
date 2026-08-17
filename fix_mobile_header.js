const fs = require('fs');
const path = require('path');

const dir = 'd:\\project 2\\Catering Equipment Rental';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f.endsWith('.js'));

const targetContent1 = 'font-bold text-primary dark:text-white hover:opacity-80 transition-opacity';
const replacementContent1 = 'font-bold text-primary dark:text-white hover:opacity-80 transition-opacity';

// also look at the menu drawer header:
const targetContent2 = 'font-display-lg-mobile text-display-lg-mobile text-primary dark:text-white';
const replacementContent2 = 'font-display-lg-mobile text-display-lg-mobile text-primary dark:text-white';


let changedFiles = 0;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    if (content.includes(targetContent1)) {
        content = content.replaceAll(targetContent1, replacementContent1);
        changed = true;
    }
    if (content.includes(targetContent2)) {
        content = content.replaceAll(targetContent2, replacementContent2);
        changed = true;
    }
    
    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        changedFiles++;
        console.log(`Updated ${file}`);
    }
}

console.log(`Updated ${changedFiles} files.`);
