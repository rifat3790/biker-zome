function login(){
    window.location.href = 'login.html';
}

function btnLogin(){
    // console.log("login success");
    const password = document.getElementById('password');
    const email = document.getElementById('email');

    const emailValue = email.value;
    const passwordValue = password.value;

    if(emailValue === '221902178@student.green.edu.bd' || passwordValue === 'r107754n'){
        window.location.href = 'bike.html';
    }
    else{
        alert('Invalid Email or Password');
        return;
    }
}