# Cinema123 Task Scope
You are tasked to complete the given mini test framework to perform the necessary validation of the response as requested in the happy path test case, `Cinema_GetMovies_Success.json` as well as to add additional test cases to ensure a better test coverage of the API endpoint.

## Mini Test Framework
There are various parts to the test framework and they are listed as below:
### config
- config.json (this is where the common variables are retrieved from)
### requesters
- requester.js (this is the code and logic that interacts with the API endpoint via axios)
### tests
- this folder is used to keep the test cases that can be executed as part of this test framework
- Cinema_GetMovies_Success.json (this test file tells the test framework the data that will be used by the requester as well as validator)
### utils
- utils.js (this is where the common util methods will be implemented)
### validators
- validator.js (this is the code and logic that will perform the actual validation of the actual response against the expected response)
### testRunner.js
- this is the entry point of this test framework and it can be triggered from the terminal using `node` along with the path to the test case file to be executed

## Requirements
As part of this exercise, you are expected to fulfill the below requirements:
1. Refactor `testRunner.js` to successfully retrieve the response from the `requester`, then implement the `validator` to validate the `actual` versus `expected`
    - As part of this exercise, you are not supposed to edit the expected response in the test file `Cinema_GetMovies_Success.json`
    - Provide better `Given-When-Then` description for all tests
2. Add additional tests to provide better coverage of the `Query Movie` API endpoint
3. Feel free to refactor the test framework to make it more versatile, e.g.:
    - Ability to execute multiple tests with one command sequentially or parallel.
    - Checks for any errors/missing data when executing tests
    - Halt subsequent execution of the particular test upon erroring out in the previous steps

Upon completing the above requirements, please feel free to (though not required):
- Host your code on Github
- Include any README to explain your completed test framework

## How to initialize and execute test

### Initialise the project
- Run `npm install` to install the required package dependencies
```
npm install
```

### Execute test
- Use `node` to run the testRunner.js file
```
node testRunner.js /Cinema123/tests/Cinema_GetMovies_Success.json
```