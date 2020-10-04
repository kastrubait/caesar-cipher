const { Transform } = require('stream');

class TransformStream extends Transform {
  constructor(options) {
    super(options);
    this.cryptStr = options.cryptStr;
    this.action = options.action;
    this.shift = options.shift;
  }
  _transform(chunk, encoding, callback) {
    this.push(this.cryptStr(chunk.toString(), this.action, this.shift));
    callback();
  }
}

module.exports = TransformStream;