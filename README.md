# Universal Zero-Inference Execution & Deployment Protocol

A real-time Full-Stack event aggregation system designed for black-box testing and deterministic execution metrics[cite: 5]. Features a Node.js/Express backend, MongoDB Atlas persistence, WebSocket event streaming, and an interactive HTML visualizer dashboard.

## 🚀 Features

- **13-Gate Automated Testing**: Automated test runner verifying end-to-end integration across isolated pipeline gates[cite: 5].
- **Real-Time Signal Stream**: WebSocket-driven event broadcasting to connected visualizer clients.
- **Persistent Log Storage**: Mongoose schemas managing MongoDB Atlas storage.
- **Zero-Inference Architecture**: Outcome-focused implementation metric based strictly on automated execution pass flags[cite: 5].

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, WebSockets (`ws`), Mongoose, CORS, dotenv
- **Database**: MongoDB Atlas
- **Frontend**: Plain HTML5/CSS3/JavaScript (WebSocket Client)
- **Verification Runner**: Node.js native fetch pipeline

## 📦 Project Setup

1. **Clone Repository**
   ```bash
   git clone <your-repository-url>
   cd zero-inference-protocol 


INSTALL DEPENDENCIES: 

Bash
npm install
Configure Environment Variables
Create a .env file in the root directory:

Code snippet
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
Start Backend Server

Bash
node server.js
Run 13-Gate Test Suite
Open a second terminal and execute:

Bash
node test-runner.js
View Visualizer
Open index.html in your web browser.