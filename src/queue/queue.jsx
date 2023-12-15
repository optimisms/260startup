import React, { useEffect, useState } from 'react';
import './queue.css';

const Queue = () => {
  const [currentPos, setCurrentPos] = useState(10);
  const [queueLen, setQueueLen] = useState(35);
  const [timeRemaining, setTimeRemaining] = useState(20);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(simulateQueueUpdate, getRandomInterval());
    configureWebSocket();

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures useEffect runs once on mount

  const getRandomInterval = () => Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;

  const updateQueue = () => {
    setCurrentPos((prevPos) => prevPos - 1);

    const randomChange = Math.floor(Math.random() * 5) + 1;
    setQueueLen((prevLen) => Math.max(1, prevLen + (Math.random() < 0.5 ? -randomChange : randomChange)));

    setTimeRemaining(currentPos * 2);
  };

  const simulateQueueUpdate = () => {
    if (currentPos === 1) {
      clearInterval();
      return;
    }

    updateQueue();
    addAlert(`Someone just got their shot! You are now #${currentPos} in line.`);
  };

  const addAlert = (msg) => {
    setAlerts((prevAlerts) => [...prevAlerts, msg]);
    setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.slice(1)); // Remove the oldest alert after 5 seconds
    }, 5000);
  };

  const configureWebSocket = () => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

    socket.onopen = (event) => {
      addAlert('Connected to queue');
      let msg = `${getUserName()} connected to queue.`;
      broadcastEvent(msg, socket);
    };

    socket.onclose = (event) => {
      addAlert('Disconnected from queue');
      let msg = `${getUserName()} disconnected from queue.`;
      broadcastEvent(msg, socket);
    };

    socket.onmessage = async (event) => {
      const text = await event.data.text();
      const chat = JSON.parse(text);
      addAlert(chat.message);
    };
  };

  const broadcastEvent = (msg, socket) => {
    const event = {
      from: getUserName(),
      message: msg,
    };
    socket.send(JSON.stringify(event));
  };

  const getUserName = () => localStorage.getItem('userName') ?? 'John Doe';

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div id="alert_container">
        {alerts.map((alert, index) => (
          <div key={index} className="alert alert-info" role="alert">
            {alert}
          </div>
        ))}
      </div>
      <div id="queue">
        <div id="queue_info">
          You are <h2>#<span id="curr_pos_info">{currentPos}</span></h2> out of <span id="queue_len">{queueLen}</span>
        </div>
        <br />
        <div id="time">
          Est. time remaining: <span id="time_remaining">{timeRemaining} min</span>
        </div>
      </div>
    </main>
  );
};

export { Queue };
