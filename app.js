function login(){

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    if(email === "" || password === ""){
        alert("Fill all fields");
        return;
    }

    localStorage.setItem(
        "veritasUser",
        email
    );

    window.location.href =
        "dashboard.html";
}

function logout(){

    localStorage.removeItem(
        "veritasUser"
    );

    window.location.href =
        "login.html";
}

function askAI(){

    let question =
        document.getElementById("question").value;

    let chat =
        document.getElementById("chatBox");

    if(question === ""){
        return;
    }

    chat.innerHTML += `
        <div class="message user">
            ${question}
        </div>
    `;

    let response =
        generateResponse(question);

    setTimeout(() => {

        chat.innerHTML += `
            <div class="message ai">
                ${response}
            </div>
        `;

        chat.scrollTop =
            chat.scrollHeight;

    },500);

    document.getElementById(
        "question"
    ).value = "";
}

function generateResponse(question){

    question =
        question.toLowerCase();

    if(question.includes("sales"))
        return "Sales appear healthy with positive growth trends.";

    if(question.includes("customer"))
        return "Customer retention risk detected in some segments.";

    if(question.includes("revenue"))
        return "Revenue growth is currently stable.";

    return "Veritas AI is analyzing your business data.";
}
async function signup() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const { data, error } =
        await supabaseClient.auth.signUp({
            email,
            password
        });

    if(error){
        alert(error.message);
        return;
    }

    alert(
        "Account created successfully!"
    );
}
