
function increment(){
    var elementt=document.querySelector("#num");
    var value= elementt.innerText;
    console.log(value++);
    document.querySelector("#num").innerHTML=value++;
}