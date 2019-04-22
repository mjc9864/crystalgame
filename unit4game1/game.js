// crystal objects
var crystal = {
    blue:
    {
      name: "Blue",
      value: 0
    },
    green:
    {
      name: "Green",
      value: 0
    },
    red:
    {
      name: "Red",
      value: 0
    },
    yellow:
    {
      name: "Yellow",
      value: 0
    }
  };
  
  
  // Scores 
  var currentScore = 0;
  var targetScore = 0;
  
  // Wins and Losses
  var winCount = 0;
  var lossCount = 0;
  
  
  // Function for getting the random numbers
  var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Start the Game 
  var startGame = function() {
  
    // Reset  Score
    currentScore = 0;
  
    // Target Score 
    targetScore = getRandom(19, 120);
  
    // values for each of the crystals
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
  
    // update html
    $("#your-score").text(currentScore);
    $("#target-score").text(targetScore);
  };
  
  // Check for win or lose
  var checkWin = function() {
  
    // Check if currentScore is greater than targetScore
    if (currentScore > targetScore) {
      alert("You lose!");
      
      lossCount++;
  
      $("#loss-count").text(lossCount);
  
      // restart game
      startGame();
    }
  
    else if (currentScore === targetScore) {
      alert("You Won!");
      
      winCount++;
  
      $("#win-count").text(winCount);
  
      // game reset
      startGame();
    }
  
  };
  
  // clicks for crystals
  var addValues = function(clickedCrystal) {
  
    // Changes the currentScore
    currentScore += clickedCrystal.value;
  
    // update the currentScore
    $("#your-score").text(currentScore);
  
    checkWin();
  };
  
  // Starts game
  startGame();
  
  $("#blue").click(function() {
    addValues(crystal.blue);
  });
  
  $("#red").click(function() {
    addValues(crystal.red);
  });
  
  $("#green").click(function() {
    addValues(crystal.green);
  });
  
  $("#yellow").click(function() {
    addValues(crystal.yellow);
  });
  