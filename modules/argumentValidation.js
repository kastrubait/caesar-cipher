const error = require("./errorMessage");

const argumentValid = (action, shift) => {
    if (action !== 'decode' && action !== 'encode') {
        error (9, 'option \'-a, --action <string>\' argument takes the values: encode/decode!')
    }
    if (typeof shift !== Number) {
        error (9, 'option \'-s, --shift <number>\' argument must be a positive number.')
    }
    if (shift < 0) {
        error (9, 'option \'-s, --shift <number>\' argument must be a positive number.')
    }
}

module.exports = argumentValid;