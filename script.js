let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

function avalidteFrom(){
    if(username.value == ""){
        document.getElementById("userError").innerHTML = "user name is empty";
        flag = 0;
    } else if (username.value.length < 3){
        document.getElementById("userError").innerHTML = "user name require min 3 char";
        flag = 0;
    } else {
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }

    if(password.value == ""){
        document.getElementById("passError").innerHTML = "Password is empty";
    }else{
        document.getElementById("passError").innerHTML = "";
    }

    if(flag){
        return true;
    }else{
        return false;
    }
}