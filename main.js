$(document).ready(function() {
    $('button').on('click', function() {
        let value = $('input').val();
        let word = 'https://random-word-api.herokuapp.com/word?number=1';
        $.ajax(word).done((res) => {
            let api = `https://api.giphy.com/v1/gifs/search?q=${res[0]}&limit=1&api_key=lWlGd4qH73vTrdAFuB76srVlJ5rrTluF`;
            $.ajax(api).done((res) => {
                const url = res.data[0].images.fixed_height_still.url;
                let html = `<img src=${url} class="item"><div class="cancel">X</div></img> <br/>`;
                $('#todo-container').append(html);
            });
        });
    });

    $('#todo-container').on('click', '.cancel', function() {
        $(this).parent().remove();
    });
});