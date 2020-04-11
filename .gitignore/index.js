const Discord = require('discord.js')
const client = new Discord.Client()
const content;
var prefix = "/"

client.on( 'ready', function () {

    client.user.setActivity(`/help | ${client.users.size} membres`, { type: 'WATCHING' });
    console.log("Je suis connecté !")

});

client.login(process.env.TOKEN)


client.on("message", async message => {
    
    if(message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if(command === "say" ){
        let text = args.join(" ");
        message.channel.send(text);
        message.delete();
    }

    

    if(command === "def-on"){
        message.delete();
        message.channel.send("``Auto-défence de la base activer (activation des canon et du bouclier)``")
    }

    if(command === "def-off"){
        message.delete();
        message.channel.send(":luxgif03:")
    }


    if(command === "soin"){
        message.delete();
        if(message.mentions.members.size == 1) {

            let perso = message.mentions.users.first().username;

            message.channel.send(`**🏢Soin médical en cours pour : ${perso}**`)

        }
    }
    if(command === "maj"){
        message.delete();
        message.channel.send("```Mise a jour en cours !```").then(message => 
            message.edit("```Mise a jour en cours !```")).then(message => 
                message.edit("```loading.```")).then(message => 
                    message.edit("```loading..```")).then(message => 
                        message.edit("```loading...```")).then(message => 
                            message.edit("```loading.```")).then(message => 
                    message.edit("```loading..```")).then(message => 
                        message.edit("```loading...```")).then(message => 
                            message.edit("```loading.```")).then(message => 
                                message.edit("```loading..```")).then(message => 
                                    message.edit("```loading...```")).then(message => 
                                message.edit("``` 1 processeur(s) installé(s) : 473 Mo |```")).then(message => 
                                    message.edit("```Téléchargement des nouvelles données : 33 fichier png installé : 643 Mo /```")).then(message => 
                                        message.edit("```Téléchargement des nouvelles données : 10 coorections installé : 1 452 Mo -```")).then(message => 
                                            message.edit("```Enregistrement des données : C:\WINDOWS\system32 C:\WINDOWS\system32 C:\WINDOWS\system32 : 4 258 Mo \ ```")).then(message => 
                                                message.edit("```Préparation de jarvis en cours |```")).then(message => 
                                                    message.edit("```Préparation de jarvis en cours /```")).then(message => 
                                                        message.edit("```Lancement en cours -```")).then(message => 
                                                            message.edit("```Terminé !```"));
                                                            
    }



    const iimg = "https://www.gif-maniac.com/gifs/54/54399.gif"
    if(command === "charg"){
        message.delete()

        message.channel.send(`Chargement en cours...`, {

            file: iimg

        });
        
    }

    if(command === "make"){
        
        let args = message.content.split(" ").slice(1);

        let tte = args.join(" ")

        if (!tte){

           return message.reply("Merci définire un objet")

        };
        
        message.delete()
        message.channel.send(`Création de l'objet ${tte}.`).then(message => 
            message.edit(`Création de l'objet ${tte}..`)).then(message => 
                message.edit(`Création de l'objet ${tte}...`)).then(message => 
                    message.edit(`Création de l'objet ${tte}.`)).then(message => 
                        message.edit(`Création de l'objet ${tte}..`)).then(message => 
                message.edit(`Fin de la création de l'objet ${tte} !`))
    }

    if(command === "help"){
        var embed = new Discord.RichEmbed()
        .setColor('#336bff')
        .setTitle("Help Jarvis **V2.0**")
        .setDescription("----------------------")
        .addField("Command RP :", "``/clear`` ; ``/createfiche`` ; ``/say`` ; ``/maj`` ; ``/def-on`` ; ``/def-off`` ; ``/soin`` ; ``/make<obj>``")
        .setTimestamp()
        message.delete().catch(O_o=>{});
        message.channel.send(embed)
    }

    if(command === "createfiche") { 
        await message.delete();
       let content;
        //if (message.author.id !== '178657593030475776') return;
    
        const filter = m => m.author.id === message.author.id;
        message.channel.send("Bonjour ! Le temps signifis le temps de ta reponse, si tu n'a rien a mettre met //")
        message.reply("```Choisi ton Nom (5min avant annulation)```").then(q => q.delete(450000))
        message.channel.awaitMessages(filter, {
        max: 1,
        time: 450000
        }).then(collected => {
        collected.delete(450000);
        if (collected.first().content === 'cancel') {
            return message.reply("Canceled.");
        }
        let name = collected.first().content;

        message.reply("```Choisi ton Prénom (5min avant annulation)```").then(q => q.delete(450000))
        message.channel.awaitMessages(filter, {
        max: 1,
        time: 450000
        }).then(collected => {
        collected.delete(450000);
        if (collected.first().content === 'cancel') {
            return message.reply("Canceled.");
        }
        let username = collected.first().content;

        message.reply("```Choisi ton age (5min avant annulation)```").then(q => q.delete(450000))
        message.channel.awaitMessages(filter, {
        max: 1,
        time: 450000
        }).then(collected => {
        collected.delete(450000);
        if (collected.first().content === 'cancel') {
            return message.reply("Canceled.");
        }
        let age = collected.first().content;

        message.reply("```Choisi ta taille (5min avant annulation)```").then(q => q.delete(450000))
        message.channel.awaitMessages(filter, {
        max: 1,
        time: 450000
        }).then(collected => {
        collected.delete(450000);
        if (collected.first().content === 'cancel') {
            return message.reply("Canceled.");
        }
        let taille = collected.first().content;

        message.reply("```Choisi ton Sexe (5min avant annulation)```").then(q => q.delete(450000))
        message.channel.awaitMessages(filter, {
        max: 1,
        time: 450000
        }).then(collected => {
        collected.delete(450000);
        if (collected.first().content === 'cancel') {
            return message.reply("Canceled.");
        }
        let sexe = collected.first().content;

        message.reply("```Choisi ta Race (5min avant annulation)```").then(q => q.delete(450000))
        message.channel.awaitMessages(filter, {
        max: 1,
        time: 450000
        }).then(collected => {
        collected.delete(450000);
        if (collected.first().content === 'cancel') {
            return message.reply("Canceled.");
        }
        let races = collected.first().content;

        message.reply("```Choisi tes qualités (10min avant annulation)```").then(q => q.delete(900000))
        message.channel.awaitMessages(filter, {
        max: 1,
        time: 900000
        }).then(collected => {
        collected.delete(900000);
        if (collected.first().content === 'cancel') {
            return message.reply("Canceled.");
        }
        let qualite = collected.first().content;

        message.reply("```Choisi tes défauts (10min avant annulation)```").then(q => q.delete(900000))
        message.channel.awaitMessages(filter, {
        max: 1,
        time: 900000
        }).then(collected => {
        collected.delete(900000);
        if (collected.first().content === 'cancel') {
            return message.reply("Canceled.");
        }
        let defaut = collected.first().content;

        message.reply("```Choisi ton Pouvoir (5min avant annulation)```").then(q => q.delete(450000))
        message.channel.awaitMessages(filter, {
        max: 1,
        time: 450000
        }).then(collected => {
        collected.delete(450000);
        if (collected.first().content === 'cancel') {
            return message.reply("Canceled.");
        }
        let pouvoir = collected.first().content;

        message.reply("```Choisi ton Arme préférer (5min avant annulation)```").then(q => q.delete(450000))
        message.channel.awaitMessages(filter, {
        max: 1,
        time: 450000
        }).then(collected => {
        collected.delete(450000);
        if (collected.first().content === 'cancel') {
            return message.reply("Canceled.");
        }
        let arme = collected.first().content;

        message.reply("```Choisi ton Point fort (10min avant annulation)```").then(q => q.delete(900000))
        message.channel.awaitMessages(filter, {
        max: 1,
        time: 900000
        }).then(collected => {
        collected.delete(900000);
        if (collected.first().content === 'cancel') {
            return message.reply("Canceled.");
        }
        let fort = collected.first().content;

        message.reply("```Choisi ton Point faible (10min avant annulation)```").then(q => q.delete(900000))
        message.channel.awaitMessages(filter, {
        max: 1,
        time: 900000
        }).then(collected => {
        collected.delete(900000);
        if (collected.first().content === 'cancel') {
            return message.reply("Canceled.");
        }
        let faible = collected.first().content;

        message.reply("```Crée ton histoire (30min avant annulation)```").then(q => q.delete(2700000))
        message.channel.awaitMessages(filter, {
        max: 1,
        time: 2700000
        }).then(collected => {
        collected.delete(2700000);
        if (collected.first().content === 'cancel') {
            return message.reply("Canceled.");
        }
        let histoire = collected.first().content;


        message.reply("Fiche envoyée au staff, Merci d'attendre la confirmation ;)")

        const userr = message.author
        let report_embed = new Discord.RichEmbed()
        .setColor('#336bff')
        .setDescription(`Fiche RP de : ${userr}`)
        .setThumbnail(message.author.avatarURL)
        .addField("**Nom**", `${name}`)
        .addField("**Prénom**", `${username}`)
        .addField("**Age**", `${age}`)
        .addField("**Taille**", `${taille}`)
        .addField("**Sexe**", `${sexe}`)
        .addField("**Races**", `${races}`)
        .addField("**Qualités**", `${qualite}`)
        .addField("**Défauts**", `${defaut}`)
        .addField("**Pouvoir**", `${pouvoir}`)
        .addField("**Arme préferé**", `${arme}`)
        .addField("**Point fort**", `${fort}`)
        .addField("**Point faible**", `${faible}`)
        .addField("**Histoire**", `${histoire}`);


        let reportschannel = message.guild.channels.find(`name`, "✅fiche-validé✅");
        if(!reportschannel) return message.channel.send("```❌ | ERREUR : Je ne trouve pas le salon *✅fiche-validé✅*```");
        reportschannel.send(report_embed);


        })})})}) })})})})})})})})})
        

    }

});


