# MyContacts API

A **MyContacts API** é uma aplicação backend desenvolvida para gerenciar contatos. A API permite que os usuários realizem operações CRUD (Create, Read, Update, Delete) para armazenar e manipular informações de contatos, como nome, e-mail e telefone. O projeto utiliza **Node.js** com **Express** e banco de dados **PostgreSQL**, com autenticação e estrutura de dados adequados.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construção de APIs REST.
- **PostgreSQL**: Banco de dados relacional utilizado para persistência de dados.
- **Yarn**: Gerenciador de pacotes.
- **ESLint**: Ferramenta de linting para garantir qualidade e padronização no código.
- **Docker**: Utilizado para criar contêineres para o banco de dados PostgreSQL.

## 🛠️ Instalação

Siga os passos abaixo para rodar a aplicação localmente.

### 1. Clonar o Repositório

```bash
git clone https://github.com/GuilhermeRenato10/MyContacts.git
cd MyContacts
yarn install
Se você está utilizando o Docker, pode rodar o PostgreSQL dentro de um contêiner. Caso contrário, crie um banco de dados PostgreSQL localmente.
DB_HOST=localhost
DB_PORT=5432
DB_USER=root
DB_PASSWORD=root
DB_NAME=mycontacts
yarn start


📚 Endpoints
Criar um Novo Contato
POST /contacts
Body:
json
Copiar código
{
  "name": "Rose",
  "email": "rose@mail.com",
  "phone": "123321123"
}
Listar Todos os Contatos
GET /contacts
Buscar Contato por ID
GET /contacts/:id
Atualizar um Contato
PUT /contacts/:id
Body:
json
Copiar código
{
  "name": "Rose Updated",
  "email": "roseupdated@mail.com",
  "phone": "987654321"
}
Deletar um Contato
DELETE /contacts/:id

👨‍💻 Desenvolvedor
Nome: Guilherme Renato
GitHub: GuilhermeRenato10
LinkedIn: https://www.linkedin.com/in/guilherme-macedo01/
