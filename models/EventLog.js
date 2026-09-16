const mongoose = require('mongoose');

const EventLogSchema = new mongoose.Schema({
  gateId: { type: Number, required: true },
  gateName: { type: String, required: true },
  status: { type: String, enum: ['PASSED', 'FAILED'], required: true },
  payload: { type: Object, default: {} },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EventLog', EventLogSchema);