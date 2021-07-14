$(document).ready(function () {

    $("button").on("click", async function () {
        let wordApi = `https://random-word-api.herokuapp.com/word?number=1`
        let value = ""
        await $.ajax(wordApi).done(function(res){
            value = res[0]
            console.log(value)
        })
        console.log("val " +value)
        let api = `https://api.giphy.com/v1/gifs/search?q=${value.toString()}&limit=1&api_key=8WuA0cvYuycdixljgzQ5VcBzvngl1Sgy`
        $.ajax(api).done(function(res){
            console.log(res.data[0].images.fixed_height_small.url)
            try{
                let imageUrl = res.data[0].images.fixed_height_small.url
                let html = '<div class="item">' +
                `<img src="${imageUrl}" />`+
                '<div class="cancel">X</div>' +
                value +
                '</div>';
                $("#todo-container").append(html)
            } catch {
                console.log("No image data")
            }
            
        })
        

        


    })

    $("#todo-container").on("click", ".cancel", function () {
        $(this).parent().remove();
    })


})