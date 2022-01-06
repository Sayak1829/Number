player_1_name = localStorage.getItem("player1_name");
player_2_name = localStorage.getItem("player2_name");
player_1_score = 0;
player_2_score = 0;
document.getElementById("player_1_name").innerHTML = player_1_name + ":";
document.getElementById("player_2_name").innerHTML = player_2_name + ":";
document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;
document.getElementById("player_Q").innerHTML = "Question Turn:" + player_1_name;
document.getElementById("player_Ans").innerHTML = "Answer Turn:" + player_2_name;

function number() {
  num_1= document.getElementById("num_1").value;
  num_2= document.getElementById("num_2").value;
 real_answer= num_1 * num_2;
  question_word = "<h4 id='word_display'> Q."+num_1+"*"+num_2+"</h4>";
  input_box = "<br>Answer : <input type='text' id='input_check_box'>";
  check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  row = question_word + input_box + check_button;
  document.getElementById("ans").innerHTML = row;
  document.getElementById("num_1").value = "";
  document.getElementById("num_2").value = "";
}
question_turn = "player1"; answer_turn = "player2";

function check() {
  answer = document.getElementById("input_check_box").value;
  if (answer == real_answer) {
    if (answer_turn == "player1") {
      player_1_score = player_1_score + 1;
      document.getElementById("player_1_score").innerHTML = player_1_score;
    }
    else {
      player_2_score = player_2_score + 1;
      document.getElementById("player_1_score").innerHTML = player_2_score;
    }
  }
  if (question_turn == "player1"){
    question_turn = "player2";
    document.getElementById("player_Q").innerHTML="Question turn:" + player_2_name;
  }
  else if(question_turn == "player2"){
    question_turn = "player1";
    document.getElementById("player_Q").innerHTML="Question turn:" + player_1_name;
  }
  if (answer_turn == "player1"){
   answer_turn = "player2";
    document.getElementById("player_Ans").innerHTML="Answer turn:" + player_2_name;
  }
  else{
    answer_turn = "player1";
    document.getElementById("player_Ans").innerHTML="Answer turn:" + player_1_name;
  }
  document.getElementById("ans").innerHTML=""; 
}


