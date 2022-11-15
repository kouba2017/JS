
function increment1(){
    var elementt=document.querySelector("#num1");
    var value= elementt.innerText;
    console.log(value++);
    document.querySelector("#num1").innerHTML=value++;
}

function increment2(){
    var elementt=document.querySelector("#num2");
    var value= elementt.innerText;
    console.log(value++);
    document.querySelector("#num2").innerHTML=value++;
}

function increment3(){
    var elementt=document.querySelector("#num3");
    var value= elementt.innerText;
    console.log(value++);
    document.querySelector("#num3").innerHTML=value++;
}