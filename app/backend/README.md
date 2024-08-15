# Backend

### Como rodar?

1. Abra a pasta do backend

   ```sh
   cd app/backend
   ```

2. Configure o prisma

      ```sh
   npx prisma db push
   npx generate
   ```

3. Para verificar se o banco foi populado pode abrir a studo do prisma:

      ```sh
   npx prisma studio
   ```

   ![alt text](./img/prisma-studio.png)

4. Rode o projeto pelo terminal

```sh
   npm run dev
   ```

### Teste das requisições

1. instalar a extensão REST Client
   ![alt text](./img/rest-client.png)
2. Abra algum dos arquivos .http ()

```sh
   cd api-test
   code jogo.http # code abre no vscode
   ```

1. Clique em "Send Request" e será listado os jogos cadastrados
