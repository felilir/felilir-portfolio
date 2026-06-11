const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\holaf\\.gemini\\antigravity\\brain\\8e57834c-f234-49e8-9a0d-252591318a47\\.system_generated\\logs\\transcript.jsonl';
if (!fs.existsSync(logPath)) {
  console.log('Log file does not exist at ' + logPath);
  process.exit(1);
}

const content = fs.readFileSync(logPath, 'utf8');
const lines = content.split('\n');

for (const line of lines) {
  if (line.includes('"step_index":251')) {
    console.log('Found line! Length: ' + line.length);
    try {
      const data = JSON.parse(line);
      console.log('Parsed successfully!');
      console.log('Content length: ' + data.content.length);
      fs.writeFileSync('C:\\Users\\holaf\\.gemini\\antigravity\\brain\\8e57834c-f234-49e8-9a0d-252591318a47\\scratch\\full_request.txt', data.content);
      console.log('Wrote full request to scratch\\full_request.txt');
    } catch (e) {
      console.log('Failed to parse: ' + e.message);
    }
  }
}
