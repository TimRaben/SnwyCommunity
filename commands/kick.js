const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(":x: **-** Jij bent niet gemachtigd dit commando uit te voeren!");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply(":x: **-** FOUT! Ik ben niet gemachtigd om deze actie uit te voeren voor jou.");

    var kickUser = message.mentions.members.first();

    var reason = args.slice(1).join(" ");

    if (!kickUser) return message.reply(":x: **-** Kan de gebruiker niet vinden!");

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setAuthor('Snwy Community', "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
        .setTitle("Snwy Community - Kick Systeem")
        .setThumbnail("https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
        .setFooter('Snwy Community • Kick • Alle Rechten Voorbehoud')
        .setTimestamp()
        .setDescription(`**Lid** ${kickUser} (${kickUser.id})\n**Moderator:** ${message.author}\n**Reden: ** ${reason}`);

    var embedPrompt = new discord.MessageEmbed()
        .setColor("ORANGE")
        .setAuthor('Kick Systeem', "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
        .setDescription(`Weet je zeker dat je ${kickUser} wilt bannen?`)
        .setAuthor('Snwy Community • Kick • Alle Rechten Voorbehoud');


    message.channel.send(embedPrompt).then(async msg => {

        var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

        if (emoji === "✅") {

            msg.delete();

            kickUser.kick()

            message.reply(embed);

        } else if (emoji === "❌") {

            msg.delete();

            message.reply(":x:  **|** Kick geannuleerd!").then(m => m.delete(5000));

        }

    });

}

// Emojis aan teksten kopellen.
async function promptMessage(message, author, time, reactions) {
    // We gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
    time *= 1000;

    // We gaan ieder meegegeven reactie onder de reactie plaatsen.
    for (const reaction of reactions) {
        await message.react(reaction);
    }

    // Als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
    // dan kunnen we een bericht terug sturen.
    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    // We kijken als de reactie juist is, dus met die filter en ook het aantal keren en binnen de tijd.
    // Dan kunnen we bericht terug sturen met dat icoontje dat is aangeduid.
    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}

module.exports.help = {
    name: "kick",
    description: "Ban iemand",
    category: "Algemeen"
}