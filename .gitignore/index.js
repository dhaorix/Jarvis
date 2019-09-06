const Discord = require('discord.js')
const bot = new Discord.Client()
const yt = require("ytdl-core");
var opus = require('opusscript');
var prefix = "$$"
const config = require('./config.json');

const size    = config.colors;
const rainbow = new Array(size);


bot.on('ready', function () {
  bot.user.setActivity(`$$help | ${bot.users.size} membre`, { type: 'STREAMING' });
  console.log("Je suis connecté !")
});

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg
  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);
  return hex.length === 1 ? '0'+hex : hex;
}
let place = 0;

const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {		
    bot.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
		.catch(console.error);
    if(config.logging){
      console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
    }
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.username}!`);
  if(config.speed < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
});

bot.login(process.env.TOKEN)

bot.on('guildMemberAdd', (member) =>{
  let embed = new Discord.RichEmbed()
      .setColor("#BF00FF")
      .setDescription(':tada: **' + member.user.username + '** a rejoint ' + member.guild.name)
      .setFooter('Nous sommes désormais ' + member.guild.memberCount)
  member.guild.channels.get('410498158246887434').send(embed);
  member.addRole('410494803680428042')
});

bot.on('guildMemberRemove', (member) =>{
  let embed = new Discord.RichEmbed()
      .setColor("#BF00FF")
      .setDescription(':cry: **' + member.user.username + '** a quitté ' + member.guild.name)
      .setFooter('Nous sommes désormais ' + member.guild.memberCount)
  member.guild.channels.get('410498158246887434').send(embed)
});

const { stripIndents } = require('common-tags');

const slots = ['💳', '💎', '📿', '📀', '💰'];

bot.on("message", async message => {
	 if(message.content.startsWith(prefix + 'slot')){

    const slotOne = slots[Math.floor(Math.random() * slots.length)];
		const slotTwo = slots[Math.floor(Math.random() * slots.length)];
		const slotThree = slots[Math.floor(Math.random() * slots.length)];

		if (slotOne === slotTwo && slotOne === slotThree) {
			return message.reply(stripIndents`
				${slotOne}|${slotTwo}|${slotThree}
				ouah! Tu as gagné ! Excellent travail... euh... chance!
			`);
		}
		return message.reply(stripIndents`
			${slotOne}|${slotTwo}|${slotThree}
			aw... Vous avez perdu... Je suppose que c'est juste de la malchance, hein ?
		`);
    }
  });

bot.on('message', message =>{


  if(message.content.startsWith(prefix + 'help')) {

    var help_embed = new Discord.RichEmbed()

        .setColor("#BF00FF")

        .setThumbnail(bot.user.avatarURL)

        .setTitle(":tools: Voici mes commandes :tools:")

        .setDescription("**Bot Exclusif au Lux ;) | préfix : $$**")

        .addField("ATTENTION !", "**Bot en developement donc les command ne marche pas**")

        .addField("**🍸 - FUN**", "``ping``, ``bar``, ``slot``, ``chance``")

        .addField("**💎 - Money**", "``daily``, ``money``, ``give``, ``shop``")

        .addField("**📱 - IMAGE**", "``Image arriveront``")

        .addField("**🔊  - MUSIC**", "``add``, ``play``, ``queue``, ``join``, ``pause``, ``resume``, ``skip``, ``time``, ``volume``")

        .setFooter(`Bot For Lux`)

        message.channel.sendMessage(help_embed);  

  }
  if(message.content === prefix + 'serverlist'){
    message.channel.send(bot.guilds.map(r => r.name + ` | **${r.memberCount}** membres`))
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

				} else if (m.content.startsWith(prefix + 'time')){

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
