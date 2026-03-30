# Projeto Full Stack com Autenticação JWT

Este projeto é uma aplicação full stack desenvolvida com foco em autenticação segura de usuários, integração entre frontend e backend e organização de fluxo de login protegido.

O backend foi construído com implementação de **JWT (JSON Web Token)** para autenticação e autorização de rotas, sendo meu **primeiro projeto aplicando esse modelo na prática**. O frontend foi desenvolvido em **React**, com interface voltada para consumo da API e gerenciamento da experiência do usuário durante o processo de login, acesso e navegação.

## Objetivo do projeto

O principal objetivo deste projeto foi colocar em prática conceitos essenciais do desenvolvimento web moderno, especialmente:

- comunicação entre frontend e backend
- autenticação de usuários com JWT
- proteção de rotas
- gerenciamento de estado no frontend
- consumo de API
- organização de uma aplicação full stack

Mais do que construir uma aplicação funcional, este projeto também marcou um passo importante no meu aprendizado, porque foi a **primeira vez que implementei autenticação JWT em um backend real**, conectando isso a um frontend em React.

## Tecnologias utilizadas

### Frontend
- React
- JavaScript
- CSS / Styled Components / Tailwind / Bootstrap *(ajuste para o que você usou)*
- Axios *(se usou)*

### Backend
- Node.js
- Express
- JWT (JSON Web Token)
- Bcrypt *(se usou para senha)*
- Cors
- Dotenv

### Banco de dados
- MongoDB / MySQL / PostgreSQL / outro *(troque pelo seu)*

## Funcionalidades

- cadastro de usuário
- login com autenticação
- geração de token JWT
- acesso a rotas protegidas
- comunicação entre frontend e backend
- validação de credenciais
- interface React consumindo os dados da API

## Como funciona a autenticação

A autenticação foi implementada utilizando **JWT**, permitindo que o usuário faça login e receba um token válido para acessar áreas protegidas do sistema.

O fluxo acontece da seguinte forma:

1. o usuário envia suas credenciais no login
2. o backend valida os dados
3. se estiver tudo correto, um token JWT é gerado
4. esse token é enviado para o frontend
5. o frontend armazena o token e o utiliza nas requisições autenticadas
6. o backend verifica esse token antes de liberar o acesso às rotas protegidas

Esse processo foi importante para consolidar meu entendimento sobre segurança, sessão sem estado e controle de acesso em aplicações web.

## Estrutura do projeto

```bash
project/
│
├── backend/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.js
│
└── README.md

````

# Como executar o projeto

## Pré-requisitos

Antes de rodar o projeto, é necessário ter instalado:

* Node.js
* npm ou yarn
* Banco de dados configurado (caso o projeto utilize)

---

## 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

---

## 2. Configurar e iniciar o backend

Entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz da pasta backend com as variáveis necessárias:

```env
PORT=5000
JWT_SECRET=sua_chave_secreta
DATABASE_URL=sua_conexao
```

Inicie o servidor:

```bash
npm run dev
```

Se estiver funcionando corretamente, o backend ficará disponível em:

```bash
http://localhost:5000
```

---

## 3. Configurar e iniciar o frontend

Abra outro terminal e entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação React:

```bash
npm start
```

O frontend ficará disponível em:

```bash
http://localhost:3000
```

---

## 4. Fluxo esperado

1. Inicie primeiro o backend
2. Depois execute o frontend
3. Acesse `http://localhost:3000`
4. Faça login ou cadastro
5. O frontend irá consumir a API e utilizar o token JWT gerado pelo backend

---

## Scripts disponíveis

### Backend

```bash
npm run dev
```

Inicia o servidor em modo de desenvolvimento.

```bash
npm start
```

Inicia o servidor em modo de produção.

### Frontend

```bash
npm start
```

Executa a aplicação React.

```bash
npm run build
```

Gera a versão de produção do frontend.
