<template>
    <!-- Toolbars -->
    <v-app>
       <nav>
        <v-toolbar color="#006064">
            <v-toolbar-title>
                <nuxt-link to="/">NodeBird</nuxt-link>
            </v-toolbar-title>    
            <v-spacer />
            <v-toolbar-items>
                <v-text-field label="search" hide-details prepend-icon="mdi-magnify" color="#fff" />
                    <v-btn text nuxt to="/profile" :style="{display: 'flex', alignItems: 'center', color: '#fff'}">
                        <div>Profile</div>
                    </v-btn>
                    <v-btn text nuxt to="/signup" :style="{display: 'flex', alignItems: 'center', color: '#fff'}">
                        <div>SingUp</div>
                    </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        </nav>
        <!-- Vuex test -->
        <div>{{ name }}</div>
        <v-btn @click="onChangeName">ByeBye</v-btn>
        <!-- Grid System -->
        <v-row no-gutters>
            <!-- Login -->
            <v-col cols="12" xs="12" md="4"><LoginForm /></v-col> 
            <!-- Contents -->
            <v-col cols="12" xs="12" md="8"><nuxt /></v-col> 
        </v-row>
    </v-app>
</template>

<script>
import LoginForm from '~/components/LoginForm';
export default {
    components: {
        LoginForm,
    },
    computed: {
        name() {
            return this.$store.state.posts.name;
        }
    },
    methods: {
        onChangeName() {
            this.$store.commit('posts/BYE')
        }
    }
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