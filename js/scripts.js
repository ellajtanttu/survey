$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const food = $("#food").val();
    // const foodInput = $("select#food").val();
    const music = $("input:radio[name=genre]:checked").val();
    const birthday = $("#birthday").val();
    // const birthdayInput = $("input#birthday").val();
    const color = $("#color").val();
    // const colorInput = $("input#color").val();


    $(".name").text(nameInput);
    $(".food").text(food);
    $(".music").text(music);
    $(".birthday").text(birthday);
    $(".color").text(color);

    // $("#name").text(nameInput);
    // $("#food").text(food);
    // $("#music").text(music);
    // $("#birthday").text(birthday);
    // $("#color").text(color);

    $("div#output").show();
  });
});