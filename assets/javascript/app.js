var correct = 0;
var incorrect = 0;
var unanswered = 0;

 // starts the game at 90 seconds
var number = 90;


$(document).ready(function(){

    $("#lastContainer").hide();


  $("#startButton").on("click", function(){

    $("#gameContainer").show();
    // starts the games 
    countdown();  
    return;
    });


    function timer(){
    // decrements the timer by 1
      number-- 
      //puts the timer on the html
      $("#show-number").html("<h2>" + number + "</h2>" );
      // if statement that calls the stop function, once it reaches 0.
    $("#submit").on("click",function(){

        clearInterval(timer);
        return;
    });  

      // Finish the game after the timer reaches 0
      if(count == -1){

        // Collect the radio inputs
        timeUp();

        // Hide the game Div from the user
        $("#gameContainer").hide();

      }
  }

      function countdown(){
        //timer 
        counter = setInterval(timer, 1000);
            }


    // submits answers and completes the gam



     function restart(){
    	number = 90;
        // calls the start function
    	start();
    }



 function timeUp(){

    var Q1 = $('input:radio[name="q1"]:checked').val();
    var Q2 = $('input:radio[name="q2"]:checked').val();
    var Q3 = $('input:radio[name="q3"]:checked').val();
    var Q4 = $('input:radio[name="q4"]:checked').val();
    var Q5 = $('input:radio[name="q5"]:checked').val();

    if(Q1 == "Bruno"){
      correct++;
    }
    else if(Q1 == undefined){
      unanswered++;
    }
    else{
      wrongCount++;
    }


    if(Q2 == "Sid"){
      correct++;
    }
    else if(Q2 == undefined){
      unanswered++;
    }
    else{
      wrongCount++;
    }


    if(Q3 == "the lost boys"){
      correct++;
    }
    else if(Q3 == undefined){
      unanswered++;
    }
    else{
      wrongCount++;
    }



    if(Q4 == "mushu"){
      correct++;
    }
    else if(Q4 == undefined){
      unanswered++;
    }
    else{
      wrongCount++;
    }


    if(Q5 == "Green"){
      correct++;
    }
    else if(Q5 == undefined){
      unanswered++;
    }
    else{
      wrongCount++;
    }

    $('#correct_answers').html(correct);
    $('#wrong_answers').html(incorrect);
    $('#unanswered').html(unanswered);


  $("#lastContainer").show();
}
  
});




 