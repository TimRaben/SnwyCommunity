const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!args[0]) return message.reply(":x: **-** Geef een geldig bericht op!");

    var embed = new discord.MessageEmbed()
        .setAuthor("Snwy Community", "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
        .setDescription(`${args.slice(0).join(" ")}`)
        .setThumbnail("https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
        .setFooter("Snwy Community | Alle Rechten Voorbehoud")
        .setTimestamp()
        .setColor("PURPLE");

    message.reply(embed);
        
    }

module.exports.help = {
    name: "embed"
}