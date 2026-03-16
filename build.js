const fs = require('fs');

// Step 1: passthrough — just copies current file to dist/
// Will be expanded in Step 2 when we start splitting files
fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync('index.html', 'dist/index.html');
console.log('Built dist/index.html');