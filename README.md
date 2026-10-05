# Smart Parking System

A full-stack starter project for a smart parking management platform with real-time parking availability, reservation workflows, and admin monitoring.

## Features
- Real-time parking lot and slot status
- Reservation management
- Payment-ready API structure
- Dashboard-ready admin endpoints
- IoT sensor simulation support
- Responsive web frontend starter

## Repository Structure

```text
smart-parking-system/
├── backend/
│   ├── package.json
│   └── src/
│       ├── data/
│       │   └── seedData.js
│       ├── routes/
│       │   ├── admin.js
│       │   ├── parking.js
│       │   └── reservations.js
│       ├── utils/
│       │   └── helpers.js
│       ├── app.js
│       └── server.js
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── database/
│   └── schema.sql
├── docs/
│   └── architecture.md
├── .gitignore
├── README.md
└── package.json
```

## Stack
- Backend: Node.js + Express
- Frontend: Vanilla JavaScript + HTML + CSS
- Database: PostgreSQL-ready SQL schema
- Sensors: simulated using seed data and status updates

## Quick Start

### 1. Install backend dependencies
```bash
cd backend
npm install
```

### 2. Start the API server
```bash
npm run dev
```

The backend runs at:
- http://localhost:3000

### 3. Open the frontend
Open `frontend/index.html` in a browser or use a local static server:

```bash
cd frontend
python -m http.server 8080
```

Then visit: http://localhost:8080

## API Examples

### Get parking lots
```bash
curl http://localhost:3000/api/parking-lots
```

### Get available slots
```bash
curl http://localhost:3000/api/parking-lots/1/slots
```

### Create a reservation
```bash
curl -X POST http://localhost:3000/api/reservations \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "u-1001",
    "slotId": "slot-101",
    "startTime": "2026-10-05T10:00:00Z",
    "endTime": "2026-10-05T12:00:00Z"
  }'
```

## Notes
This starter project is intentionally simple and extensible. It includes mock data and modular routes so you can expand it into a production-ready smart parking platform with real sensors, payment integration, and dashboards.
