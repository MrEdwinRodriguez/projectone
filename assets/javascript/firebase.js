// FIREBASE BABY! FEEL THE BURNNN

// INITIALIZE FIREBASE
  var config = {
    apiKey: "AIzaSyCWqSA4dZIPGMcPYOfMrrnO3j29-D9CeDw",
    authDomain: "karaoke-roulette.firebaseapp.com",
    databaseURL: "https://karaoke-roulette.firebaseio.com",
    storageBucket: "karaoke-roulette.appspot.com",
  };
  firebase.initializeApp(config);

//VARIABLES

// reference to the database server
var database = firebase.database();

// setting initial value of the emojis

var initialValue = 0;
var thumbsupCounter = 0;
var thumbsdownCounter = 0;
var chickenCounter = 0;
var flatCounter = 0;


// FUNCTIONS & EVENTS

//on click button for thumbs up emoji
$("#thumbsupButton").on("click", function() {

      // add to thumbs up button
      thumbsupCounter++;
      // Store click data to Firebase in a JSON property called thumbsupCount
      database.ref().set({
          thumbsupCount: thumbsupCounter
      });
})

// on click for thumbs down
$("#thumbsdownButton").on("click", function() {

      // add to thumbs up button
      thumbsdownCounter++;
      // Store click data to Firebase in a JSON property called thumbsupCount
      database.ref().set({
          thumbsdownCount: thumbsdownCounter
      });
})

// on click for poultry leg
$("#chickenButton").on("click", function() {

      // add to thumbs up button
      chickenCounter++;
      // Store click data to Firebase in a JSON property called thumbsupCount
      database.ref().set({
          chickenCount: chickenCounter
      });
})

// on click for
$("#flatButton").on("click", function() {

      // add to thumbs up button
      flatCounter++;
      // Store click data to Firebase in a JSON property called thumbsupCount
      database.ref().set({
          flatCount: flatCounter
      });
})


// MAIN PROCESS & INITIAL CODE

// retrieve the data from the database and store count of
// store the data inside a variable called snapshot

database.ref().on("value", function(snapshot) {

  // console.log the thumbs up ount
  console.log(snapshot.val());

  //then we change the html associated with the number
  $("#thumbsupValue").html(snapshot.val().thumbsupCount);
  $("#thumbsdownValue").html(snapshot.val().thumbsdownCount);
  $("#chickenValue").html(snapshot.val().chickenCount);
  $("#flatValue").html(snapshot.val().flatCount);

  // update the thumbsupcounter varaiable with data from the database
  //thumbsupCounter = snapshot.val().thumbsupCount;

  // if you get an error, store it
}, function (errorObject) {

    console.log("the read failed: " + errorObject.code);
});
