const CryptoJS = require('crypto-js');
const config = require('../config/config.json');

function decrypt(text) {
    let result = text;
    // decrypt
    const bytes = CryptoJS.AES.decrypt(result.toString(), config.secretKey);
    result = bytes.toString(CryptoJS.enc.Utf8);
    
    return result;
}

module.exports = {
    decrypt
}