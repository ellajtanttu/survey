$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const foodInput = $("select#food").val();
    const flavor = $("input:radio[name=genre]:checked").val();
    const birthdayInput = $("input#birthday").val();
    const colorInput = $("input#color").val();

    $(".name").text(nameInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".birthday").text(birthdayInput);
    $(".color").text(colorInput);

    $("results").show();
  });
});