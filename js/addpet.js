let petCounter = 1;
let lastPetElement = null;

function addPet() {
    if (lastPetElement === null) {
        lastPetElement = document.getElementById("pet-1");
    }
    const duplicatedPet = lastPetElement.cloneNode(true);

    petCounter++;

    //Update numbers in id/for attributes
    duplicatedPet.querySelector("h3").textContent = `Pet #${petCounter} Info`;
    duplicatedPet.querySelectorAll('[id*="1"]').forEach((element) => {
        element.id = element.id.replace(/1/g, petCounter);
    });
    duplicatedPet.querySelectorAll('[for*="1"]').forEach((element) => {
        element.setAttribute('for', element.getAttribute('for').replace(/1/g, petCounter));
    });
    duplicatedPet.id = `pet-${petCounter}`;

    lastPetElement.insertAdjacentElement('afterend', duplicatedPet);

    lastPetElement = duplicatedPet;
}