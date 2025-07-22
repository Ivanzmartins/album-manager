# Gerenciador de Fotos Familiares

Aplicação fullstack para gerenciamento de fotos familiares com React (Frontend) e Node.js (Backend).

## 🚀 Como executar

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- npm ou yarn

### 🔧 Configuração

1. Clone o repositório

```bash
git clone [git@github.com:Ivanzmartins/album-manager.git]
```
2. Backend
 ```bash
  cd backend
  npm install
  npm run dev
  npm run migration:run
```

Em outro terminal (ainda no diretório backend):
```bash
  docker-compose up -d
  npm run migration:run
```

3. Frontend
```bash
  cd ../frontend
  npm install
  npm run dev
```

4.🧪 Testes
```bash
cd backend
npm run test
```
5.🌐 Endpoints
* Frontend: http://localhost:5173
* Backend: http://localhost:3000

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

