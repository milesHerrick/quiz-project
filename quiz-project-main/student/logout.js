document.getElementById("out").addEventListener("click", signout);

function signout(){
    
    if(confirm("Would you like to sign out?")){
        //window.open('/home.html', '_self');
        window.location.href ='../default/home.html'
    }
}