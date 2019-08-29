<template>
<!-- v-container for Padding -->
    <v-container v-if="!me"> 
        <v-card> 
            <!-- LoginForm -->
            <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                <v-container>
                    <v-text-field v-model="email" :rules="emailRules" label="email" type="email" required />
                    <v-text-field v-model="password" :rules="passwordRules" label="password" type="password" required />
                    <v-btn type="submit" color="#0D47A1" :disabled="!valid" class="white--text">Login</v-btn>
                    <v-btn nuxt to="/signup" color="#0D47A1" class="white--text">Signup</v-btn>
                </v-container>
            </v-form>
        </v-card>
    </v-container>
    <v-container v-else>
        <v-card>
            <v-container>
                {{ me.nickname }} Login Success
                <v-btn @click="onLogout">Logout</v-btn>
            </v-container>
        </v-card>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            emailRules: [
                v => !!v || '이메일은 필수입니다.',
                v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.',
            ],
            passwordRules: [
                v => !!v || '비밀번호는 필수입니다.',
            ],   
        }
    },
    computed: {
        me() {
            return this.$store.state.users.me;
        }
    },
    methods: {
        onSubmitForm() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('users/logIn', {
                    email: this.email,
                    nickname: 'bhy'
                })
            };
        },
        onLogout() {
            this.$store.dispatch('users/logOut');
        }
    }
}
</script>

<style>
</style>