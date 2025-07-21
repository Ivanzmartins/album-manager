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

🛠️ Tecnologias
Frontend: React, TypeScript, TailwindCSS, React Query

Backend: Node.js, Exp⚙️ Funcionalidades
✅ CRUD de álbuns e fotos

✅ Visualização de álbuns/fotos de outros usuários

✅ Testes unitáriosress, TypeORM, PostgreSQL

Testes: Jest
