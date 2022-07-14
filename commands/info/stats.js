const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "stats",
  aliases: ["botinfo"],
  usage: '',
  description: "Gives you information on how fast the Bot can respond to you",
  category: "info",
  cooldown: 10,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,

  /**
   * @param {Client} client 
   * @param {Message} message
   * @param {String[]} args
   */

  async execute(client, message, args, ee) {
    try {
      message.reply({ embeds:[new MessageEmbed()
            .setColor(`CYAN`)
            .setTitle(`${client.allEmojis.y} Bot's Live Stats`)
            .addField(" \u200B ", "**Channels** : ` " + `${client.channels.cache.size}` + " `")
            .addField(" \u200B ", "**Servers** : ` " + `${client.guilds.cache.size}` + " `")
            .addField(" \u200B ", "**Users** : ` " + `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}` + " `")
                              ]});
    } catch (e) {
      console.log(e)
    }
  },
};