const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.guild.channels.delete("ticket-overig");
        
    }

module.exports.help = {
    name: "delete"
}