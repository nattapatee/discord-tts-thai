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
    if (msg.content.includes("เปิดไมค์")) {
        const broadcast = client.voice.createBroadcast();
        var channelId = msg.member.voice.channelID;
        var channel = client.channels.cache.get(channelId);
        channel.join().then(connection => {
            broadcast.play(discordTTS.getVoiceStream("ได้ยินกูไหมหละ", 'th-TH'), {
                volume: 0.2,
            });
            const dispatcher = connection.play(broadcast);
            return;

        }).catch(err => {
            log('error', `Description: ${err}`);
        })
    }

    if (msg.content.includes("/พ ")) {
        let text = msg.content.split(" ")
        if (text.length == 0) {
            msg.reply('กรุณาพิมพ์ให้ถูกอีสัส');
        } else {
            text.shift()
            const broadcast = client.voice.createBroadcast();
            var channelId = msg.member.voice.channelID;
            var channel = client.channels.cache.get(channelId);
            channel.join().then(connection => {
                broadcast.play(discordTTS.getVoiceStream(text.join(" "), 'th-TH'), {
                    volume: 0.2,
                });
                const dispatcher = connection.play(broadcast);
                log('info', `Speaking: ${text.join(" ")}`);
                msg.reply('เดี๋ยวพูดให้นะจ๊ะ');
                return;

            }).catch(err => {
                log('error', `Description: ${err}`);
            });
        }
    }

    if (msg.content.includes("/s ")) {
        let text = msg.content.split(" ")
        if (text.length == 0) {
            msg.reply('กรุณาพิมพ์ให้ถูกอีสัส');
        } else {
            text.shift()
            const broadcast = client.voice.createBroadcast();
            var channelId = msg.member.voice.channelID;
            var channel = client.channels.cache.get(channelId);
            channel.join().then(connection => {
                broadcast.play(discordTTS.getVoiceStream(text.join(" ")), {
                    volume: 0.2,
                });
                const dispatcher = connection.play(broadcast);
                msg.reply('I\'ll say it for you.');
                log('info', `Speaking: ${text.join(" ")}`);
                return;
            }).catch(err => {
                log('error', `Description: ${err}`);
            });
        }
    }

    if (msg.content.includes("/helpSpeak")) {
        msg.channel.send('Slowpoke จะเป็นปากให้พวกมึงเองวิธีใช้งาน ```/พ``` สำหรับภาษาไทย ```/s``` สำหรับภาษาอังกฤษ')
    }

    if (msg.content === "อี๊") {
        msg.reply('มีไรไอ้อ้วน');
        return;
    }

});
