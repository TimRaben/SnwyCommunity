const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

    // !tempmute persoon tijd (h,m,s).

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(":x:  **|** Jij kan geen leden tempmuten!");

    if (!args[0]) return message.reply(":x:  **|** Geef een geldige gebruiker op!");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply(":x:  **|** FOUT! Ik heb niet de juiste machtigingen, laat een Manager of hoger de permissie KICK_MEMBERS");

    var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!mutePerson) return message.reply(":x:  **|** Deze gebruiker komt niet voor in mijn Database, deze persoon heeft geen data in deze server dus neemt geen deel aan de Server.");

    if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply(":x:  **|** Deze gebruiker is Staff, het is dus niet mogelijk om deze persoon te muten.");

    var muteRole = message.guild.roles.cache.get('910114297470930944');
    if (!muteRole) return message.channel.send(":x:  **|** Er is geen Muted role insteld voor deze Server.");

    var muteTime = args[1];

    if (!muteTime) return message.channel.send(":x:  **|** Geef je geldige tijd op!");

    await (mutePerson.roles.add(muteRole.id));
    message.channel.send(`:white_check_mark: **|** ${mutePerson} is succesvol gemute voor ${muteTime}!`);

    setTimeout(() => {

        mutePerson.roles.remove(muteRole.id);

        message.channel.send(`${mutePerson} is succesvol gemute.`);

    }, ms(muteTime));
}

module.exports.help = {
    name: "tempmute"
}