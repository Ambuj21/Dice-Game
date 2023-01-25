var Player1 = Math.floor(Math.random()*6)+1;
var Player2 = Math.floor(Math.random()*6)+1;

var randomDiceImg1 = "images/dice"+Player1+".png";
var randomDiceImg2 = "images/dice"+Player2+".png";


if(Player1 < Player2){
    document.querySelector('h1').innerHTML = "✌️Player2 Wins";
  }
else if(Player1 > Player2)
{
    document.querySelector('h1').innerHTML = "✌️Player1 Wins";

}
else {
    document.querySelector('h1').innerHTML = "Draw"
}
var images1 = document.querySelectorAll('img')[0]; //  to select html elements
images1.setAttribute("src", randomDiceImg1); // to select any attribute and make changes in that
var images2 = document.querySelectorAll('img')[1];
images2.setAttribute("src", randomDiceImg2);
