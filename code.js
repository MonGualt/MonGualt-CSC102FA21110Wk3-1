function playCraps() {
    console.log("playCraps() function Started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    // It returns a random number from (inclusive)-1 (exclusive), rolling the dice twice.

    var sum = die1 + die2;
    // This adds the sum of the two numbers randomly generated.

    document.write("Die 1 = " + die1);
    document.write("<br/>");
    document.write("Die 2 = " + die2);
    document.write("<br/>");
    document.write("Sum = " + sum);
    document.write("<br/>");
    // Display the values of the dice and the sum.

    if (sum == 7 || sum == 11) {
        document.write("CRAPS - You Lose!");
        document.write("<br/>");
    }
    // If what ever in Parenthises is true, then you do the stuff in brakets. 

     else if (die1 == die2 && die1 % 2 == 0) {
         document.write("DOUBLES - You Win!");
         document.write("<br/>");
     }
     // If you take a number and divide it by 2 and the remainder is 0 then it is true .
     else{
         document.write("Draw - You neither won nor lost. Please try again.");
         document.write("<br>");
     }
     // If you nether win or lose you are asked nicely to try again.
}