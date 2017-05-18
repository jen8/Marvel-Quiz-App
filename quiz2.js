

var question = [


["What is the name of Thor's evil back stabbing brother?", "Loki", "Prince Charming", "Slytherin", "Zac Effron", 1],
["What color does the Incredible Hulk turn when he is hangry?", "Rainbow", "Blue", "Hot Pink", "Green", 4],
["What is Wolverine's super power?", "Belching", "Clawing Furniture", "Evil Glare", "Silent Treatment", 2],
["Which Marvel character likes to wear red spandex and shoot webs?", "Cyclops", "Captain America", "Luke Cage", "Spiderman", 4],
["Which Marvel character is most likely to give you a citation for using foul language?", "Deadpool", "Captain America", "Rocket Racoon", "Iron Man", 2]];


var score = 0;
var quesNum = 0;

function displayQuiz(){

var quest = document.getElementById("question");
quest.innerHTML = question[quesNum][0];

  for(j=1; j<=4; j++){
     var opt = document.getElementById("choice"+j);
     opt.innerHTML = question[quesNum][j];

 }

}

(function () {
    displayQuiz();
})();

  //advance question, whether or not user answered last question correctly
  function validat(item){
       
       if(item === "choice"+question[quesNum][5]){

        score++;
       }

       if(item === "btn"+question[quesNum][5]){

        score++;
       }

        //at end of quiz display score
         if(quesNum === 4){
            var mainBody = document.getElementById("quiz");
            mainBody.innerHTML = "<h1>"+"Your Score is:"+ score+"/5"+"</h1>";

       
        }

        quesNum++;

        
     }

var theParent = document.getElementById("buttons");
theParent.addEventListener("click", listenMe, false);
 
function listenMe(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        validat(clickedItem);
    }
    e.stopPropagation();
    if(quesNum < 5){
    displayQuiz();}
}


