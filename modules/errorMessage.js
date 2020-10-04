const errorHandler = (code, message) => {
    process.exitCode = code;
    throw new Error(`error: ${message}`);
  };
  
  module.exports = errorHandler;