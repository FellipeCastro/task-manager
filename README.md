# TASK-MANAGER 🚀

![TaskManager Preview](https://fellipecastro.vercel.app/assets/task-manager-MWbXBeoc.png) 

Plataforma completa de gerenciamento de tarefas com frontend em React (Vite) e backend em Node.js + MySQL, com sistema de autenticação JWT.

## 📂 Estrutura do Projeto

```
TASK-MANAGER/
├── task-manager-api/              # Backend Node.js
│   ├── src/
│   │   ├── controllers/           # Lógica das rotas
│   │   ├── database/              # Conexão com MySQL
│   │   ├── repositories/          # Acesso a dados
│   │   ├── services/              # Regras de negócio
│   │   ├── index.js               # Entry point
│   │   ├── routes.js              # Definição de rotas
│   │   └── token.js               # Autenticação JWT
│   ├── .env                       # Variáveis de ambiente
│   └── package.json               # Dependências
│
└── task-manager-web/              # Frontend React (Vite)
    ├── public/                    # Assets estáticos
    ├── src/
    │   ├── assets/                # Imagens/fontes
    │   ├── components/            # Componentes UI
    │   ├── layout/                # Layouts da aplicação
    │   ├── pages/                 # Páginas
    │   ├── constants/             # Constantes
    │   ├── App.jsx                # Componente raiz
    │   └── main.jsx               # Renderização
    └── package.json               # Dependências
```

## 🛠️ Tecnologias Utilizadas

### Backend (task-manager-api)
- **Runtime**: Node.js (ES Modules)
- **Framework**: Express
- **Banco de Dados**: MySQL (mysql2)
- **Autenticação**: JWT (jsonwebtoken)
- **Segurança**: bcrypt (hash de senhas), CORS
- **Variáveis de Ambiente**: dotenv

### Frontend (task-manager-web)
- **Framework**: React 18
- **Bundler**: Vite
- **Roteamento**: React Router DOM 6
- **HTTP Client**: Axios
- **Ícones**: React Icons
- **Linter**: ESLint com plugins React
- **CSS**: Vanilla CSS (index.css)

## 📦 Dependências Principais

### Backend (`package.json`)
```json
"dependencies": {
  "bcrypt": "^5.1.1",          // Hash de senhas
  "cors": "^2.8.5",            // Middleware CORS
  "dotenv": "^16.4.5",         // Gerenciamento de .env
  "express": "^4.21.1",        // Framework web
  "jsonwebtoken": "^9.0.2",    // Autenticação JWT
  "mysql2": "^3.11.4"          // Driver MySQL
}
```

### Frontend (`package.json`)
```json
"dependencies": {
  "axios": "^1.7.7",           // Chamadas HTTP
  "react": "^18.3.1",          // Biblioteca principal
  "react-dom": "^18.3.1",      // Renderização
  "react-icons": "^5.3.0",     // Ícones populares
  "react-router-dom": "^6.27.0" // Navegação SPA
}
```

## 🗄️ Estrutura do Banco de Dados

```sql
CREATE DATABASE task_manager_db;
USE task_manager_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE boards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    user_id INT, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    board_id INT, 
    title VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (board_id) REFERENCES boards(id) ON DELETE CASCADE
);

CREATE TABLE subtasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task_id INT,
    title VARCHAR(255),
    is_done BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
);
```

## 🔧 Configuração do Ambiente

1. **Backend**:
   - Crie um arquivo `.env` na raiz do backend com:
     ```env
      DB_HOST=seu_host
      DB_PORT=sua_porta
      DB_USER=seu_usuario
      DB_PASSWORD=sua_senha
      DB_NAME=task_manager_db
      TOKEN_SECRET=seu_segredo_jwt
     ```

## 🚀 Execução do Projeto

### Backend
```bash
cd task-manager-api
npm install
npm run dev  # Modo desenvolvimento com watch
```

### Frontend
```bash
cd task-manager-web
npm install
npm run dev  # Inicia na porta 5173
```

## 📌 Scripts Disponíveis

### Backend
- `npm run dev`: Inicia servidor com nodemon (watch mode)

### Frontend
- `npm run dev`: Inicia Vite dev server
- `npm run build`: Cria build de produção
- `npm run lint`: Executa ESLint
- `npm run preview`: Pré-visualiza build de produção

## 🔐 Autenticação

O sistema utiliza:
- **JWT** para tokens de acesso
- **bcrypt** para hash de senhas
- Rotas protegidas com middleware de autenticação

## 🌐 Deploy

Configuração Vercel pronta em ambos os projetos:
- Backend como serverless functions
- Frontend como static site

## 🤝 Boas Práticas

- ESLint configurado com:
  - `eslint-plugin-react`
  - `eslint-plugin-react-hooks`
  - `eslint-plugin-react-refresh`
- Arquitetura limpa (backend):
  - Controllers → Services → Repositories → Database

## 📄 Licença

MIT - Veja [LICENSE](LICENSE) em ambos os projetos.
