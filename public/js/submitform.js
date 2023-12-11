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

        let existingHistoryData = JSON.parse(localStorage.getItem('historyData')) || [];

        // Get today's date
        let today = new Date();
        let todayFormatted = today.toISOString().split('T')[0];

        // Add new pet data to historyData
        let newPetData = {
            date: todayFormatted,
            vaccines: petInfo.vaccines,
            petName: petInfo.name,
        };

        existingHistoryData.push(newPetData);

        localStorage.setItem('historyData', JSON.stringify(existingHistoryData));

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