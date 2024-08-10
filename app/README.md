# Projeto My E-Commerce

## Sobre

Este projeto faz parte da matéria de Arquitetura & Design de Software ministrada na Faculdade do Gama. O objetivo principal é aplicar técnicas, modelos e conceitos de projeto de software, transformando requisitos em um desenho (projeto) de software. O aprendizado é baseado na construção de um projeto, no qual grupo decidiu focar na categoria de e-commerce, se baseando no site de venda de jogos da Epic Games BR.

## Configuração e Execução

### Pré-requisitos

Certifique-se de ter o Docker e o Docker Compose instalados no seu sistema.

#### Instalação do Docker Compose no Windows

1. Baixe e instale o Docker Desktop para Windows a partir de [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop).

2. Após a instalação, verifique se o Docker Compose está disponível:

   ```sh
   docker-compose --version
   ```

#### Instalação do Docker Compose no Linux

1. Execute os seguintes comandos no terminal:

   ```sh
   sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   ```

2. Verifique se o Docker Compose está disponível:

   ```sh
   docker-compose --version
   ```

### Arquivo .env

Crie o arquivo `.env` com base no  `.env.example`.

1. Execute o comando no terminal do Linux:

   ```sh
   cd app/
   cp .env.example .env
   ```

2. Execute o comando no terminal do Windows:

   ```sh
   cd app/
   copy .env.example .env
   ```

### Primeira Execução

Na primeira vez que for rodar o projeto, utilize o comando abaixo para construir e iniciar os contêineres:

```sh
git clone https://github.com/UnBArqDsw2024-1/2024.1_G1_My_Ecommerce.git
cd app/my-app
docker-compose up --build
```

### Execuções Futuras

Para iniciar o projeto nas próximas vezes, apenas utilize o comando:

```sh
cd app/my-app
docker-compose up
```
