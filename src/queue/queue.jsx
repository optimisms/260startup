import React from 'react';
import './queue.css';

export function Queue() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div id="alert_container"></div>
      <div id="queue">
        <div id="queue_info">
          You are 
          <h2>#<span id="curr_pos_info">10</span></h2>
          out of <span id="queue_len">35</span>
        </div>
        <br />
        <div id="time">
          Est. time remaining: <span id="time_remaining">20 min</span>
        </div>
      </div>
    </main>
  );
}