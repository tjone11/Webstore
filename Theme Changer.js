var message = "Choose the correct theme color.";
var theme = prompt(message);
var color = "green";

while(theme !== color) {
  theme = prompt(message);
}

console.log("Hey you picked the right color");
