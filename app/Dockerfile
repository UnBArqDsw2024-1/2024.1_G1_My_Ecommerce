# Definição da imagem base
FROM node:20

# Definição do diretório de trabalho dentro do container
# Alterar no Dockerfile o "my-app" para o nome da pasta do projeto
WORKDIR /myecommerce 

# Copiando os arquivos package.json e package-lock.json para o container
COPY /myecommerce/package*.json ./

# Instalando as dependências do projeto
RUN npm install

# Copiando os arquivos do projeto para o container
COPY /myecommerce .

# Fazendo o build do projeto
RUN npm run build

# Expondo a porta 3000 para acesso externo
EXPOSE 3000

ENV CHOKIDAR_USEPOLLING=true

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
