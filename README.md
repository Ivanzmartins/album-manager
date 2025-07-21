Este é um projeto fullstack para gerenciamento de álbuns de fotos familiares, desenvolvido com React (frontend) e Node.js (backend), ambos utilizando TypeScript.

## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Docker e Docker Compose (para o banco de dados)

## Instalação e Execução

Siga estes passos para configurar e executar o projeto localmente:

### 1. Configurar o backend

1. Navegue até o diretório do backend:
   ```bash
   cd backend
Instale as dependências:

bash
npm install
Inicie o servidor de desenvolvimento:

bash
npm run dev
Em outro terminal (ainda no diretório backend), inicie o banco de dados com Docker:

bash
docker-compose up -d
Execute as migrações do banco de dados:

bash
npm run migration:run
(Opcional) Execute os testes do backend:

bash
npm run test
2. Configurar o frontend
Abra um novo terminal e navegue até o diretório do frontend:

bash
cd frontend
Instale as dependências:

bash
npm install
Inicie o servidor de desenvolvimento:

bash
npm run dev
Acessando a aplicação
Frontend: http://localhost:3000

Backend: http://localhost:4000

Estrutura do Projeto
.
├── backend/               # Backend da aplicação (Node.js + TypeScript)
│   ├── src/               # Código fonte do backend
│   ├── tests/             # Testes do backend
│   ├── docker-compose.yml # Configuração do Docker para o banco de dados
│   └── ...                # Outros arquivos de configuração
├── frontend/              # Frontend da aplicação (React + TypeScript)
│   ├── src/               # Código fonte do frontend
│   ├── public/            # Arquivos públicos
│   └── ...                # Outros arquivos de configuração
└── README.md              # Este arquivo

Funcionalidades Implementadas
Visualização de usuários, álbuns e fotos

CRUD para fotos e álbuns do usuário atual

Testes
O projeto inclui testes unitários para o backend. Para executá-los:

bash
cd backend
npm run test
