const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const embed = new discord.MessageEmbed()
        .setTitle("Snwy Community - Serverinformatie")
        .setAuthor("Snwy Community", "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
        .setThumbnail("https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
        .setColor("BLUE")
        .addField(`Server`, [
            '**➠ Servernaam:** De Tech Snwy Community',
            `**➠ Eigenaar:** ${message.guild.owner.user.tag}`,
            `**➠ Boost Level:** ${message.guild.premiumTier}`
            `**➠ Gemaakt op:** ${moment(message.guild.createdTimestamp).format('LT')}`
        ])
        .addField(`Statestieken`, [
            `**➠ Aantal Rollen:** ${roles.length}`,
            `**➠ Aantal Leden:** ${message.guild.memberCount}`,
            `**➠ Aantal BOTS:** ${members.filter(member => member.user.bot).size}`,
            `**➠ Aantal Tekstkanalen:** ${channels.filter(channel => channel.type === 'text').size}`,
            `**➠ Aantal Boosts:** ${message.guild.premiumSubscriptionCount}`,
        ])
        .addField(`Leden Informatie`, [
            `**➠ Online:** ${members.filter(member => member.presence.status === 'online')}`,
            `**➠ Inactief:** ${members.filter(member => member.presence.status === 'idle')}`,
            `**➠ Niet Storen:** ${members.filter(member => member.presence.status === 'dnd')}`,
            `**➠ Offline:** ${members.filter(member => member.presence.status === 'offline')}`,
        ])
        .setTimestamp();

    message.channel.send(embed);

    }

module.exports.help = {
    name: "serverinfo"
}