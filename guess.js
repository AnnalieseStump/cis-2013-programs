
/* This program challenges the user to guess a randomly generated number
* within a range chosen by the user. Basic user input is validated to 
* ensure numbers are entered and there are no guessing range violations
* (such as choosing a number outside the high or low boundary of the range). 
*/
var intMax, intMin, intRandom, intGuess, intCount;

while(intGuess != -1){

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

intMin = parseInt(prompt("What is the minimum number of your range?" + "\n" + "Note: Make sure it is above 0"));
    while (isNaN(intMin) || intMin <= 0) 
    {
        intMin = parseInt(prompt("Sorry, your number is invalid. Make sure it is a number and is above 0!")); //alerting the user if they chose an invalid number
    }
    alert ("Lowest number = " + intMin);

/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/
intMax = parseInt(prompt("What is the maximum number of your range?" + "\n" + "Note: Make sure it is greater than your minimum by at least 2"));
    while (isNaN(intMax) || intMax <= (intMin + 2)) //requiring that the max is at least 2 above the min so the game is more fun
    {
        intMin = parseInt(prompt("Sorry, your number is invalid. Make sure it is a number and above your minimum by at least 2!"));
    }
    alert ("Highest number = " + intMax); //alert the user of the number they chose

    /*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);//this is the randomizer that chooses a number in between the range provided


// set the loop counter

var intCount = 1;
var output = "";

/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/
intGuess = parseInt(prompt("What is your guess? Enter a number in between " + intMin + " and " 
            + intMax + " or enter -1 to quit the game" + "\n" 
            + "Note: you get a point for every guess, and want your points to be as low as possible. So guess carefully!"));
            while ((isNaN(intGuess) || intGuess > intMax || intGuess < intMin) && intGuess != -1) //checks on all the the qualifying variables for the guess
            {
                intMin = parseInt(prompt("Sorry, your number is invalid. Make sure your guess is within your range")); //alert instead?
            }
            alert ("Your guess = " + intGuess);

/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

        while (intGuess !== intRandom && intGuess !== -1) //enter this loop if the guess is not the randomized variable
        {
           
            if (intGuess < intRandom)
            {
                alert ("Sorry, your guess is too low. Try again!");
            }        
            else
            {
                alert("Sorry, your guess is too high. Try again!");
            }
            intGuess = parseInt(prompt("Please enter a new number"));
                while ((isNaN(intGuess) || intGuess > intMax || intGuess < intMin) && intGuess != -1)
                {
                    intMin = parseInt(prompt("Sorry, your number is invalid. Make sure it is a number within your range!")); //alert instead?
                }
                alert ("Your Guess = " + intGuess);
                intCount++; //keeping track of the amount of guesses, incrementing each time the loop is completed
        }
        if(intGuess != -1){
            alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
            " and it only took you " + intCount + " attempts!" + "\n" + "Your point count = " + intCount + ", great work!" ); //when the user finally guesses successfully, show this message with how many counts it took
                    //provided an extra credit component that tells the user the number of points they have
        }
    //ask for max and min
    //loop through until answer is correct
}
alert("Ok! You have exited the game :)");
