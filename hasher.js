const dree = require('dree');
const path = require('path');
const fs = require('fs');

// Deleting old sw.js
if (fs.existsSync(path.join(__dirname, 'public', 'sw.js')))
    fs.unlinkSync(path.join(__dirname, 'public', 'sw.js'));

// Getting hash of /public directory
const hash = dree.scan(path.join(__dirname, 'public')).hash;
// Getting service worker template code
const serviceWorker = fs.readFileSync(path.join(__dirname, 'public', 'sw.template.js'), { encoding: 'utf-8' });
// Writing service worker mixing hash and template
fs.writeFileSync(path.join(__dirname, 'public', 'sw.js'), "const cacheName = 'task-scheduler-" + hash + "';\n" + serviceWorker);