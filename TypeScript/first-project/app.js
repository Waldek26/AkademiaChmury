var userInput;
var userName;
userName = "Ala";
userInput = 6;
userInput = "Max";
userInput = userName;
//userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log(userInput);
//generateError("An error ocured", 500);
var button = document.getElementById("clickme");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log("aaaaa aollwo");
});
