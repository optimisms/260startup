let counter = 1;
let lastPetElement = null;

function addPet() {
    if (lastPetElement === null) {
        lastPetElement = document.getElementById("pet-1");
    }
    const duplicatedPet = lastPetElement.cloneNode(true);

    counter++;

    //Update numbers in id/for attributes
    duplicatedPet.querySelector("h3").textContent = `Pet #${counter} Info`;
    duplicatedPet.querySelectorAll('[id*="1"]').forEach((element) => {
        element.id = element.id.replace(/1/g, counter);
    });
    duplicatedPet.querySelectorAll('[for*="1"]').forEach((element) => {
        element.setAttribute('for', element.getAttribute('for').replace(/1/g, counter));
    });
    duplicatedPet.id = `pet-${counter}`;

    lastPetElement.insertAdjacentElement('afterend', duplicatedPet);

    lastPetElement = duplicatedPet;
}