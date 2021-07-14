$(document).ready(function () {

    $("button").on("click", function () {
        $.ajax("https://random-word-api.herokuapp.com/word?number=1").done(res => {
            let randomWord = res[0];

            let api = `https://api.giphy.com/v1/gifs/search?q=${randomWord}&limit=1&api_key=lWlGd4qH73vTrdAFuB76srVlJ5rrTluF`;
            $.ajax(api).done(res => {
            const url = res.data[0].images.fixed_height_small.url
                let html = '<div class="item">' +
                '<div class="cancel">X</div>' +
                `<img src=${url}>`
                '</div>';
    
            $("#todo-container").append(html)
        })

        })

    })

    $("#todo-container").on("click", ".cancel", function () {
        $(this).parent().remove();
    })


})