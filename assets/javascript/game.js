
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

      // Define variables.
      var wins = 0;
      var guessesRemaining = 15;
      var lettersGuessed = [];
      var blank = [];
      var matching = 0;
      var userGuess = "";

      var audio = document.getElementById("audio");

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var chosenWord = options[Math.floor(Math.random() * options.length)]; 
      // Recreates the chosen word with blanks
      createBlank(chosenWord);
      // Prints variable values into game screen
      printValues();

      // This function is run whenever the user presses a key.
      document.onkeyup = function(event) {

              // Determines which key was pressed and stores a lowercasae version to the variable
              var userGuess = event.key.toLowerCase();

              // executes if letter from a-z
              if ((userGuess=="a") || (userGuess=="b") || (userGuess=="c") || (userGuess=="d") || (userGuess=="e") || (userGuess=="f") || (userGuess=="g") || (userGuess=="h") || (userGuess=="i") || (userGuess=="j") || (userGuess=="k") || (userGuess=="l") || (userGuess=="m") || (userGuess=="n") || (userGuess=="o") || (userGuess=="p") || (userGuess=="q") || (userGuess=="r") || (userGuess=="s") || (userGuess=="t") || (userGuess=="u") || (userGuess=="v") || (userGuess=="w") || (userGuess=="x") || (userGuess=="y") || (userGuess=="z") ) {
                  // adds guess to guess bank if it is unique and returns true if so
                  var boolGuess = addGuess(userGuess);
                  // if guess was unique and added to guess bank, then execute following
                  if ( boolGuess === true ) { 
                      // check the guess to see if it's one of the letters in the word and replace blanks with the guess
                      checkGuess(userGuess);
                      // win if the "blank" word is no longer blank and fully replaced with the real letters
                      winCheck();
                      // lose if remaining guesses is < 0
                      loseCheck(); 
                  }
               };

      };


      //defining all functions used

                  // Creates number of blanks equal to length of chosen word
                  function createBlank(chosenWord) {
                      blank=[];
                      for (var i=0; i < chosenWord.length; i++) {
                        blank.push("__ ");
                      }
                  }

                  // if the guess is not a repeat guess, then add it to the guess bank
                  function addGuess(userGuess) {
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
                  function checkGuess(userGuess) {
                      for (var  i=0; i<blank.length; i++) {
                          if ( userGuess===chosenWord.charAt(i) ) {
                            blank[i] = userGuess;
                          }
                      }

                      guessesRemaining--;
                      printValues();
                  }

                  // Checks for win and restarts game
                  function winCheck() {
                      var blankChecker = 0;
                      for (var i=0; i<blank.length; i++) {
                          if (blank[i] == "__ ") {
                              blankChecker++;
                          }
                      }
                      if (blankChecker===0) {
                        wins++;
                        audio.play();
                        chosenWord = options[Math.floor(Math.random() * options.length)];
                        resetDefaults();
                        createBlank(chosenWord); 
                        printValues();
                        alert("You win! The word was " + chosenWord + "!");

                      }

                  }

                  // Checks for lose and restarts game
                  function loseCheck() {

                      if (guessesRemaining<0) {
                        alert("You lose! The word was " + chosenWord + "!");
                        chosenWord = options[Math.floor(Math.random() * options.length)];
                        resetDefaults();
                        createBlank(chosenWord);
                        printValues();

                      }

                  } 

                  // Reprints the values
                  function printValues() {
                      document.getElementById("winScore").innerHTML = wins;
                      document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
                      document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join("");
                      document.getElementById("blankWord").innerHTML = blank.join("");
                  }

                  // Reset values to default
                  function resetDefaults() {
                      guessesRemaining = 15;
                      lettersGuessed = [];
                      matching = 0;
                  } 




