const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = "$"

bot.on('ready', function () {
  bot.user.setPresence({ game: { name: `$help | ${bot.guilds.size} serveurs`, type: 0} });
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
});

bot.on('message', message => {
    if (message.content === 'Bonjour') {
      message.reply('yosh la team fornigh pfff gamin')
    }
});

bot.on('message', message => {
    if (message.content === 'Kaguya') {
      message.reply(' Ou sa !? Je veux un authograph! ')
    }
});

bot.on('message', message => {
    if (message.content === prefix + "invite") {
     message.reply("invite moi sur plusieur serveur : https://discordapp.com/oauth2/authorize?client_id=484089351051935746&scope=bot&permissions=8" )
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
        .setColor("#40A497")
        .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
        .setFooter('Nous sommes désormais ' + member.guild.memberCount)
    member.guild.channels.get('410498158246887434').send(embed)
    member.addRole('410494803680428042')
});

bot.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
         .setColor("#40A497")
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
        message.channel.bulkDelete(parseInt(count) + 1).then(() => {
            message.channel.send(`Cleared ${count} messages.`).then(msg => msg.delete(5000));
        });
    }});


bot.on('message', message =>{

    if(message.content.startsWith(prefix + 'help')){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle(":tools: Voici mes commandes d'aide :tools:")
        .setDescription("Command du bot pour tout serveur ")
        .addField("**:octagonal_sign: -MODERATION-:octagonal_sign: **", "``$kick``, ``$ban``, ``$mute<mention>``, ``$unmute<mention>``, ``$clear<nombre>``, ``$sondage<1ou2>``")
        .addField("**:confetti_ball:-FUN-:confetti_ball:**", "``$say``, ``$ping``, ``$bar``, ``$avatar<mention>``, ``$xenolda question?``")
        .addField("**:notebook_with_decorative_cover:-UTILE-:notebook_with_decorative_cover:**", "``$userstats``, ``$serverlist``, ``$info``, ``$invite``, ``$report <mention> <message>``")
        .addField("**:frame_photo:-IMAGE-:frame_photo:**", "``$kiss``, ``$hug``, ``$neko`` NSFW: ``$hentai``, ``$nude``")
        .addField("**:notes:-MUSIC-:notes:**", "``ARRIVE BIENTOT``")
        .addField("**:ring:-MARIAGE-:ring:**", "``ARRIVE BIENTOT``")
        .setFooter("help | bot by dhaorix")
        message.channel.sendMessage(help_embed);  
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

        

         case "bar":

      var replys = [
          ":baby_bottle:whisky",
          ":beer: bière",
          ":champagne: champagne",
          ":wine_glass: vin",
          "vodka",
          ":cocktail: cocktail",
          ":tropical_drink: tropical",
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
      .setFooter("bar | bot by dhaorix")
      message.channel.sendMessage(bar_embed) 
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
        .setTitle(":book: Info sur le serveur :book: ")
        .addField("Nom du discord :", message.guild.name)
        .addField("Date de création :", message.guild.createdAt)
        .addField("tu as rejoind le :", message.member.joinedAt)
        .addField("Nombre de membres", message.guild.members.size)
        .addField("Nombre de roles", message.guild.roles.size)
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



    if(message.content.startsWith(prefix + "sondage1")) {
            if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas les permission !")
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
        if (!rUser) return message.channel.send("mention une personner est met ton message")
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
        if(!reportschannel) return message.channel.send("Désoler, je ne trouve pas le salon report");
        message.delete().catch(O_o=>{});
        reportschannel.send(report_embed);
        return;
    }

    if(message.content.startsWith(prefix + "sondage2")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas les permission !")
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        if (!thingToEcho){
            return message.reply("Merci de poser une question :grin:")
        };
        var sondage_embed = new Discord.RichEmbed()
           .setColor('#40A497')
           .setDescription("Sondage")
           .addField(thingToEcho, "Répondre avec :a: ou :b:")
           .setFooter("Sondage | bot by dhaorix")
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

      if(message.content.startsWith(prefix + "listmcpe")) {
        var mcpe_embed = new Discord.RichEmbed()
        .setColor('#40A497')
        .setTitle("List de serveur mcpe FR ouvert")
        .addField("Teracube", "Ip: cube.mcpe.eu Port: 19144 ")
        .addField("Imsonnia", "Ip: play.imsonniape.eu Port: 19132")
        .addField("Overblast epsilon", "Ip: overblast.serv-mc.eu Port: 19144")
        .addField("Kryptonium", "Ip: play.kryptonium.tk Port: 10097")
        .addField("Histeria", "Ip: srv2.secure-heberge.com Port: 10736")
        .addField("NetworkBe", "Ip: networkbe.mcpe.eu Port: 19132")
        .addField("CookieBuild", "Ip: pe.cookie-build.com Port: 19132")
        .addField("Gladiators", "Ip: play-gladiators.fr Port: 19132")
        .addField("Nawastia", "Ip: nawa.mcpe.eu Port: 19145")
        .addField("Skytaria", "Ip: skytaria.tk Port: 19135")
        .addField("Astoria Rp", "Ip: astoria.pocket.pe Port: 22915")
        .addField("Futonium", 'Ip: futonium.tk Port: 19160')
        .addField("Volcania", "Ip: volcania.ml Port: 19132")
        .setFooter("page 1 sur 2 | bot by dhaorix")
        message.channel.sendMessage(mcpe_embed)
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
            .setFooter(message.author.username, message.author.avatarURL);
        
        message.channel.send(embedAvatar);
    }  
  
});

bot.on("message", async message => {

  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

    if(command === "say" ){
        let text = args.join(" ");
        message.delete();
        message.channel.send(text);
    }
});
