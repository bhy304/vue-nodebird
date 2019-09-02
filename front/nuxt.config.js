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
        browserBaseURL: 'http://localhost:3085', // 클라이언트에서 axios 보낼 때
        baseURL: 'http://localhost:3085', // 서버에서 axios 보낼 때
        https: false,
    },
};