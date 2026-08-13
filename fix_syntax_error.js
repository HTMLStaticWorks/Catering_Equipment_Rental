const fs = require('fs');
const path = require('path');
const dir = 'd:\\project 2\\Catering Equipment Rental';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Fix the syntax error from previous script
  content = content.replace(
      /if \(themeToggle\) {\s*const iconSpan = themeToggle \? themeToggle\.querySelector\('\.material-symbols-outlined'\) : null;/g,
      "const iconSpan = themeToggle ? themeToggle.querySelector('.material-symbols-outlined') : null;"
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed script syntax error in ' + file);
  }
}
