# **Device IOT**

## **Sobre o Projeto**

O projeto foi desenvolvido através de desafio proposto pela empresa ProIoT para criar um CRUD de dispositivos IOT com os seguintes criterios:

- Gerenciar dispositivos IOT
    - Criar, Editar, Buscar e Excluir dispositivos
    - Cada dispositivo pode armazenar mais de um tipo de informação. (Ex. temperatura, umidade, luminosidade, etc.). Estes são dinâmicos, assim um dispositivo pode receber qualquer tipo de dado.
    - As informações do dispositivo devem acompanhar unidade de medida (ºC, %, etc.)
- Receber dados do dispositivo via POST e/ou MQTT
- Salvar dados recebidos em banco MongoDB
- Enviar via Websocket para um front-end ou Postman:
  - Quando um dispositivo for atualizado
  - Quando um dispositivo receber novas informações

## **Como Rodar a Aplicação**

`Para rodar a aplicação é necessario obter a versão do node maior ou igual 16`

```
git clone git@github.com:jefferson-moraiis/case-proIoT.git

cd case-proIoT

npm install

npm run dev
```

## **Como Testar a Aplicação no Postman**

- link da documentação para usar socktIo: https://learning.postman.com/docs/sending-requests/websocket/websocket/

- veja o video para configurar a aplicação no postman: https://drive.google.com/file/d/1y-xEht46snOJCJMdanOzNlHYwJni_Bwd/view?usp=sharing


## **Bibliotecas e Ferramentas**

- NPM
- Typescript
- Git
- Express
- Lint Staged
- Eslint
- Nodemon
- SocketIO

## **Estrutura de pasta do projeto**

```
src - pasta raiz
   |-- domain -> regras de negocios
   |   |-- entities
   |   |-- interfaces
   |   |-- usecases
   |-- infra -> infra do projeto
   |   |-- database
   |   |-- repositories
   |-- main -> configurações do projeto
   |   |-- config
   |   |-- constrollers
   |   |-- factories
   |   |-- routes
   |   |-- sockets
```

## **Metodologias**

- TDD
- Conventional Commits
- Dependency Diagrams
- Use Cases
