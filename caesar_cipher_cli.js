const yargs = require("yargs");
const caesar = require("./modules/caesarCipher");

const options = yargs
 .usage("Usage: -a <encoder/decoder> -i <input file> -o <output file> -s <shift> ")
 .option("s", { alias: "shift", describe: "Shift", type: "number", demandOption: true })
 .option("i", { alias: "input", describe: "input file", type: "string", demandOption: false })
 .option("o", { alias: "output", describe: "output file", type: "string", demandOption: false })
 .option("a", { alias: "action", describe: "action encode/decode", type: "string", demandOption: true })
 .argv;

console.log(caesar.transformMessage(`12eFg УivC`, options.action, options.shift));