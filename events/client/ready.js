const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const Discord = require("discord.js");

/**
 * @param {Client} client 
 */

module.exports = {
  name: "ready",
  once: true,

  async execute(client) {
    try {
      try {
        client.logger(`Discord Bot is online!`.bold.brightGreen);

        client.logger(
          `Bot User: `.brightBlue + `${client.user.tag}`.blue + `\n` +
          `Guild(s): `.brightBlue + `${client.guilds.cache.size} Servers`.blue + `\n` +
          `Watching: `.brightBlue + `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`.blue + `\n` +
          `Prefix: `.brightBlue + `${process.env.PREFIX || config.env.PREFIX}`.blue + `\n` +
          `Commands: `.brightBlue + `${client.commands.size}`.blue + `\n` +
          `Slash Commands: `.brightBlue + `${client.slashCommands.size}`.blue + `\n` +
          `Discord.js: `.brightBlue + `v${Discord.version}`.blue + `\n` +
          `Node.js: `.brightBlue + `${process.version}`.blue + `\n` +
          `Plattform: `.brightBlue + `${process.platform} ${process.arch}`.blue + `\n` +
          `Memory: `.brightBlue + `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`.blue
        );
      } catch {
        /* */
      }
        
        // Auto Status
    var activites = [
      `${config.env.PREFIX || process.env.PREFIX}help | ${client.guilds.cache.size} Servers | ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users`,
      `discord.gg/bothub`,
    ],
    i = 0;

    setInterval(() => {
      client.user.setActivity(`${activites[i++ % activites.length]}`)
      }, 5 * 60 * 1000);
        
    } catch (e) {
      console.log(e)
    }
  }
}

