const { generateResponse } = require("../services/gemini");

const chat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        reply: "Message is required.",
      });
    }

    const reply = await generateResponse(message);

    return res.json({
      reply,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      reply: "Something went wrong.",
    });
  }
};

module.exports = {
  chat,
};