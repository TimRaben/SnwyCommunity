const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "914169722197671957";

    if (message.channel.parentID == categoryID) {
        message.channel.delete();
    } else {


        message.channel.send(":x: **|** Doe dit in een officiële ticket!");
    
    }

}

module.exports.help = {
    name: "sluit",
    description: "Geeft al de verschillende commands",
    category: "Informatie",
}