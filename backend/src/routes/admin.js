const express = require('express');
const { parkingLots, slotsByLot } = require('../data/seedData');

const router = express.Router();

router.get('/summary', (req, res) => {
  const allSlots = Object.values(slotsByLot).flat();
  const available = allSlots.filter(slot => slot.status === 'available').length;
  const occupied = allSlots.filter(slot => slot.status === 'occupied').length;
  const reserved = allSlots.filter(slot => slot.status === 'reserved').length;

  res.json({
    success: true,
    data: {
      totalLots: parkingLots.length,
      totalSlots: allSlots.length,
      available,
      occupied,
      reserved
    }
  });
});

router.post('/slots/:slotId/status', (req, res) => {
  const slotId = req.params.slotId;
  const { status } = req.body;

  const validStatuses = ['available', 'occupied', 'reserved'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message: 'status must be one of available, occupied, reserved.'
    });
  }

  const slot = Object.values(slotsByLot)
    .flat()
    .find(item => item.id === slotId);

  if (!slot) {
    return res.status(404).json({
      success: false,
      message: 'Slot not found.'
    });
  }

  slot.status = status;

  res.json({
    success: true,
    message: 'Slot status updated successfully.',
    data: slot
  });
});

module.exports = router;
