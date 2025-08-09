module.exports = {
  config: {
    name: "fav",
    aliases: ["favfootball", "favclub", "favteam"],
    version: "1.1",
    author: "your-name",
    countDown: 3,
    role: 0,
    shortDescription: "Get your favorite football club and country randomly",
    longDescription: "Randomly gives you a favorite legendary football club and national team 🌍⚽",
    category: "fun",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ message }) {
    const clubs = [
      "FC Barcelona", "Real Madrid", "Manchester United", "Bayern Munich", "AC Milan",
      "Liverpool FC", "Juventus", "Inter Milan", "Chelsea FC", "Arsenal FC",
      "Paris Saint-Germain", "Ajax Amsterdam", "Borussia Dortmund", "Manchester City",
      "Atletico Madrid", "AS Roma", "Tottenham Hotspur", "Benfica", "Porto", "Napoli"
    ];

    const countries = [
      "Brazil", "Argentina", "Germany", "France", "Italy",
      "Spain", "England", "Portugal", "Netherlands", "Uruguay",
      "Belgium", "Croatia", "Czech Republic", "Poland", "Denmark",
      "Serbia", "Sweden", "Switzerland", "Romania", "Bangladesh"
    ];

    const randomClub = clubs[Math.floor(Math.random() * clubs.length)];
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];

    return message.reply(
      `⚽ Your favorite football **club** is: **${randomClub}**\n🌍 Your favorite **national team** is: **${randomCountry}**`
    );
  }
};
