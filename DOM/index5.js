let div3=document.createElement("div");
for(let i=1;i<=5;i++){
    let btn=document.createElement("button");
    btn.innerText="Button "+i;
    div3.appendChild(btn)
}
document.body.appendChild(div3) 