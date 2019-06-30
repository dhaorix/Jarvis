const Discord = require('discord.js')
const bot = new Discord.Client()
const ms = require("ms");
const yt = require('ytdl-core');
var prefix = "$"

bot.on('ready', function () {
  bot.user.setActivity(`$help | ${bot.guilds.size} serveurs`, { type: 'WATCHING' });
  console.log("Je suis connecté !")
});

bot.login(process.env.TOKEN)

const hugrando_imgs = [
    'https://i.pinimg.com/736x/6d/b2/3d/6db23d091b9cde457e1b3753804d578e.jpg',
    'https://data.whicdn.com/images/210764387/large.png',
    'https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/7e3e6709c93d70cf8dbf62f4f4dcd100bba12b86.jpg',
    'https://i.pinimg.com/originals/9a/57/1f/9a571f8edce1443ee7de0c77054e776c.jpg',
    'http://s9.favim.com/orig/130901/animation-black-and-withe-boy-couple-Favim.com-890870.jpg',
    'http://images2.fanpop.com/image/photos/12200000/-Hug-in-the-Moonlight-vampire-knight-yuki-kaname-12235462-308-500.jpg',
    'https://i.pinimg.com/736x/28/48/5e/28485e214691d0d57719775bddf7f070.jpg',
    'https://i.paigeeworld.com/user-media/1458086400000/536e739d76d1820862363e04_56e94fa8b64996b674a96b8a_320.jpg',
    'https://i.pinimg.com/564x/03/34/da/0334da92d8c159499f791f52ba68025d.jpg',
    'https://data.whicdn.com/images/63800813/large.png',
    ]
const kissrando_imgs = [
    'https://i.skyrock.net/4867/92444867/pics/3269105060_1_6_XhAt7sbT.png',
    'https://thiswallpaper.com/cdn/hdwallpapers/591/animated%20couple%20best%20love%20kiss%20hd%20desktop%20wallpaper.jpg',
    'https://pm1.narvii.com/5634/4bffd22f7bae0aa38ce1de462bacba33c72b0e39_hq.jpg',
    'https://i.pinimg.com/736x/d4/5f/07/d45f07bb345eee62eb96edc5c4dcfa38.jpg',
    'http://data.whicdn.com/images/222610708/large.jpg',
    'https://i.pinimg.com/originals/21/7e/05/217e0506124095fb2c0da59f25587c7a.jpg',
    'https://wallpaperxyz.com/wp-content/uploads/Anime-Romantic-Wallpapers-HD-Free-Download-Wallpaperxyz.com-7.jpg',
    'https://1.bp.blogspot.com/-qb3Ue3DCVt4/TXPRHMkzQNI/AAAAAAAASxw/4Ua--vQRLS0/s1600/Anime%2Bkiss%2Bpics.jpg',
    'https://data.whicdn.com/images/133303201/large.jpg',
    'http://2.bp.blogspot.com/-jFTH7pqZ6gU/Tb0zRIaDIUI/AAAAAAAAAE0/HV4AUeo5UdY/s1600/Anime+wallpapers+2011+Ever+Seen+2.jpg',
     //les gifs
    'https://cdn.discordapp.com/attachments/552044892705259549/555370047967592449/Imagenes_de_Animes_-_90.gif',
    'https://cdn.discordapp.com/attachments/552044892705259549/555368389502304256/66191b81d5bf6c70bd065736f3e8662b.gif',
    'https://cdn.discordapp.com/attachments/552044892705259549/555368168478998558/59a8bcd1e9cc4fb5d7ae1a97c9fb466e.gif',
    'https://cdn.discordapp.com/attachments/552044892705259549/555368108202655774/Mes_Photos_Otaku_-_Gif_Kiss.gif',
    'https://cdn.discordapp.com/attachments/552044892705259549/555368005689802752/83a23e4dace74cfd8bf1a227860aeb95.gif',
    ]
const nekorando_imgs = [
    'https://cdn.discordapp.com/attachments/411456907807555586/560189940974223381/9k-1.png',
    'https://cdn.discordapp.com/attachments/411456907807555586/560189940974223383/thZH5026D1.jpg',
    'https://cdn.discordapp.com/attachments/411456907807555586/560189941624209428/th.png',
    'https://cdn.discordapp.com/attachments/411456907807555586/560189942169337886/th-3.png',
    'https://cdn.discordapp.com/attachments/411456907807555586/560190347657871363/images.png',
    'https://cdn.discordapp.com/attachments/411456907807555586/560190348681412631/images-1.png',
    'https://cdn.discordapp.com/attachments/562179899436171266/562182370787065866/hentai-sexy-anime-fille-blonde-154106.jpg',
    'https://cdn.discordapp.com/attachments/562179899436171266/562182627273211914/JPEG_20190317_213458.jpg',
    'https://cdn.discordapp.com/attachments/562179899436171266/562183010410299402/img-25178416bb.jpg',
    'https://cdn.discordapp.com/attachments/562179899436171266/562183011555082260/19e9f66d0b16046bf925b18ac6c57296200fd02f_hq.jpg',
    'https://cdn.discordapp.com/attachments/562179899436171266/562183011555082260/19e9f66d0b16046bf925b18ac6c57296200fd02f_hq.jpg',
]
const hentairando_imgs = [
    'http://falara-unveiled.com/wp-content/gallery/sailor-moon/sample-9447e009380149a886ba45cb89371865.jpg',
    'https://www.hentaicloud.com/media/photos/1043574.jpg',
    'http://falara-unveiled.com/wp-content/gallery/nisekoi/1328433-Circle_Anco-Nisekoi-chitoge_kirisaki.jpg',
    'http://falara-unveiled.com/wp-content/gallery/inuyasha/1630115-Inuyasha-Kagura.jpg',
    'https://hhhcccgggg.files.wordpress.com/2014/11/event_412.png',
    'http://falara-unveiled.com/wp-content/gallery/ichigo-100/sample-9a28bf4d094ed06919e656a1eddc8ac8.jpg',
    'https://i1.yuki.la/5/0c/5b397b5e2a7d0cd32cb95fb6c1d2d4ca415e122954f1463da13e024ae6b8e0c5.jpg',
    'https://www.hentaicloud.com/media/photos/1043588.jpg',
    'https://www.hentaicloud.com/media/photos/1054184.jpg',
    'https://img.simplyotaku.com/500/483/gallery/heartcatch_pretty_cure_hentai_03.jpg',
]

bot.on('message', message => {
    if(message.content === 'Ping') {
     message.channel.sendMessage('ta cru toi :joy:');
    }
    if(message.content === "Hello") {
    if (message.author.id != "278647337121873930") {
      return message.channel.send("You not my owner")
  }
  message.channel.send("Welcome my owner")
    }
});

bot.on('message', message => {
    if (message.content === prefix + "invite") {
     message.reply("invite moi sur plusieur serveur : https://discordapp.com/oauth2/authorize?client_id=484089351051935746&scope=bot&permissions=8" )
    }
});

bot.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("```❌ | ERREUR : Vous n'avez pas les permission```")
        let count = args[1]
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer entre 1 et 100")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(parseInt(count) + 1).then(() => {
            message.channel.send(`Cleared ${count} messages.`).then(msg => msg.delete(5000));
        });
    }});

bot.on('message', message =>{

    if(message.content.startsWith(prefix + 'help')){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setThumbnail(bot.user.avatarURL)
        .setTitle(":tools: Voici mes commandes :tools:")
        .setDescription("**Command du bot pour tout serveur. C'est un bot qui peut faire beaucoup de chose**")
        .addField("**:octagonal_sign: - MODERATION**", "``$say``, ``$kick``, ``$ban``, ``$mute<mention>``, ``$unmute<mention>``, ``$tempmute``, ``$clear<nombre>``, ``$sondage<1ou2>``")
        .addField("**:confetti_ball: - FUN**", "``$ping``, ``$bar``, ``$lovecalc``, ``$avatar<mention>``, ``$pileouface``, ``$joke``, ``$xenolda question?``")
        .addField("**:notebook_with_decorative_cover: - UTILE**", "``$userstats``, ``$stats``, ``$serverlist``, ``$servinfo``, ``$invite``, ``$help-mute``, ``$new-ticket``, ``$close``, ``$report <mention> <message>``")
        .addField("**:frame_photo: - IMAGE**", "``$kiss``, ``$hug``, ``$neko`` NSFW: ``$hentai``, ``$nude``")
        .addField("**:space_invader: - EN STREAM**", "command quand le bot et en stream :``$level``, ``$money``, ``$music-help``")
        .addField("**:notes: - MUSIC**", "``$add``, ``$play``, ``$queue``, ``$join``, ``$pause``, ``$resume``, ``$skip``, ``$time``, ``$volume``")

        .addField("◽◽◽◽◽◽", "[▶Inviter le bot](https://discordapp.com/oauth2/authorize?client_id=484089351051935746&scope=bot&permissions=8) | [▶Mon Support](https://discord.gg/drhupWN) | [▶Voter pour le bot](https://discordbots.org/bot/484089351051935746) | [▶Faire un Dons](https://discordbots.org/bot/484089351051935746)")
        .setFooter(`Xenolda by Dhaorix`)
        .setTimestamp()
        message.channel.sendMessage(help_embed);  
    }
  
      if(message.content === "$serverlist") {

        if (message.author.id != "278647337121873930") {
    
          return message.channel.send("You not my owner")
    
      }
    
      message.channel.send(bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
    
        }

    if (!message.content.startsWith(prefix)) return
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {

        case "stats":
        var userCreateData = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;
        var stast_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle(`Stastistiques de l'utilisateur : ${message.author.username}`)
        .addField(`ID de l'utilisateur :id:`, msgauthor, true)
        .addField("Date de création de l'utilisateur :", userCreateData[1] + ' ' + userCreateData[2] + ' ' + userCreateData[3])
        .setThumbnail(message.author.avatarURL)
        .setFooter(`Xenolda by Dhaorix`)
        .setTimestamp()
      message.reply("Va dans tes message privé ! tu viens de recevoir tes statistique !(command en dev)")
      message.author.send({embed: stast_embed});
      break;

        case "bar":
      var replys = [
          ":baby_bottle:whisky",
          ":beer: bière",
          ":champagne: champagne",
          ":wine_glass: vin",
          "vodka",
          ":cocktail: cocktail",
          ":tropical_drink: tropical"
      ];
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

      let nombb = (getRandomInt(100))
      let repons = (replys[Math.floor(Math.random() * replys.length)])
      var bar_embed = new Discord.RichEmbed()
      .setColor('#40A497')
      .setTitle("bar")
      .addField("tu as bu un verre de ", repons)
      .addField("tu as reçu ", `+ 0,${nombb}mg d'alcool`)
      .setFooter(`Xenolda by Dhaorix`)
      .setTimestamp()
      message.channel.sendMessage(bar_embed) 
      break; 

        case "xenolda":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
           return message.reply("Merci de me poser une question :8ball:")
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
            "hum",
            "arrete ou je te hack",
            "fait pas le malin",
            "alors toi tes mon pref",
            ":joy:",
            "hehehe , a voir...",
            "trololol pas compris",
            "hrmmmm",
            "yes mec",
            "bug",
            "bah bonjour on peut commencer par sa nan?",
            "clap",
            "mais!!! tu me soul",
            "je suis calme",
            "grrrrr, nan rien"
        ];
        let reponse = (replys[Math.floor(Math.random() * replys.length)])
        message.channel.send(message.reply(reponse))
    }

    if(message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("```❌ | ERREUR : Vous n'avez pas les permission```");
        if(message.mentions.users.size === 0) {
            return message.channel.send("```❌ | ERREUR : Vous devez mentionné un utilisateur```");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("```❌ | ERREUR : Impossible de trouver l'utilisateur```");
        }
        if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("```❌ | ERREUR : je n'ai pas les permission```");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`${mute.user.username} n'est plus mute !`);
        })
    }



    if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("```❌ | ERREUR : Vous n'avez pas les permission```");
        if(message.mentions.users.size === 0) {
            return message.channel.send("```❌ | ERREUR : Vous devez mentionné un utilisateur```");
        }
        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("```❌ | ERREUR : Impossible de trouver l'utilisateur```");
        }
        if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("```❌ | ERREUR : je n'ai pas les permission```");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} est mute !`);
        })
    }

    if(message.content === prefix + "servinfo") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("**__Information sur le serveur : __**")
        .setThumbnail(bot.user.avatarURL)
        .addField("➡ Nom du discord :", message.guild.name)
        .addField("➡ Date de création :", message.guild.createdAt)
        .addField("➡ tu as rejoind le :", message.member.joinedAt)
        .addField("➡ Nombre de membres", message.guild.members.size)
        .addField("➡ Nombre de roles", message.guild.roles.size)
        .addField("Nombre de catégories et de salons", message.guild.channels.size)
        .setFooter(`Xenolda by Dhaorix`)
        .setTimestamp()
        message.channel.sendMessage(info_embed)
        console.log("Un utilisateur a effectué la commande d'info !")
    }

    if(message.content.startsWith(prefix + "kick")){
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("```❌ | ERREUR : Vous n'avez pas les permission```");
        if(message.mentions.users.size === 0) {
            return message.channel.send("```❌ | ERREUR : Vous devez mentionné un utilisateur```")
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("```❌ | ERREUR : Impossible de trouvé l'utilisateur```")
        }
        if(message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("```❌ | ERREUR : Je n'ai pas les permission```");
        }
        kick.kick().then(member => {
            message.channel.send(`${member.user.username} est kick par ${message.author.username}`);
        });
    }

    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("```❌ | ERREUR : Vous n'avez pas les permission```");
        if(message.mentions.users.size === 0) {
            return message.channel.send("```❌ | ERREUR : Vous devez mentionné un utilisateur```");
        }
        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("```❌ | ERREUR : Impossible de trouvé l'utilisateur``");
        }
        if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("```❌ | ERREUR : Je n'ai pas les permission```");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username} est ban par ${message.author.username} !`)
        });
    }

  
    if(message.content.startsWith(prefix + "sondage1")) {
            if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("```❌ | ERREUR : Vous n'avez pas les permission```")
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            if (!thingToEcho){
                return message.reply("Merci de poser une question :grin:")
            };
            var sondage_embed = new Discord.RichEmbed()
               .setColor('#40A497')
               .setDescription("Sondage")
               .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
               .setFooter(`Xenolda by Dhaorix`)
                .setTimestamp()
            message.delete().catch(O_o=>{});  
            message.channel.sendMessage(sondage_embed)
            .then(function (message) {
                message.react("✅")
                message.react("✖")
            }).catch(function(){
            });
    }

    if(message.content.startsWith(prefix + "report")) {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send("```❌ | ERREUR : Mentionné un utilisateur```")
        let reason = args.join(" ").slice(22);
        let report_embed = new Discord.RichEmbed()
        .setColor('#40A497')
        .setDescription("Report")
        .setThumbnail(message.author.avatarURL)
        .addField("Report User", `${rUser} son ID: ${rUser.id}`)
        .addField("Report de", `${message.author}, son ID: ${rUser.id}`)
        .addField("Dans le salon", message.channel)
        .addField("Fait le", message.createdAt)
        .addField("Raison", reason);
        let reportschannel = message.guild.channels.find(`name`, "report");
        if(!reportschannel) return message.channel.send("```❌ | ERREUR : Je ne trouve pas le salon *report*```");
        message.delete().catch(O_o=>{});
        reportschannel.send(report_embed);
        return;
    }

    if(message.content.startsWith(prefix + "sondage2")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("```❌ | ERREUR : Vous n'avez pas les permission```")
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        if (!thingToEcho){
            return message.reply("Merci de poser une question :grin:")
        };
        var sondage_embed = new Discord.RichEmbed()
           .setColor('#40A497')
           .setDescription("Sondage")
           .addField(thingToEcho, "Répondre avec :a: ou :b:")
           .setFooter(`Xenolda by Dhaorix`)
           .setTimestamp()
        message.delete().catch(O_o=>{});  
        message.channel.sendMessage(sondage_embed)
        .then(function (message) {
            message.react("🅰")
            message.react("🅱")
        }).catch(function(){
        });
    }

    if(message.content.startsWith(prefix + "hug")) {
        if(message.mentions.members.size == 1) {
            let member = message.mentions.users.first().username;
            message.channel.send(`**${message.author.username} donne a ${member} un calîn :heart: !**`, {
                file: hugrando_imgs[Math.floor(Math.random() * hugrando_imgs.length)]
            });
        }else {
            message.reply("tu ne peut pas faire un câlin a toi même ;-;")
        }
    }

    if(message.content.startsWith(prefix + "neko")) {
        message.channel.send(`**${message.author.username} regarde du neko **`, {
            file: nekorando_imgs[Math.floor(Math.random() * nekorando_imgs.length)]
        });
    }

    if(message.content.startsWith(prefix + "kiss")) {
        if(message.mentions.members.size == 1) {
            let member = message.mentions.users.first().username;
            message.channel.send(`**${message.author.username} fait un bisou a ${member} :lips: !**`, {
                file: kissrando_imgs[Math.floor(Math.random() * kissrando_imgs.length)]
            });
        }else {
            message.reply("tu ne peut pas faire un bisou a toi même ;-;")
        }
    }

    if(message.content.startsWith(prefix + "hentai")) {
        if (!message.channel.nsfw) return message.channel.send("Tu n'est pas dans un salon NSFW")       
            message.channel.send(`${message.author} regarde du hentai :eyes: !`, {
            file: hentairando_imgs[Math.floor(Math.random() * hentairando_imgs.length)]
        });
    }
  
        if(message.content.startsWith(prefix + 'joke')){
        random();
        var fun_embed = new Discord.RichEmbed()
        if (randnum==0){
            fun_embed.addField("C'est l'histoire du ptit dej, vous la connaissez ?","Pas de bol.")
        }
        if (randnum==1){
            fun_embed.addField("Comment appelle-t-on un chien qui n'a pas de pattes ?","- On l'appelle pas, on va le chercher...")
        }
        if (randnum==2){
            fun_embed.addField("Tu connais la définition d'un déséquilibré sexuel ?","C'est un mec qui bande et qui tombe en avant...")
        }
        if (randnum==3){
            fun_embed.addField("Quel bruit faisait la montre d'Adolf Hitler ?","Dik-tat dik-tat dik-tat")
        }
        if (randnum==4){
            fun_embed.addField("Que dit une fesse droite à une fesse gauche ?","-Ca va chier entre nous !")
        }
        if (randnum==5){
            fun_embed.addField("Un jour Dieu dit à Casto de ramer. ","Et depuis, castorama...")
        }
        message.channel.sendEmbed(fun_embed);
    }

  var randlovecalc = 0
function random(min,max){
    min=Math.ceil(0);
    max=Math.floor(5);
    randnum=Math.floor(Math.random()*(max-min+1)+min);
}

    if(message.content.startsWith(prefix + 'pileouface')) {
        res=getRandomInt(2)
        if(res==0){
            message.channel.send("Pile");
        }
        if(res==1){
            message.channel.send("Face");
        }
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

        if (message.content.startsWith(prefix + 'ping')) {
        message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
    }

        if(message.content.startsWith(prefix + 'avatar')) {
        let membreAvatarURL;
        let membreName;
        try {
            membreAvatarURL = message.mentions.users.first().avatarURL;
            membreName = message.mentions.users.first().username;
        }catch (e) {
            membreAvatarURL = message.author.avatarURL;
            membreName = message.author.username;
        }
        const embedAvatar = new Discord.RichEmbed()
            .setColor('#40A497')
            .setAuthor(bot.user.username, bot.user.avatarURL)
            .setDescription("Photo de profil de l'utilisateur")
            .addField("Photo profil", membreName)
            .setImage(`${membreAvatarURL}`)
            .setTimestamp()
            .setFooter(`Xenolda by Dhaorix`)
            .setTimestamp()
        message.channel.send(embedAvatar);
    }  

      if (message.content.toLowerCase().startsWith(prefix + `new-ticket`)) {
        const reason = message.content.split(" ").slice(1).join(" ");
        //if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-" + message.author.username)) return message.channel.send(`You already have a ticket open.`);
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });

    

            c.overwritePermissions(message.author, {

    

                SEND_MESSAGES: true,

    

                READ_MESSAGES: true

    

            });

    

            message.channel.send(`:white_check_mark: Le ticket a bien été crée , #${c.name}.`);

    

            const embed = new Discord.RichEmbed()

    

            .setColor(0xCF40FA)

    

            .addField(`Hey ${message.author.username}!`, `Un Administrateur ou un modo viendra bientôt a vous ! Patienter quelque instant...`)

    

            .setTimestamp();

    

            c.send({ embed: embed });

    

        }).catch(console.error);

    

    }





    

    if (message.content.toLowerCase().startsWith(prefix + `close`)) {

    

        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

    

    

    

        message.channel.send(`Etes vous sûr? Confirmer pour fermer le ticket : \nTo confirm, type \`-confirm\`. Vous avez 10 seconde, après le délai, le message sera supprimé.`)

    

        .then((m) => {

    

          message.channel.awaitMessages(response => response.content === '-confirm', {

    

            max: 1,

    

            time: 10000,

    

            errors: ['time'],

    

          })

    

          .then((collected) => {

    

              message.channel.delete();

    

            })

    

            .catch(() => {

    

              m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {

    

                  m2.delete();

    

              }, 3000);

    

            });

    

        });

    

    }

  

      if(message.content.startsWith(prefix + 'userstats')) { 
        if(message.mentions.members.size == 1) {
            let member = message.mentions.members.first();
            var embed = new Discord.RichEmbed()
                .setThumbnail(member.user.avatarURL)
                .setColor("#40A497")
                .setDescription(":information_source: → " + member.user.username + " | ID: (" + member.user.id + ")")
                .setTitle("Toute les information :")
                .addField(`Username`, member.user.username)
                .addField(`ID`, member.user.id)
                .addField(`Discriminator (#)`, member.user.discriminator)
                .addField(`Crée`, member.user.createdAt)
                .addField(`Bot?`, member.user.bot)
                .addField(`Roles`, member.roles.map(r => r.name).join(', '))
                .setFooter(`Xenolda by Dhaorix`)
                .setTimestamp()
            message.channel.send(embed);
                }else {
                    message.reply("mentionne quelqu'un...")
                };
            }
});

bot.on("message", async message => {

  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

    if(command === "say" ){
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("```❌ | ERREUR : Vous n'avez pas les permission```");
        var say = new Discord.RichEmbed()
        let text = args.join(" ");
        message.delete();
        say.setColor("#40A497")
        say.setDescription(text)
        message.channel.send(say);

    }
  
      if(message.content.startsWith(prefix + "tempmute")) {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("❌ Vous n'avez pas les permission pour mute");
    if(message.content.startsWith(prefix + "mute-help")) {
        message.reply("Utilisé : $tempmute <user> <1s/m/h/d> <Motivo> __ou__ $mute <@mention>/ $demute <@mention>");
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Mention une personne !"); //se não tiver mencionado o usuario vamos retornar
    if (tomute.hasPermission("MANAGE_ROLES")) return message.reply("Désolé, il a les permission d'administrateur");
    let reason = args.slice(2).join(" ");
    if (!reason) return message.reply("Indique une raison");//se não tiver um motivo vamos retornar !
 
    let muterole = message.guild.roles.find(`name`, "muted"); // Verifica se o server tem a tag muted
    //se não tiver vamos criar !
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    //fim da criação do cargo
    let mutetime = args[1];
    if (!mutetime) return message.reply("Indiqué le temps"); //Não especificou o tempo ? Vamos retornar
 
    message.delete().catch(O_o => {});
 
    try {
        await tomute.send(`Tu a été mute pendant ${mutetime}. Motif : ${reason}. A plus tard`) //avisando no dm da pessoa que ela foi mutada
    } catch (e) {
        message.channel.send(`ERROR!!!!!`) 
    }
 
    let muteembed = new Discord.RichEmbed()
        .setDescription(`Mute par ${message.author}`)
        .setColor("#40A497")
        .addField("Utilisateur mute :", tomute)
        .addField("Mute dans le salon :", message.channel)
        .addField("Fait le :", message.createdAt)
        .addField("Temps du mute :", mutetime)
        .addField("Motif :", reason);
 
    let incidentschannel = message.guild.channels.find(`name`, "log-staff" ) || message.guild.channels.find(`name`, "log" ) || message.guild.channels.find(`name`, "staff-log" ) || message.guild.channels.find(`name`, "logs" ) ; //Se o bot não achar as salas 
    if(!incidentschannel) return message.channel.send("Créez un canal avec les options suivantes nommées «log-staff», «log», «staff-log», «log»"); //vamos retornar
    incidentschannel.send(muteembed);
    message.channel.send(`<@${tomute.id}> a été mute ${mutetime}`)
    await (tomute.addRole(muterole.id));
 
    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> a été demute`);
    }, ms(mutetime));
    }
});

let queue = {};

const commands = {

	'play': (msg) => {

		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage('```❌ | ERREUR : Ajouté une music avec $add```');

		if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));

		if (queue[msg.guild.id].playing) return msg.channel.sendMessage('Already Playing');

		let dispatcher;

		queue[msg.guild.id].playing = true;



		console.log(queue);

		(function play(song) {

			console.log(song);

			if (song === undefined) return msg.channel.sendMessage('Queue is empty').then(() => {

				queue[msg.guild.id].playing = false;

				msg.member.voiceChannel.leave();

			});

			msg.channel.sendMessage(`Playing: **${song.title}** as requested by: **${song.requester}**`);

			dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : 1 });

			let collector = msg.channel.createCollector(m => m);

			collector.on('message', m => {

				if (m.content.startsWith(prefix + 'pause')) {

					msg.channel.sendMessage('paused').then(() => {dispatcher.pause();});

				} else if (m.content.startsWith(prefix + 'resume')){

					msg.channel.sendMessage('resumed').then(() => {dispatcher.resume();});

				} else if (m.content.startsWith(prefix + 'skip')){

					msg.channel.sendMessage('skipped').then(() => {dispatcher.end();});

				} else if (m.content.startsWith('volume+')){

					if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);

					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));

					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);

				} else if (m.content.startsWith('volume-')){

					if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);

					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));

					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);

				} else if (m.content.startsWith(tokens.prefix + 'time')){

					msg.channel.sendMessage(`time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);

				}

			});

			dispatcher.on('end', () => {

				collector.stop();

				play(queue[msg.guild.id].songs.shift());

			});

			dispatcher.on('error', (err) => {

				return msg.channel.sendMessage('error: ' + err).then(() => {

					collector.stop();

					play(queue[msg.guild.id].songs.shift());

				});

			});

		})(queue[msg.guild.id].songs.shift());

	},

	'join': (msg) => {

		return new Promise((resolve, reject) => {

			const voiceChannel = msg.member.voiceChannel;

			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.channel.sendMessage('```❌ | ERREUR : Connecter vous dans un salon vocal```');

			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));

		});

	},

	'add': (msg) => {

		let url = msg.content.split(' ')[1];

		if (url == '' || url === undefined) return msg.channel.sendMessage(`You must add a YouTube video url, or id after ${prefix}add`);

		yt.getInfo(url, (err, info) => {

			if(err) return msg.channel.sendMessage('Invalid YouTube Link: ' + err);

			if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];

			queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});

			msg.channel.sendMessage(`added **${info.title}** to the queue`);

		});

	},

	'queue': (msg) => {

		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${prefix}add`);

		let tosend = [];

		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});

		msg.channel.sendMessage(`__**${msg.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);

	},

	'music-help': (msg) => {

		let tosend = ['```Music Command :', prefix + 'join : "Join Voice channel of msg sender"',	prefix + 'add : "Add a valid youtube link to the queue"', prefix + 'queue : "Shows the current queue, up to 15 songs shown."', prefix + 'play : "Play the music queue if already joined to a voice channel"', '', 'the following commands only function while the play command is running:'.toUpperCase(), prefix + 'pause : "pauses the music"',	prefix + 'resume : "resumes the music"', prefix + 'skip : "skips the playing song"', prefix + 'time : "Shows the playtime of the song."',	'volume+(+++) : "increases volume by 2%/+"',	'volume-(---) : "decreases volume by 2%/-"',	'```'];

		msg.channel.sendMessage(tosend.join('\n'));

	},

	'reboot': (msg) => {

		if (msg.author.id == "278647337121873930") process.exit(); //Requires a node module like Forever to work.

	}

};


bot.on('message', msg => {

	if (!msg.content.startsWith(prefix)) return;

	if (commands.hasOwnProperty(msg.content.toLowerCase().slice(prefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(prefix.length).split(' ')[0]](msg);

});
