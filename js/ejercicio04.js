window.onload=()=>{

    let but=document.getElementById("añadir");
    let but2=document.getElementById("deleteL");
    let but3=document.getElementById("deleteF");

    but.addEventListener("click", ()=>{

        let ul=document.getElementById("ul");
        let elem=document.getElementById("inp").value;
        let elemText=document.createTextNode(elem);

        let newElem=document.createElement("li");

        if(elem=""){
            alert("DEBES DE INTRODUCIR TEXTO")
        }
        else{
            newElem.appendChild(elemText);

            ul.appendChild(newElem);
        }


    })

    but2.addEventListener("click",()=>{
        let ul=document.getElementById("ul");
        ul.removeChild(ul.lastChild);

    })


    but3.addEventListener("click",()=>{

        let ul=document.getElementById("ul");
        ul.removeChild(ul.firstChild);

    })


}