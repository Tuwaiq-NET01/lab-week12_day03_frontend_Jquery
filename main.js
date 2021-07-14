$(document).ready(function () {


    let word = ''
    $("button").on("click", function () {
        $.ajax({
            type: "get",
            url: "https://random-word-api.herokuapp.com/word?number=1",
            success: function (response) {
                word = response[0];
                $('#res').html(word);

                


            }
        });

        $.ajax({
            type: "get",
            url: `https://api.giphy.com/v1/gifs/search?q=${word}&limit=1&api_key=lWlGd4qH73vTrdAFuB76srVlJ5rrTluF`,
            success: function (response) {
                $('img').attr('src', response.data[0].images.original.url)
            }
        });
        
    })

    








})