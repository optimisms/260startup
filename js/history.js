//Will replace when database is implemented
function saveDataToLocalStorage() {
    const historyData = [
        { date: '2023-05-29', vaccine: 'Rabies', petName: 'Winston' },
        { date: '2022-12-18', vaccine: 'Distemper', petName: 'Max, Shazam' },
        { date: '2022-09-03', vaccine: 'Distemper', petName: 'Shazam' }
    ];

    localStorage.setItem('historyData', JSON.stringify(historyData));
}


function loadHistory() {
    let historyData = [];
    const historyText = localStorage.getItem('historyData');
    if (historyText) {
      historyData = JSON.parse(historyText);
    }
    
    const tableBodyEl = document.querySelector('#history');

    if (historyData.length) {
        for (const [i, historyItem] of historyData.entries()) {
            const dateTdEl = document.createElement('td');
            const vaccineTdEl = document.createElement('td');
            const petNameTdEl = document.createElement('td');
    
            dateTdEl.textContent = historyItem.date;
            vaccineTdEl.textContent = historyItem.vaccine;
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