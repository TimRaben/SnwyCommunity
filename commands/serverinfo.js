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
            `**➠ Boost Level:** ${message.guild.premiumTier}`,
            `**➠ Gemaakt op:** ${moment(guild.createdTimestamp).format('LT')} ${moment(guild.createdTimestamp).format('LL')} ${moment(guild.createdTimestamp).fromNow()}`,
            `**➠ Aantal Leden:** ${message.guild.memberCount}`,
        ])
        .setTimestamp();

    message.channel.send(embed);

    }

module.exports.help = {
    name: "serverinfo"
}