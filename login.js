function login(){
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
    var user = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    if(user.length>0 && pass.length>0){
        login();
    }
}