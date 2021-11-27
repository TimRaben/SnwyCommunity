const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "914169722197671957";

    var userName = message.author.username;
    var user = message.author;
    var userDiscriminator = message.author.discriminator;

    message.channel.send(':white_check_mark: **|** Je hebt succesvol een ticket gemaakt!')

    message.guild.channels.create(userName.toLowerCase() + "-lead", { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        VIEW_CHANNEL: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true
                    });

                    var embedParent = new discord.MessageEmbed()
                                    .setTitle(`Ticket Systeem - Snwy Community`)
                                    .setDescription(`Hallo ${message.author.username}, Hieronder worden automatisch vragen gesteld, geef hier zo duidelijk en uitgebreid mogelijk antwoord op waardoor wij je z.s.m. kunnen helpen!`)
                                    .setAuthor("Snwy Community", "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
                                    .setFooter('Snwy Community - Ticket Systeem')
            
                                var staff = "870021783649148968";
                                var person = message.author;
            
                                var vraag1l = new discord.MessageEmbed()
                                    .setTitle("Ticket Systeem - Lead")
                                    .setColor("PURPLE")
                                    .setDescription("Wat is het onderwerp van deze ticket?")
                                
                                var vraag2l = new discord.MessageEmbed()
                                    .setTitle("Ticket Systeem - Lead")
                                    .setColor("PURPLE")
                                    .setDescription("Waarmee kunnen we van dienst zijn?")
                                
                                var vraag3l = new discord.MessageEmbed()
                                    .setTitle("Ticket Systeem - Lead")
                                    .setColor("PURPLE")
                                    .setDescription("Wil je nog iets toevoegen? Zo niet typ dan **Nee**")
            
                                settedParent.send(message.author);
                                settedParent.send(`${user}`);
                                settedParent.send(embedParent);
                                settedParent.send(vraag1l);
            
                                settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                    var antwoord1l = antwoord.first();;
                                    settedParent.send(vraag2l);
                                
                                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                        var antwoord2l = antwoord.first();;
                                        settedParent.send(vraag3l);
                                    
                                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                            var antwoord3l = antwoord.first();;
            
                                            var leadticket = new discord.MessageEmbed()
                                                .setTitle("Ticket Systeem - Lead")
                                                .setColor("PURPLE")
                                                .setAuthor("Snwy Community", "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
                                                .setThumbnail("https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
                                                .setDescription(`Hallo! Bedankt voor het aanmaken van een ticket, je hebt zojuist een aantal vragen ingevuld, een Manager of hoger zou je z.s.m. helpen!\n\n**Onderwerp**\n${antwoord1l}\n\n**Precieze Reden van deze Ticket:**\n${antwoord2l}\n\n**Eventuele Toevoegingen:**\n${antwoord3l}\n\n*Een van onze Managers of hoger zal je z.s.m. helpen!*`)
                                                .setFooter("Snwy Community - Ticket Systeem - Lead");

                                            settedParent.bulkDelete(6).then(
                                                settedParent.send("<@&894255584549953646>", leadticket)
                                            )
                                })
                            })
                        })
                    })

                })
}


    module.exports.help = {
        name: "lead",
        aliases: "status",
        description: "Geeft al de verschillende commands",
        category: "Informatie",
    }