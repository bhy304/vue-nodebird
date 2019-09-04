module.exports = {
    head: {
        title: 'Vue_NodeBird',
    },
    modules: [
        '@nuxtjs/axios',
    ],
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    // plugins: [],
    vuetify: {

    },
    axios: {
        browserBaseURL: 'http://localhost:3085', 
        baseURL: 'http://localhost:3085',
        https: false,
    },
    server: {
        port: 3080,
    }
};