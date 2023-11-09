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
        let petInfo = {
            petName: document.querySelector(`#pet_name${counter}`).value,
            petAge: document.querySelector(`#pet_age${counter}`).value,
            petBreed: document.querySelector(`#pet_breed${counter}`).value,
                
        }
        localStorage.setItem(`pet${counter}Info`, JSON.stringify(petInfo));

        lastPetElement = document.getElementById(`pet-${counter}`);
        counter++;
    }

    localStorage.setItem("userName", nameEl.value);
    window.location.href = "history.html";
}







function displayUserName() {
    const userName = localStorage.getItem('userName') ?? 'John Doe';
    const userNameElement = document.getElementById('user_name');
    userNameElement.textContent = userName;
}