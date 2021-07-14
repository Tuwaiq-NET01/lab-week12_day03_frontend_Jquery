$(document).ready(function () {
  $('button').on('click', function () {
    let randomNumber = Math.floor(Math.random() * 10 + 1)
    let url = `https://random-word-api.herokuapp.com/word?number=${randomNumber}`
    $.ajax(url).done((res) => {
      res.map((word) => {
        let url = `https://api.giphy.com/v1/gifs/search?q=${word}&limit=1&api_key=IeNzQd68KdNq0kNvMh1mJ73eYTiCT4J2`

        $.ajax(url).done((res) => {
          if (res.data[0]) {
            let path = res.data[0].images.fixed_width.url
            let html =
              '<div class="item">' +
              '<div class="cancel">X</div>' +
              word +
              `<br />` +
              `<img src="${path}">` +
              '</div>'
            $('#todo-container').append(html)
          }
        })
      })
    })
  })

  $('#todo-container').on('click', '.cancel', function () {
    $(this).parent().remove()
  })
})
