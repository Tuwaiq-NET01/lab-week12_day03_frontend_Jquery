$(document).ready(function () {

    $("button").on("click", async function () {
        let value = $("input").val();
        // const fetch = require("node-fetch");
        
        async function loadData(){
            let res = await fetch("https://random-word-api.herokuapp.com/word?number=1");
            let data = await res.json();
            return data;
        }
        

        const rand = await loadData();
        
        let apiUrl=`https://api.giphy.com/v1/gifs/search?q=${rand}&limit=1&api_key=8WuA0cvYuycdixljgzQ5VcBzvngl1Sgy`;
        fetch
        $.ajax(apiUrl).done((res)=>{
            try{
            console.log(apiUrl);
            const urlImage = res.data[0].images.fixed_width_small.url;

            let html = `<img src="${urlImage}" class="item">` +
            '<div class="cancel">X</div>' +
            value +
            '</img>'+ '<br/>';

            $("#todo-container").append(html);}
            catch{
                console.log("Not Found");
            }
        });
    })

    $("#todo-container").on("click", ".cancel", function () {
        $(this).parent().remove();
    })


})