🖼️ Meme Central APIEsta é uma API REST desenvolvida com Node.js, Express e TypeScript para o gerenciamento de memes e usuários. O sistema integra autenticação via JWT, gerenciamento de sessões e persistência de dados com MongoDB.🚀 Tecnologias UtilizadasBackend: Node.js + ExpressLinguagem: TypeScriptBanco de Dados: MongoDB (via Mongoose)Autenticação: JWT (JSON Web Token) e Express-SessionSegurança: CORS e DotenvDocumentação: Swagger (suporte integrado)🛠️ Instalação e ConfiguraçãoClone o repositório:Bashgit clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:Bashnpm install
Configure as variáveis de ambiente:Crie um arquivo .env na raiz do projeto:Snippet de códigoPORT=3000
API_KEY=sua_chave_secreta_aqui
MONGO_URI=sua_conexao_mongodb
Inicie o servidor:Bashnpm run dev
📖 Documentação da API (Endpoints)🖼️ MemesMétodoRotaDescriçãoGET/api/memeRetorna todos os memes cadastrados.GET/api/meme/:idRetorna um meme específico pelo seu ID.DELETE/api/varrerMemesRemove todos os memes do banco de dados.👤 UsuáriosMétodoRotaDescriçãoGET/api/register-userLista todos os usuários registrados.GET/api/user/:idRetorna os dados de um usuário específico.DELETE/api/varrer/:api_keyRemove todos os usuários (requer chave administrativa).🔐 AutenticaçãoMétodoRotaDescriçãoGET/api/tokenValida se o token de acesso atual é válido (Middleware).📂 Estrutura do ProjetoPlaintext├── src
│   ├── auth           # Lógica de login, tokens e middlewares de proteção
│   ├── connect        # Configuração do banco de dados e Models (Mongoose)
│   ├── controllers    # Lógica de controle e manipulação de mídia
│   ├── routers        # Definição de rotas (Meme, User, Auth)
│   └── index.ts       # Ponto de entrada da aplicação
├── .env               # Configurações de ambiente (Não versionar!)
├── package.json       # Scripts e dependências
└── tsconfig.json      # Configuração do TypeScript
🛡️ Segurança e MiddlewaresCORS: A API está configurada para aceitar requisições de qualquer origem (origin: '*').Middleware de Token: A rota /api/token utiliza o middleware tokenValidation para garantir que apenas usuários autenticados acessem certos recursos.Sessões: Utiliza express-session para persistência de dados de sessão curta no servidor.📝 Notas de Desenvolvimento[!IMPORTANT]O endpoint /api/varrer/:api_key é uma operação crítica. Certifique-se de que a API_KEY no seu .env seja forte e privada.Certifique-se de que o MongoDB está rodando antes de iniciar a aplicação para que a função connectDB() seja bem-sucedida.Desenvolvido com ☕ e TypeScript.
