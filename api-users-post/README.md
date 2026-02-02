# 🚀 API de Usuários e Posts

Este projeto foi desenvolvido com o objetivo de **evoluir nos estudos em Node.js**, indo além do básico de uma API REST, implementando **relacionamentos**, **autenticação com JWT** e **proteção de rotas**.

Ele é uma continuação natural do primeiro projeto, trazendo um **nível a mais de complexidade** e boas práticas de backend.

---

## 🧠 O que aprendi com este projeto

- Criação de uma API REST mais estruturada
- Relacionamento entre entidades (Usuários e Posts)
- Uso de **JWT para autenticação**
- Proteção de rotas com middleware
- Criptografia de senhas com BCrypt
- Extração de dados do usuário a partir do token
- Uso do Prisma ORM com relações
- Testes de rotas autenticadas no Postman

---

## 🛠️ Tecnologias Utilizadas

- Node.js  
- Express  
- Prisma ORM  
- Banco de Dados SQL  
- BCrypt (criptografia de senhas)  
- JSON Web Token (JWT)  
- Nodemon  

---

## 📌 Funcionalidades

- Cadastro de usuários  
- Criptografia de senha  
- Login com geração de token JWT  
- Middleware de autenticação  
- Criação de posts vinculados ao usuário autenticado  
- Listagem de usuários  
- Listagem de posts com dados do usuário  
- Rotas organizadas (controllers e routes)  

---

## 🔐 Segurança

- As senhas são **criptografadas antes de serem salvas no banco**
- Apenas usuários com senha criptografada conseguem autenticar
- O **JWT valida se o usuário está autenticado**
- Rotas protegidas exigem token no header
- O `userId` do post é obtido diretamente do token, evitando fraudes

---

## 🔗 Relacionamento

- Um usuário pode ter **vários posts**
- Cada post pertence a **um único usuário**
- O relacionamento é gerenciado pelo Prisma ORM

---

## ▶️ Como Rodar o Projeto

### Clone o repositório
```bash
git clone https://github.com/marisouza31/nodejs-backend-projects.git
```
### Acesse a pasta do projeto
```bash
cd nodejs-backend-projects/api-users-posts
```
### Instale as dependências
```bash
npm install
```
### Configure o banco de dados
```bash
npx prisma migrate dev
```
### Inicie o servidor
```bash
npm run dev
```
### O servidor irá rodar em:
```bash
http://localhost:3333
```
## 🧪 Ferramentas para teste da API:
- Postman
- Insomnia
