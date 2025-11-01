const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~sUx2SBYJ#dBfcYTtuWDo00XDLX-C_H9_7nmXeR_gWYOURq3sZX6s'
};
