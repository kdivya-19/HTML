function checkVowels(str){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    exists=true
    vowels.forEach(element => {
        if(str.includes(element)){
            exists=false
        }
    });  
    if(exists){
        console.log("The string does not contain any vowel")
    } else{
        console.log("The string contains vowel: ")
    }
} 
checkVowels("Hello")
checkVowels("Hll")