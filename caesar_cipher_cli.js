const { program } = require('commander');
const fs = require('fs');

const caesar = require("./modules/caesarCipher");
const argumentValid = require('./modules/argumentValidation');
const pathValid = require('./modules/pathValidation');

process.on('exit', (code) => {
    console.log(`Process exited with code ${code}`);
  });
  
program
  .storeOptionsAsProperties(false)
  .passCommandToAction(false)
  .version('0.0.1');

program
  .requiredOption('-a, --action <string>', 'action (encode/decode), require')
  .requiredOption('-s, --shift <number>', 'shift, require')
  .option('-i, --input <string>', 'input file')
  .option('-o, --output <string>', 'output file')
  .parse(process.argv);

  const init = ({ shift, action, input, output }) => {
    try {
      const inputPath = input ? path.join(__dirname, input) : null;
      const outputPath = output ? path.join(__dirname, output) : null;
  
      argumentValid (action, shift);
      pathValid (inputPath, outputPath);

      console.log(caesar.transformMessage(`12eFg УivC`, action, shift));

    } catch (err) {
        console.error(err.message);
    }
  };

init(program.opts());