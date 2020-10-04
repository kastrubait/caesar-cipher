const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const { pipeline } = require('stream');

const argumentValid = require('./src/argumentValidation');
const pathValid = require('./src/pathValidation');
const TransformStream = require('./src/transformStream');
const cryptStr = require("./src/caesarCipher");

program
  .storeOptionsAsProperties(false)
  .requiredOption('-a, --action <string>', 'action (encode/decode), require')
  .requiredOption('-s, --shift <number>', 'shift, require')
  .option('-i, --input <string>', 'input file')
  .option('-o, --output <string>', 'output file')
  .parse(process.argv);

const init = ({ shift, action, input, output }) => {
  try {
    const inPath = input ? path.join('./', input) : null;
    const outPath = output ? path.join('./', output) : null;

    argumentValid (action, shift);
    pathValid (inPath, outPath);

    const myReadable = input
      ? fs.createReadStream(inPath)
      : process.stdin;

    const transformer = new TransformStream({ cryptStr, action, shift });

    const myWriteble = output 
      ? fs.createWriteStream(outPath, { flags: 'a' })
      : process.stdout;
    
    pipeline(myReadable, transformer, myWriteble, (err) => {
      if (err) console.error(err.message);
    });

  } catch (err) {
    console.error(err.message);
  }
};

init(program.opts());