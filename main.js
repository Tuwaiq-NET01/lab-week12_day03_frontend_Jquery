$(document).ready(function () {

    $("button").on("click", function () {
        let url
        let value = $("input").val();
        $.ajax("https://random-word-api.herokuapp.com/word?number=1").done((res) => {
            let api = `https://api.giphy.com/v1/gifs/search?q=${res[0]}&limit=1&api_key=lWlGd4qH73vTrdAFuB76srVlJ5rrTluF`
            $.ajax(api).done(res => {
                url = (res.data[0].images.fixed_height_downsampled.url)
                let html = `<img src=${url} class="item">` +
                    '<div class="cancel">X</div>' +
                    value +
                    '';
                $("#todo-container").append(html)
            })
        })


    })

    $("#todo-container").on("click", ".cancel", function () {
        $(this).parent().remove();
    })


})