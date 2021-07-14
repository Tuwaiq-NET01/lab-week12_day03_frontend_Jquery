$(document).ready(function () {

    $("button").on("click",  function () {
        let value = $("input").val();
        let randomWord = `https://random-word-api.herokuapp.com/word?number=1`
        $.ajax( randomWord).done((res) => {
            const word = res[0]

            let api = `https://api.giphy.com/v1/gifs/search?q=${word}&limit=1&api_key=8WuA0cvYuycdixljgzQ5VcBzvngl1Sgy`
            $.ajax(api).done((res) => {
                const imgUrl = res.data[0].images.fixed_width_small.url
                let html = `<img class="item" src=${imgUrl}>` +
                    '<div class="cancel">X</div>' +
                    value +
                    '</img>';
    
                $("#todo-container").append(html)
            })
        })
    })

    $("#todo-container").on("click", ".cancel", function () {
        $(this).parent().remove();
    })


})