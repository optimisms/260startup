async function submitForm() {
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

        // Get today's date
        let today = new Date();
        let todayFormatted = today.toISOString().split('T')[0];

        // Add new pet data to historyData
        let newPetData = {
            date: todayFormatted,
            vaccines: petInfo.vaccines,
            petName: petInfo.name,
        };

        try {
            
            // const response = await fetch('/api/form', {
            //     method: 'POST',
            //     headers: { 'content-type': 'application/json' },
            //     body: JSON.stringify({ ownerInfo, allPetInfo }),
            // });
    
            // const history = await response.json();
            // localStorage.setItem('historyData', JSON.stringify(history));
            throw new Error("error");
        } catch {
            updateHistoryLocal(newPetData);
        }

        lastPetElement = document.getElementById(`pet-${counter}`);
        counter++;
    }

    window.location.href = "history.html";
}

function updateHistoryLocal(petData) {
    let existingHistoryData = JSON.parse(localStorage.getItem('historyData')) || [];
    existingHistoryData.push(petData);
    localStorage.setItem('historyData', JSON.stringify(existingHistoryData));
}

function displayUserName() {
    const userName = localStorage.getItem('userName') ?? 'John Doe';
    const userNameElement = document.getElementById('user_name');
    userNameElement.textContent = userName;
}