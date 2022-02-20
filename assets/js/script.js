let ballResponses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later.",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

function eightBallResponse() {
  document.getElementById("eightBallResponse").value =
    ballResponses[Math.floor(Math.random() * ballResponses.length)];
}



var button = document.getElementById("enter");

button.addEventListener("click", function(){
    document.location.href = "https://github.com/SheylaPopovich/magic-8-ball/blob/9aceabb7e47743443e723134feaeb59c4ba8eddd/magic8ball.html";
});