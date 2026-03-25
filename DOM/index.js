let ol1=document.createElement("ol")

for(let i=1;i<=5;i++){
    let lis=document.createElement("li")
    lis.textContent=`Item ${i}`
    ol1.appendChild(lis)
}
document.body.appendChild(ol1)

