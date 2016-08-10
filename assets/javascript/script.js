// Karaoke Roulette JavaScript

<<<<<<< HEAD
// $(document).on('click', 'button', function(){
//$('button').on('click', function(){

// var searchWord = 'karaoke';
// // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

// var queryURL = "https://userstream.twitter.com/1.1/user.json";


// $.ajax({
//   url: queryURL,
//   method: 'GET'

// })


// .done(function(response){

//   console.log(response);

//   //var results = response.data;



// });

$(document).ready(function(){

	$('#btn1').on('click', function(){


		console.log('hello');
		// Youtube video call goes here


	});
=======


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

>>>>>>> 9b9881967fc8a51fa2378d56649b0fadb070371d

});
