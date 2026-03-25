let tbb=document.createElement("table");

tbb.style.border="2px solid"
tbb.style.cellspacing="5"
tbb.style.cellpadding="5"


let trr1=document.createElement("tr")
tbb.appendChild(trr1)

let tth=document.createElement("th");
tth.innerHTML="Name"
tth.style.columnSpan=2;
trr1.appendChild(tth)

let th2=document.createElement("th");
th2.innerHTML="255-5"
th2.style.columnSpan=3;
trr1.appendChild(th2)


let arr=[["Shyamsan", "","","89","45"],["Kishan", "","","54","25"],["Abhishek", "","","52","21"],["Dhhobhe", "","","26","8"]]

for(let i=0;i<4;i++){
    let trow=document.createElement("tr");
    tbb.appendChild(trow);
    let ind=0;
    for(let j=0;j<5;j++){
        let ttd=document.createElement("td")
        ttd.innerHTML=arr[i][ind]
        ind++;
        trow.appendChild(ttd);
       
    }

}

document.body.appendChild(tbb)