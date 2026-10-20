# ResQLink

**A Failure-Aware Emergency Identification and Medical Information Continuity Platform**

> Final-year B.E. Computer Science Engineering project.
> **Status:** initial scaffold only. No business features are implemented yet.

## Overview

ResQLink is an emergency response and support coordination platform. It is intended to help authorized responders:

- manage unidentified accident victims,
- securely access verified emergency medical information,
- link an identified person to an existing incident,
- coordinate emergency contacts and hospital handover, and
- organize support requests such as blood assistance and verified fundraising.

This repository currently contains only the project skeleton: a placeholder React page and a FastAPI health-check endpoint. Features will be added one at a time.

## Technology Stack

| Layer | Technology |
| --- | --- |
| Frontend | React + Vite + JavaScript |
| UI | Tailwind CSS |
| Backend | Python + FastAPI |
| Database | PostgreSQL (not connected yet) |
| API | REST |
| Version control | Git |
| Configuration | `.env` files with `.env.example` templates |

## Folder Structure

```
ResQLink/
├── frontend/                 React + Vite app
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/       common, layout, forms, feedback
│   │   ├── pages/            one folder per feature area
│   │   ├── routes/
│   │   ├── services/         API calls
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── constants/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
├── backend/                  FastAPI app
│   ├── app/
│   │   ├── api/v1/endpoints/ REST endpoints (health only for now)
│   │   ├── core/             settings / configuration
│   │   ├── db/               database setup (later)
│   │   ├── models/           ORM models (later)
│   │   ├── schemas/          request/response schemas (later)
│   │   ├── services/         business logic (later)
│   │   ├── repositories/     data access (later)
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── main.py
│   ├── tests/
│   ├── requirements.txt
│   └── .env.example
├── docs/                     architecture, api, diagrams, project-plan
├── scripts/                  helper scripts (later)
├── .gitignore
├── LICENSE
└── README.md
```

Empty folders contain a `.gitkeep` file so Git keeps them.

## Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ (or 22+) and npm
- [Python](https://www.python.org/downloads/) 3.10+
- [Git](https://git-scm.com/)
- PostgreSQL is **not** required yet; it will be needed once database features are added.

## Run the Backend (FastAPI)

From the repository root:

**macOS / Linux**

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```

**Windows (PowerShell)**

```powershell
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
uvicorn app.main:app --reload --port 8000
```

Then check:

- Health check: <http://localhost:8000/api/v1/health> → `{"status":"ok","service":"resqlink-api"}`
- Interactive API docs: <http://localhost:8000/docs>

Run the backend test:

```bash
cd backend
pytest
```

## Run the Frontend (React + Vite)

In a second terminal, from the repository root:

```bash
cd frontend
npm install
cp .env.example .env      # Windows PowerShell: Copy-Item .env.example .env
npm run dev
```

Open <http://localhost:5173>. You should see the **ResQLink** placeholder page.

Build for production:

```bash
npm run build
```

## Environment Variables

Each app has a `.env.example` listing placeholder variable names. Copy it to `.env` and fill in values locally. **Never commit `.env` files or real secrets.**

## Documentation

Placeholders live in [`docs/`](docs/):

- [Architecture](docs/architecture/README.md)
- [API design](docs/api/README.md)
- [Diagrams](docs/diagrams/README.md)
- [Project plan](docs/project-plan/README.md)

## License

MIT. See [LICENSE](LICENSE). Update the copyright holder to your own name before publishing.
