function popup(){
    alert('Loading weather report...');
}
function dismiss(){
    var element=document.querySelector('.window');
    element.remove();
}
function add(e){
    var min=Number(e.innerText)+32;
    console.log(min);
    e.innerHTML=min;
}
function change(elt){
    console.log(elt.value);
    if((elt.value)=='F'){
        var id1=document.querySelector('#max1');
        add(id1);
        var id2=document.querySelector('#min1');
        add(id2);
        var id1=document.querySelector('#max2');
        add(id1);
        var id2=document.querySelector('#min2');
        add(id2);
        var id1=document.querySelector('#max3');
        add(id1);
        var id2=document.querySelector('#min3');
        add(id2);
        var id1=document.querySelector('#max4');
        add(id1);
        var id2=document.querySelector('#min4');
        add(id2);
    }
}