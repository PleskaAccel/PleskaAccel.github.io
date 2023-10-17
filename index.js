const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Smogulous smoke!");
  console.log("Schloppity Schlopp!");
  console.log("Complain all you want it's never ever ever ever gonna stop.");
  console.log("AAAAAAAAAAAAAAA");
  console.log("Come on how bad can i possibly be?");
})

app.get("/", (req, res) => {
  res.send("Let me hear you say Smogulous smoke!");
})

const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES"], partials: ["MESSAGE"]});

client.on("messageCreate", message => {
  if(message.content === "hi") {
    message.channel.send(`Hello there ${message.author.username}!`)
  }
})

client.on("messageCreate", message => {
  if(message.content === "Hello") {
    message.channel.send(`Hi there ${message.author.username}!`)
  }
})

client.on("messageCreate", message => {
  if(message.content === "Hi") {
    message.channel.send(`Hello there ${message.author.username}!`)
  }
})

client.on("messageCreate", message => {
  if(message.content === "<@1093288666564145234>") {
    message.channel.send("Use the command ``+help`` to see more info.")
  }
})

client.on("messageCreate", message => {
  if(message.content.includes("fuck"))
    message.reply("._.")
})

client.on("messageCreate", message => {
  if(message.content.includes("Fuck"))
    message.reply("._.")
})

client.on("messageCreate", message => {
  if(message.content.includes("https://www.discord.gg")) {
    message.delete()
    message.channel.send(`<@${message.author.id}> don't post links!`)
  }
})

client.on("messageCreate", message => {
  if(message.content.includes("https://discord.gg")) {
    message.delete()
    message.channel.send(`<@${message.author.id}> don't post links!`)
  }
})

    client.on("guildMemberAdd", member => {
  if(member.guild.id === "745027303406305362") {
    client.channels.cache.get("1128851768869126215").send(`Welcome ${member}!`)
  }
})

client.on('ready', () => {
  console.log(`Bot is in ${client.guilds.cache.size} servers`);
  console.log(`${client.password}`)
});

const fs = require("fs");
const prefix = "cv!"
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on("messageCreate", message => {
if(message.content.startsWith(prefix)) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const commandName = args.shift()
  const command = client.commands.get(commandName)
  if(!command) return
  command.run(client, message, args)
}
})
const apples = "First degree"
const Backwash = console.log
const print = console.log
const ThrowBackError = console.log
ThrowBackError(`The bot is in ${apples}`)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
  client.user.setActivity(` Verified and Unverified Claims`, {name: 'status', type: 'STREAMING',url: 'https://www.youtube.com/watch?v=mxmRSTGTtio'});
})

client.login("MTE2MzIyOTE5ODU4OTEwNDEzOA.GGvbTS.V-L0_nxGxh5ni7r7lYf7Af9tXV1l2G5uPk_4lY");