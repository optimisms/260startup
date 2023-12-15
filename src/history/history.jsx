import React from 'react';
import './history.css';

export function History() {
  const [historyData, setHistoryData] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/history')
      .then((response) => response.json())
      .then((history) => {
        setHistoryData(history);
        localStorage.setItem('historyData', JSON.stringify(history));
      })
      .catch(() => {
        const historyText = localStorage.getItem('historyData');
        if (historyText) {
          setHistoryData(JSON.parse(historyText));
        }
      });
  }, []);

  const historyRows = [];
  if (historyData.length) {
    for (const [i, history] of historyData.entries()) {
      historyRows.push(
        <tr key={i}>
          <td>{history.date}</td>
          <td>{history.vaccines.join(', ')}</td>
          <td>{history.petName}</td>
        </tr>
      );
    }
  } else {
    historyRows.push(
      <tr key='0'>
        <td colSpan='3'>No history found</td>
      </tr>
    );
  }


  return (
    <main className='container-fluid bg-secondary text-center'>
      <div id="name">
        <h3>Welcome, <span id="user_name">John Doe</span>!</h3>
        
      </div>
      <div id="quote" className="quote-box bg-light text-dark"></div>
      <div id="history-box">
        <h5>History:</h5>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Vaccine</th>
              <th>Pet Name(s)</th>
            </tr>
          </thead>
          <tbody id="history">{historyRows}</tbody>
        </table>
      </div>
    </main>
  );
}