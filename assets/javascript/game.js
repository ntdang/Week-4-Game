$('.document').ready(function() {

  //Create variables for random number, wins, losses, total score, crystal values
  var randomNumber = Math.floor(Math.random() * 120) + 19;
    console.log(randomNumber);
  var wins = 0;
  var losses = 0;
  var totalScore = 0;
  var greenGem = Math.floor(Math.random() * 12) + 1;
    console.log(greenGem);
  var multiGem = Math.floor(Math.random() * 12) + 1;
    console.log(multiGem);
  var silverGem = Math.floor(Math.random() * 12) + 1;
    console.log(silverGem);
  var purpleGem = Math.floor(Math.random() * 12) + 1;
    console.log(purpleGem);

 //Create reset function
 var reset = function () {
  randomNumber = Math.floor(Math.random() * 120) + 19;
  greenGem = Math.floor(Math.random() * 12) + 1;
  multiGem = Math.floor(Math.random() * 12) + 1;
  silverGem = Math.floor(Math.random() * 12) + 1;
  purpleGem = Math.floor(Math.random() * 12) + 1;
  totalScore = 0;
 }  
  
    
//Show random number
  $("#random-number").text(randomNumber);















})