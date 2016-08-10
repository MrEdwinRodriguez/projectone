// Karaoke Roulette JavaScript



//Let's Spin Button Function
$("#gameButton").on("click", function() {

//RESET YOUTUBE VIDEO LOADER



/// THIS PART RESETS THE FIREBASE COUNTERS ///
	// Set the clickCounter back to initialValue
	thumbsupCounter = 0;
  thumbsupCount=0

	// Save new value to Firebase
	database.ref().set({
		thumbsupCount: thumbsupCounter
	});

	// Log the value of clickCounter
	console.log(thumbsupCounter);

	// Change the HTML Values
	$('#thumbsupValue').html(thumbsupCounter);


});
