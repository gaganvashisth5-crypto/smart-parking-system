const API_BASE = 'http://localhost:3000/api';

async function fetchParkingLots() {
  const response = await fetch(`${API_BASE}/parking-lots`);
  return response.json();
}

async function fetchLotSlots(lotId) {
  const response = await fetch(`${API_BASE}/parking-lots/${lotId}/slots`);
  return response.json();
}

function renderStats(summary) {
  const statsGrid = document.getElementById('statsGrid');
  const items = [
    { label: 'Total Lots', value: summary.totalLots },
    { label: 'Total Slots', value: summary.totalSlots },
    { label: 'Available', value: summary.available },
    { label: 'Occupied', value: summary.occupied }
  ];

  statsGrid.innerHTML = items
    .map(
      item => `
        <div class="stat-card">
          <h3>${item.label}</h3>
          <div class="value">${item.value}</div>
        </div>
      `
    )
    .join('');
}

function renderLots(lots) {
  const lotList = document.getElementById('lotList');
  lotList.innerHTML = lots
    .map(
      lot => `
        <div class="lot-item">
          <strong>${lot.name}</strong>
          <div>${lot.address}</div>
          <div>Rate: $${lot.hourlyRate}/hr</div>
          <button data-lot-id="${lot.id}" class="lot-button">View Slots</button>
        </div>
      `
    )
    .join('');

  document.querySelectorAll('.lot-button').forEach(button => {
    button.addEventListener('click', async () => {
      const lotId = button.dataset.lotId;
      const result = await fetchLotSlots(lotId);
      renderSlots(result.data);
    });
  });
}

function renderSlots(slots) {
  const slotList = document.getElementById('slotList');
  slotList.innerHTML = slots
    .map(
      slot => `
        <div class="slot-item">
          <strong>${slot.slotNumber}</strong>
          <div>Price: $${slot.pricePerHour}/hr</div>
          <span class="badge ${slot.status}">${slot.status}</span>
        </div>
      `
    )
    .join('');
}

async function loadDashboard() {
  const lotsResponse = await fetchParkingLots();
  const adminResponse = await fetch(`${API_BASE}/admin/summary`);

  if (lotsResponse.success && adminResponse.ok) {
    const summary = (await adminResponse.json()).data;
    renderStats(summary);
    renderLots(lotsResponse.data);
    renderSlots(lotsResponse.data[0] ? (await fetchLotSlots(lotsResponse.data[0].id)).data : []);
  }
}

document.getElementById('refreshBtn').addEventListener('click', loadDashboard);

loadDashboard();
