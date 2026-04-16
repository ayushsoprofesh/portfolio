const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'globals.css');
let content = fs.readFileSync(filePath, 'utf8');

// The replacement pattern
const OLD = '  .case-study-sidebar {';
const NEW = '  .case-study-page {\n    height: auto !important;\n    overflow: visible !important;\n  }\n\n  .case-study-sidebar {';

if (content.includes(OLD)) {
  content = content.replace(OLD, NEW);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Replaced successfully');
} else {
  // Try with CRLF
  const OLD_CRLF = '  .case-study-sidebar {\r\n';
  const NEW_CRLF = '  .case-study-page {\r\n    height: auto !important;\r\n    overflow: visible !important;\r\n  }\r\n\r\n  .case-study-sidebar {\r\n';
  if (content.includes(OLD_CRLF)) {
    content = content.replace(OLD_CRLF, NEW_CRLF);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Replaced (CRLF) successfully');
  } else {
    console.log('Pattern not found');
  }
}
