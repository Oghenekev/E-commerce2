let menu = document.getElementById("menu")

let menuBox = document.querySelector(".menu-box")

menu.addEventListener('click' , function(){
    menuBox.classList.toggle("slider");
})

function validation() {
    let result = document.getElementById("result");
    let popup = document.getElementById("popup"); 

    if (document.formFill.Username.value == "") {
        result.innerHTML = "Enter Username";
        return false;
    } else if (document.formFill.Username.value.length < 8) {
        result.innerHTML = "Username must be at least 8 characters";
        return false;
    } else if (document.formFill.Email.value == "") {
        result.innerHTML = "Enter your email";
        return false;
    } else if (document.formFill.Password.value == "") {
        result.innerHTML = "Enter your password";
        return false;
    } else if (document.formFill.Password.value.length < 6) {
        result.innerHTML = "Password should be more than 6 characters";
        return false;
    } else if (document.formFill.Cpassword.value == "") {
        result.innerHTML = "Confirm password";
        return false;
    } else if (document.formFill.Cpassword.value !== document.formFill.Password.value) {
        result.innerHTML = "Passwords don't match";
        return false;
    } else {
        
        popup.classList.add("open-slide");
        return false; 
    }
}
