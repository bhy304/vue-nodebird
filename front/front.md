# Front Setup

## Dependencies
* vue@2.6.10
* nuxt@2.9.2
* vuetify@2.0.11
* @nuxtjs/vuetify@1.6.1
* axios@0.19.0
* @nuxtjs/axios@5.6.0
* eslint@6.3.0
* eslint-plugin-vue@5.2.3
* lodash.throttle@4.1.1
***

```bash
mkdir front # Make a directory in project folder

cd vue-nodebird/front

npm init # To create 'package.json' file 
```

Install Vue and Nuxt
```bash
npm i vue nuxt
```

## The Pages Directory
```bash
mkdir pages # contains the top level views
```

## The Layouts Directory
```bash
mkdir layouts # contains your layouts
```

## Vuetify
[Vuetify](https://vuetifyjs.com/ko/) is a Material Design component framework for Vue.js

Install vuetify and axios 
```bash
npm i vuetify
npm i @nuxtjs/vuetify
npm i @nuxtjs/axios axios
```

## The Components Directory
```bash
mkdir components # contains your reusable vue components
```

## ESLint
[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. 

Install eslint and eslint-plugin-vue
```bash
npm i -D eslint eslint-plugin-vue 
# -D, --save-dev : Package will appear in your devDependencies
```

Create the ESLint Configuration file formats
* .eslintrc
* .eslintignore 
  
Add a lint script to your ```package.json```
```bash
npm run lint
```

## Vuex Module System
```bash
mkdir store # contains your Vuex Store files
```

## The Middleware Directory
```bash
mkdir middleware # contains your Application Middleware
```

```bash
npm i lodash.throttle
```

## Start a development server
```bash
npm run dev
```
> Access http://localhost:3000 in your browser!