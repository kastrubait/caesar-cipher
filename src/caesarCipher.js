const alphabetUper  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';

const transformMessage = (message, action, shift) => {
  let result = [];
  let alphabet = '';
  let position;
  for (let i = 0; i < message.length; i++) {
    if (alphabetUper.includes(message[i])) alphabet = alphabetUper;
    if (alphabetLower.includes(message[i])) alphabet = alphabetLower;
    position = alphabet.indexOf(message[i]);
    (position === -1) ? result.push(message[i])
      : (action === 'encode') 
      ? result.push(alphabet[(position + shift % alphabet.length) % alphabet.length])
      : result.push(alphabet[(alphabet.length + position - shift % alphabet.length) % alphabet.length])
  }
  return result.join('');
}

const cryptStr = (message, action, shift) => transformMessage(message, action, shift);

module.exports = cryptStr;
