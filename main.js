$(document).ready(function () {

    $("#add-btn").on("click", function () {
        let value = $("input").val();
        let api = `https://api.giphy.com/v1/gifs/search?q=${value}&limit=1&api_key=lWlGd4qH73vTrdAFuB76srVlJ5rrTluF`
        $.ajax(api).done((res) => {
            console.log(res.data[0].images.fixed_height.url);
            let html = `<div class="item"> <div class="cancel">X</div> ${value}` +
                `<img src=${res.data[0].images.fixed_height.url}/>  </div>`;
            $("#todo-container").append(html)
        })
    })
    $("#random-btn").on("click", () => {
        let word = '';
        let wordAPI = "https://random-word-api.herokuapp.com/word?number=1";
        $.ajax(wordAPI).done((res) => {
            console.log(res[0]);
            word = res[0];

            let api = `https://api.giphy.com/v1/gifs/search?q=${word}&limit=1&api_key=lWlGd4qH73vTrdAFuB76srVlJ5rrTluF`
            $.ajax(api).done((res) => {
                console.log(res.data[0].images.fixed_height.url);
                let html = `<div class="item"> <div class="cancel">X</div> ${word}` +
                    `<img src=${res.data[0].images.fixed_height.url}/>  </div>`;
                $("#todo-container").append(html)
            })
        })
    });

    $("#todo-container").on("click", ".cancel", function () {
        $(this).parent().remove();
    })

})
