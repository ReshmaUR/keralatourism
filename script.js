// for validation of login form

function validate2(){
    var email = document.getElementById("email").value;
    var error = document.getElementById("error").value;
    var password = document.getElementById("password").value;
    var error_password = document.getElementById("error_pass").value; 
    var regexp = /^([A-Za-z0-9\.-]+)@([A-za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    var regexp1 = /^[\w]+$/;
    var regexp2 = /^[\w\@\^\*\?]+$/;
    var regexp3 = /^[\w\@\^\*\?\!\#\$\%\&\_\~]+$/;

    if(regexp.test(email)){
        // document.getElementById("error").innerHTML = "Valid email id";
        document.getElementById("error").style.color = "green";
        document.getElementById("email").style.border = "1px solid green";
        // return true;
        if(regexp1.test(password)){
            document.getElementById("error_pass").innerHTML = "Password is weak";
            document.getElementById("error_pass").style.color = "red";
            document.getElementById("password").style.border = "1px solid red";
            return false;
        }
        if(regexp2.test(password)){
            document.getElementById("error_pass").innerHTML = "Looking good";
            document.getElementById("error_pass").style.color = "orange";
            document.getElementById("password").style.border = "1px solid orange";
            return false;
        }
        if(regexp3.test(password)&&password.length>=8){
            document.getElementById("error_pass").innerHTML = "Strong password";
            document.getElementById("error_pass").style.color = "green";
            document.getElementById("password").style.border = "1px solid green";
            return true;
        }
        else{
            document.getElementById("error_pass").innerHTML = "Minimum length should be 8";
            document.getElementById("error_pass").style.color = "yellow";
            document.getElementById("password").style.border = "1px solid yellow";
            return false;
            }
    }
    else{
        document.getElementById("error").innerHTML = "Invalid email id";
        document.getElementById("error").style.color = "red";
        document.getElementById("email").style.border = "1px solid red";
        return false;
    }
}
// for validation of signup form

function validate(){ 
      
    var email = document.getElementById("email").value;
    var error = document.getElementById("error").value;
    var mobile = document.getElementById("mobile").value;
    var error_mob = document.getElementById("error_mob").value;
    var password = document.getElementById("password").value;
    var error_pass = document.getElementById("error_pass").value; 
    var password_con = document.getElementById("password_con").value;
    var error_pass_con = document.getElementById("error_pass_con").value; 
    var regexp = /^([\w\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    var regexpm = /^[6-9]\d{2}[\ -.]{1}\d{3}[\ -.]{1}\d{4}$/;
    var regexp1 = /^[\w]+$/;
    var regexp2 = /^[\w\@\^\*\?]+$/;
    var regexp3 = /^[\w\@\^\*\?\!\#\$\%\&\_\~]+$/;

    if(regexp.test(email)){
        // document.getElementById("error").innerHTML = "Valid email id";
        // document.getElementById("error").style.color = "green";
        document.getElementById("email").style.border = "1px solid green";
        // return true;
        if(regexpm.test(mobile)){
            // document.getElementById("error_mob").innerHTML = "Valid Mobile number";
            // document.getElementById("error_mob").style.color = "green";  
            document.getElementById("mobile").style.border = "1px solid green";
            // return true;
            if(regexp1.test(password)){
                document.getElementById("error_pass").innerHTML = "Password is weak";
                document.getElementById("error_pass").style.color = "red";
                document.getElementById("password").style.border = "1px solid red";
                return false;
            }
            if(regexp2.test(password)){
                document.getElementById("error_pass").innerHTML = "Looking good";
                document.getElementById("error_pass").style.color = "orange";
                document.getElementById("password").style.border = "1px solid orange";
                return false;
            }
            if(regexp3.test(password)&&password.length>=8){
                document.getElementById("error_pass").innerHTML = "Strong password";
                document.getElementById("error_pass").style.color = "green";
                document.getElementById("password").style.border = "1px solid green";
                // return true;
                if(password == password_con){
                    // document.getElementById("error_pass_con").innerHTML = "Perfect password";
                    document.getElementById("error_pass_con").style.color = "green";
                    return true;
                }
                else{
                    document.getElementById("error_pass_con").innerHTML = "Both passwords should be same";
                    document.getElementById("error_pass_con").style.color = "red";
                    document.getElementById("password_con").style.border = "1px solid red";
                    return false;
                    }
            }
            else{
                document.getElementById("error_pass").innerHTML = "Minimum length should be 8";
                document.getElementById("error_pass").style.color = "yellow";
                document.getElementById("password").style.border = "1px solid yellow";
                return false;
                }
        }
        else{
            document.getElementById("error_mob").innerHTML = "Invalid mobile number";
            document.getElementById("error_mob").style.color = "red";
            document.getElementById("mobile").style.border = "1px solid red";
            return false;
        }
    }
        else{
        document.getElementById("error").innerHTML = "Invalid email id";
        document.getElementById("error").style.color = "red";
        document.getElementById("email").style.border = "1px solid red";
        return false;
    }
}
