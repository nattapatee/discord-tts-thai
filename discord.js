// const secret = require("./token.json"); //file with your bot credentials/token/etc
const discord = require("discord.js");
const discordTTS = require("discord-tts");
const log = require('node-pretty-log');
const ytdl = require('ytdl-core');

const client = new discord.Client();
// client.login(process.env.BOT_TOKEN);
client.login("MzU3ODk5OTAyOTQxOTIxMjgy.WbqWQg.4boJKqzDAnwkpNcUS4zXQ15jVQg");

client.on("ready", () => {
    log('info', 'Slowpoke WAKEUP!!');
});

client.on("message", async (msg) => {
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

    if (msg.content.includes("/j ")) {
        log('info', `กำลังรับข้อความ JAPAN`);
        let text = msg.content.split(" ")
        if (text.length == 0) {
            msg.reply('กรุณาพิมพ์ให้ถูกอีสัส');
        } else {
            text.shift()
            const broadcast = client.voice.createBroadcast();
            var channelId = msg.member.voice.channelID;
            var channel = client.channels.cache.get(channelId);
            channel.join().then(connection => {
                broadcast.play(discordTTS.getVoiceStream(text.join(" "), 'ja-JP'), {
                    volume: 0.2,
                });
                const dispatcher = connection.play(broadcast);
                log('info', `Speaking: ${text.join(" ")}`);
                msg.reply('私はあなたのためにそれを言います');
                return;

            }).catch(err => {
                log('error', `Description: ${err}`);
            });
        }
    }

    if (msg.content.includes("/พ ")) {
        log('info', `กำลังรับข้อความ THAI`);
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

    if (msg.content.includes("/c ")) {
        log('info', `กำลังรับข้อความ Chinese`);

        let text = msg.content.split(" ")
        if (text.length == 0) {
            msg.reply('กรุณาพิมพ์ให้ถูกอีสัส');
        } else {
            text.shift()
            const broadcast = client.voice.createBroadcast();
            var channelId = msg.member.voice.channelID;
            var channel = client.channels.cache.get(channelId);
            channel.join().then(connection => {
                broadcast.play(discordTTS.getVoiceStream(text.join(" "), 'zh-HK'), {
                    volume: 0.2,
                });
                const dispatcher = connection.play(broadcast);
                msg.reply('เดี๋ยวอั๋วพูดให้นะจ๊ะ');
                log('info', `Speaking: ${text.join(" ")}`);
                return;
            }).catch(err => {
                log('error', `Description: ${err}`);
            });
        }
    }

    if (msg.content.includes("/k ")) {
        log('info', `กำลังรับข้อความ KOREAN`);

        let text = msg.content.split(" ")
        if (text.length == 0) {
            msg.reply('กรุณาพิมพ์ให้ถูกอีสัส');
        } else {
            text.shift()
            const broadcast = client.voice.createBroadcast();
            var channelId = msg.member.voice.channelID;
            var channel = client.channels.cache.get(channelId);
            channel.join().then(connection => {
                broadcast.play(discordTTS.getVoiceStream(text.join(" "), 'ko-KR'), {
                    volume: 0.2,
                });
                const dispatcher = connection.play(broadcast);
                msg.reply('내가 당신을 위해 그것을 말할 것입니다.');
                log('info', `Speaking: ${text.join(" ")}`);
                return;
            }).catch(err => {
                log('error', `Description: ${err}`);
            });
        }
    }

    if (msg.content.includes("/k ")) {
        log('info', `กำลังรับข้อความ KOREAN`);

        let text = msg.content.split(" ")
        if (text.length == 0) {
            msg.reply('กรุณาพิมพ์ให้ถูกอีสัส');
        } else {
            text.shift()
            const broadcast = client.voice.createBroadcast();
            var channelId = msg.member.voice.channelID;
            var channel = client.channels.cache.get(channelId);
            channel.join().then(connection => {
                broadcast.play(discordTTS.getVoiceStream(text.join(" "), 'ko-KR'), {
                    volume: 0.2,
                });
                const dispatcher = connection.play(broadcast);
                msg.reply('내가 당신을 위해 그것을 말할 것입니다.');
                log('info', `Speaking: ${text.join(" ")}`);
                return;
            }).catch(err => {
                log('error', `Description: ${err}`);
            });
        }
    }

    if (msg.content.includes("/s ")) {
        log('info', `กำลังรับข้อความ ENGLISH`);

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
        msg.channel.send('Slowpoke จะเป็นปากให้พวกมึงเองวิธีใช้งาน ```/พ``` สำหรับภาษาไทย ```/s``` สำหรับภาษาอังกฤษ```/j``` สำหรับภาษาญี่ปุ่น ```/k``` สำหรับภาษาเกาหลี ```/c``` สำหรับภาษาจีน')
    }

    if (msg.content === "อี๊") {
        msg.reply('มีไรไอ้อ้วน');
        return;
    }
});



client.on('voiceStateUpdate', async (oldMember, newMember) => {
    let newUserChannel = newMember.channelID;
    let oldUserChannel = oldMember.channelID;
    // console.log(JSON.stringify({newUserChannel}))
    // console.log(JSON.stringify({oldUserChannel}))

    if(newUserChannel === "435055373326614538" && oldUserChannel == null) //don't remove ""
    { 
        const channel = client.channels.cache.get('435055373326614538'); // get channel
        
        let userInfo = newMember.member.user
        console.log("user join:"+userInfo.id);
        console.log("user join:"+userInfo.tag);

        if(userInfo.id == "256006419147390976") {
            // tee
            channel.join().then(connection => {
                const broadcast = client.voice.createBroadcast();
                broadcast.play(ytdl("https://www.youtube.com/watch?v=VpfuAQr-BH0"), {
                    volume: 0.05,
                });
                const dispatcher = connection.play(broadcast);
                return;
            }).catch(err => {
                log('error', `Description: ${err}`);
            });
        }

        if(userInfo.id == "335367276238864385") {
            // nut
            channel.join().then(connection => {
                const broadcast = client.voice.createBroadcast();
                broadcast.play(ytdl("https://www.youtube.com/watch?v=8CcP8hbZpew"), {
                    volume: 0.05,
                });
                const dispatcher = connection.play(broadcast);
                return;
            }).catch(err => {
                log('error', `Description: ${err}`);
            });
        }

        if(userInfo.id == "912000633652019250") {
            // yim
            channel.join().then(connection => {
                const broadcast = client.voice.createBroadcast();
                broadcast.play(ytdl("https://youtube.com/watch?v=nUI3jwHOdmQ&feature=share"), {
                    volume: 0.05,
                });
                const dispatcher = connection.play(broadcast);
                return;
            }).catch(err => {
                log('error', `Description: ${err}`);
            });
        }

        if(userInfo.id == "459973521624399872") {
            // fierce
            channel.join().then(connection => {
                const broadcast = client.voice.createBroadcast();
                broadcast.play(ytdl("https://www.youtube.com/watch?v=g6E6pukwpU0"), {
                    volume: 0.05,
                });
                const dispatcher = connection.play(broadcast);
                return;
            }).catch(err => {
                log('error', `Description: ${err}`);
            });
        }

        if(userInfo.id == "340416527213789185") {
            // ter
            channel.join().then(connection => {
                const broadcast = client.voice.createBroadcast();
                broadcast.play(ytdl("https://www.youtube.com/watch?v=skJt3DLHB2A&ab_channel=Soundiffy"), {
                    volume: 0.05,
                });
                const dispatcher = connection.play(broadcast);
                return;
            }).catch(err => {
                log('error', `Description: ${err}`);
            });
        }

        if(userInfo.id == "373443124544012289") {
            // jul
            channel.join().then(connection => {
                const broadcast = client.voice.createBroadcast();
                    broadcast.play(ytdl("https://www.youtube.com/watch?v=s9qpe7mITzo"), {

                    volume: 0.05,
                });
                const dispatcher = connection.play(broadcast);
                return;
            }).catch(err => {
                log('error', `Description: ${err}`);
            });
        }


        return;
    }
    else{
        // // User leaves a voice channel
        // console.log("Left vc");
    }
 });
