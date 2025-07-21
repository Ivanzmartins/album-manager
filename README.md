Full-stack Coding Assignment - Family Photo Management
Descrição
Aplicação para gerenciamento básico de fotos de família, onde um membro pode ver fotos em álbuns de outros membros e criar, atualizar e excluir suas próprias fotos e álbuns.

Como rodar o projeto localmente
Observação importante
O projeto não está totalmente dockerizado, então o processo envolve rodar comandos em frontend, backend e Docker separadamente.

Passo a passo
Frontend

arduino
Copiar
Editar
cd frontend
npm install
npm run dev
Em outro terminal, ou voltando para a raiz, execute o backend:

arduino
Copiar
Editar
cd backend
npm install
npm run dev
Ainda no terminal do backend, rode o Docker Compose para levantar o banco e serviços auxiliares:

Copiar
Editar
docker-compose up -d
Em outro terminal, dentro da pasta backend, execute as migrations:

arduino
Copiar
Editar
npm run migration:run
Para rodar os testes do backend:

arduino
Copiar
Editar
npm run test
Tecnologias usadas
Frontend: React + TypeScript

Backend: Node.js + TypeScript

Banco de dados via Docker Compose

API pública: JSONPlaceholder

Testes unitários

Funcionalidades
CRUD de fotos e álbuns

Visualização de fotos e álbuns de outros usuários

Edição exclusiva de fotos e álbuns do usuário logado
