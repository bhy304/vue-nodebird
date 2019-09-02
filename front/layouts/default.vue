<template>
    <!-- Toolbars -->
    <v-app>
       <nav>
        <v-toolbar color="#0D47A1">
            <v-toolbar-title>
                <nuxt-link to="/">VueNodeBird</nuxt-link>
            </v-toolbar-title>    
            <v-spacer />
            <v-toolbar-items>
                <!-- Search -->
                <v-form @submit.prevent="onSearchHashtag">
                    <div :style="{display: 'flex', alignItems: 'center', height: '100%'}">
                        <v-text-field v-model="hashtag" label="search" hide-details prepend-icon="mdi-magnify" color="#fff" />
                    </div>
                </v-form>
                    <v-btn text nuxt to="/profile" :style="{display: 'flex', alignItems: 'center', color: '#fff'}">
                        <div>Profile</div>
                    </v-btn>
                    <v-btn text nuxt to="/signup" :style="{display: 'flex', alignItems: 'center', color: '#fff'}">
                        <div>SingUp</div>
                    </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        </nav>
        <!-- Grid System -->
        <v-row no-gutters>
            <!-- Login -->
            <v-col cols="12" md="4"><LoginForm /></v-col> 
            <!-- Contents -->
            <v-col cols="12" md="8"><nuxt /></v-col> 
        </v-row>
    </v-app>
</template>

<script>
import LoginForm from '~/components/LoginForm';

export default {
    components: {
        LoginForm,
    },
    data () {
        return {
            hashtag: '',
        }
    },
    methods: {
        onSearchHashtag() {
            this.$router.push({
                path: `/hashtag/${this.hashtag}`,
            });
            this.hashtag = '';
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