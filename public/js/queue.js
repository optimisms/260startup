let intervalId;
let currentPos = 10; // Initial position

function updateQueue() {
    const currPosInfo = document.getElementById('curr_pos_info');
    const queueLen = document.getElementById('queue_len');
    const timeRemaining = document.getElementById('time_remaining');

    // Update current position
    currentPos = currentPos - 1;
    currPosInfo.textContent = currentPos;

    // Update queue length randomly
    const randomChange = Math.floor(Math.random() * 5) + 1;
    const newQueueLen = Math.max(1, parseInt(queueLen.textContent, 10) + (Math.random() < 0.5 ? -randomChange : randomChange));
    queueLen.textContent = newQueueLen;

    // Update time remaining
    timeRemaining.textContent = (currentPos * 2) + ' min';

    // Check if the position is 1 and stop the interval if true
    if (currentPos === 1) {
        clearInterval(intervalId);
    }
}

// Function to simulate WebSocket alerts
function simulateWebSocketAlert() {
    // Check if the position is already 1
    if (currentPos === 1) {
        clearInterval(intervalId);
        return; // Skip further execution if the position is already 1
    }

    // Update queue information
    updateQueue();

    // Post alert about updated queue
    addAlert(`Someone just got their shot! You are now #${currentPos} in line.`);    
}

function addAlert(msg) {
    // Get div containing alerts
    const alertContainer = document.getElementById('alert_container');

    // Create a new alert element with updated values
    const newAlert = document.createElement('div');
    newAlert.className = 'alert alert-info';
    newAlert.role = 'alert';
    newAlert.innerHTML = msg;

    // Insert the new alert below the existing alert
    alertContainer.insertAdjacentElement('beforeend', newAlert);

    setTimeout(() => {
        newAlert.style.display = 'none';
    }, 5000);
}

function configureWebSocket() {
    // Adjust the webSocket protocol to what is being used for HTTP
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

    // Display that we have opened the webSocket
    socket.onopen = (event) => {
        addAlert('Connected to queue');
    };
    socket.onclose = (event) => {
        addAlert('Disconnected from queue');
    };
}

function broadcastEvent(msg, socket) {
    const event = {
        from: getUserName(),
        message: msg
    };
    socket.send(JSON.stringify(event));
}

function getUserName() {
    return localStorage.getItem('userName') ?? 'John Doe';
}

configureWebSocket();

intervalId = setInterval(simulateWebSocketAlert, Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000);