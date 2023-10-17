let Send = document.getElementById("Send");
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

Send.addEventListener("click", () => {
    let channel = client.channels.cache.get("1163248541129511016");
    let Input = document.getElementById("InputMessage");
    channel.send(Input.value); // Use Input.value to get the input text
});