var randomnumber1 = Math.floor(Math.random() * 6)+1;

var randomdiceImage = "dice" + randomnumber1 + ".png"; // dice1-dice6

var randomImage = "images/" + randomdiceImage ; // random image

var img1 = document.querySelectorAll('img')[0];

img1.setAttribute('src',randomImage);

// for 2nd dice...

var randomnumber2 = Math.floor(Math.random() * 6)+ 1;

var randomdiceImage2 = "dice" + randomnumber2 + ".png";

var ramdomImage2 = "images/" + randomdiceImage2; // random image

var img2 = document.querySelectorAll('img')[1];

img2.setAttribute("src" , ramdomImage2);

// Winner setting

if(randomnumber1 > randomnumber2) {

    document.querySelector("h1").innerHTML = "Player 1 Wins..Refresh to play again";
}

else if(  randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins..Refresh to play again";
}

else {
    document.querySelector("h1").innerHTML = "It is Draw...Roll the Dice Again..";
}
