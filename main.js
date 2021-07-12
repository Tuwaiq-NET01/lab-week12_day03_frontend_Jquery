$(document).ready(function () {

    $("button").on("click", function () {
        let value = $("input").val();
        let apiUrl = `https://api.giphy.com/v1/gifs/search?q=hello&limit=1&api_key=8WuA0cvYuycdixljgzQ5VcBzvngl1Sgy`
        $.ajax(apiUrl).done((res)=> {
            const urlImage =res.data[0].images.fixed_width_small.url
            let html = `<img  src ="${urlImage}"class="item">
             </img> <br/>`;

        $("#todo-container").append(html)
        })


    })

    $("#todo-container").on("click", ".cancel", function () {
        $(this).parent().remove();
    })


})