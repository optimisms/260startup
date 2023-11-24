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
  }

  // Function to simulate WebSocket alerts
  function simulateWebSocketAlert() {
    const alertContainer = document.getElementById('alert_container');
    const currPosAlert = document.getElementById('curr_pos_alert');

    // Update current position in alert
    const currPos = parseInt(currPosAlert.textContent, 10);
    currPosAlert.textContent = Math.max(1, currPos - 1);

    // Display alert
    alertContainer.style.display = 'block';

    // Update queue information
    updateQueue();

    // Hide alert after 15 seconds
    setTimeout(() => {
      alertContainer.style.display = 'none';
    }, 15000);
  }
