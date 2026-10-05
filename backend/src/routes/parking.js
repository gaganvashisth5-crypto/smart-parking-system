const express = require('express');
const { parkingLots, slotsByLot } = require('../data/seedData');

const router = express.Router();

router.get('/parking-lots', (req, res) => {
  res.json({
    success: true,
    data: parkingLots
  });
});

router.get('/parking-lots/:lotId/slots', (req, res) => {
  const lotId = req.params.lotId;
  const slots = slotsByLot[lotId] || [];

  res.json({
    success: true,
    data: slots
  });
});

router.get('/slots/available', (req, res) => {
  const allSlots = Object.values(slotsByLot).flat();
  const available = allSlots.filter(slot => slot.status === 'available');

  res.json({
    success: true,
    count: available.length,
    data: available
  });
});

module.exports = router;
