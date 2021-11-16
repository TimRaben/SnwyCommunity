const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // !clear aantal

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x:  **|** Je hebt geen toestemming om dit te doen.");

    if (!args[0]) return message.reply(":x:  **|** Geef een aantal op");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] <= 0) {
                message.reply(":x:  **|** Ik ben niet bereid om 0 berichten verwijderen").then(msg => msg.delete({ timeout: 3000 }));
            } else if (args[0] == 1) {
                message.reply(":white_check_mark: **|** Ik heb 1 bericht verwijderd").then(msg => msg.delete({ timeout: 3000 }));
            } else {
                message.reply(`:white_check_mark: **|** Ik heb ${args[0]} berichten verwijderd`).then(msg => msg.delete({ timeout: 3000 }));
            }

        })

    } else {
        return message.reply(":x:  **|** Geef een geldig getal op!");
    }

}

module.exports.help = {
    name: "clear"
}