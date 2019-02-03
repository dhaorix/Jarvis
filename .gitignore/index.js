const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = "/"

bot.on('ready', function () {
  bot.user.setPresence({ game: { name: `/help | xenolda`, type: 0} });
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
      message.reply('yosh la team fornigh pfff gamin')
    }
});

bot.on('message', message => {
    if (message.content === prefix + "invite") {
     message.reply("invite moi sur plusieur serveur : https://discordapp.com/oauth2/authorize?client_id=484089351051935746&scope=bot&permissions=2097176631 " )
    }
});

bot.on('message', message =>{
    if(message.content === "Tu fais quoi?"){
        message.reply('Je mange des pâtes dans ma pastabox ! :heart:');
        console.log('répond à tfq');
    }
});
 
bot.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setColor("#470A497")
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('410498158246887434').send(embed)
    member.addRole('410494803680428042')
 
});

bot.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setColor("#470A497")
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
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer entre 1 et 100")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(parseInt(count) + 1)
    }

})

bot.on('message', message =>{
    if(message.content === prefix + "help"){
      var help_embed = new Discord.RichEmbed()
      .setColor("#40A497")
      .setTitle("Voici mes commandes d'aide !")
      .setDescription("ceci sont tout les command que je dispose !")
      .addField("/help" , "affiche les command du bot")
      .addField("/fun", "commande pour le fun")
      .addField("/moderation", "commande de moderation")
      .addField("/userstats", "savoirs vos statistiques")
      .addField("/info", "donne les info de votre server")
      .addField("/invite", "lien pour m'inviter")
      .addField("/serverlist", "list de tout les server")
      .addField("/sondage", "faire un sondage")
      .setFooter("help | bot by dhaorix")
      message.channel.sendMessage(help_embed);
      console.log("une personne utilise une command")
    }

      if (!message.content.startsWith(prefix)) return

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        
        case"serverlist":
        message.channel.send(bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
        break;
        
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
        
        case "xenolda":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.reply("Merci de poser une question :8ball:")
        };

        var replys = [
            "oui",
            "non",
            "peut être",
            "je sais pas",
            "hahahaha mdr lui",
            "demande a mon maître",
            "sa peut dépendre de toi :)",
            "si tu veux...",
            "sûrment pas !",
            "fait voir un peut :joy:",
            "azy arrete de poser des quetion toi !",
            "ce que tu veux !",
            "je prèfer répondre a une autre question",
            "Mais si c'est possible avec la carte kiwi !",
            "alors la !",
            "mais non tes bete toi",
            "t'aime l'orthographe ? car tu devrais prendre des cours !",
            "je suis malade",
            "lol",
            "nop",
            "yep",
            "||blc frere||",
            "j'repond pas au kikoo de fornith",
            "ok mais non",
            "pas besoin",
            "mouai",
            "moi j'aime dhaorix",
            "trop raison toi ;)",
            "vive lucifer, vivre dhaorix :smiling_imp:",
            "ecoute je m'en fou ok",
            "je suis mechant mais je vais changer",
            "j'aime tlm moi",
            "ouuiiiiiii",
            "dac",
            "hum"
        ];

        let reponse = (replys[Math.floor(Math.random() * replys.length)])
        message.channel.send(message.reply(reponse))
    
    
    }
    
        if(message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas les permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("vous devez mentionner un utilistateur");
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("je n'ai pas trouver l'utilisateur ou il n'existe pas !");
        }

        if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("je n'ai pas les permission");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`${mute.user.username} n'est plus mute !`);
        })
    }

    if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas les permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("vous devez mentionner un utilistateur");
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("je n'ai pas trouver l'utilisateur ou il n'existe pas !");
        }

        if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("je n'ai pas les permission");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} est mute !`);
        })
    }
  
  
    if(message.content === prefix + "info") {

        var info_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Voici les informations du serveur !")
        .addField("Nom du discord :", message.guild.name)
        .addField("Date de création :", message.guild.createdAt)
        .addField("tu as rejoind le :", message.member.joinedAt)
        .addField("Nombre de membres", message.guild.members.size)
        .addField("Nombre de catégories et de salons", message.guild.channels.size)
        .setFooter("info | bot by dhaorix")
        message.channel.sendMessage(info_embed)
        console.log("Un utilisateur a effectué la commande d'info !")

    }
  
      if(message.content.startsWith(prefix + "kick")){

        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!");

    

        if(message.mentions.users.size === 0) {

            return message.channel.send("Vous devez metionner un utilisaeur")

        }

        var kick = message.guild.member(message.mentions.users.first());

        if(!kick) {

            return message.channel.send("Je ne sais pas si l'utilisateur existe :/")

        }

    

        if(message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {

            return message.channel.send("Je n'ai pas la permission pour kick");

        }

    

        kick.kick().then(member => {

            message.channel.send(`${member.user.username} est kick par ${message.author.username}`);

        });

    }



    if(message.content.startsWith(prefix + "ban")) {

        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la perission");



        if(message.mentions.users.size === 0) {

            return message.channel.send("Vous devez mentionner un utilisateur");

        }



        var ban = message.guild.member(message.mentions.users.first());

        if(!ban) {

            return message.channel.send("Je ne sais pas si l'utilisateur existe");

        }



        if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {

            return message.channel.send("Je n'ai pas la permission pour ban");

        }

        ban.ban().then(member => {

            message.channel.send(`${member.user.username} est ban par ${message.author.username} !`)

        });

        

    }

    if(message.content === prefix + "moderation") {

        var mod_embed = new Discord.RichEmbed()
  
        .setColor('#40A497')
  
        .setTitle(`Voici mes commandes modérations !`)
  
        .setThumbnail(message.author.avatarURL)
  
        .addField("/kick <@user>", "Kick l'utilisateur !")
  
        .addField("/ban <@user>", "Ban l'utilisateur !")
  
        .addField("/clear nombre", "Supprime le nombre de messages indiqué")
  
        .addField("/mute <@user>", "Mute l'utilisateur mentionné")
  
        .addField("/unmute <@user>", "Unmute l'utilisateur mentionné")
  
        .setFooter("Commande modération - bot by dhaorix")
  
        .setTimestamp()
  
        message.channel.send(mod_embed)
      
    }

    if(message.content === prefix + "fun") {
        var fun_embed = new Discord.RichEmbed()
        .setColor('#40A497')
        .setTitle(`Voici mes commandes amusantes !`)
        .setThumbnail(message.author.avatarURL)
        .addField("Bonjour", "Le bot répond !")
        .addField("ping", "pong")
        .addField("/xp", "voir votre xp")
        .addField("/xenolda question?", "pose ta question au bot")
        .setFooter("Commande fun - bot by dhaorix")
        .setTimestamp()
        message.channel.send(fun_embed);
    }
  
      if(message.content.startsWith(prefix + "sondage")) {
        if(message.author.id == "278647337121873930"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            if (!thingToEcho){
                return message.reply("Merci de poser une question :grin:")
            };
            var sondage_embed = new Discord.RichEmbed()
               .setColor('#40A497')
               .setDescription("Sondage")
               .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
               .setFooter("Sondage | bot by dhaorix")
               .setTimestamp()
            message.guild.channels.find("name", "sondage").sendEmbed(sondage_embed)
            .then(function (message) {
                message.react(":white_check_mark:")
                message.react(":x:")
            }).catch(function(){
            });
        }else{
            return message.reply("Tu n'as pas la permission")
    }}


});
