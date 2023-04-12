const fs = require('fs');
const path = require('path');

const filePath = './practice.js'; // replace with actual file path
const directoryPath = './dsa'; // replace with actual directory path

// Read file contents.
const data = fs.readFileSync(filePath, 'utf8');

// Extract text between start and end comments.
const regex = /\/\/start\n([\s\S]*?)\/\/(.*?)\n([\s\S]*?)\/\/Solution:\n([\s\S]*?)\/\/end/g;
let match;
while (match = regex.exec(data)) {
  const title = match[2].trim().replace(/ /g, ''); // remove spaces from title
  const question = match[3].trim();
  const solution = match[4].trim();

  // Create new file in directory with specified title and .js extension.
  const fileName = `${title}.js`;
  const fileContents = `// Question: \n${question}\n\n${solution}`;
  const fileDir = path.join(directoryPath, fileName);
  fs.writeFileSync(fileDir, fileContents);
}

console.log('Extraction completed successfully.');
