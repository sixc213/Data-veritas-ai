function login(){

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    if(email === "" || password === ""){
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("veritasUser", email);

    window.location.href =
        "dashboard.html";
}

function logout(){

    localStorage.removeItem("veritasUser");

    window.location.href =
        "login.html";
}
