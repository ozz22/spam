const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("647296893075849227")
setInterval(function() {
channel.send(`ozzishere ozzishere ozzishere ozzishere`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
