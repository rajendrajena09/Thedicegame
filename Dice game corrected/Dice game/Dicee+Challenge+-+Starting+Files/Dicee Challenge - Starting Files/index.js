
// var randomNumber1 = Math.floor(Math.random()*6)+1;
// var randomdice = "images/dice" + randomNumber1 + ".png";
// document.querySelectorAll("img")[0].setAttribute("src",randomdice);

// var randomNumber2 = Math.floor(Math.random()*6)+1;
// var randomdice2 = "images/dice" + randomNumber2 + ".png";
// document.querySelectorAll("img")[1].setAttribute("src",randomdice2);

// if(randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML="Player1 won";
// }
// else if(randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML="Player2 won";
// }

// else{
//     document.querySelector("h1").innerHTML="draw";
// }


rollTheDice = () =>{
    let player1=Math.ceil(Math.random()*6);
    let player1dice=`images/dice${player1}.png`;
    document.getElementById('check1').setAttribute('src',player1dice);

    let player2=Math.ceil(Math.random()*6);
    let player2dice=`images/dice${player2}.png`;
    document.getElementById('check2').setAttribute('src',player2dice);

    if(player1 > player2){
        document.querySelector('h1').innerHTML="Player 1 Won";
    }
    else if(player1 < player2){
        document.querySelector('h1').innerHTML="Player 2 Won";
    }
    else{
        document.querySelector('h1').innerHTML="Draw";
    }
}



