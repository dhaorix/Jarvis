const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = "/"

bot.on('ready', function () {
  console.log("Je suis connecté !")
});

bot.login(process.env.TOKEN)

bot.on('message', message => {
    if (message.content === 'ping') {
      message.reply('ta cru toi !')
    }
});

bot.on('message', message => {
    if (message.content === 'Bonjour') {
      message.reply('hello petit')
    }
});

bot.on('message', message =>{
    if(message.content === "Tu fais quoi?"){
        message.reply('Je mange des pâtes dans ma pastabox ! :heart:');
        console.log('répond à tfq');
    }
});

bot.on('message', message =>{
    if(message.content === "Slt"){
        message.reply('yosh la team fornigh pfff gamin');
        console.log('répond à tfq');
    }
});
 
bot.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('410498158246887434').send(embed)
    member.addRole('<@&410494803680428042>')
 
});

bot.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('410498158246887434').send(embed)
 
});


  bot.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = args[1]
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(parseInt(count) + 1)
    }
 
    if (args[0].toLowerCase() === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Membre introuvable")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne peux pas mute ce membre")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then((role) => {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' a été mute :white_check_mark:')
            })
        }
    }
})

bot.on('message', message =>{
    if(message.content === prefix + "help"){
      var help_embed = new Discord.RichEmbed()
      .setColor("#40A497")
      .setTitle("Voici mes commandes d'aide !")
      .setDescription("ceci sont tout les command que je dispose !")
      .addField("bonjour", "le bot repond")
      .addField("ping", "pong")
      .addField("/help" , "affiche les command du bot")
      .addField("/clear", "clear les message")
      .addField("/mute", "mute une personne")
      .addField("/userstats", "savoirs vos statistiques")
      .setFooter("bot by dhaorix")
      message.channel.sendMessage(help_embed);
      console.log("une personne utilise une command")
    }

      if (!message.content.startsWith(prefix)) return

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "userstats":

        var userCreateData = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stast_embed = new Discord.RichEmbed()

      .setColor("#40A497")
      .setTitle(`Stastistiques de l'utilisateur : ${message.author.username}`)
      .addField(`ID de l'utilisateur :id:`, msgauthor, true)
      .addField("Date de création de l'utilisateur :", userCreateData[1] + ' ' + userCreateData[2] + ' ' + userCreateData[3])
      .setThumbnail(message.author.avatarURL)
      message.reply("Va dans tes message privé ! tu viens de recevoir tes statistique !")
      message.author.send({embed: stast_embed});
      break;


    }
    
    
});
