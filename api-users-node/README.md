# 🚀 API de Usuários com Node.js

Este projeto foi desenvolvido com o objetivo de **praticar Node.js** e entender, na prática, como funciona a criação de uma **API REST**, incluindo autenticação, segurança e integração com banco de dados.

---

## 🧠 O que aprendi com este projeto

- Estruturação de uma API REST
- Organização de pastas (routes, controllers)
- Criptografia de senhas
- Autenticação e validação com JWT
- Uso de ORM para facilitar o acesso ao banco de dados
- Conceitos básicos de segurança no backend

---

## 🛠️ Tecnologias Utilizadas

- Node.js  
- Express  
- Prisma ORM  
- SQLite  
- BCrypt (criptografia de senhas)  
- JSON Web Token (JWT)  
- Nodemon  

---

## 📌 Funcionalidades

- Cadastro de usuários  
- Criptografia de senha com BCrypt  
- Autenticação com JWT  
- Validação de token  
- Integração com banco de dados usando Prisma  
- Rotas organizadas (controllers e routes)  

---

## 🔐 Segurança

- As senhas são **criptografadas antes de serem salvas no banco**, evitando o vazamento de dados sensíveis.  
- O **JWT** é utilizado para validar se o usuário está autenticado.  
- Middleware responsável pela verificação do token.  

---

## Como Rodar o Projeto:

### Clone o repositório
```bash
git clone https://github.com/marisouza31/node-projects.git
```
### Acesse a pasta do projeto
```bash
cd node-projects/api-users-node
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
