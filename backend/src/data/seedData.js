const parkingLots = [
  {
    id: 'lot-1',
    name: 'Downtown Central Parking',
    address: '12 River Street',
    location: { lat: 40.7128, lng: -74.006 },
    totalSlots: 10,
    hourlyRate: 5
  },
  {
    id: 'lot-2',
    name: 'City Tech Hub Parking',
    address: '88 Innovation Avenue',
    location: { lat: 40.7306, lng: -73.9352 },
    totalSlots: 18,
    hourlyRate: 4
  }
];

const slotsByLot = {
  'lot-1': [
    { id: 'slot-101', lotId: 'lot-1', slotNumber: 'A1', status: 'available', pricePerHour: 5 },
    { id: 'slot-102', lotId: 'lot-1', slotNumber: 'A2', status: 'occupied', pricePerHour: 5 },
    { id: 'slot-103', lotId: 'lot-1', slotNumber: 'A3', status: 'available', pricePerHour: 5 },
    { id: 'slot-104', lotId: 'lot-1', slotNumber: 'A4', status: 'reserved', pricePerHour: 5 },
    { id: 'slot-105', lotId: 'lot-1', slotNumber: 'A5', status: 'available', pricePerHour: 5 },
    { id: 'slot-106', lotId: 'lot-1', slotNumber: 'B1', status: 'occupied', pricePerHour: 5 },
    { id: 'slot-107', lotId: 'lot-1', slotNumber: 'B2', status: 'available', pricePerHour: 5 },
    { id: 'slot-108', lotId: 'lot-1', slotNumber: 'B3', status: 'available', pricePerHour: 5 },
    { id: 'slot-109', lotId: 'lot-1', slotNumber: 'B4', status: 'occupied', pricePerHour: 5 },
    { id: 'slot-110', lotId: 'lot-1', slotNumber: 'B5', status: 'available', pricePerHour: 5 }
  ],
  'lot-2': [
    { id: 'slot-201', lotId: 'lot-2', slotNumber: 'C1', status: 'available', pricePerHour: 4 },
    { id: 'slot-202', lotId: 'lot-2', slotNumber: 'C2', status: 'available', pricePerHour: 4 },
    { id: 'slot-203', lotId: 'lot-2', slotNumber: 'C3', status: 'occupied', pricePerHour: 4 },
    { id: 'slot-204', lotId: 'lot-2', slotNumber: 'C4', status: 'available', pricePerHour: 4 },
    { id: 'slot-205', lotId: 'lot-2', slotNumber: 'C5', status: 'reserved', pricePerHour: 4 },
    { id: 'slot-206', lotId: 'lot-2', slotNumber: 'D1', status: 'available', pricePerHour: 4 },
    { id: 'slot-207', lotId: 'lot-2', slotNumber: 'D2', status: 'occupied', pricePerHour: 4 },
    { id: 'slot-208', lotId: 'lot-2', slotNumber: 'D3', status: 'available', pricePerHour: 4 },
    { id: 'slot-209', lotId: 'lot-2', slotNumber: 'D4', status: 'available', pricePerHour: 4 },
    { id: 'slot-210', lotId: 'lot-2', slotNumber: 'D5', status: 'occupied', pricePerHour: 4 },
    { id: 'slot-211', lotId: 'lot-2', slotNumber: 'E1', status: 'available', pricePerHour: 4 },
    { id: 'slot-212', lotId: 'lot-2', slotNumber: 'E2', status: 'available', pricePerHour: 4 },
    { id: 'slot-213', lotId: 'lot-2', slotNumber: 'E3', status: 'occupied', pricePerHour: 4 },
    { id: 'slot-214', lotId: 'lot-2', slotNumber: 'E4', status: 'available', pricePerHour: 4 },
    { id: 'slot-215', lotId: 'lot-2', slotNumber: 'E5', status: 'available', pricePerHour: 4 },
    { id: 'slot-216', lotId: 'lot-2', slotNumber: 'F1', status: 'occupied', pricePerHour: 4 },
    { id: 'slot-217', lotId: 'lot-2', slotNumber: 'F2', status: 'available', pricePerHour: 4 },
    { id: 'slot-218', lotId: 'lot-2', slotNumber: 'F3', status: 'available', pricePerHour: 4 }
  ]
};

module.exports = { parkingLots, slotsByLot };
