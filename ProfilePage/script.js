function none(id){
    console.log(id.id);
    var element= document.querySelector('.user');
    element.remove();
    var value= document.querySelector('#circle').innerHTML;
    value=value-1;
    console.log(value);
    document.querySelector('#circle').innerHTML=value;
    if(id.id == "accept"){
        var val= document.querySelector('#oval').innerHTML;
        val=val-1;
        console.log(val);
        document.querySelector('#oval').innerHTML=val;
    }

}
function change(){
    var name=["Toddie" , "Phillie", "Ven", "Claw", "Jupiter"];
    var rand= name[Math.floor(Math.random()*name.length)]; /*to get random name*/
    console.log(rand);
    document.querySelector('#profname').innerHTML=rand;
}
function acceptbtn(){
    var value= document.querySelector('#oval').innerHTML;
    value=value-1;
    console.log(value);
    document.querySelector('#oval').innerHTML=value;
}