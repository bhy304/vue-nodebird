# vue-nodebird
VueJS with NuxtJS

## Dependencies
* vue@2.6.10
* nuxt@2.9.1
* vuetify@2.0.10
* @nuxtjs/vuetify@1.4.0
* axios@0.19.0
* @nuxtjs/axios@5.6.0
* eslint@6.2.2
* eslint-plugin-vue@5.2.3

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

```bash
mkdir post
mkdir _id
```

* ~~pages/post/_id.vue~~
* pages/post/_id/index.vue

## The Layouts Directory

```bash
mkdir layouts # contains your layouts
```

* layouts/default.vue

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

* components/LoginForm.vue
* components/PostCard.vue
* components/FollowList.vue
* components/PostForm.vue
* components/CommentForm.vue

## ESLint
[ESLint](https://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. 

Install eslint and eslint-plugin-vue
```bash
npm i -D eslint eslint-plugin-vue 
# -D, --save-dev : Package will appear in your devDependencies
```

Create the ESLint Configuration file formats
* ch1/front/.eslintrc
* ch1/front/.eslintignore 
  
Add a lint script to your ```package.json```

```bash
npm run lint
```
## Vuex Module System

```bash
mkdir store # contains your Vuex Store files
```

* store/index.js
* store/posts.js
* store/users.js

## The Middleware Directory

```bash
mkdir middleware # contains your Application Middleware
```

* middleware/authenticated.js
* middleware/anonymous.js

## Start a development server

```bash
npm run dev
```

Access http://localhost:3000 in your browser!!!

## nuxt.config.js
Used to modify the default nuxt configuration