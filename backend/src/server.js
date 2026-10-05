const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const parkingRoutes = require('./routes/parking');
const reservationRoutes = require('./routes/reservations');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'smart-parking-system-api',
    timestamp: new Date().toISOString()
  });
});

app.use('/api', parkingRoutes);
app.use('/api', reservationRoutes);
app.use('/api/admin', adminRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Smart parking API listening on http://localhost:${PORT}`);
});

module.exports = app;
