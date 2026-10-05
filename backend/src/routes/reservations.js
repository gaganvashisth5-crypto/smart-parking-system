const express = require('express');
const { slotsByLot } = require('../data/seedData');

const router = express.Router();

const reservations = [];

router.post('/reservations', (req, res) => {
  const { userId, slotId, startTime, endTime } = req.body;

  if (!userId || !slotId || !startTime || !endTime) {
    return res.status(400).json({
      success: false,
      message: 'userId, slotId, startTime, and endTime are required.'
    });
  }

  // find slot
  const slot = Object.values(slotsByLot)
    .flat()
    .find(item => item.id === slotId);

  if (!slot) {
    return res.status(404).json({
      success: false,
      message: 'Parking slot not found.'
    });
  }

  if (slot.status !== 'available') {
    return res.status(409).json({
      success: false,
      message: 'Selected slot is no longer available.'
    });
  }

  const reservation = {
    id: `res-${Date.now()}`,
    userId,
    slotId,
    slotNumber: slot.slotNumber,
    lotId: slot.lotId,
    startTime,
    endTime,
    amount: slot.pricePerHour * 2,
    status: 'confirmed'
  };

  reservations.push(reservation);

  slot.status = 'reserved';

  res.status(201).json({
    success: true,
    data: reservation
  });
});

router.get('/reservations', (req, res) => {
  res.json({
    success: true,
    data: reservations
  });
});

module.exports = router;
