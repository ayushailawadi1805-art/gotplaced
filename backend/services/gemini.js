async function generateResponse(message) {
  return `You said: ${message}`;
}

module.exports = {
  generateResponse,
};