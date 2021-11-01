const utils = require('../utils/utils.js');
const config = require('../config/config.json');
const axios = require('axios').default;

function get(url, params) {
    return new Promise((resolve, reject) => {
        url += `?api_key=${utils.decrypt(config.apiKey)}&${params}`;
        var options = {
            method: 'GET',
            url
        };
    
        axios.request(options).then(function (response) {
            return resolve(response.data)
        }).catch(function (error) {
            return reject(error);
        }); 
    });
}

function invokeGetHttp(test) {
    if (test.request && test.request.endpoint) {
        return get(test.request.endpoint, test.request.params);
    }

    return 'Missing request/endpoint in test file!';
}

module.exports = {
    invokeGetHttp
}