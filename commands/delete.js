const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    discord.Channel.delete("ticket-overig")
        
    }

module.exports.help = {
    name: "delete"
}