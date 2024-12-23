var myObject= {
"grade1":[
{"question":'14+20',"answer":'34'},
{"question":'1-18',"answer":'-17'},
{"question":'15*18',"answer":'270'},
{"question":'14+16',"answer":'30'},
{"question":'12-20',"answer":'-8'},
{"question":'19*11',"answer":'209'},
{"question":'15+14',"answer":'29'},
{"question":'1-3',"answer":'-2'},
{"question":'18*20',"answer":'360'},
{"question":'5+11',"answer":'16'},
{"question":'19-16',"answer":'3'}
],
"grade2":[
{"question":'3+14',"answer":'17'},
{"question":'20-8',"answer":'12'},
{"question":'19*14',"answer":'266'},
{"question":'18+20',"answer":'38'},
{"question":'18-16',"answer":'2'},
{"question":'10*3',"answer":'30'},
{"question":'11+4',"answer":'15'},
{"question":'3-16',"answer":'-13'},
{"question":'1*17',"answer":'17'},
{"question":'15+9',"answer":'24'},
{"question":'2-10',"answer":'-8'}
]
};

var records;
var q = 0;
var ac = 0;
var jsquestion;
var sa = 0;
var qa = 0;

function gradeselect(){
	// initilaze records with respective grade questions
	var v = document.getElementById("grade").value;
	switch(v) {
		case "1": //grade1
			records = myObject.grade1;
			break;
		case "2": //grade 2
			records = myObject.grade2;
			break;
		default:
			alert("No grade found");
	}

	//alert(records[0].question);
	startZym(2);
}

function startZym(noq){
   
	startTimer();
    ac = 0;
	var r = Math.floor(Math.random() * records.length);

	jsquestion = records[r];

	document.getElementById("questions").textContent = jsquestion.question;
    
    qa = jsquestion.answer;
    document.getElementById("start").disabled=true;
    document.getElementById("next").disabled = false;
    document.getElementById("ans").disabled = false;
    document.getElementById("ans").focus();
	document.getElementById("questions").style.color = "blue";
	document.getElementById("grade").disabled = "true";
    q = 1;
	
}


function next(noq){

    //alert(noq+" "+ q + " "+document.getElementById("ans").value+" amma "+qa);
        if(q <= noq) {
    
            if(document.getElementById("ans").value == qa) {
                ac++;
            } else {
                document.getElementById("ans").value = "";
                document.getElementById("ans").focus();
                document.getElementById("questions").textContent = jsquestion.question+"   Re-Check the answer";
                //w3.addStyle('#questions','background-color','red');
                document.getElementById("questions").style.color = "red";
                return;
            }
    
            if (noq == ac) {
            //alert("Congrats....."+noq+ " " +ac)
                document.getElementById("next").disabled = true;
                document.getElementById("start").disabled = true;
                document.getElementById("ans").value = "";
                document.getElementById("ans").disabled = true;
                     
                document.getElementById("grade").value = "";
                document.getElementById("grade").focus();
                document.getElementById("grade").disabled = "false";
    
                document.getElementById("questions").textContent = "Congrats";
                
                stopTimer();
    
            } else if(noq == q){
                    //alert("Try again....."+noq+ " " +ac);
                document.getElementById("next").disabled = true;
                document.getElementById("start").disabled = false;
                document.getElementById("ans").value = "";
                document.getElementById("ans").disabled = true;
                document.getElementById("questions").textContent = "Try Again";
              
            } else {
                var r = Math.floor(Math.random() * records.length);
    
                jsquestion = records[r];
    
                //alert(r+question.CustomerName);
    
                document.getElementById("questions").textContent = jsquestion.question;
    
                qa = jsquestion.answer;
            
                document.getElementById("ans").value = "";
                document.getElementById("ans").focus();
                document.getElementById("questions").style.color = "blue";
                q++;
            }
        } 
    }


let timeLeft = 60; // 60 seconds = 1 minute
let timerInterval;

function startTimer() {
  const timerDisplay = document.getElementById("timer"); 

  timerInterval = setInterval(() => {
    timeLeft--;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Time's up!";
		document.getElementById("ans").disabled = true;
		document.getElementById("questions").textContent = ac + " Questions answered in given time" 
    }
  }, 1000); // Update every 1 second
}

function stopTimer() {
  clearInterval(timerInterval);
  timeLeft = 60;
  const timerDisplay = document.getElementById("timer"); 
  //timerDisplay.textContent = "";
  //alert('stop timer');
}

const about = "Math Vihar online and offline turorial...";
const why = "Math vihar provides platform for students to meet their goals by fun way of learning math...";