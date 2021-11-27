const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.guild.channel.delete('ticket-overig')
        
    }

module.exports.help = {
    name: "delete"
}