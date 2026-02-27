

function forEachElement(arr, callbackFun){
    arr.forEach(element => {
        callbackFun(element);
    });
}

function display(n){
    console.log(n);
}
arr=[11,22,33,44,55]

forEachElement(arr,display);