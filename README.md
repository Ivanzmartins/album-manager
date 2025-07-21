# Gerenciador de Fotos Familiares

Aplicação fullstack para gerenciamento de fotos familiares, onde membros da família podem visualizar fotos em álbuns de outros membros, além de criar, atualizar e deletar seus próprios álbuns e fotos.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (ou yarn)
- Docker e Docker Compose
- PostgreSQL (rodando via Docker Compose)

## Instalação e Execução

Siga estes passos para configurar e executar o projeto localmente:

### 1. Backend

1. Navegue até o diretório do backend:
   ```bash
   cd backend
Instale as dependências:

bash
npm install
Inicie o servidor de desenvolvimento:

bash
npm run dev
Em outro terminal, ainda no diretório backend, inicie o banco de dados com Docker:

bash
docker-compose up -d
Execute as migrações do banco de dados:

bash
npm run migration:run
2. Frontend
Abra um novo terminal e navegue até o diretório do frontend:

bash
cd frontend
Instale as dependências:

bash
npm install
Inicie o servidor de desenvolvimento:

bash
npm run dev
Testes
Para executar os testes do backend:

Navegue até o diretório do backend (se não estiver nele):

bash
cd backend
Execute os testes:

bash
npm run test
Para executar os testes em modo watch (re-executa quando há mudanças):

bash
npm run test:watch
Estrutura do Projeto
backend/: Contém toda a lógica do servidor e API

src/: Código fonte TypeScript

tests/: Testes unitários

frontend/: Contém a aplicação React

public/: Arquivos estáticos

src/: Código fonte da aplicação

Rotas da Aplicação
Frontend: http://localhost:5173 (ou outra porta indicada pelo Vite)

Backend: http://localhost:3000 (ou outra porta indicada pelo Express)

Funcionalidades
Visualizar lista de usuários

Visualizar álbuns de um usuário

Visualizar fotos em um álbum

Criar/editar/deletar álbuns (apenas para o usuário atual)

Criar/editar/deletar fotos (apenas para o usuário atual)

Dependências Principais
Backend
Express

TypeORM

PostgreSQL

Jest (para testes)

Frontend
React

React Router

Tailwind CSS

Radix UI
