# Projeto Fullstack

## Instruções para rodar o projeto

1. **Frontend**  
   - Acesse o diretório `/frontend`  
   - Execute:  
     ```bash
     npm install
     npm run dev
     ```

2. **Backend**  
   - Em outro terminal, acesse o diretório `/backend`  
   - Execute:  
     ```bash
     npm install
     npm run dev
     ```

3. **Docker**  
   - Ainda no diretório raiz do projeto, execute:  
     ```bash
     docker-compose up -d
     ```

4. **Migrações**  
   - Abra um novo terminal, vá para `/backend` e execute:  
     ```bash
     npm run migration:run
     ```

---

O projeto não está totalmente dockerizado, por isso é necessário rodar frontend e backend manualmente fora do Docker.
