// Karaoke Roulette JavaScript



//Let's Spin Button Function
$("#gameButton").on("click", function() {

//RESET YOUTUBE VIDEO LOADER



/// THIS PART RESETS THE FIREBASE COUNTERS ///
	// Set the emoji counters back to zero
	thumbsupCounter = 0;
  thumbsupCount = 0;
  thumbsdownCount = 0;
  thumbsdownCounter = 0;
  chickenCount = 0;
  chickenCounter = 0;
  flatCount = 0;
  flatCounter = 0;

	// Save new value to Firebase
	database.ref().set({
		thumbsupCount: thumbsupCounter
    // thumbsdownCount: thumbsdownCounter
    // chickenCount: chickenCounter
    // flatCount: flatCounter
	});

	// Log the value of clickCounter
	console.log(thumbsupCounter);
  console.log(thumbsdownCounter);
  console.log(chickenCounter);
  console.log(flatCounter);

	// Change the HTML Values
	$('#thumbsupValue').html(thumbsupCounter);
  $('#thumbsdownValue').html(thumbsdownCounter);
  $('#chickenValue').html(chickenCounter);
  $('#flatValue').html(flatCounter);


});
