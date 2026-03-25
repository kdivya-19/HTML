// let div1=document.getElementById("container1");
// console.log(div1);
// let div2=document.getElementsByClassName("container2")[0];
// console.log(div2);

// let arr=[{id:"1"},{id:"2"},{id:"3"},{id:"4"},{id:"5"}]

// arr.forEach((ele)=>{
//     let p=document.createElement("p");
//     p.innerHTML=`id: ${ele.id}`;
//     div2.appendChild(p);
// });

// // "https://jsonplaceholder.typicode.com/users"
// async function getData(){
//     let res=await fetch("http://localhost:3000/products");
//     let data=await res.json();
//     // console.log(data);
//     getDetails(data)
// }


// function getDetails(data){
//     data.forEach(ele=>{
//         let p=document.createElement("p");
//         p.innerHTML=`<h3> id: ${ele.id}</h3><p> name: ${ele.name}</p><p> price: ${ele.price}</p>`;
//         div1.appendChild(p);
//     })
// }

// getData();

// console.log(data);



async function getData(){
    let res=await fetch("https://fakestoreapi.com/products");
    let data=await res.json();
    console.log(data);
    
    data.forEach(ele=>{
        let container=document.getElementsByClassName("container2")[0];
        let p=document.createElement("p");

        p.innerHTML=`<h3> id: ${ele.id}</h3><p> Price   : ${ele.price}</p> <p>Description: ${ele.description}</p> <img src=${ele.image} width="100px">`;
        container.appendChild(p);
    })
}

getData();