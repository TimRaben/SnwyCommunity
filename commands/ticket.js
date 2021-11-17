const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const channel = "909828510934245429";

    const categoryID = "910270086605062235";

    var userName = message.author.username;
    var user = message.author;
    var userDiscriminator = message.author.discriminator;

    const embed = new discord.MessageEmbed()
        .setTitle("Snwy Community - Ticket Systeem")
        .setAuthor("Snwy Community", "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
        .setDescription(`Hallo! Wij als Support Team staan altijd voor je klaar, maak gerust een ticket aan, wees er wel van bewust dat je de goede categorie kiest!\n\n📋 **|** Overig (deze tickets zijn zichtbaar voor elk stafflid)\n❓ **|** Vragen (deze tickets zijn zichtbaar voor elk stafflid)\n🔒 **|** Lead Ticket (deze tickets is zichtbaar voor enkel Manager en hoger)\n\n`)
        .setColor("PURPLE")
        .setThumbnail("https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
        .setFooter("Snwy Community • Ticket Systeem");

    var embedMessage = await message.channel.send(embed);
    
    embedMessage.react("📋");
    embedMessage.react("❓");
    embedMessage.react("🔒");

    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name == '📋') {
                message.guild.channels.create("ticket".toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
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
                                    .setColor("PURPLE")
            
                                var staff = "870021783649148968";
                                var person = message.author;
            
                                var vraag1o = new discord.MessageEmbed()
                                    .setTitle("Ticket Systeem - Overig")
                                    .setColor("PURPLE")
                                    .setDescription("Waarmee kunnen we u van dienst zijn?")
                                
                                var vraag2o = new discord.MessageEmbed()
                                    .setTitle("Ticket Systeem - Overig")
                                    .setColor("PURPLE")
                                    .setDescription("Wat is de precieze reden dat je deze ticket hebt aangemaakt?")
                                
                                var vraag3o = new discord.MessageEmbed()
                                    .setTitle("Ticket Systeem - Overig")
                                    .setColor("PURPLE")
                                    .setDescription("Wil je nog iets toevoegen? Zo niet typ dan **Nee**")
            
                                settedParent.send(message.author);
                                settedParent.send(`${user}`);
                                settedParent.send(embedParent);
                                settedParent.send(vraag1o);
            
                                settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                    var antwoord1o = antwoord.first();;
                                    settedParent.send(vraag2o);
                                
                                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                        var antwoord2o = antwoord.first();;
                                        settedParent.send(vraag3o);
                                    
                                    settedParent.awaitMessages(s => s.author.id == message.author.id, { max: 1 }).then(antwoord => {
                                            var antwoord3o = antwoord.first();;
            
                                            var overigeticket = new discord.MessageEmbed()
                                                .setTitle("Ticket Systeem - Overig")
                                                .setColor("PURPLE")
                                                .setAuthor("Snwy Community", "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
                                                .setThumbnail("https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
                                                .setDescription(`Hallo! Bedankt voor het aanmaken van een ticket, je hebt zojuist een aantal vragen ingevuld, Staff zou je z.s.m. helpen!\n\n**Waarmee Staff kan helpen:**\n${antwoord1o}\n\n**Precieze Reden van deze Ticket:**\n${antwoord2o}\n\n**Eventuele Toevoegingen:**\n${antwoord3o}\n\n*Een van onze Staffleden zal je z.s.m. helpen!*`)
            
                                            settedParent.bulkDelete(6).then(
                                                settedParent.send("<@&870021783649148968>", overigeticket)
                                            )
                                            })
                                        })
                                    })
                                })
            
                                settedParent.send(`Gelukt!`).then(msg => msg.delete({ timeout: 1000}));
            
                            });
            } else if (reaction.emoji.name == '❓') {
                message.guild.channels.create("vraag".toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
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
                                    .setColor("PURPLE")
            
                                var staff = "870021783649148968";
                                var person = message.author;
            
                                var vraag1v = new discord.MessageEmbed()
                                    .setTitle("Ticket Systeem - Vraag")
                                    .setColor("PURPLE")
                                    .setDescription("Wat is je vraag?")
                                
                                var vraag2v = new discord.MessageEmbed()
                                    .setTitle("Ticket Systeem - Vraag")
                                    .setColor("PURPLE")
                                    .setDescription("Aan wie is je vraag gericht? (bijv moderators, admins, developers, managers)")
                                
                                var vraag3v = new discord.MessageEmbed()
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
                                                settedParent.send("<@&870021783649148968>", vraagticket)
                                            )
                                            })
                                        })
                                    })
                                })
            
                                settedParent.send(`Gelukt!`).then(msg => msg.delete({ timeout: 1000}));
            
                            });
            } else if (reaction.emoji.name == '🔒') {
                message.guild.channels.create("lead".toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
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
                                    .setColor("PURPLE")
            
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
                                                .setFooter("Snwy Community - Ticket Systeem - Lead")

                                            settedParent.bulkDelete(6).then(
                                                settedParent.send("<@&894255584549953646>", leadticket)
                                            )
                                            })
                                        })
                                    })
                                })
            
                                settedParent.send(`Gelukt!`).then(msg => msg.delete({ timeout: 1000}));
            
                            });
                        }
        } else {
            return;
        }
    });

}

module.exports.help = {
    name: "ticket-setup"
}