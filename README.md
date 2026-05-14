---

# 🖼️ Meme Central API

Esta é uma API REST desenvolvida com **Node.js**, **Express** e **TypeScript** para o gerenciamento de memes e usuários. O sistema integra autenticação via JWT, gerenciamento de sessões e persistência de dados com MongoDB.

## 🚀 Tecnologias Utilizadas

* **Backend:** Node.js + Express
* **Linguagem:** TypeScript
* **Banco de Dados:** MongoDB (via Mongoose)
* **Autenticação:** JWT (JSON Web Token) e Express-Session
* **Segurança:** CORS e Dotenv
* **Documentação:** Swagger (suporte integrado)

---

## 🛠️ Instalação e Configuração

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

```


2. **Instale as dependências:**
```bash
npm install

```


3. **Configure as variáveis de ambiente:**
Crie um arquivo `.env` na raiz do projeto:
```env
PORT=3000
API_KEY=sua_chave_secreta_aqui
MONGO_URI=sua_conexao_mongodb

```


4. **Inicie o servidor:**
```bash
npm run dev

```



---

## 📖 Documentação da API (Endpoints)

### 🖼️ Memes

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/api/meme` | Retorna todos os memes cadastrados. |
| `GET` | `/api/meme/:id` | Retorna um meme específico pelo seu ID. |
| `DELETE` | `/api/varrerMemes` | Remove **todos** os memes do banco de dados. |

### 👤 Usuários

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/api/register-user` | Lista todos os usuários registrados. |
| `GET` | `/api/user/:id` | Retorna os dados de um usuário específico. |
| `DELETE` | `/api/varrer/:api_key` | Remove todos os usuários (requer chave administrativa). |

### 🔐 Autenticação

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/api/token` | Valida se o token de acesso atual é válido (Middleware). |

---

## 📂 Estrutura do Projeto

```text
├── src
│   ├── auth           # Lógica de login, tokens e middlewares de proteção
│   ├── connect        # Configuração do banco de dados e Models (Mongoose)
│   ├── controllers    # Lógica de controle e manipulação de mídia
│   ├── routers        # Definição de rotas (Meme, User, Auth)
│   └── index.ts       # Ponto de entrada da aplicação
├── .env               # Configurações de ambiente (Não versionar!)
├── package.json       # Scripts e dependências
└── tsconfig.json      # Configuração do TypeScript

```

---

## 🛡️ Segurança e Middlewares

* **CORS:** A API está configurada para aceitar requisições de qualquer origem (`origin: '*'`).
* **Middleware de Token:** A rota `/api/token` utiliza o middleware `tokenValidation` para garantir que apenas usuários autenticados acessem certos recursos.
* **Sessões:** Utiliza `express-session` para persistência de dados de sessão curta no servidor.

## 📝 Notas de Desenvolvimento

> [!IMPORTANT]
> * O endpoint `/api/varrer/:api_key` é uma operação crítica. Certifique-se de que a `API_KEY` no seu `.env` seja forte e privada.
> * Certifique-se de que o MongoDB está rodando antes de iniciar a aplicação para que a função `connectDB()` seja bem-sucedida.
> 
> 

---

**Desenvolvido com ☕ e TypeScript.**
