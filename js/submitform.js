function submitForm() {
    let ownerInfo = {
        name: document.getElementById("owner_name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
    }
    localStorage.setItem("ownerInfo", JSON.stringify(ownerInfo));

    let counter = 1;
    let lastPetElement = document.getElementById(`pet-${counter}`);
    while (lastPetElement !== null) {
        vaccines = [];
        let petInfo = {
            name: document.querySelector(`#pet_name${counter}`).value,
            age: document.querySelector(`#pet_age${counter}`).value,
            breed: document.querySelector(`#pet_breed${counter}`).value,
            gender: document.querySelector(`input[name="gender-radio${counter}"]:checked`).value,
            vaccines: Array.from(document.querySelectorAll(`#rabies-check${counter}, #distemper-check${counter}`))
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value),
        }
        localStorage.setItem(`pet${counter}Info`, JSON.stringify(petInfo));

        lastPetElement = document.getElementById(`pet-${counter}`);
        counter++;
    }

    window.location.href = "history.html";
}

function displayUserName() {
    const userName = localStorage.getItem('userName') ?? 'John Doe';
    const userNameElement = document.getElementById('user_name');
    userNameElement.textContent = userName;
}