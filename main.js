$(document).ready(function () {
  $("button").on("click", function () {
    let value = $("input").val();
    let html =
      '<div class="item">' + '<div class="cancel">X</div>' + value + "</div>";

    $("#todo-container").append(html);
  });

  $("#todo-container").on("click", ".cancel", function () {
    $(this).parent().remove();
  });
});

$(document).ready(function () {
  $("button").on("click", async function () {
    let value = $("input").val();
    let apiWordUrl = `https://random-word-api.herokuapp.com/word?number=1`;
    await $.ajax(apiWordUrl).done((res) => {
      console.log(res);
      value = res[0];
    });
    console.log(value);
    let apiGifUrl = `https://api.giphy.com/v1/gifs/search?q=${value}&limit=1&api_key=8WuA0cvYuycdixljgzQ5VcBzvngl1Sgy`;
    $.ajax(apiGifUrl).done((res) => {
      console.log(res);
      const urlImage = res.data[0].images.fixed_height_small.url;
      console.log(res.data[0].images.fixed_height_small.url);
      let html =
        `<img src="${urlImage} class="item">` +
        '<div class="cancel">X</div>' +
        "</img>";
      $("#todo-container").append(html);
    });
    // let html = `<div class="item">` +
    //     '<div class="cancel">X</div>' +
    //     value +
    //     '</div>';
    // $("#todo-container").append(html)
  });
  $("#todo-container").on("click", ".cancel", function () {
    $(this).parent().remove();
  });
});
