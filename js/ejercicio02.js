window.onload=()=>{

let but2=document.getElementById("reverse");
let but=document.getElementById("invert");


document.getElementById("reverse").style.visibility="hidden";


but.addEventListener("click", ()=>{

    document.getElementById("div").style.backgroundColor="black";
    document.querySelectorAll('p').forEach(e => e.style.color = "white");
    document.getElementById("reverse").style.visibility="";
    document.getElementById("invert").style.visibility="hidden";
})

but2.addEventListener("click",()=>{
    document.getElementById("div").style.backgroundColor="";
    document.querySelectorAll('p').forEach(e => e.style.color = "black");
    document.getElementById("invert").style.visibility="";
    document.getElementById("reverse").style.visibility="hidden";
})

}