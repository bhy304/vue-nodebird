<template>
    <div>
    <!-- Signup page -->
        <v-container>
            <v-card>
                <v-container>
                    <v-subheader>Sign Up</v-subheader>
                    <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                        <v-text-field v-model="email" :rules="emailRules" label="email" type="email" required />
                        <v-text-field v-model="password" :rules="passwordRules" label="pw" type="password" required />
                        <v-text-field v-model="passwordCheck" :rules="passwordCheckRules" label="pwcheck" type="password" required />
                        <v-text-field v-model="nickname" :rules="nicknameRules" label="nickname" type="nickname" required />
                        <v-checkbox v-model="terms" :rules="[v => !!v || '동의해주세요!']" required label="Agree to Sign up!" />
                        <v-btn color="#0D47A1" type="submit" class="white--text">signup</v-btn>
                    </v-form>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data () {
        return {
            valid: false,
            email: '',
            password: '',
            passwordCheck: '',
            nickname: '',
            terms: false,
            emailRules: [
                v => !!v || '이메일은 필수입니다.',
                v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.',
            ],
            nicknameRules: [
                v => !!v || '닉네임은 필수입니다.',
            ],
            passwordRules: [
                v => !!v || '비밀번호는 필수입니다.',
            ],
            passwordCheckRules: [
                v => !!v || '비밀번호 확인 필수입니다.',
                v => v === this.password || '비밀번호가 일치하지 않습니다.',
            ]
        }
    },
    computed: {
        me() {
            return this.$store.state.users.me;
        }
    },
    watch: {
        me(value) {
            if (value) {
                this.$router.push({
                    path: '/',
                });
            }
        }
    },
    methods: {
        onSubmitForm() {
            if (this.$refs.form.validate()) {
                // alert('회원가입 시도!');
                this.$store.dispatch('users/signUp', {
                    nickname: this.nickname,
                    email: this.email,
                    password: this.password,
                })
                .then(() => {
                    this.$router.push({
                        path: '/'
                    });
                })
                .catch(() => {
                    alert('회원가입 실패!');
                })
            } 
        }
    },
    head() {
        return {
            title: 'SignUp'
        }
    },
    middleware: 'anonymous',
}
</script>

<style>
</style>