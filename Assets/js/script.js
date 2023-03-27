var allQuestions

//"In Major League Baseball a game is _____ innings long?" :["seven", "eight", "nine", "ten", 2]
//"In football the endzone is _______ yards deep?" :["15", "10", "12", "14", 1]
//"A National Basketball Association game has _________ quarters in the game?" :["three", "four", "five", "two", 1]
//"In ice hockey if you cross the blueline before the ________ you are offsides?" :["puck", "defense", "offense", "goalie", 0]
//"In baseball a homerun is when the baseball is hit over the _________?" :["outfielders", "infiedlers", "outfield grass", "wall", 3]
//"What do you wear in football that protects you from getting hit in the head a ____________?" :["hat", "helmet", "mask", "shield", 1]
//"In what sport can you not use your hands _____________?" :["baseball", "volleyball", "tennis", "soccer", 3]
//"When basketball was first invented, the basket that was first used was a ____________ basket?" :["banana", "grapefruit", "peach", "plum", 2]

var highScores = [];

var userScore = {
    initials: InputDeviceInfo.value, 
    userScore: timer.textContent,
}
highScores.push (userScore)
console.log(highScores)
JSON.stringify(highScores)

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }
  