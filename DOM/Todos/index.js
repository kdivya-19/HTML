 let divv=document.getElementsByClassName("container")[0]
async function fetchData(){
    let res=await fetch("https://dummyjson.com/todos");
    let data= await res.json()
    getData(data)

}

fetchData()

function getData(data){
   
    for(let i=0;i<data.todos.length;i++){
        let obj=data.todos[i]
        let p=document.createElement("p")

        p.innerHTML=`<h2> id: ${obj.id} </h2><p>${obj.todo}</p>  `
        divv.appendChild(p)

    }
}