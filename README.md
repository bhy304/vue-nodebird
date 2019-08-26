# vue-nodebird
Vue.js with Nuxt.js

## Dependencies
* vue@2.6.10
* nuxt@2.9.1
* vuetify@2.0.10
* @nuxtjs/vuetify@1.4.0
* axios@0.19.0
* @nuxtjs/axios@5.6.0

## Settings
  
```bash
mkdir ch1 # make a directory in project folder
mkdir front # make a directory in ch1
```

```bash
cd ch1/front

npm init # To create 'package.json' file 
```

Install vue and nuxt

```bash
npm i vue nuxt
```

## The Pages Directory

```bash
mkdir pages # contains the top level views
```

* pages/index.vue
* pages/signup.vue
* pages/profile.vue

## The Layouts Directory

```bash
mkdir layouts # contains your layouts
```

* layouts/default.vue
* ~~layouts/admin.vue~~

## Using Vuetify

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

* components/LoginForm.vue
* components/PostCard.vue

## ch1/front/nuxt.config.js
Used to modify the default nuxt configuration

## Start a development server

```bash
npm run dev
```

Access http://localhost:3000 in your browser!!!