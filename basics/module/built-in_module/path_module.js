const path = require('path');

// Example 1: Joining paths
const directory = '/user/local';
const filename = 'built-in_module.txt';

const filePath = path.join(directory, filename);
console.log('Joined Path:', filePath);  // /user/local/file.txt

// Example 2: Resolving an absolute path
const absolutePath = path.resolve('someFolder', 'file.txt');
console.log('Absolute Path:', absolutePath);  // /full/path/to/someFolder/file.txt

// Example 3: Getting the file extension
const fileExtension = path.extname(filePath);
console.log('File Extension:', fileExtension);  // .txt

// Example 4: Getting the directory name
const dirName = path.dirname(filePath);
console.log('Directory Name:', dirName);  // /user/local

// Example 5: Getting the base name (file name)
const baseName = path.basename(filePath);
console.log('Base Name:', baseName);  // file.txt

// Example 6: Normalizing a path
const messyPath = '/user///local/../file.txt';
const normalizedPath = path.normalize(messyPath);
console.log('Normalized Path:', normalizedPath);  // /user/file.txt
