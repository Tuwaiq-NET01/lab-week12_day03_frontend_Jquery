$(document).ready(function () {
    
    $("button").on("click", function () {
        let word ='https://random-word-api.herokuapp.com/word?number=1';
        $.ajax(word).done((res)=>{const myword=res[0];

        // let value = $("input").val();
        let api = `https://api.giphy.com/v1/gifs/search?q=${myword}&limit=1&api_key=lWlGd4qH73vTrdAFuB76srVlJ5rrTluF`
        $.ajax(api).done((res) => {
            const url = res.data[0].images.fixed_height_small.url;
            let html = `<img src="${url}" class="item">` +
                `<div class="cancel">X</div>` +
                `</img>` +"<br/>";
            $("#todo-container").append(html)
        })})


    })

    $("#todo-container").on("click", ".cancel", function () {
        $(this).parent().remove();
    })


})