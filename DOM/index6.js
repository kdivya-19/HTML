let tb=document.createElement("table")
let trr=document.createElement("tr")

let menu=["home","about","projects","contact"]
tb.style.border="2px solid"
// tb.style.borderCollapse="collapse"
// tb.style.cellspacing="50"
tb.style.cellpadding="50"
tb.appendChild(trr)

menu.forEach(ele=>{
    let tdd=document.createElement("td")
    tdd.innerText=ele 
    tdd.style.border="2px solid"
    trr.appendChild(tdd)
})

document.body.appendChild(tb)