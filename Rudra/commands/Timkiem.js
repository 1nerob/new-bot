module.exports = {
  config: {
    name: "goat",
    aliases: [],
    version: "1.0",
    author: "your-name",
    countDown: 3,
    role: 0,
    shortDescription: "Find out who the real GOAT is",
    longDescription: "Randomly picks a footballer as the GOAT 🐐, including legends and memes",
    category: "fun",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ message }) {
    const players = [

      // 🐐 Legends
      "Lionel Messi", "Cristiano Ronaldo", "Pelé", "Diego Maradona", "Zinedine Zidane",
      "Ronaldinho", "Ronaldo Nazário", "Kylian Mbappé", "Neymar Jr", "Johan Cruyff",
      "Franz Beckenbauer", "Michel Platini", "Andrés Iniesta", "Xavi Hernández", "Paolo Maldini",
      "George Best", "Thierry Henry", "Didier Drogba", "Roberto Baggio", "Lev Yashin",
      "Garrincha", "Marco van Basten", "Ruud Gullit", "Andrea Pirlo", "David Beckham",
      "Luis Suárez", "Wayne Rooney", "Fernando Torres", "Zlatan Ibrahimović", "Luka Modrić",
      "Sergio Ramos", "Philipp Lahm", "Kaká", "Carlos Valderrama", "Clarence Seedorf",
      "Dennis Bergkamp", "Alessandro Del Piero", "Gianluigi Buffon", "Robert Lewandowski",
      "Erling Haaland", "Mohamed Salah", "Sadio Mané", "Antoine Griezmann", "Kevin De Bruyne",
      "Manuel Neuer", "Frank Lampard", "Steven Gerrard", "John Terry", "Bobby Charlton",

      // ⚽ More modern/top players
      "Vinícius Júnior", "Jude Bellingham", "Pedri", "Gavi", "Bukayo Saka",
      "Martin Ødegaard", "João Félix", "Trent Alexander-Arnold", "Marcus Rashford",
      "Jadon Sancho", "Kai Havertz", "Declan Rice", "Harry Kane", "Heung-min Son",
      "Raphaël Varane", "Marquinhos", "Joshua Kimmich", "Kingsley Coman", "Serge Gnabry",

      // 🤡 Meme & Funny players
      "Antony", "Harry Maguire", "Lord Bendtner", "Phil Jones", "Divock Origi",
      "Timo Werner", "Granit Xhaka", "Adama Traoré", "Darwin Núñez", "Emile Heskey",
      "Danny Welbeck", "Jesse Lingard", "Michy Batshuayi", "Shkodran Mustafi", "Loris Karius",
      "Jordan Pickford", "Andy Carroll", "Chris Smalling", "Victor Lindelöf", "Dejan Lovren",

      // Bonus classics or cult heroes
      "Carlos Tévez", "Pavel Nedvěd", "Hernán Crespo", "Javier Zanetti", "Cafu"

    ];

    const selectedPlayer = players[Math.floor(Math.random() * players.length)];

    return message.reply(`🐐 The GOAT is... **${selectedPlayer}**!`);
  }
};
