var greet=document.getElementById("greetings");
var s="Welcome to our website!"
var greetings=["Namastey!!!","Welcome to DSP Family!!"]
var j=0;
var outani;
var prev="";
var i=0;

function animation(){
    outani=setInterval(()=>{
        var ani;
        ani=setInterval(()=>{
            document.getElementById("greetings").innerHTML=prev+greetings[j][i];
            prev+=greetings[j][i];
            i+=1;
            if(i===greetings[j].length-1){
                i=0;
                j+=1;
                prev+="\n\n"
                clearInterval(ani);
                ani=null;
            }
        },100);
        if(j===greetings.length-1){
            setTimeout(()=>{
            document.getElementById("form").style.visibility="visible";
            document.getElementById("form").style.position="relative";
            document.getElementById("form").style.opacity="100px";
            document.getElementById("form").style.height="360px";
            },greetings[j].length*100);
            clearInterval(outani);
            outani=null;
        }
    },greetings[j].length*100);
}
animation();



function signin(){
    document.getElementById("logini").style.visibility="hidden";
    document.getElementById("loginf").style.visibility="visible";
    document.getElementById("loginf").style.position="relative";
    document.getElementById("logini").style.position="absolute";
    setTimeout(()=>{
        document.getElementById("logini").style.visibility="visible";
        document.getElementById("loginf").style.visibility="hidden";
        document.getElementById("logini").style.position="relative";
        document.getElementById("loginf").style.position="absolute";
        location.href="main.html";
    },2000)
}
function validate(){
    var user = document.getElementById("cname").value;
    var pass = document.getElementById("pass").value;
    var email = document.getElementById("eid").value;
    var contact = document.getElementById("contact").value;
    if(user.length>0 && pass.length>0 && email.length>0 && contact.length>0){
        signin();
    }
}

