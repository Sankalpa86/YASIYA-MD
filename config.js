const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~kQ4VUS6D#vUssaGt_43MLO5C8kjrWWV2-UBpSXWbg2rVvUIoxYs4'
};
