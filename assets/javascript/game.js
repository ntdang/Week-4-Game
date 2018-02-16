$('.document').ready(function() {

  //Create variables for random number, wins, losses, total score, crystal values
  var randomNumber = Math.floor(Math.random() * 120) + 19;
    console.log(randomNumber);
  var wins = 0;
  var losses = 0;
  var totalScore = 0;
  var greenGem = Math.floor(Math.random() * 12) + 1;
  var multiGem = Math.floor(Math.random() * 12) + 1;
  var silverGem = Math.floor(Math.random() * 12) + 1;
  var purpleGem = Math.floor(Math.random() * 12) + 1;

  // var allGems = ["greenGem", "multiGem", "silverGem", "purpleGem"];

  // for (var i= 0; i < allGems.length; i++) {
  //   var gemOptions = Math.floor(Math.random() * 12) + 1;
  //   console.log(gemOptions);
  // }

 //Create reset function
 var reset = function () {
  randomNumber = Math.floor(Math.random() * 120) + 19;
    $("#random-number").text(randomNumber);
      console.log("New random number is " + randomNumber);
  greenGem = Math.floor(Math.random() * 12) + 1;
      console.log("New green is " + greenGem);
  multiGem = Math.floor(Math.random() * 12) + 1;
  silverGem = Math.floor(Math.random() * 12) + 1;
  purpleGem = Math.floor(Math.random() * 12) + 1;
  totalScore = 0;
  $("#total-score").text(totalScore);

 };  
     
  //Show randon number, wins, and losses to HTML
  $("#random-number").text(randomNumber);
  $("#wins").text(wins);
  $("#losses").text(losses);
  
  // Next we create a for loop to create gem classes and attributes for each number option.
  for (var i= 0; i < 5; i++) {
    var gemOptions = Math.floor(Math.random() * 12) + 1;
      console.log(gemOptions);
    // First each gem img will be given the class "gem-image".
    $("img").addClass("gem-image");
    // Each img will be given a data attribute called data-gemValue.
    // This data attribute will be set equal to a random number between 1-12.
    $("#greengem").attr("data-gemValue", greenGem);

    $("#multigem").attr("data-gemValue", multiGem);

    $("#silvergem").attr("data-gemValue", silverGem);

    $("#purplegem").attr("data-gemValue", purpleGem);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $(".gem-image").append();
  }

//Create on-click event for gem-image class
  $(".gem-image").on("click", function () {
    var gemValue = ($(this).attr("data-gemValue"));
      gemValue = parseInt(gemValue);
      totalScore += gemValue;
      $("#total-score").text(totalScore);
    

    if (totalScore === randomNumber) {
      wins++;
        $("#wins").text(wins);
          reset();
    }
    else if (totalScore >= randomNumber) {
      losses++;
      $("#losses").text(losses);
        reset();
    }
  });    

});  







