var startEle = document.getElementById("start");
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

//update value of number1
number1Ele.innerText = number1

//create h3 for operation
let operationEle = document.createElement('h3');
operationEle.innerText = textTosymbol(operation);

//update sympol of operation


//create h3 for number2 
let number2Ele=document.createElement('h3');

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
problemEle.append(number1)
problemEle.append(operationEle)
problemEle.append(number2Ele)
problemEle.append(inputEle)

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


startEle.addEventListener('click',stage1operation);