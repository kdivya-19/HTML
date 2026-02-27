function checkNum(num, evenFun, oddFun){
    if(num%2==0){
        evenFun();
    }else{
        oddFun();
    }
}

function evenFunction(){
    console.log("Even number");
}

function oddFunction(){
    console.log("Odd number");
}

checkNum(89, evenFunction, oddFunction);

function perfromTasks(num, funct1, funct2){
    funct1(num);
    console.log("Final result= "+ funct2(funct1(num)));
}

function task1(num){
    return num+5;
}

function task2(num){
   return num*2;
    
}

perfromTasks(9, task1, task2)