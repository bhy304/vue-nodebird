<template>
    <v-app>
        <nav>
        <v-toolbar color="#006064">
            <v-toolbar-title :style="{display: 'flex', alignItems: 'center'}">
                <nuxt-link to="/">NodeBird</nuxt-link>
            </v-toolbar-title>

            <v-toolbar-items>
                <v-btn text nuxt to="/profile" :style="{display: 'flex', alignItems: 'center', color: '#fff'}">
                    <div>Profile</div>
                </v-btn>
                <v-btn text nuxt to="/signup" :style="{display: 'flex', alignItems: 'center', color: '#fff'}">
                    <div>Signup</div>
                </v-btn>
            </v-toolbar-items>            
        </v-toolbar>
        </nav>
        <v-layout>
            <v-flex xs12 md4><LoginForm /></v-flex>
            <v-flex xs12 md8><nuxt/></v-flex>
        </v-layout>
    </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'
import LoginForm from '~/components/LoginForm';
export default {
    components: {
        LoginForm,
    },
}
</script>

<style scoped>
a {
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    color: #fff;
}
</style>