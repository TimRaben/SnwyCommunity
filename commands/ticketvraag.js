const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "914169722197671957";

    var userName = message.author.username;
    var user = message.author;
    var userDiscriminator = message.author.discriminator;

    message.channel.send(':white_check_mark: **|** Je hebt succesvol een ticket gemaakt!')

    message.guild.channels.create(userName.toLowerCase() + "-vraag", { type: 'text' }).then(
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
            
                                var vraag1o = new discord.MessageEmbed()
                                    .setTitle("Ticket Systeem - Vraag")
                                    .setColor("PURPLE")
                                    .setDescription("Wat is je vraag?")
                                
                                var vraag2o = new discord.MessageEmbed()
                                    .setTitle("Ticket Systeem - Vraag")
                                    .setColor("PURPLE")
                                    .setDescription("Aan wie is je vraag gericht? (bijv moderators, admins, developers, managers)")
                                
                                var vraag3o = new discord.MessageEmbed()
                                    .setTitle("Ticket Systeem - Vraag")
                                    .setColor("PURPLE")
                                    .setDescription("Wil je nog iets toevoegen? Zo niet typ dan **Nee**")

                    settedParent.send(message.author);
                    settedParent.send(`${user}`);
                    settedParent.send(embedParent);
                    settedParent.send(vraag1v);

                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                        var antwoord1v = antwoord.first();;
                        settedParent.send(vraag2v);
                    
                        settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                            var antwoord2v = antwoord.first();;
                            settedParent.send(vraag3v);
                        
                        settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                var antwoord3v = antwoord.first();;

                                var vraagticket = new discord.MessageEmbed()
                                                .setTitle("Ticket Systeem - Vragen")
                                                .setColor("PURPLE")
                                                .setAuthor("Snwy Community", "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
                                                .setThumbnail("https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
                                                .setDescription(`Hallo! Bedankt voor het aanmaken van een ticket, je hebt zojuist een aantal vragen ingevuld, Staff zou je z.s.m. helpen!\n\n**Waarmee Staff kan helpen:**\n${antwoord1v}\n\n**Precieze Reden van deze Ticket:**\n${antwoord2v}\n\n**Eventuele Toevoegingen:**\n${antwoord3v}\n\n*Een van onze Staffleden zal je z.s.m. helpen!*`)
                                                .setFooter("Snwy Community - Ticket Systeem - Vragen")
            
                                        settedParent.bulkDelete(6).then(
                                            settedParent.send('<@&870021783649148968>', vraagticket)
                                )
                                })
                            })
                        })
                    })

                })
}


    module.exports.help = {
        name: "vraag",
        aliases: "status",
        description: "Geeft al de verschillende commands",
        category: "Informatie",
    }