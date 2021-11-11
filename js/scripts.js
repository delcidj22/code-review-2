$(document).ready(function () {
  $("#userAnswers").submit(function(event) {
    event.preventDefault();
    let animal = parseInt($("input:radio[name=animal]:checked").val());
    let software = parseInt($("input:radio[name=software]:checked").val());
    let plants = parseInt($("input:radio[name=plants]:checked").val());
    let creative = parseInt($("input:radio[name=creative]:checked").val());
    let learner = parseInt($("input:radio[name=learner]:checked").val());
    let userChoice = animal + software + plants + creative + learner;

    if (userChoice <= 7 && userChoice >= 5) {
      $("#ruby, #c-sharp").hide();
      $("#javascript").show();
    }
      else if (userChoice <= 12 && userChoice >= 8) {
        $("#ruby, #javascript").hide();
        $("#c-sharp").show();
    }
      else if (userChoice <=20 && userChoice >= 13) {
        $("#javascript, #c-sharp").hide();
        $("#ruby").show();
      }
  });
});
