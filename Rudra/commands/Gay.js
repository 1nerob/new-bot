const axios = require("axios");
const jimp = require("jimp");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "gay",
    aliases: [],
    version: "1.0",
    author: "milan-says (modified)",
    countDown: 5,
    role: 2,
    shortDescription: "Generate a gay-themed image",
    longDescription: "Create a funny gay image using profile pictures",
    category: "fun",
    guide: {
      en: "{pn} @tag"
    }
  },

  onStart: async function ({ message, event, args, api }) {
    const mention = Object.keys(event.mentions);
    if (mention.length === 0) {
      return message.reply("❌ | Please tag someone to gayify 🌈");
    }

    const uidTagged = mention[0]; // Tagged user's ID
    const uidSender = event.senderID; // Message sender

    try {
      const imgPath = await generateGayImage(uidSender, uidTagged);
      return message.reply({
        body: "🌈💦 Here’s your fabulous moment!",
        attachment: fs.createReadStream(imgPath)
      }, () => fs.unlinkSync(imgPath));
    } catch (err) {
      console.error(err);
      return message.reply("❌ | Something went wrong while generating the image.");
    }
  }
};

async function generateGayImage(uid1, uid2) {
  // Random gay-themed base image
  const templates = [
  "https://postimg.cc/D8pdvD1P",
  "https://postimg.cc/vgvfpSQ9",
  "https://postimg.cc/RqRL8qF8"
];
  const randomTemplateURL = templates[Math.floor(Math.random() * templates.length)];

  // Load avatars
  const avatarSender = await jimp.read(`https://graph.facebook.com/${uid1}/picture?width=512&height=512&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`);
  const avatarTagged = await jimp.read(`https://graph.facebook.com/${uid2}/picture?width=512&height=512&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`);

  avatarSender.circle();
  avatarTagged.circle();

  // Load random template
  const baseImage = await jimp.read(randomTemplateURL);
  baseImage.resize(1280, 720); // Ensuring uniform size

  // Place avatars — you can tweak X/Y and size
  baseImage.composite(avatarTagged.resize(150, 150), 300, 100);  // Tagged user
  baseImage.composite(avatarSender.resize(150, 150), 800, 120); // Sender

  // Save and return image path
  const outputPath = path.join(__dirname, "temp_gay_output.png");
  await baseImage.writeAsync(outputPath);
  return outputPath;
}here 
