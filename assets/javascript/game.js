$('.document').ready(function () {

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
  var allGems = [greenGem, multiGem, silverGem, purpleGem];

  //Show randon number, wins, and losses to HTML
  $("#random-number").text(randomNumber);
  $("#wins").text(wins);
  $("#losses").text(losses);

  //Create reset function
  var reset = function () {
    randomNumber = Math.floor(Math.random() * 120) + 19;
    $("#random-number").text(randomNumber);
    console.log("New random number is " + randomNumber);
    totalScore = 0;
    $("#total-score").text(totalScore);
    var greenGem = Math.floor(Math.random() * 12) + 1;
    var multiGem = Math.floor(Math.random() * 12) + 1;
    var silverGem = Math.floor(Math.random() * 12) + 1;
    var purpleGem = Math.floor(Math.random() * 12) + 1;
    var allGems = [greenGem, multiGem, silverGem, purpleGem];

    // The each() method specifies a function to run for each matched element
    $("img").each(function (i) {
      $(this).attr("data-gemValue", allGems[i]).addClass("gem-image").text(allGems[i]);
      console.log("The new values are " + allGems[i]);
    });
  }

  // Using the .each method to loop over each image to assign value into each gem  
  $("img").each(function (i) {
    //this refers to the image at current iteration
    $(this).attr("data-gemValue", allGems[i]).addClass("gem-image").text(allGems[i]);
  });

  //Create on-click event for gem-image class
  $(".gem-image").on("click", function () {
    var gemValue = ($(this).attr("data-gemValue"));
    $(gemValue).text($(this).attr("data-gemValue"));
    console.log("The current value of this gem is " + gemValue);

    gemValue = parseInt(gemValue);
    totalScore += gemValue;
    $("#total-score").text(totalScore);


    if (totalScore === randomNumber) {
      wins++;
      $("#wins").text(wins);
      reset();

    } else if (totalScore >= randomNumber) {
      losses++;
      $("#losses").text(losses);
      reset();
    }
  });

});

 // for (i = 0; i < allGems.length; i++) {
    //   console.log("The new values are " + allGems[i]);
    //   var gemOptions_js = document.getElementsByTagName("img")[i];
    //   var gemOptions = $(gemOptions_js);
    //   gemOptions.addClass("gem-image");
    //   gemOptions.attr("data-gemValue", allGems[i]);
    //   gemOptions.text(allGems[i]);