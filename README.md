# Family Photo manager

Aplicação fullstack para gerenciamento de fotos familiares com React (Frontend) e Node.js (Backend).
Fullstack application for family photos with React (Frontend) and Node.js (Backend).

## 🚀 How to run:

### Requirements

- Node.js 18+
- Docker and Docker Compose
- npm

### 🔧 Configuration

1. Clone the repository

```bash
git clone git@github.com:Ivanzmartins/album-manager.git
```

2. Backend

```bash
cd backend
docker-compose up -d
npm run migration:run
npm install
npm run dev
```

🧪 Testing

```bash
cd backend
npm run test
```

3. Frontend

```bash
  cd ../frontend
  npm install
  npm run dev
```

5.🌐 Endpoints

- Frontend: http://localhost:5173
- Backend: http://localhost:`<defined in .env PORT >`

## Tecnologias Utilizadas

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" width="40" />
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg" alt="TailwindCSS" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="40" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" width="40" />
</div>
