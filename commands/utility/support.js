const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const eec = require(`${process.cwd()}/structures/botconfig/embed.json`);
const {
  Client,
  Message,
  MessageEmbed,
  MessageActionRow,
  MessageButton,
} = require('discord.js');

module.exports = {
  name: 'support',
  aliases: ['support-me'],
  usage: '',
  description: '',
  category: "utility",
  cooldown: 0,
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

    let embed = new MessageEmbed()
      .setTitle(`❓ You need help? JOIN OUR SUPPORT SERVER`)
      .setColor(ee.color)
      .setImage(eec.gif)
      .setFooter(ee.footertext, ee.footericon)

    let supportbutton = new MessageButton()
            .setStyle("LINK")
            .setLabel("Join Support!")
            .setEmoji('<:join:971243870857875546>')
            .setURL(process.env.SUPPORT)  

    let invitebutton = new MessageButton()
            .setStyle("LINK")
            .setLabel("Invite Me!")
            .setEmoji('<:invite:971243957491216454>')
            // .setEmoji('✅')
            .setURL(process.env.INVITE)

    const row = new MessageActionRow()
        .addComponents(supportbutton, invitebutton);

    return message.reply({
        embeds: [embed],
        components: [row]
    }).catch(err => console.log(err));
    
    } catch (e) {
      console.log(String(e.stack).bgRed)
      const errorLogsChannel = client.channels.cache.get(config.botlogs.errorLogsChannel);
      return errorLogsChannel.send({
        embeds: [new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.guild.name, message.guild.iconURL({
            dynamic: true
          }))
          .setTitle(`${client.allEmojis.x} Got a Error:`)
          .setDescription(`\`\`\`${e.stack}\`\`\``)
          .setFooter(`Having: ${message.guild.memberCount} Users`)
        ]
      })
    }
  }
}

