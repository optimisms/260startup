(async () => {
    const userName = localStorage.getItem('userName');
    if (userName) {
      document.querySelector('#playerName').textContent = userName;
      setDisplay('loginControls', 'none');
      setDisplay('playControls', 'block');
    } else {
      setDisplay('loginControls', 'block');
      setDisplay('playControls', 'none');
    }
  })();

function login() {
    const nameEl = document.querySelector("#userName");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "history.html";
}

function register() {
    const nameEl = document.querySelector("#userName");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "history.html";
}