const discord = require("discord.js");
const botConfig = require("./botConfig.json");

//  Command handler
const fs = require("fs");
const { isFunction } = require("util");
const { MessageButton } = require('discord-buttons');

const client = new discord.Client();

//  Command handler
client.commands = new discord.Collection();


//  Command handler
fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`✅ De file ${f} is geladen!`);

        client.commands.set(fileGet.help.name, fileGet);
    });

});

client.on("ready", async () => {

    console.log(`${client.user.username} is herstart.`);

    setInterval(() => {
        const statuses = [
            `🎫 - Tickets`,
            `🔌 - Commands`,
            `🔰 - Moderatie`,
            `👥 - 1.300 Leden`,
        ]
    
        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"}) // Can Be WATCHING, STREAMING, LISTENING
    }, 4500) // Second You Want to Change Status, This Cahnges Every 2 Seconds

    client.on('guildMemberAdd', (member) => {
        console.log(member)
    
        var channelID = '910542711046680637';
    
        var regelsChannel = '845680452882792508';
    
        var rrChannel = '846021919194218526';
    
        var ticketChannel = '870005075748216963';
    
        var promotieChannel = '894513156536295425';
    
        const welkomEmbed = new discord.MessageEmbed()
            .setAuthor("Snwy Community", "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
            .setThumbnail(member.author.displayAvatarURL({ dynamic: true }))
            .setTitle(`Welkom ${member.author}`)
            .setDescription(`Hey Hallo! Leuk dat je onze Server bent gejoined, je bent van harte welkom! Lees hieronder enige welkoms informatie waar je welke dingen kunt vinden!\n\n**Navigatie**\n• Regels **|** ${member.guild.channels.cache.get(regelsChannel).toString()}\n• Support/Hulp **|** ${member.guild.channels.cache.get(ticketChannel).toString()}\n• Marketing Info **|** ${member.guild.channels.cache.get(promotieChannel).toString()}\n• Reactie Rollen **|** ${member.guild.channels.cache.get(rrChannel).toString()}`)
            .setColor("PURPLE")
            .setFooter("Snwy Community - Welkom")
            .setImage("https://media.discordapp.net/attachments/909775422047256576/910548369754169364/Snwy_Community_banner.gif")
            .setTimestamp();
    
        const channel = client.guild.channels.cache.get(channelID);
        channel.send(welkomEmbed);
    
        });

    var channel = client.guild.channels.cache.get('909828510934245429');

    setInterval(() => {
        channel.send("s!ticket-setup");
    }, 5000);

});        



client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;


    // var msg = message.content.toLowerCase();

    // for (let i = 0; i < swearWords["vloekwoorden"].length; i++) {

    //     if (msg.includes(swearWords["vloekwoorden"][i])) {

    //         message.delete();

    //         return message.reply("Gelieve niet te vloeken").then(msg => msg.delete({ timeout: 3000 }));

    //     }

    // }


    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");


    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    //  Command handler
    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));


    if (commands) commands.run(client, message, arguments);

});

client.login(process.env.token);