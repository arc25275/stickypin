const Discord = require("discord.js");
const client = new Discord.Client();
const nconf = require("nconf");
const token = require("./auth.json");
client.login(token.token);

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

var date = new Date();
client.on("channelPinsUpdate", async (channel, time) => {
	console.log(time.getTime() - date.getTime());
	if (time.getTime() - date.getTime() > 100) {
		nconf.use("file", { file: "./config.json" });
		nconf.load();
		for (var i = 1; i < Object.keys(nconf.get("messages")).length + 1; i++) {
			const ID = nconf.get(`messages:id${i}`).split("-");
			const channelID = ID[0];
			const messageID = ID[1];
			console.log(channelID, messageID);
			if (channelID == channel.id) {
				message = await channel.messages.fetch(messageID);
				message.unpin();
				message.pin({ reason: "StickyPin" });
				date = new Date();
			}
		}
	}
});

client.on("message", (message) => {
	if (message.type == "PINS_ADD") {
		if (message.author.id == client.user.id) {
			message.delete();
		}
	}
});
