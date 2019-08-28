<template>
    <div>
    <!-- Profile page -->
        <v-container>
            <v-card style="margin-bottom: 20px">
                <v-container>
                    <v-subheader>My Profile</v-subheader>
                
                <v-form v-model="valid" @submit.prevent="onChangeNickname">
                    <v-text-field v-model="nickname" label="nickname" :rules="nicknameRules" required />
                    <v-btn color="#006064" type="submit">Edit</v-btn>
                </v-form>
                </v-container>
            </v-card>
            <v-card style="margin-bottom: 20px">
                <v-container>
                    <v-subheader>Following</v-subheader>
                    <follow-list />
                </v-container>
            </v-card>
            <v-card style="margin-bottom: 20px">
                <v-container>
                    <v-subheader>Follower</v-subheader>
                    <follow-list />
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import FollowList from '~/components/FollowList';

export default {
    components: {
        FollowList,
    },
    data () {
        return {
            valid: false,
            nickname: '',
            nicknameRules: [
                v => !!v || '닉네임을 입력하세요.'
            ]
        }
    },
    head() {
        return {
            title: 'Profile'
        }
    },
    methods: {
        onChangeNickname() {
            this.$store.dispatch('users/changeNickname', {
                nickname: this.nickname
            })
        }
    }
}
</script>

<style>
</style>