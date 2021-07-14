$(document).ready(  function () {
    $("button").on("click", async function () {
        let w = word();
            let apiUrl= `https://api.giphy.com/v1/gifs/search?q=${value}&limit=1&api_key=8WuA0cvYuycdixljgzQ5VcBzvngl1Sgy`
            
                $.ajax(apiUrl).done((res)=>{
                    const urlImage=  res.data[0].images.fixed_height_small.url
                    console.log(res.data[0].images.fixed_height_small.url)
                    let html = `<img src="${urlImage} class="item">` +
                    '<div class="cancel">X</div>' +
                    '</img>';
                $("#todo-container").append(html)
                  }) 
        
    })
    $("#todo-container").on("click", ".cancel", function () {
        $(this).parent().remove();
    })
})

async function word(){
    let word = await fetch(`https://random-word-api.herokuapp.com/word?number=1`)
    console.log(word.json())
    return word;
}