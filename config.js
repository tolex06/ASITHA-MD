const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=SqJDlYaQ#yWzjycfcB2KLWCoiULrLEW--eNDnc8JdPNvbQbpiwYE",
MONGODB: process.env.MONGODB || "mongodb+srv://Alashyt:femzotboi10@cluster0.w3h65q7.mongodb.net/?retryWrites=true&w=majority",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
