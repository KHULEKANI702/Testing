const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BYd0lKdlM5WkErL0VkL1dTbG9yV1NNZFB6bms5TU1zUFoxVzd5ZDhVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGpBUmJZVVRSRnBFcVAzQy9jYkF0MlVTU0lPSlBZcmNUMGpCSjJzQmYzbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTXRGa1UrS1kzNjdyRGpOeWpmcG9uRzVuMFZGNDB0N3dBeitRNTloUzA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOV1hiSnpXdHhpMWlWaDZiWVQ2QnRnQ0d6aTZ2bVdrS212V0lSSWtrMEQ4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFHdG1YWDRyUHB6TWRGY2dMd3BCZzRIbTdBNC8xQzdXdjBZVFJ5dGd4SEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlXS0Z0R0pvNkloRjJQdFN6VVhnVWVKZTdtMy9FRWJ0U05kdjZjZ0dtVEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUxnakF0UFNDQTdlK2FtS2QzUmVweGFxblByYlpnaitGcW1zK3VucUcwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmdwOVkxZ1kxeWo1aEtmclN6bDJPRkQzZVhKYU5iMk84dHFxUElsWEhTND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJJallWTHZsckN0YjZUNmZNVUcxTE4xZDRVbE9HS0k0eTdZNng5MVFybU92c2dOT3o3RVMyV2JpVFRlYlRhTCsrU2dna1FSN3RKaHk5M2lPbzNUNUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6IkJXRzdicWhNYTh0ekdiUkk2OGZvakZWTStrOHFRN3U4VUZFTEc0SUY4K1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzg0NTMzNzE1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1MUZFRUMyQjI2RUJCNjc3MDFCQzk2Qjc5NTNFQUM3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjEzOTkyNDZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc4NDUzMzcxNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUMzQjc1ODY0RUQyNTNCRUZCMUI2MDdFOEQ1NjU4MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxMzk5MjQ4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRZTRXRHBLZ1NwR2JjaGRVYjJGZjRRIiwicGhvbmVJZCI6ImQzNTBjY2U3LThkMDQtNDdjZi1iN2NkLTU4ZGUyNGNjMzgyNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQ1pxS1lWdkNCRmZpUDRqVkx3UUR4ZnBvZWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUhUUzg1NnppOEIzNkg4cFV1ZjZiTnBwR2ZRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1STUFMVklOIiwibWUiOnsiaWQiOiIyNjM3ODQ1MzM3MTU6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCD8J2QovCdkKDwnZCi8J2QrfCdkJrwnZClIPCdkIXwnZCo8J2Qq/CdkK3wnZCr8J2QnvCdkKzwnZCsIPCdkI3wnZCe8J2QrfCdkLDwnZCo8J2Qq/CdkKTwnZCsIiwibGlkIjoiMTczNTc3NTEyOTg0NzkxOjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMMzBvNUlIRUwyajg4Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwbGwydGJ4Mkc0ZzZwMytRZ3BXUnVoanYydVFZTEtkYjlhMFZneklCZmlJPSIsImFjY291bnRTaWduYXR1cmUiOiIzVllZYWluVm1kZkNUV3ZkeldLS0c3RG1ic3ZvZmczQ3ZMWnhlcUZmYUM2U1o0ckgwbW9PN0NGV2RiOVdER0JkczBIRVpqdEk3SFZjdlllN2ZrWHdBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWC9HL2RxbXF5d1pxSUtWQXV6ZDdxbWR3MlpRZEJDUXhabElVcGh6QW1RSDFVbXd3ejlVNFAvRlFnc2pxeVh6SXVFYTUyTFFDdUZEQXVERWNmNm1QRGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODQ1MzM3MTU6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkSlpkclc4ZGh1SU9xZC9rSUtWa2JvWTc5cmtHQ3luVy9XdEZZTXlBWDRpIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWtJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjEzOTkyNDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3NOIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY KHAN-MD 🤍*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KHAN-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "KHAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "92342758XXXX",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Jᴀᴡᴀᴅ TᴇᴄʜX",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/149k8x.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *KHAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923146190772",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
