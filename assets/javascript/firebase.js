// FIREBASE BABY! FEEL THE BURNNN

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


}
