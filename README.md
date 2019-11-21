# FIAP | Mobile Development<br>Trabalho Final de Desenvolvimento de APIs com Node.js<br>


### Sobre:

Este é um projeto final para o módulo de **Desenvolvimento de APIs com Node.js** e contém as seguintes bibliotecas externas:</br>

- **body-parser**: Biblioteca para realizar o parse de objetos de resposta em JSON.
- **cache-manager**: Biblioteca para cache de dados em memória.
- **express**: Biblioteca para mapeamento e construção de aplicações Web e REST.
- **firebase**: Biblioteca para integração da aplicação Node.js com o banco de dados.
- **jsonwebtoken**: Biblioteca para realizar a validação e criação de token JWT.

**As bibliotecas utilizadas possuem um número fixo de versão para garantir o funcionamento no futuro.**

### Funcionalidades
- [x] Criação/Validação do Token deverá ser usado JWT;
- [x] O token deve ter validade de 12 horas;
- [x] Endpoint para criação de Token de autenticação;
- [x] Todas as rotas precisam possuir um middleware de validação do Token;
- [x] Rota de 500;
- [x] Rota de 404;
- [x] Deverá ser criado dois recursos, um deverá ser de usuários e outro a sua escolha (ex.: produtos);
- [x] Deverá existir uma organização no projeto, por exemplo, MVC (Model View Controller);
- [x] Deverá existir integração com base de dados, por exemplo, firebase;
- [x] Deverá estar disponível no Heroku.

### Documentação / Postman

O projeto conta com **`collections`** e **`environments`** do *Postman* para auxiliar os testes. Os arquivos estão localizados no diretório **`postman-documents`**.

### Setup

Para executar o projeto, execute os comandos abaixo no terminal:
```sh
$ git clone <endereco-do-repositorio>
$ cd <diretorio-base>/FIAP.NodeFinalWork/
$ npm install
$ npm run start-dev
```

### Ambiente de desenvolvimento
- **macOS** 10.15.2
- **Node.js** 12.13.1
- **npm** 6.13.1
- **VS Code** 1.40.1