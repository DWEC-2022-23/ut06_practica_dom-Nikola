window.onload=()=>{

    let but=document.getElementById("añadir");

    but.addEventListener("click", ()=>{

        let ul=document.getElementById("ul");
        let elem=document.getElementById("inp").value;
        let elemText=document.createTextNode(elem);

        let newElem=document.createElement("li");

        if(elem=""){
            alert("DEBES DE INTRODUCIR TEXTO")
        }else{
            newElem.appendChild(elemText);

            ul.appendChild(newElem);
        }
    })

}