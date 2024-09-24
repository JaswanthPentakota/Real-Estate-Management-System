var x=18;

$(document).ready(function(){
    $("#leftclk").click(function(){
        x+=20
        $("#strip").css("transform","translateX("+x+"%)")
    })
    $("#rtclk").click(function(){
        x-=20
        $("#strip").css("transform","translateX("+x+"%)")
    })
})

function chncolor(){
    document.getElementById("genreclk").style.backgroundColor="#488b94";
    document.getElementById("genreclk").style.color="white";
}
function chncolor1(){
    document.getElementById("genreclk1").style.color="white";
    document.getElementById("genreclk1").style.backgroundColor="#488b94";
}
function chncolor2(){
    document.getElementById("genreclk2").style.color="white";
    document.getElementById("genreclk2").style.backgroundColor="#488b94";
}
function chncolor3(){
    document.getElementById("genreclk3").style.color="white";
    document.getElementById("genreclk3").style.backgroundColor="#488b94";
}
function chncolor4(){
    document.getElementById("genreclk4").style.color="white";
    document.getElementById("genreclk4").style.backgroundColor="#488b94";
}
function changeval(){
    document.getElementById("rangeval").innerHTML=document.getElementById("myRange").value+" Lakhs";
}



