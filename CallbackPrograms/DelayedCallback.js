function sayHello(sname, callback){
    setTimeout(() => {
        callback(sname)
    }, 1000);
}
function displayMsg(name){
    console.log("Hello "+name);
}       
sayHello("Alice", displayMsg);