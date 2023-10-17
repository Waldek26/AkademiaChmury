let userInput: unknown;
let userName: string;
userName = "Ala";

userInput = 6;
userInput = "Max";

userInput = userName;
//userName = userInput;

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
console.log(userInput);
//generateError("An error ocured", 500);
const button = document.getElementById("clickme");
button?.addEventListener("click", () => {
  console.log("aaaaa aollwo");
});
