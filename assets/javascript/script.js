 $(document).ready(function() {

      //api for karaoke image  
        //create a variable that regerence the API where queryURL gets its variable
        var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=karaoke";

        //using jquery to call queryURL to run a function with this object
        $.ajax({url: queryURL, method: 'GET'})

            //when you get the data, do the following.  This is a call back function.
            .done(function(response) {
                //check whats returing in the object
                console.log(response);
                //check a specific key in the object returend
                console.log(response.data.fixed_height_downsampled_url);


                var img = response.data.fixed_height_downsampled_url;

                var imgDiv = $('#images');

                //creating an image tag using jquery
                var jQueryImgTag = $('<img>');
                jQueryImgTag.attr('src', img);
                console.log(jQueryImgTag);
//change .html to .append 
                imgDiv.append(jQueryImgTag);


            });
    });