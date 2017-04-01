
      // Creates an array that lists out all of the options (word bank).
      var options = ["alligator", 
                      "ant", 
                      "bear", 
                      "bee", 
                      "bird",
                      "camel",
                      "cat",
                      "cheetah",
                      "chicken",
                      "chimpanzee",
                      "cow",
                      "crocodile",
                      "deer",
                      "dog",
                      "dolphin",
                      "duck",
                      "eagle",
                      "elephant",
                      "fish",
                      "fly",
                      "fox",
                      "frog",
                      "giraffe",
                      "goat",
                      "goldfish",
                      "hamster",
                      "hippopotamus",
                      "horse",
                      "kangaroo",
                      "kitten",
                      "lion",
                      "lobster",
                      "monkey",
                      "octopus",
                      "owl",
                      "panda",
                      "pig",
                      "puppy",
                      "rabbit",
                      "rat",
                      "scorpion",
                      "seal",
                      "shark",
                      "sheep",
                      "snail",
                      "snake",
                      "spider",
                      "squirrel",
                      "tiger",
                      "turtle",
                      "wolf",
                      "zebra"];

      // Counts for user wins, losses, and ties.
      var wins = 0;
      var guessesRemaining = 15;
      var lettersGuessed = [];
      var blank = [];
      var matching = 0;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var chosenWord = options[Math.floor(Math.random() * options.length)]; 
      // Recreates the chosen word with blanks
      createBlank(chosenWord);

      // Prints variable values into game screen
      document.getElementById("winScore").innerHTML = wins;
      document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
      document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
      document.getElementById("blankWord").innerHTML = blank;

      // Creates number of blanks equal to length of chosen word
      function createBlank(chosenWord) {
          for (var i=0; i < chosenWord.length; i++) {
            blank.push("__ ");
          }
      }



      // This function is run whenever the user presses a key.
      document.onkeyup = function(event) {

              // Determines which key was pressed
              var userGuess = event.key.toLowerCase();

              // Alerts the key the user pressed (userGuess).
              // alert("User guess: " + userGuess);
              // alert("Chosen Word: " + chosenWord);
              // alert("Blank Word: " + blank);

              // Adds the new guess to guessed bank if it's a new entry
              function addGuess() {
                  var matching = 0;
                  for (var i=0; i<lettersGuessed.length; i++) {
                      if (userGuess===lettersGuessed[i]) {
                          matching++;
                          return false;
                      }
                  }

                  if (matching === 0) {
                      lettersGuessed.push(userGuess);
                      return true;
                  }
              }

              // Replaces the blanks with the guess if it's correct and -1 from the guesses remaining
              function checkGuess() {
                  for (var  i=0; i<chosenWord.length; i++) {
                      if ( userGuess===chosenWord.charAt(i) ) {
                        blank[i] = userGuess;
                      }
                  }

                  guessesRemaining--;
                  printValues();
              }

              // Checks for win
              function winCheck() {
                  var blankChecker = 0;
                  for (var i=0; i<blank.length; i++) {
                      if (blank[i] != "__ ") {
                          blankChecker++;
                      }
                  }
                  if (blankChecker>0) {
                    wins++;
                    var chosenWord = options[Math.floor(Math.random() * options.length)];
                    createBlank(chosenWord); 
                    resetDefaults();
                    printValues();
                  }

                  alert("YOU WIN!");
              }

              // Reprints the new values
              function printValues() {
                  document.getElementById("winScore").innerHTML = wins;
                  document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
                  document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
                  document.getElementById("blankWord").innerHTML = blank;
              }

              // Reset values to default
              function resetDefaults() {
                  var guessesRemaining = 15;
                  var lettersGuessed = [];
                  var blank = [];
                  var matching = 0;
              }

              addGuess();
              if ( matching == 0 ) { checkGuess(); }
              // winCheck();
    
      };

