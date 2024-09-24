var x=0;
var count=0
function handleright(){
    if(count<4){
    count+=1;
    x=x-70.5;
    document.getElementById("image-strip").style.transform="translateX("+x+"vw)";}
}
function handleleft(){
    if(count>0){
    count-=1;
    x=x+70.5;
    document.getElementById("image-strip").style.transform="translateX("+x+"vw)";}
}