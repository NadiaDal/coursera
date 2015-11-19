var target;
var user_number_str;
var user_number;
var finished = false;
var guesses = 0;

function start_game() {
    target = Math.floor(Math.random() * 100) + 1;
    console.log(target);

    while (!finished) {
        user_number_str = prompt("I am thinking of a number in the range 1 to 100. \n\ "
                                + "\n\ What is the number?");
        user_number = parseInt(user_number_str);
        guesses +=1;
        finished = check_guesses();
    }
}

function check_guesses() {
    if (isNaN(user_number)) {
        alert("Enter a number!");
        return false;
    } 
    if (user_number < 1 || user_number > 100) {
        alert("Wrong range!");
        return false;
    } 
    if (user_number > target) {
        alert("Too high!");
        return false;
    } 
    if (user_number < target) {
        alert("Too small!");
        return false;
    } 
    alert("You got it!\n\ \n\  The number was " + target + "\n\ It took you" + guesses +
            "guesses to get number!");
    return true;
}



