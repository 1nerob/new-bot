const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Arun Kumar",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
var tl = ["তোমার ঠোঁট এত মিষ্টি… চুমু না খেলে ঘুম আসবে না আজ 😘",
  "তোমার চোখে চোখ রাখলেই মনে হয় জামাটা খুলে ফেলি 😳",
  "তুমি যদি কাছে থাকতে, বিছানা গরম হতো আগেই 🔥",
  "তোমার কণ্ঠ শুনলেই শরীর ঝিমঝিম করে ওঠে 😩",
  "আজ রাতে শুধু তুমি, আমি আর একখানা বালিশ 😉",
  "তুমি যখন 'baby' বলো, তখন মনে হয় শরীরটা শরমে গলে যাবে 😚",
  "তোমার ছোঁয়া চাই আজ… গায়ে যেন আগুন জ্বলছে 🥵",
  "তোমায় না ছুঁয়ে ঘুমানো আজ অসম্ভব মনে হচ্ছে 😈",
  "তুমি পাশে থাকলে, জামার বোতাম খুলে যেতে চায় আপনাআপনি 👀",
  "তুমি কাছে এলে শরীর বলে, ‘আজকে না হয় গলেই যাই’ 😌",
  "বেবি বললেই প্রেম হয় না, চেহারা দেখে হার্ট অ্যাটাক না এলে ফাও 😏",
  "তোর ধোঁকা দেওয়ার ক্ষমতা দেখেই ভগবানও মাথা ঠুকেছে 😒",
  "তুই প্রেমের কথা বলিস আর আমি হাসি ধরে রাখতে পারি না 🤣",
  "তোর মতো মানুষকে ‘seen’ করে রাখাটাই শ্রদ্ধা দেখানো 😌",
  "তুই এত ফেক যে তোকে দেখলে বোতলেও জ্বালানি লাগে না 😑",
  "তুই এত সুন্দর হতি, যদি ফিল্টার ছাড়া ছবি তুলতে পারতি 😆",
  "তোর এক্স দেখতে তোর মতোই—ডিলিট দেওয়ার মতোই মুখ 🤢",
  "তুই আমার টাইপ না, আমি হাই স্পিড WiFi, তুই ডায়াল-আপ 🙄",
  "তোর থেকে তো নেটওয়ার্ক ভালো রেসপন্স দেয় 😎",
  "ভাই তুই যে প্রেম চাস, আগে আয়না দেখ 😏"]; 
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🔶${name}🔶,  \n\n『\n   ${rand} 』\n\n❤️𝙲𝚛𝚎𝚍𝚒𝚝𝚜 : 𝗔𝗿𝘂𝗻 𝗞𝘂𝗺𝗮𝗿🌹 `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
