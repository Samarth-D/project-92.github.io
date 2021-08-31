player1=localStorage.getItem("player1_name");
player2=localStorage.getItem("player2_name");

score1=0;
score2=0;

document.getElementById("player1_name").innerHTML = player1 + " : ";
document.getElementById("player2_name").innerHTML = player2 + " : ";

document.getElementById("player1_score").innerHTML = score1;
document.getElementById("player2_score").innerHTML = score2;

document.getElementById("player_question").innerHTML="question turn- " + player1;
document.getElementById("player_answer").innerHTML="answer turn- " + player2;
 function send(){
     getNumberOne=document.getElementById("number_1").value;
     getNumberTwo=document.getElementById("number_2").value;
     actual_answer=parseInt(getNumberOne) * parseInt(getNumberTwo);
    question_numbers="<h4 id='word_display'> question : " + getNumberOne + " x "+ getNumberTwo + "</h4>";
    input_box="<br>answer: <input type='text' id='input_check_box' >";
    check_box="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question_numbers+input_box+check_box;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";
 }