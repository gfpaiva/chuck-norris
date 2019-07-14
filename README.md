# Chuck Norris Facts #

[![Build Status](https://travis-ci.org/gfpaiva/chuck-norris.svg?branch=master)](https://travis-ci.org/gfpaiva/chuck-norris) [![Coverage Status](https://coveralls.io/repos/github/gfpaiva/chuck-norris/badge.svg?branch=master)](https://coveralls.io/github/gfpaiva/chuck-norris?branch=master)

[Chuck Norris Facts](https://gfpaiva-chucknorris.netlify.com/) Selecione uma categoria e leia um fato sobre o Chuck Norris

## ⚙️ Requer

- Node 10.9.0+
- NPM 6.4.1

## 🏃🏽‍♂️ Rodar projeto local

**Instalação**
- `npm install` ou `npm i`
- `yarn`

`npm start` ou `npm start -- --no` e abra `http://localhost:3000/` no seu browser

Npm scripts:

| command              | description                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| npm run start        | inicia servidor local em `localhost:3000`                                                                                                    |
| npm run build:dev    | cria build com arquivos "abertos" em modo de desenvolvimento                                                                                 |
| npm run build:prod   | cria build para produção com arquivos minificatos e otimizados                                                                               |

## ✔️ Checks

- [TravisCI](https://travis-ci.org)
- [Coveralls](https://coveralls.io)

## 🔍 Testes

Feito com [Jest](https://jestjs.io/) e [Enzyme](https://airbnb.io/enzyme/)

Npm scripts:

| command              | description                                        |
| -------------------- | -------------------------------------------------- |
| npm test -- --watch  | roda todos os testes em modo `watch`               |

## 🚀 Deploy

Hospedado no [netlify](https://www.netlify.com/).
Deploy feito pela [CLI do netlify](https://www.netlify.com/docs/cli/) após os checks do TravisCI.

## ⚖️ Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.
