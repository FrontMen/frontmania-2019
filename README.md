# frontmania2019

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

## Deployment

Deployment is done via [Netlify](https://app.netlify.com). When code gets merged to master, Netlify regenerates the static application via `nuxt generate` and deploys automatically.

`2019.frontmania.com` is configured to point to the netlify domain `stupefied-pare-e6535b.netlify.com.` in the TransIP domain administration panel.
