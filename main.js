$(document).ready(function () {

    $("button").on("click", async function () {

        // let value = $("input").val();
        let apiRendomWord = "https://random-word-api.herokuapp.com/word?number=1"
        let value;
        await $.ajax(apiRendomWord).then(function(res){
                value = res;
        })
        let api = `https://api.giphy.com/v1/gifs/search?q=${value}&limit=1&api_key=8WuA0cvYuycdixljgzQ5VcBzvngl1Sgy`
        $.ajax(api).done(function(res){
            try{
                let imageUrl = res.data[0].images.fixed_height_small.url

            let html = '<div class="item">' +
            `<img src="${imageUrl}" />`+
            '<div class="cancel">X</div>' +
            '</div>';
            $("#todo-container").append(html)
            }
            catch{
                // console.log("error",res)
                errorMessage = '<div class="class="item"">the rendom name does not exist as an image</div>' +
                '</div>';
                $("#todo-container").append(errorMessage)
                let valufe = $("#todo-container").children().last().css("color","red").hide(3000)
                console.log(valufe)
            }
        })
        

        


    })

    $("#todo-container").on("click", ".cancel", function () {
        $(this).parent().remove();
    })


})