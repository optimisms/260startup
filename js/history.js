//Will replace when database is implemented
function saveDataToLocalStorage() {
    const historyData = [
        { date: '2023-05-29', vaccines: ['Rabies'], petName: 'Winston' },
        { date: '2022-12-18', vaccines: ['Distemper'], petName: 'Max, Shazam' },
        { date: '2022-09-03', vaccines: ['Distemper'], petName: 'Shazam' }
    ];

    const historyText = localStorage.getItem('historyData');
    if (!historyText) {
        localStorage.setItem('historyData', JSON.stringify(historyData));
    }    
}

saveDataToLocalStorage();

async function loadHistory() {
    let historyData = [];
    try {
        // Get history from the service
        const response = await fetch('/api/history');
        historyData = await response.json();
    
        // Save the history locally in case we go offline in the future
        localStorage.setItem('historyData', JSON.stringify(historyData));
    } catch {
        // If there was an error then just use the last saved history
        const historyText = localStorage.getItem('historyData');
        if (historyText) {
            historyData = JSON.parse(historyText);
        }
    }
  
    displayHistory(historyData);
}

function displayHistory(historyData) {
    const tableBodyEl = document.querySelector('#history');

    if (historyData.length) {
        for (const [i, historyItem] of historyData.entries()) {
            const dateTdEl = document.createElement('td');
            const vaccineTdEl = document.createElement('td');
            const petNameTdEl = document.createElement('td');
    
            dateTdEl.textContent = historyItem.date;
            vaccineTdEl.textContent = historyItem.vaccines.join(', ');
            petNameTdEl.textContent = historyItem.petName;
    
            const rowEl = document.createElement('tr');
            rowEl.appendChild(dateTdEl);
            rowEl.appendChild(vaccineTdEl);
            rowEl.appendChild(petNameTdEl);
    
            tableBodyEl.appendChild(rowEl);
        }
    } else {
        tableBodyEl.innerHTML = '<tr><td colSpan=4>No history found</td></tr>';
    }
}

function displayUserName() {
    const userName = localStorage.getItem('userName') ?? 'John Doe';
    const userNameElement = document.getElementById('user_name');
    userNameElement.textContent = userName;
}