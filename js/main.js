var startEle = document.getElementById("start");
var calculateEle = document.getElementById("calculated");
var problemsEle= document.getElementsByClassName("problems")[0];


function generaterandomnumber(max){

      return parseInt(Math.random() * max)
      
}

function textTosymbol(text){
    switch(text){
        case 'Add':
            return'+'
            break;
         case 'Sub':
            return'-' 
            break;
         case 'Multiply':
            return'*' 
            break;
         default:
            return'/'
            break;
    }
}

function resetproblems(){
    problemsEle.innerHTML = "";
}

function updateproblem(number1, number2, operation){
//create 'problem' div
let problemEle = document.createElement('div');
problemEle.setAttribute('class', 'problem');

//create h3 for number1
let number1Ele=document.createElement('h3');
number1Ele.setAttribute('class','number1');
//update value of number1
number1Ele.innerText = number1

//create h3 for operation
let operationEle = document.createElement('h3');
operationEle.innerText = textTosymbol(operation);
operationEle.setAttribute('class','operation');
//update sympol of operation


//create h3 for number2 
let number2Ele=document.createElement('h3');
number2Ele.setAttribute('class','number2');

//update value of number2
number2Ele.innerText = number2

//create hr


//create input
let inputEle = document.createElement('input');

//update input class name
inputEle.setAttribute('class','answer');

//update input type text
inputEle.setAttribute('type','text');

//append h3s,hr,input inside problems
problemEle.append(number1Ele);
problemEle.append(operationEle);
problemEle.append(number2Ele);
problemEle.append(inputEle);

//append inside problems  
problemsEle.append(problemEle);

}

var stage1operation = function(){
   
    var operationEle = document.getElementById('operation'),

        rangeEle = document.getElementById('range'),

        operation = operationEle.value,

        range = parseInt(rangeEle.value),

        randomnumber1, randomnumber2;

    // create 16 problems 
    if(operation !== 'divide'){

        resetproblems();
        for(let i=1; i<=16; i++){
           //random no 1
           randomnumber1 = generaterandomnumber(range);
           // random no 2
           randomnumber2 = generaterandomnumber(range);
            
           updateproblem( randomnumber1, randomnumber2, operation);
        }
    }





}
function stage2operation(){
    var problemElements = document.getElementsByClassName('problem'),
    problemEle, operationEle, operationType, number1Ele, number1value, number2Ele, number2value, expectedAnswer, actualAnswerEle, actualAnswer, mark = 0;
    
    for(let i=0; i<problemElements.length; i++){
        problemEle = problemElements[i];
        //find operation
         operationEle = problemEle.getElementsByClassName('operation')[0];
         operationType = operationEle.innerText;
        //get number 1 value
          number1Ele = problemEle.getElementsByClassName('number1')[0];
          number1value =parseInt(number1Ele.innerText);

        //get number2 value
         number2Ele = problemEle.getElementsByClassName('number2')[0];
         number2value = parseInt(number2Ele.innerText);

        //find expected answer
        if(operationType == '+'){
           expectedAnswer = number1value + number2value;
        }else if(operationType == '-'){
            expectedAnswer = number1value - number2value;
        }else if(operationType == '*'){
            expectedAnswer = number1value * number2value;
        }else{
            expectedAnswer = number1value/number2value;
        }
        // get actual answer
            actualAnswerEle = problemEle.getElementsByClassName('answer')[0];
            actualAnswer = parseInt (actualAnswerEle.value);
        //compare both answers
        if(expectedAnswer == actualAnswer){
            mark++;
        }
        //if true and false
    }
    alert("your mark is"+mark);
}

startEle.addEventListener('click',stage1operation);
calculateEle.addEventListener('click',stage2operation);