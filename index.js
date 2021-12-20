let container2=document.getElementsByClassName("container2")[0]
let container3=document.getElementsByClassName("container3")[0]

let checkicon=document.getElementById("checkicon")
let Xicon=document.getElementById("Xicon")

Xicon.addEventListener("click",function() {
    typenote()
})
checkicon.addEventListener("click",function() {
    createnote()
})
var i=0
function typenote(){
    if(container3.style.display == "none"){
        container3.style.display = "block"
    }
    else{
        container3.style.display = "none";
    }

}
function createnote(){
    let notetext=document.getElementById("note-text").value
    let node1=document.createElement("div");
    let node2=document.createElement("h1");
    node2.innerHTML=notetext;

    node2.setAttribute("style","width:250px;height:250px;font-size:25px;padding:25px; margin-top:10px;overflow:hidden;box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)")
    node2.style.margin=margin()
    node2.style.transform=rotate()
    node2.style.backgroundColor=color()

    node1.appendChild(node2);
    container2.insertAdjacentElement("beforeend",node1);
    node1.addEventListener("mouseenter",function(){
        node1.style.transform="scale(1.1)"
    })
    node1.addEventListener("mouseleave",function(){
        node1.style.transform="scale(1)"
    })
    node1.addEventListener("dblclick",function(){
        node1.remove();
    })

}
function color(){
    var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
    
    if(i>random_colors.length-1){
        i=0;
    }
    
    return(random_colors[i++])


}
function margin(){
    var random_margin = ["-5px", "1px", "5px", "10px", "7px"];    
    return(random_margin[Math.floor(Math.random()*random_margin.length)])

}
function rotate(){
    var random_degree = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];
    return(random_degree[Math.floor(Math.random()*random_degree.length)])
 
}
