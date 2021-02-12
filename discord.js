const secret = require("./token.json"); //file with your bot credentials/token/etc
const discord = require("discord.js");
const discordTTS = require("discord-tts");
const log = require('node-pretty-log');

const client = new discord.Client();
client.login(secret.token);

client.on("ready", () => {
    log('info', 'Slowpoke WAKEUP!!');
});

client.on("message", msg => {
    if (msg.content.includes("/s ")) {
        let text = msg.content.split(" ")
        if(text.length == 0) {
            msg.reply('กรุณาพิมพ์ให้ถูกอีสัส');
        } else {
        text.shift()
        const broadcast = client.voice.createBroadcast();
        var channelId = msg.member.voice.channelID;
        var channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream(text.join(" "), 'th-TH'), {
                volume: 0.15,
            });
            const dispatcher = connection.play(broadcast);
            // const stream = discordTTS.getVoiceStream("banana ทดสอบ", 'th-TH')
            // broadcast.play(stream);
            // const dispatcher = await connection.play(broadcast)
        }).catch(err => {
            log('error', `description: ${err}`);

        });
        }
    }
    if (msg.content === "อี๊") {
        msg.reply('มีไรไอ้อ้วน');
    }

});
