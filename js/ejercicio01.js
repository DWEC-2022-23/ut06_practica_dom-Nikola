window.onload=()=>{

    
    var but=document.getElementById("change");
    

    but.addEventListener("click",()=>{
        var colorr=document.getElementById("color").value;
        console.log(colorr);
        document.getElementById("text").style.color=colorr;
    });
}


