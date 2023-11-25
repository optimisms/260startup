let intervalId;

function updateQueue() {
  const currPosInfo = document.getElementById('curr_pos_info');
  const queueLen = document.getElementById('queue_len');
  const timeRemaining = document.getElementById('time_remaining');

  // Update current position
  const currPos = parseInt(currPosInfo.textContent, 10);
  currPosInfo.textContent = Math.max(1, currPos - 1);

  // Update queue length randomly
  const randomChange = Math.floor(Math.random() * 5) + 1;
  const newQueueLen = Math.max(1, parseInt(queueLen.textContent, 10) + (Math.random() < 0.5 ? -randomChange : randomChange));
  queueLen.textContent = newQueueLen;

  // Update time remaining
  timeRemaining.textContent = Math.max(1, (currPos - 1) * 2) + ' min';

  // Check if the position is 1 and stop the interval if true
  if (currPos === 1) {
    clearInterval(intervalId);
  }
}

// Function to simulate WebSocket alerts
function simulateWebSocketAlert() {
  const currPosAlert = document.getElementById('curr_pos_alert');

  // Update current position in alert
  const currPos = parseInt(currPosAlert.textContent, 10);
  currPosAlert.textContent = Math.max(1, currPos - 1);

  // Check if the position is already 1
  if (currPos === 1) {
    clearInterval(intervalId);
    return; // Skip further execution if the position is already 1
  }

  const alertContainer = document.getElementById('alert_container');

  // Display alert
  alertContainer.style.display = 'block';

  // Update queue information
  updateQueue();

  // Hide alert after 15 seconds
  setTimeout(() => {
    alertContainer.style.display = 'none';
  }, 15000);
}

// Set interval and store the interval ID
intervalId = setInterval(simulateWebSocketAlert, Math.floor(Math.random() * (15000 - 10000 + 1)) + 10000);