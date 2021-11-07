$(document).ready(function() {
  $("#userAnswers").submit(function(event) {
    event.preventDefault();
    let userAnswer1 = parseInt($("input:radio[name=animal]:checked").val());
    let userAnswer2 = parseInt($("input:radio[name=software]:checked").val());
    let userAnswer3 = parseInt($("input:radio[name=plants]:checked").val());
    let userAnswer4 = parseInt($("input:radio[name=creative]:checked").val());
    let userAnswer5 = parseInt($("input:radio[name=learner]:checked").val());
    let userAnswerOption = questions (userAnswer1, userAnswer2, userAnswer3, userAnswer4, userAnswer5); 

    

    if (userAnswerOption = 3) {
      $(".ruby, .c-sharp").hide()
      $(".javascript").show();
    }

  });
});
