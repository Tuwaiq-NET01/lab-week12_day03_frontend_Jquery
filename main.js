$(document).ready(function () {
  $("button").on("click", function () {
    let word_api = "https://random-word-api.herokuapp.com/word";
    $.ajax(word_api).done((res) => {
      let word = res[0];
      let api = `https://api.giphy.com/v1/gifs/search?q=${word}&limit=1&api_key=IeNzQd68KdNq0kNvMh1mJ73eYTiCT4J2`;

      $.ajax(api).done((res) => {
        if (res.data.length <= 0) {
          $("button").click();
        } else {
          let path = res.data[0].images.fixed_width.url;
          let html =
            '<div class="item">' +
            '<div class="cancel">X</div><h3>' +
            word +
            `</h3><img src="${path}">` +
            "</div>";
          $("#todo-container").append(html);
        }
      });
    });
  });

  $("#todo-container").on("click", ".cancel", function () {
    $(this).parent().remove();
  });
});
