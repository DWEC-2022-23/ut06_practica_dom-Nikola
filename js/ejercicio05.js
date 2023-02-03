window.onload=()=>{


const morning=document.getElementById("mañana").children;
const eve=document.getElementById("tarde").children;

const div=document.createElement("div")
div.setAttribute("id", "boxbox");
const b=document.getElementById("body").appendChild(div);



morning[0].addEventListener("click", morningSup);
morning[2].addEventListener("click", morningMed);


eve[0].addEventListener("click", eveSup);
eve[2].addEventListener("click", eveMid);



function morningSup(e){
    let lista1=document.getElementById("lista1");

let text=document.createTextNode(`Has elegido${e.target.innerHTML} turno de mañana
el nº de grupos es: ${lista1.childElementCount}- ${lista1.children[0].innerHTML} 
${lista1.children[1].innerHTML}${lista1.children[2].innerHTML}
${lista1.children[3].innerHTML}`);

let bo = document.getElementById('boxbox');
bo.appendChild(text);
bo.appendChild(document.createElement("br"));

}



function morningMed(e){
    let lista2=document.getElementById("lista2");

    const text=document.createTextNode(`Has elegido${e.target.innerHTML} turno de mañana
el nº de grupos es: ${lista2.childElementCount}- ${lista2.children[0].innerHTML} 
${lista2.children[1].innerHTML}${lista2.children[2].innerHTML}`);

let bo = document.getElementById('boxbox');

bo.appendChild(text);
bo.appendChild(document.createElement("br"));

}




function eveSup(e){
    let lista3=document.getElementById("lista3");

    const text=document.createTextNode(`Has elegido${e.target.innerHTML} turno de tarde
el nº de grupos es: ${lista3.childElementCount}- ${lista3.children[0].innerHTML} 
${lista3.children[1].innerHTML}`);

let bo = document.getElementById('boxbox');

bo.appendChild(text);
bo.appendChild(document.createElement("br"));

}


function eveMid(e){
    let lista4=document.getElementById("lista4");

    const text=document.createTextNode(`Has elegido${e.target.innerHTML} turno de mañana
el nº de grupos es: ${lista4.childElementCount}- ${lista4.children[0].innerHTML} 
${lista4.children[1].innerHTML}`);



let bo = document.getElementById('boxbox');

bo.appendChild(text);
bo.appendChild(document.createElement("br"));



}

}