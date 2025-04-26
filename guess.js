const max = prompt("enter the max number.");
const random = Math.floor(Math.random()*max)+1;
let guess = prompt("guess the random number.");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("Your guess is right. Congrats!! guess number is :" , random);
        break;
    }
    else if(guess < random){
        guess =prompt("your number is smaller than guessing number, please try again.");
    }
    else{
        guess = prompt("your number is larger than the guessing number, please try again.");
    }
}