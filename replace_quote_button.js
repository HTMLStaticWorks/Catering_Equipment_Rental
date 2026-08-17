const fs = require('fs');
const path = require('path');

const dir = 'd:\\project 2\\Catering Equipment Rental';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let changedFiles = 0;

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Desktop nav replace
    const desktopRegex = /onclick="window\.location\.href='contact\.html'">Get a Quote<\/button>/g;
    if (desktopRegex.test(content)) {
        content = content.replace(desktopRegex, `onclick="window.location.href='register.html'">Signup</button>`);
        changed = true;
    }

    // Mobile nav replace
    const mobileRegex = /onclick="window\.location\.href='contact\.html'">\s*Get a Quote\s*<\/button>/g;
    if (mobileRegex.test(content)) {
        content = content.replace(mobileRegex, `onclick="window.location.href='register.html'">\n            Signup\n        </button>`);
        changed = true;
    }
    
    // Fallback if not caught by above
    if (content.includes('>Get a Quote</button>') && !changed) {
        content = content.replace(/>Get a Quote<\/button>/g, '>Signup</button>');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        changedFiles++;
        console.log(`Updated ${file}`);
    }
}

console.log(`Updated ${changedFiles} files.`);
