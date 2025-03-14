# API de Posts com Upload de Imagens e MongoDB Atlas

Esta é uma API simples construída com **Express.js** que permite a criação, listagem e atualização de posts, além de suportar o upload de imagens. A API utiliza o **Multer** para gerenciar uploads de arquivos, o **CORS** para permitir requisições de origens específicas e o **MongoDB Atlas** como banco de dados. Além disso, integra o **Google Gemini** para gerar descrições automáticas das imagens enviadas.

## Tecnologias Utilizadas

- **Express.js**: Framework web para Node.js.
- **MongoDB Atlas**: Banco de dados em nuvem.
- **Multer**: Middleware para upload de arquivos.
- **CORS**: Middleware para permitir requisições de origens específicas.
- **Google Gemini**: IA para gerar descrições de imagens.
- **Node.js**: Ambiente de execução para JavaScript no servidor.

---

## Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/DavyL0/Backend-Blog-Node.git
   cd Backend-Blog-Node
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
     ```env
     STRING_CONEXAO=sua_string_de_conexao_do_atlas
     GEMINI_API_KEY=sua_chave_api_do_gemini
     ```

4. **Inicie o servidor**:
   ```bash
   npm start
   ```

   O servidor estará rodando em `http://localhost:8000`.

---

## Rotas da API

### Listar Posts
- **GET** `/posts`
  - Retorna a lista de todos os posts.
  - **Resposta**:
    ```json
    [
      {
        "_id": "65a1b2c3d4e5f6a7b8c9d0e1",
        "titulo": "Título do Post",
        "conteudo": "Conteúdo do Post",
        "imgUrl": "http://localhost:8000/uploads/65a1b2c3d4e5f6a7b8c9d0e1.png",
        "descricao": "Descrição gerada pelo Gemini",
        "alt": "Texto alternativo da imagem"
      }
    ]
    ```

### Criar Novo Post
- **POST** `/posts`
  - Cria um novo post.
  - **Body**:
    ```json
    {
      "titulo": "Título do Post",
      "conteudo": "Conteúdo do Post"
    }
    ```
  - **Resposta**:
    ```json
    {
      "acknowledged": true,
      "insertedId": "65a1b2c3d4e5f6a7b8c9d0e1"
    }
    ```

### Upload de Imagem
- **POST** `/upload`
  - Faz o upload de uma imagem.
  - **Body**:
    - `imagem`: Arquivo de imagem a ser enviado.
  - **Resposta**:
    ```json
    {
      "acknowledged": true,
      "insertedId": "65a1b2c3d4e5f6a7b8c9d0e1"
    }
    ```

### Atualizar Post
- **PUT** `/upload/:id`
  - Atualiza um post existente.
  - **Parâmetros**:
    - `id`: ID do post a ser atualizado.
  - **Body**:
    ```json
    {
      "alt": "Novo texto alternativo"
    }
    ```
  - **Resposta**:
    ```json
    {
      "acknowledged": true,
      "modifiedCount": 1
    }
    ```

---

## Estrutura do Projeto

- **src/controllers/PostsController.js**: Contém as funções para listar, criar e atualizar posts, além de fazer o upload de imagens.
- **src/models/PostsModel.js**: Gerencia a interação com o banco de dados MongoDB.
- **src/services/GeminiService.js**: Integra o Google Gemini para gerar descrições de imagens.
- **src/conf/DbConfig.js**: Configura a conexão com o MongoDB Atlas.
- **src/routes/routes.js**: Define as rotas da API e configura o middleware CORS e Multer.
- **uploads/**: Diretório onde as imagens enviadas são armazenadas.

---

## Exemplo de Uso

1. **Listar Posts**:
   ```bash
   curl -X GET http://localhost:8000/posts
   ```

2. **Criar Novo Post**:
   ```bash
   curl -X POST http://localhost:8000/posts -H "Content-Type: application/json" -d '{"titulo": "Meu Post", "conteudo": "Conteúdo do post"}'
   ```

3. **Upload de Imagem**:
   ```bash
   curl -X POST http://localhost:8000/upload -F "imagem=@caminho/para/imagem.png"
   ```

4. **Atualizar Post**:
   ```bash
   curl -X PUT http://localhost:8000/upload/65a1b2c3d4e5f6a7b8c9d0e1 -H "Content-Type: application/json" -d '{"alt": "Nova descrição"}'
   ```

---

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
