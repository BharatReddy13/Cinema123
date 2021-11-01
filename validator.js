// Add your validator code here and call it from testRunner.js (feel free to rename the function name or parameters)
function validate(test, actual) {
    if (test.validateApiResponse.expected == actual) {
        return "Actual result is the same as Expected result";
    } else {
        return "Actual result does not match Expected result";
    }
}

module.exports = {
    validate
}