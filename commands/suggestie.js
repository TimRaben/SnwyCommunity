const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.reply(":x:  **|** Geef een suggestie op!");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen perms");

    var Suggestie = args.join(" ");

    var prefix = botConfig.prefix;

    var embed = new discord.MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL())
            .setTitle("Snwy Community - Suggestie")
            .setDescription(`Nieuwe Suggestie!\n\n**Suggestie:** ${Suggestie}\n**Ingezonden door:** ${message.author}\n\n\n*Bedankt voor het aanmaken van een Suggestie! Laat een idee achter doormiddel van ``${prefix}suggestie (suggestie)`` `)
            .setColor("BLUE")
            .setFooter(`${message.member.displayName} • Snwy Community • Suggesties`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp();

            var channel = message.member.guild.channels.cache.get("910110344486191106");
    
        channel.send(embed).then(async (msg) => {
            await msg.react('✅');
            await msg.react('❌');
            message.delete();
        }).catch(err => {
            console.log(err);
        });
    
}


module.exports.help = {
    name: "suggestie"
}