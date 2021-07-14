$(document).ready(() => {
  $("#input-button").on("click", function () {
    let value = $("input").val();
    let apiUrl = `https://api.giphy.com/v1/gifs/search?q=${value}&limit=1&api_key=lWlGd4qH73vTrdAFuB76srVlJ5rrTluF`;
    $.ajax(apiUrl).done((res) => {
      console.log(res);
      const gifUrl = res.data[0].images.fixed_width.url;

      let html =
        '<div class="item">' + '<div class="cancel">X</div>' + value + "</div>";
      let gifHtml = `<img src=${gifUrl} />`;

      $("#todo-container").append(html);
      $("#todo-container").append(gifHtml);
    });
  });

  $("#random-btn").on("click", () => {
    let apiUrl = "https://random-word-api.herokuapp.com/word?number=1";
    $.ajax(apiUrl).done((res) => {
      word = res[0];
      let api = `https://api.giphy.com/v1/gifs/search?q=${word}&limit=1&api_key=lWlGd4qH73vTrdAFuB76srVlJ5rrTluF`;
      $.ajax(api).done((res) => {
        console.log(res.data[0].images.fixed_height.url);
        let html =
          `<div class="item"> <div class="cancel">X</div> ${word}` +
          `<img src=${res.data[0].images.fixed_height.url}/>  </div>`;
        $("#todo-container").append(html);
      });
    });
  });

  $("#todo-container").on("click", ".cancel", function () {
    $(this).parent().remove();
  });
});
