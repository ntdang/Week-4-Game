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
    // allGems = Math.floor(Math.random() * 12) + 1;
    //   console.log("The new values are " + allGems);
    }

  // Next we create a for loop to create gem classes and attributes for each number option.
  for (i = 0; i < allGems.length; i++) {
    console.log(allGems[i]);
    var gemOptions_js = document.getElementsByTagName("img")[i];
    var gemOptions = $(gemOptions_js);

    // First each gem img will be given the class "gem-image".
    gemOptions.addClass("gem-image");
    // Each img will be given a data attribute called data-gemValue.
    // This data attribute will be set equal to a random number between 1-12.
    gemOptions.attr("data-gemValue", allGems[i]);
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    gemOptions.text(allGems[i]);
  }

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