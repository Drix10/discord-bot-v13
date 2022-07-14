const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const ee = require(`${process.cwd()}/structures/botconfig/embed.json`);
const {
    MessageEmbed,
    MessageButton,
    MessageActionRow
} = require("discord.js");

module.exports = async (client) => {
    const description = {
        name: "Bot Invited Msg",
    }
    client.logger(`〢 Module: Loaded ${description.name}`.bold.green);

    client.on("guildCreate", async (guild) => {
        const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'));

    let msgembed = new MessageEmbed()
        .setTitle(`Thanks For Adding Me!`)
        .setDescription(`> Hey, Thanks For Adding Me To **${guild.name}**\n> My Default Prefix Is \`${process.env.PREFIX}\`\n> [Claim 1 Month Free Uchiha Premium](https://discord.gg/Kq6pqYEF3K)\n> To Get Started Type \`${process.env.PREFIX}help\` or \`/help\``)
        .setColor(ee.color)
        .setFooter('Thanks For Inviting Me!')
        .setImage(ee.gif)
        .setTimestamp()

    let supportbutton = new MessageButton()
            .setStyle("LINK")
            .setLabel("Join Support!")
            .setEmoji('<:join:971243870857875546>')
            .setURL(process.env.SUPPORT)  

    let invitebutton = new MessageButton()
            .setStyle("LINK")
            .setLabel("Invite Me!")
            .setEmoji('<:invite:971243957491216454>')
            .setURL(process.env.INVITE)

     const row = new MessageActionRow()        .addComponents(supportbutton, invitebutton);
    if (!channel) return;
    await channel.send({
        embeds: [msgembed],
        components: [row]
    }).catch(err => console.log('I was unable to send guildCreate message.'));
    });
    
};