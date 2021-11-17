const discord = require("discord.js");

module.exports = (client, message, args) => {

    var channelID = '910542711046680637'

    var regelsChannel = '845680452882792508'

    var rrChannel = '846021919194218526'

    var ticketChannel = '870005075748216963'

    var promotieChannel = '894513156536295425'


    client.on('guildMemberAdd', (member) => {
        console.log(member)

    const welkomEmbed = new discord.MessageEmbed()
        .setAuthor("Snwy Community", "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setTitle(`Welkom ${member.author}`)
        .setDescription(`Hey Hallo! Leuk dat je onze Server bent gejoined, je bent van harte welkom! Lees hieronder enige welkoms informatie waar je welke dingen kunt vinden!\n\n**Navigatie**\n• Regels **|** ${member.guild.channels.cache.get(regelsChannel).toString()}\n• Support/Hulp **|** ${member.guild.channels.cache.get(ticketChannel).toString()}\n• Marketing Info **|** ${member.guild.channels.cache.get(promotieChannel).toString()}\n• Reactie Rollen **|** ${member.guild.channels.cache.get(rrChannel).toString()}`)
        .setColor("PURPLE")
        .setFooter("Snwy Community - Welkom")
        .setImage("https://media.discordapp.net/attachments/909775422047256576/910548369754169364/Snwy_Community_banner.gif")
        .setTimestamp();

    const channel = member.guild.channels.cache.get(channelID)
    channel.send(welkomEmbed)

    })    

}
