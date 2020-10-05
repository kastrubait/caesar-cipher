#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const { pipeline } = require('stream');

const argumentValid = require('./argumentValidation');
const pathValid = require('./pathValidation');
const TransformStream = require('./transformStream');
const cryptStr = require("./caesarCipher");

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
      if (err) {
        console.error(err.message);
        process.exit(3);
      }
    });

  } catch (err) {
    console.error(err.message);
  }
};

init(program.opts());