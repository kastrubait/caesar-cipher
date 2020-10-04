const fs = require('fs');
const error = require('./errorMessage');

const pathValidation = (inPath, outPath) => {
  try {
    fs.accessSync(inPath, fs.constants.F_OK);
  } catch (err) {
    if (err.code === 'ENOENT') {
      error(3, 'option \'-i, --input <string>\' input file is not exist');
    } 
  }

  try {
    fs.accessSync(outPath, fs.constants.F_OK);
  } catch (err) {
    if (err.code === 'ENOENT') {
      error(3, 'option \'-o, --output <string>\' output file is not exist');
    }
  }
};

module.exports = pathValidation;