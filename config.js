const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "QBwnyRJS#RlGgbba0aymPLiao0p4UHew7Gfuux8GRZQ1TAUlNzUQ", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/LDkGq0DT/SulaMd.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello I am chalana induwara*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "groups", //private or public
AUTO_VOICE:"false", //true or false
MONGODB: "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
CAPTION: "> *𝗖𝗛𝗔𝗟𝗔𝗛 𝗢𝗙𝗖 𝗠𝗗*",
JIDS: [],
SUDO: ['94776938009','94779483535','94724481155']

};
