"use strict";
exports.__esModule = true;
var userInput;
// this is basically saying you do not know the type that will be inputted into the variable and this cannot be directly assigned into another varicble as a reference, an extra check has to be made to ascertain the type that has been put into the unkown type to be 100% sure.
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput == 'string') {
    userName = userInput;
} // the extra check
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error occured at:', 500);
