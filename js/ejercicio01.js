window.onload()=()=>{


    let colorr=document.getElementById("color").value;
    let but=document.getElementById("change");
    

    but.addEventListener("click",()=>{
        document.getElementsByTagName("h1").style.color=colorr;
    })

}
