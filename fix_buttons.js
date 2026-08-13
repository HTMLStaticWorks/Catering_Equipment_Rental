const fs = require('fs');
const path = require('path');
const dir = 'd:\\project 2\\Catering Equipment Rental';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const replacements = [
  {regex: /<button([^>]*)>Login<\/button>/g, replace: '<button$1 onclick="window.location.href=\'login.html\'">Login</button>'},
  {regex: /<button([^>]*)>Get a Quote<\/button>/g, replace: '<button$1 onclick="window.location.href=\'contact.html\'">Get a Quote</button>'},
  {regex: /href="#"(>ChefRent Pro<\/a>)/g, replace: 'href="home.html"$1'}
];

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  for (const r of replacements) {
    content = content.replace(r.regex, r.replace);
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated buttons in ' + file);
  }
}
