const fs = require('fs');
const error = require('./errorMessage');

const pathValidation = (inputPath, outputPath) => {
    console.log(inputPath, outputPath);
  try {
    fs.accessSync(inputPath, fs.constants.F_OK);
    fs.accessSync(inputPath, fs.constants.R_OK);
  } catch (err) {
    if (err.code === 'ENOENT') {
      error(51, 'option \'-i, --input <string>\' input file is not exist');
    }
    if (err.code === 'EPERM') {
      error(52, 'option \'-i, --input <string>\' input file is not readable');
    }
  }

  try {
    fs.accessSync(outputPath, fs.constants.F_OK);
    fs.accessSync(outputPath, fs.constants.W_OK);
  } catch (err) {
    if (err.code === 'ENOENT') {
      errorHandler(53, 'option \'-o, --output <string>\' output file is not exist');
    }
    if (err.code === 'EPERM') {
      errorHandler(54, 'option \'-o, --output <string>\' onput file is not writable');
    }
  }
};

module.exports = pathValidation;