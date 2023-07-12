// From Login

let container = document.getElementById("container");
let formLogin = document.getElementById("formLogin");
let loginButton = document.getElementById("loginButton");
let goSignUp = document.getElementById("goSignUp");
let alert1 = document.getElementById("alert1");
let alert2 = document.getElementById("alert2");
let successLogin = document.getElementById("successLogin");

// Yang di edit sesuai aksi
let backgroundBody = document.querySelector("body");
let nama = document.getElementById("nama")
let logOutButton =document.getElementById("logOutButton")

// Form SignUp 
let formSignUp = document.getElementById("formSignUp");
let signUpButton = document.getElementById("signUpButton");
let goLogin = document.getElementById("goLogin");
let alert3 = document.getElementById("alert3");
let successSignUp = document.getElementById("successSignUp");


alert1.style.display = "none"
alert2.style.display = "none"
alert3.style.display = "none"
formSignUp.style.display = "none"
formLogin.style.display = "block"
successSignUp.style.display = "none"
successLogin.style.display = "none"


// Perpindahan Form
function goSi() {
    if (goSignUp.click) {
        formSignUp.style.display = "block";
        formLogin.style.display = "none";
    }
}

function goLo() {
    if (goLogin.click) {
        formSignUp.style.display = "none";
        formLogin.style.display = "block"
    }
}
function SignUpGoLo() {
    if (successSignUpGoLo.click) {
        formSignUp.style.display = "none";
        formLogin.style.display = "block";
        successSignUp.style.display = "none"
        BgColor.style.backgroundColor = " #333"
    }
}

// form Daftar
function daftar() {
    localStorage.setItem("usernameDaftar", usernameSignUp.value); // disimpan dalam nama username
    localStorage.setItem("emailDaftar", emailSignUp.value); //disipman dalam nama email
    localStorage.setItem("passwordDafatar", passwordSignUp.value); // disimpan dalam nama password

    if (usernameSignUp.value == "") {
        alert("Pastikan Untuk Mengisi Semua Dengan Benar")
        formSignUp.style.display = "block"
    } else if (emailSignUp.value == "") {
        alert("Pastikan Untuk Mengisi Semua Dengan Benar")
        formSignUp.style.display = "block"
    } else if (passwordSignUp.value == "") {
        alert("Pastikan Untuk Mengisi Semua Dengan Benar")
        formSignUp.style.display = "block"
    } else {
        formSignUp.style.display = "none"
        formLogin.style.display = "none"
        successSignUp.style.display = "block"
        backgroundBody.style.backgroundColor = "rgb(66, 208, 255"
     
    }

}

// form Login 
function login() {
    localStorage.setItem("usernameLogin", usernameLogin.value);
    localStorage.setItem("passwordLogin", passwordLogin.value);
    if (localStorage.getItem("usernameDaftar") == localStorage.getItem("usernameLogin") && localStorage.getItem("passwordDafatar") == localStorage.getItem("passwordLogin")) {
        formLogin.style.display = "none"
        successLogin.style.display = "block"
        backgroundBody.style.backgroundImage = "url(assets/images/bgLogOut.gif)"
        backgroundBody.style.backgroundSize = "cover";        nama.textContent = localStorage.getItem("usernameLogin");
    } else if (usernameLogin.value == "" && passwordLogin.value == "") {
        alert("Belum Punya akun? Daftar Terlebih Dahulu")
    } else if (usernameLogin.value == "") {
        alert("Mohon untuk mengisi Username");
    } else if (passwordLogin.value == "") {
        alert("Mohon untuk mengisi Password");
    } else {
        alert("Username atau password anda salah");
    }
}

// logOut
function logOut() {
    if (logOutButton.click) {
        localStorage.clear()
    }
}