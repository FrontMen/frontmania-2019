# frontmania2019

[![Netlify Status](https://api.netlify.com/api/v1/badges/0ccb9c05-ed5c-4cba-9ef4-461d322e12c1/deploy-status)](https://app.netlify.com/sites/dreamy-mcnulty-dc0b12/deploys) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> Frontmania 2019 website

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Development

1. Create a feature branch
2. Make your changes
3. Stage your changes
4. Run `npm run cm` to create a conventional commit
5. Issue a PR

## Deployment

Deployment is done via [Netlify](https://app.netlify.com). When code gets merged to master, Netlify regenerates the static application via `nuxt generate` and deploys automatically.

`2019.frontmania.com` is configured to point to the netlify domain `dreamy-mcnulty-dc0b12.netlify.com.` in the TransIP domain administration panel.
