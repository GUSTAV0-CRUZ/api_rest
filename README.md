# API REST - Gestão de Alunos

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

> API RESTful segura para cadastro e gerenciamento de alunos, com autenticação de usuários via JWT (JSON Web Token) e upload de fotos.

## 📄 Sobre o Projeto

Este projeto é um serviço de back-end (API REST) robusto para gerenciar um cadastro de alunos. A API permite a criação de usuários, autenticação via token, e operações CRUD (Create, Read, Update, Delete) completas para os alunos, incluindo o upload de fotos de perfil.

O foco foi construir uma API seguindo as melhores práticas de mercado, com código limpo (ESLint), rotas seguras e um sistema de autenticação moderno.

## 🚀 Infraestrutura e Deploy

* **Hospedagem:** A aplicação está em produção em uma **VM (EC2) da AWS**.
* **Gerenciador de Processos:** O **PM2** é utilizado na VM para garantir que a API permaneça online, reiniciando-a automaticamente em caso de falhas.
* **Banco de Dados:** O banco de dados **MariaDB** está containerizado usando **Docker**.
* **Testes de API:** As rotas foram testadas e validadas utilizando o **Insomnia**.
* **Gerenciamento do BD:** O banco de dados foi gerenciado e visualizado através do **MySQL Workbench**.

## ✨ Funcionalidades Principais

* **Autenticação de Usuários:**
    * Rota `POST /users` para registrar novos usuários com hash de senha (usando `bcrypt`).
    * Rota `POST /token` para login, que retorna um **JSON Web Token (JWT)** se as credenciais estiverem corretas.
* **Rotas Protegidas:** A maioria das rotas é protegida e só pode ser acessada com um token JWT válido no header da requisição.
* **CRUD de Alunos com Relacionamento de Dados:**
    * Rotas `GET`, `POST`, `PUT` e `DELETE` seguindo os padrões RESTful para o gerenciamento completo dos alunos.
    * A API gerencia o relacionamento 1-N (um-para-muitos) entre Alunos e Fotos.
* **Upload de Fotos:** Rota `POST /picture` que utiliza `multer` para permitir o upload de múltiplas fotos, que são associadas a um aluno específico.

## 🛠️ Arquitetura e Tecnologias Utilizadas

A API foi construída em **Node.js** e utiliza uma arquitetura organizada com separação de responsabilidades:

* **Servidor:** **Express.js** para o gerenciamento de rotas RESTful e middlewares.
* **Banco de Dados:** **MariaDB** para persistência dos dados.
* **ORM :** **Sequelize** para modelar os dados (Alunos, Usuários, Fotos) e gerenciar os **relacionamentos** entre as tabelas SQL de forma segura.
* **Autenticação:** **JSON Web Token (JWT)** para criar tokens de sessão seguros e **bcrypt** para criptografar as senhas dos usuários.
* **Upload de Arquivos:** **Multer** para gerenciar o upload de imagens .
* **Transpilação:** **Sucrase** e **Nodemon** para permitir o uso de sintaxe de `import/export` (ES6 Modules) no Node.js em ambiente de desenvolvimento.
* **Qualidade de Código:** **ESLint** (com base nas regras do Airbnb) para garantir um padrão de código limpo e consistente.

## 📚 Agradecimentos e Créditos

Este projeto foi desenvolvido com base nos ensinamentos do curso **"Curso de JavaScript e TypeScript do básico ao avançado JS/TS"**, ministrado pelo professor **Luiz Otávio Miranda**.

## 👨‍💻 Autor

| [<img src="https://github.com/GUSTAV0-CRUZ.png" width="100px;"/><br /><sub><b>Gustavo Cruz</b></sub>](https://github.com/GUSTAV0-CRUZ) |
| :---: |

Projeto desenvolvido por Gustavo Cruz (GUSTAV0-CRUZ).
