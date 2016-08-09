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

var thumbsupCounter = 0;


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


// MAIN PROCESS & INITIAL CODE

//retrieve the data from the database and store count of
// store the data inside a variable called snapshot

database.ref().on("value", function(snapshot) {

  // console.log the thumbs up ount
  console.log(snapshot.val());

  //then we change the html associated with the number
  $("#thumbsupValue").html(snapshot.val().thumbsupCounter);

  // update the thumbsupcounter varaiable with data from the database
  thumbsupCounter = snapshot.val().clickCount;

  // if you get an error, store it
}, function (errorObject) {

    console.log("the read failed: " + errorObject.code);
});
