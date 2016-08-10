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

>>>>>>> 9b9881967fc8a51fa2378d56649b0fadb070371d

});
