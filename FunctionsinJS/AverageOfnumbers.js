function average(arr){
    sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum/arr.length;
}

arr=[2,5,2]
console.log(average(arr));
