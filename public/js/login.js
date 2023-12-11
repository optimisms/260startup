function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "history.html";
}

function displayUserName() {
    const userName = localStorage.getItem('userName') ?? 'John Doe';
    const userNameElement = document.getElementById('user_name');
    userNameElement.textContent = userName;
}