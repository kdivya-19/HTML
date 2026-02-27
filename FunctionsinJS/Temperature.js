function convertTemperature(temp, convertion){
    if(convertion=="C"){
       console.log("Converting to celcius:"+(temp-32)*5/9)
    }else{
        console.log("Converting to fahrenheit:"+(temp*9/5)+32)
    }
}
convertTemperature(100,"C")
convertTemperature(100,"F") 