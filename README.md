# vue-nodebird
```
vue-nodebird
 └─ch1
    └─front 
        ├─.nuxt
        ├─components    
        ├─layouts    
        ├─middleware    
        ├─node_modules          
        ├─pages
        │  │  
        │  ├─hashtag
        │  │  └─_id         
        │  ├─post
        │  │  └─_id         
        │  └─user
        │     └─_id 
        └─store
```

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

* index.vue
* signup.vue
* profile.vue
* /post/_id/index.vue
* /hashtag/_id/index.vue
* /user/_id/index.vue

## The Layouts Directory
```bash
mkdir layouts # contains your layouts
```

* default.vue

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
* LoginForm.vue
* PostCard.vue
* FollowList.vue
* PostForm.vue
* CommentForm.vue

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

* index.js
* posts.js
* users.js

## The Middleware Directory
```bash
mkdir middleware # contains your Application Middleware
```

* authenticated.js
* anonymous.js

## Start a development server
```bash
npm run dev
```

Access http://localhost:3000 in your browser!!!