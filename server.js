require('dotenv').config();
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const WebSocket = require('ws');
const cors = require('cors');
const EventLog = require('./models/EventLog');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Atlas Connected Successfully'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Broadcast to WebSocket clients
const broadcastEvent = (data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

// WebSocket connection hook
wss.on('connection', (ws) => {
  ws.send(JSON.stringify({ message: 'Connected to Real-time Signal Stream' }));
});

// Post Event Endpoint (Logs & Broadcasts)
app.post('/api/events', async (req, res) => {
  try {
    const { gateId, gateName, status, payload } = req.body;
    const log = new EventLog({ gateId, gateName, status, payload });
    await log.save();
    
    broadcastEvent(log);
    res.status(201).json({ success: true, data: log });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Retrieve All Logged Events
app.get('/api/events', async (req, res) => {
  const logs = await EventLog.find().sort({ timestamp: -1 });
  res.status(200).json(logs);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});