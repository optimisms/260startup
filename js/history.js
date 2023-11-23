//Will replace when database is implemented
function saveDataToLocalStorage() {
    const historyData = [
        { date: '2023-05-29', vaccine: 'Rabies', petName: 'Winston' },
        { date: '2022-12-18', vaccine: 'Distemper', petName: 'Max, Shazam' },
        { date: '2022-09-03', vaccine: 'Distemper', petName: 'Shazam' }
    ];

    localStorage.setItem('historyData', JSON.stringify(historyData));
}

saveDataToLocalStorage();



{/* <tr>
<td><span id="date">2023-05-29</span></td>
<td><span id="vaccine">Rabies</span></td>
<td><span id="pet_name">Winston</span></td>
</tr>
<tr>
<td><span id="date">2022-12-18</span></td>
<td><span id="vaccine">Distemper</span></td>
<td><span id="pet_name">Max, Shazam</span></td>
</tr>
<tr>
<td><span id="date">2022-09-03</span></td>
<td><span id="vaccine">Distemper</span></td>
<td><span id="pet_name">Shazam</span></td>
</tr>

function loadHistory() {
    let history = [];
    const historyText = localStorage.getItem('history');
}


function loadScores() {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
  
    const tableBodyEl = document.querySelector('#scores');
  
    if (scores.length) {
      for (const [i, score] of scores.entries()) {
        const positionTdEl = document.createElement('td');
        const nameTdEl = document.createElement('td');
        const scoreTdEl = document.createElement('td');
        const dateTdEl = document.createElement('td');
  
        positionTdEl.textContent = i + 1;
        nameTdEl.textContent = score.name;
        scoreTdEl.textContent = score.score;
        dateTdEl.textContent = score.date;
  
        const rowEl = document.createElement('tr');
        rowEl.appendChild(positionTdEl);
        rowEl.appendChild(nameTdEl);
        rowEl.appendChild(scoreTdEl);
        rowEl.appendChild(dateTdEl);
  
        tableBodyEl.appendChild(rowEl);
      }
    } else {
      tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
    }
  }
  
  loadScores();
   */}