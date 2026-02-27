function processNumber(n, callback1){
    n=n*2;
    callback1(n);
    
}

function print(a){
    console.log(a);
}

processNumber(10,print);