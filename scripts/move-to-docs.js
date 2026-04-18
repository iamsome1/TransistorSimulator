const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'docs');
const browserDir = path.join(docsDir, 'browser');

// Function to move files and directories
function moveContents(src, dest) {
  if (!fs.existsSync(src)) {
    console.log('Source directory does not exist:', src);
    return;
  }

  const items = fs.readdirSync(src);

  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    const stats = fs.statSync(srcPath);

    if (stats.isDirectory()) {
      // Create directory and recursively move contents
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      moveContents(srcPath, destPath);
    } else {
      // Move file
      fs.renameSync(srcPath, destPath);
    }
  });
}

// Move everything from docs/browser to docs
if (fs.existsSync(browserDir)) {
  console.log('Moving files from docs/browser to docs...');
  moveContents(browserDir, docsDir);
  
  // Remove the now-empty browser directory
  fs.rmdirSync(browserDir, { recursive: true });
  console.log('✓ Files moved successfully');
} else {
  console.log('No browser directory found - build structure may have changed');
}
