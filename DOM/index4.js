let table=document.createElement("table");
let tr=document.createElement("tr")
for(let i=1;i<3;i++){
    let th=document.createElement("th");
    th.innerText="Heading "+i;
    tr.appendChild(th)
}
let tr2=document.createElement("tr")
for(let i=1;i<3;i++){
    let td=document.createElement("td");
    td.innerText="Data "+i;
    tr2.appendChild(td)
}
table.appendChild(tr);
table.appendChild(tr2)
document.body.appendChild(table)