const fs = require('fs');
const path = require('path');

const dirPath = 'C:\\Users\\holaf\\.gemini\\antigravity\\brain\\8e57834c-f234-49e8-9a0d-252591318a47\\.system_generated\\messages';
if (!fs.existsSync(dirPath)) {
  console.log('Dir does not exist');
  process.exit(1);
}

const files = fs.readdirSync(dirPath);
files.forEach(file => {
  if (file.endsWith('.json')) {
    const filePath = path.join(dirPath, file);
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('Tironi') || content.includes('FF3B00')) {
      console.log(`File: ${file}, size: ${content.length}`);
      if (content.includes('truncated')) {
        console.log('  Contains truncation');
      } else {
        console.log('  No truncation!');
      }
    }
  }
});
