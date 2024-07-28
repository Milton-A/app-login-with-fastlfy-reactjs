---

# README - Projeto de Login e Cadastro

![image](https://github.com/user-attachments/assets/a23b3bb4-4c59-4042-b1f4-0f62ddea0b2d)

## Descrição

Este projeto é uma aplicação web simples para login e cadastro de usuários, construída com uma stack moderna de tecnologias web. A aplicação segue o padrão de design **MVVM** (Model-View-ViewModel) e utiliza uma arquitetura baseada em componentes para promover modularidade e reutilização.

## Tecnologias Utilizadas

### Backend

- **Node.js**: Plataforma de desenvolvimento server-side.
- **Fastify**: Framework web para Node.js, focado em performance.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipos estáticos.
- **Prisma**: ORM para interagir com o banco de dados.

### Frontend

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **ReactDOM**: Pacote que fornece métodos específicos do DOM para o nível superior da aplicação.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **Tailwind CSS**: Framework de CSS para estilização.
- **clsx**: Utilitário para construção de classes condicionais.

## Design Patterns Utilizados

### Backend

- **Arquitetura MVC Adaptada**: Separação clara entre a lógica de negócios, a configuração e o roteamento.
- **Modularidade**: Organização em módulos distintos para facilitar manutenção e escalabilidade.
- **Validação**: Uso de `fastify-type-provider-zod` para garantir que os dados das requisições estejam corretos.
- **Injeção de Dependência**: Utilização do Prisma Client como uma instância compartilhada para interagir com o banco de dados.

### Frontend

- **MVVM (Model-View-ViewModel)**: Separa a lógica de negócios (Model), a interface do usuário (View) e a lógica de apresentação (ViewModel).
- **Component-Based Architecture**: Utiliza componentes reutilizáveis para construir a interface do usuário.
- **Hook Pattern**: Custom Hooks para encapsular lógica de estado e efeitos colaterais.
- **Context API**: Gerencia o tema e variantes de componentes.
- **Factory Pattern**: Funções de API para criar e retornar dados de login e cadastro.
- **Singleton Pattern (Implícito)**: Manipulação de localStorage para dados persistentes.
- **Observer Pattern**: Atualiza a interface do usuário com base em mudanças de estado e dados.

## Estrutura do Projeto

### Backend

O backend está organizado da seguinte forma:

```
src/
│
├── controller/
│   └── userController.ts
│
├── lib/
│   └── prisma.ts
│
├── routes/
│   ├── userRoute/
│   │   └── route.ts
│   └── routes.ts
│
└── server.ts
prisma/
├── migrations/
│   ├── 20240727212127_create_user/
│   │   └── migration.sql
│   └── migration_lock.toml
├── schema.prisma
└── dev.db
```

#### Componentes Principais

- **`server.ts`**: Configura e inicializa o servidor Fastify, incluindo a configuração de rotas e plugins como CORS.
- **`routes/routes.ts`**: Configura as rotas principais do servidor, registrando rotas específicas para gerenciamento de usuários.
- **`routes/userRoute/route.ts`**: Define rotas para criação de usuários, login e listagem de usuários.
- **`controller/userController.ts`**: Contém a lógica de negócios para operações relacionadas a usuários.
- **`lib/prisma.ts`**: Configura e exporta uma instância do Prisma Client para comunicação com o banco de dados.
- **`prisma/schema.prisma`**: Define o esquema do banco de dados, incluindo o modelo de dados e relacionamentos.
- **`prisma/dev.db`**: Banco de dados SQLite utilizado para desenvolvimento.

#### Arquitetura

- **Model**
  - **`schema.prisma`**: Define a estrutura do banco de dados.
  - **`prisma.ts`**: Configura a instância do Prisma Client para interagir com o banco de dados.

- **Controller**
  - **`userController.ts`**: Gerencia a lógica de criação de usuários, autenticação e listagem de usuários.

- **View**
  - **Respostas de API**: Estrutura a forma como os dados são retornados para os clientes.

#### Configuração e Inicialização

- **server.ts**
- **routes/routes.ts**
- **routes/userRoute/route.ts**
- **lib/prisma.ts**
- **controller/userController.ts**

### Frontend

A estrutura do frontend está organizada da seguinte forma:

```
web/
├── public/
│   ├── index.html
│   ├── main.css
│   └── output.css
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── button.tsx
│   │   └── input.tsx
│   ├── models/
│   │   ├── api/
│   │   │   └── login.ts
│   │   └── loginModel.ts
│   ├── service/
│   │   └── storage.ts
│   ├── viewModels/
│   │   ├── useLoginViewModel.ts
│   │   └── useHome.ts
│   └── views/
│       ├── home/
│       │   ├── home.tsx
│       │   └── useHome.ts
│       └── login/
│           └── Login.tsx
├── index.tsx
├── .eslintrc.js
├── .gitignore
├── .hintrc
├── package.json
├── package-lock.json
└── tsconfig.json
```

#### Estrutura do Código

- **index.tsx**: Ponto de entrada da aplicação, configura o roteamento com `BrowserRouter`.
- **views/Login.tsx**: Página de login com campos para nome de usuário e senha.
- **views/home/home.tsx**: Página inicial exibida após login, mostrando o nome de usuário.
- **viewModels/useLoginViewModel.ts**: Gerencia a lógica de login e navegação.
- **viewModels/useHome.ts**: Gerencia a lógica da página inicial.
- **components/button.tsx** e **components/input.tsx**: Componentes reutilizáveis para botões e campos de entrada.
- **models/api/login.ts**: Funções para comunicação com a API, incluindo login e criação de usuário.
- **service/storage.ts**: Funções para manipulação de localStorage.

## Configuração do Projeto

### Pré-requisitos

- **Node.js**
- **npm** ou **yarn**

### Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd seu-repositorio
    ```

3. Instale as dependências:

    ```bash
    npm install
    # ou
    yarn install
    ```

### Executando o Projeto

1. Inicie o servidor backend:

    ```bash
    npm run start:server
    # ou
    yarn start:server
    ```

2. Inicie o servidor frontend:

    ```bash
    npm start
    # ou
    yarn start
    ```

## Contribuindo

1. Faça um fork do projeto.
2. Crie uma branch para sua feature:

    ```bash
    git checkout -b feature/nova-feature
    ```

3. Commit suas mudanças:

    ```bash
    git commit -am 'Adiciona nova feature'
    ```

4. Faça push para a branch:

    ```bash
    git push origin feature/nova-feature
    ```

5. Abra um Pull Request.

---

**[Backend](#backend)** | **[Frontend](#frontend)** | **[Configuração do Projeto](#configuração-do-projeto)** | **[Contribuindo](#contribuindo)**
