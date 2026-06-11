const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\holaf\\.gemini\\antigravity\\brain\\8e57834c-f234-49e8-9a0d-252591318a47\\.system_generated\\logs\\transcript.jsonl';
const content = fs.readFileSync(logPath, 'utf8');
const lines = content.split('\n');

lines.forEach((line, index) => {
  if (line.includes('Adjustment Round 01')) {
    console.log(`Line ${index}: length=${line.length}`);
    try {
      const obj = JSON.parse(line);
      console.log(`Source: ${obj.source}, Type: ${obj.type}, Step: ${obj.step_index}`);
      if (obj.content && obj.content.includes('<truncated')) {
        console.log('Contains truncation tag.');
      } else {
        console.log('No truncation tag.');
      }
    } catch (e) {
      console.log('Error parsing JSON');
    }
  }
});
