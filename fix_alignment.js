const fs = require('fs');
const path = require('path');
const dir = 'd:\\project 2\\Catering Equipment Rental';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Let's add flex and alignment to the RTL button
  // Current: class="p-2 text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-full" id="rtl-toggle"
  // New: class="p-2 flex items-center justify-center w-10 h-10 text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-full" id="rtl-toggle"

  content = content.replace(
      /class="p-2 text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-full"\s*id="rtl-toggle"/g,
      'class="p-2 flex items-center justify-center w-10 h-10 text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-full" id="rtl-toggle"'
  );

  // Also apply it to theme-toggle to be safe
  content = content.replace(
      /class="p-2 text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-full"\s*id="theme-toggle"/g,
      'class="p-2 flex items-center justify-center w-10 h-10 text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors duration-200 rounded-full" id="theme-toggle"'
  );

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed alignment in ' + file);
  }
}
