const requester = require('./requesters/requester.js');
const validator = require('./validators/validator.js');
const fs = require('fs');

function executeTest(fileName) {
    // Read the test file as JSON object
    let test = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    // Pass the test JSON object to requester to make the request
    let response = requester.invokeGetHttp(test);
    console.log(`Response: ${response}`);
    // Validate the actual response against the expected response
    let validation = validator.validate(test, response);
    console.log (`Validation: ${validation}`)
}

executeTest(process.argv[2])