const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const channel = "910149697203732533";

    const youtubeEmoji = "⚡";
    const tiktokEmoji = "🌍";
    const updatesEmoji = "🧪";
    const pollEmoji = "🔒";
    const giveawayEmoji = "🎫"

    const youtubeRol = message.guild.roles.cache.find(role => role.name === "YoutubePings");
    const tiktokRol = message.guild.roles.cache.find(role => role.name === "TikTokPings");
    const giveawayRol = message.guild.roles.cache.find(role => role.name === "GiveawayPings");
    const pollRol = message.guild.roles.cache.find(role => role.name === "PollPings");
    const updatesRol = message.guild.roles.cache.find(role => role.name === "UpdatePings");

    const embed = new discord.MessageEmbed()
        .setTitle("Snwy Community - Reaction Roles")
        .setAuthor("Snwy Community", "https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
        .setDescription(`Selecteer hieronder voor welke dingen jij een tag wilt ontvangen, zodra je een emoji hebt aangeklikt mis je nooit wat!\n\n**${youtubeEmoji} Nieuwe Youtube Video's\n${tiktokEmoji} Nieuwe TikTok Post\n${updatesEmoji} Gloednieuwe Updates\n${pollEmoji} Nieuwe Polls\n${giveawayEmoji} Leuke Giveaways**`)
        .setColor("PURPLE")
        .setThumbnail("https://tikstar-user-images.oss-cn-hongkong.aliyuncs.com/92b3_6982470257928504321.jpg")
        .setFooter("Snwy Community • Reaction Roles")
        .setTimestamp();

    var embedMessage = await message.channel.send(embed);
    embedMessage.react(youtubeEmoji);
    embedMessage.react(tiktokEmoji);
    embedMessage.react(updatesEmoji);
    embedMessage.react(pollEmoji);
    embedMessage.react(giveawayEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
        if (user.bot) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name == youtubeEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(youtubeRol);
            } else if (reaction.emoji.name == tiktokEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(tiktokRol);
            } else if (reaction.emoji.name == updatesEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(updatesEmoji);
            } else if (reaction.emoji.name == pollEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(pollEmoji);
            } else if (reaction.emoji.name == giveawayEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(giveawayEmoji);
            }
        } else {
            return;
        }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
        if (user.bot) return;

        if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name == youtubeEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(youtubeEmoji);
            } else if (reaction.emoji.name == tiktokEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(tiktokEmoji);
            } else if (reaction.emoji.name == updatesEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(updatesEmoji);
            } else if (reaction.emoji.name == pollEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(pollEmoji);
            } else if (reaction.emoji.name == giveawayEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(giveawayEmoji);
            }
        } else {
            return;
        }

    })

    
}

module.exports.help = {
    name: "reactionroles"
}