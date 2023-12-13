(async () => {
    const userName = localStorage.getItem('userName');
    // if (userName) {
    //   document.querySelector('#userNameDisplay').textContent = userName;
    //   setDisplay('loginControls', 'none');
    //   setDisplay('playControls', 'block');
    // } else {
      setDisplay('loginControls', 'block');
      setDisplay('playControls', 'none');
    // }
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

async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }
  
  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }
  
  async function loginOrCreate(endpoint) {
    const username = document.querySelector('#userName')?.value;
    const password = document.querySelector('#userPassword')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  
    if (response.ok) {
      localStorage.setItem('userName', username);
      window.location.href = 'history.html';
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
  }

function seeRecords() {
    window.location.href = "history.html";
}

function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
      playControlEl.style.display = display;
    }
}