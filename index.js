const { Client, GatewayIntentBits } = require('discord.js');
const fish = require('./fish');
const bugs = require('./bugs');
const sea = require('./sea');
require('dotenv').config();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

const prefix = '-';
client.on('ready', () => {
	console.log('Bot online!');
});


client.on('messageCreate', async (message) => {
	if (message.author.bot || !message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	let args = commandBody.split(' ');
	const command = args.shift().toLowerCase();
	args = args.join('_');

	if (command === 'f' || command === 'fish') {
		fish.getFish(args, message);
	}
	else if (command === 'b' || command === 'bug') {
		bugs.getBug(args, message);
	}
	else if (command === 's' || command === 'sea') {
		sea.getSeaCreature(args, message);
	}
});

client.login(process.env.BOT_TOKEN);
