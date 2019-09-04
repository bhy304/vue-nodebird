<template>
    <div>
    <!-- Profile page -->
        <v-container>
            <v-card style="margin-bottom: 20px">
                <v-container>
                    <v-subheader>My Profile</v-subheader>
                <v-form v-model="valid" @submit.prevent="onChangeNickname">
                    <v-text-field v-model="nickname" label="nickname" :rules="nicknameRules" required />
                    <v-btn color="#0D47A1" type="submit" class="white--text">Edit</v-btn>
                </v-form>
                </v-container>
            </v-card>
            <v-card style="margin-bottom: 20px">
                <v-container>
                    <v-subheader>Following</v-subheader>
                    <follow-list :users="followingList" :remove="removeFollowing" />
                    <v-btn v-if="hasMoreFollowing" color="blue" style="width: 100%" class="white--text" @click="loadMoreFollowings">view more</v-btn>
                </v-container>
            </v-card>
            <v-card style="margin-bottom: 20px">
                <v-container>
                    <v-subheader>Follower</v-subheader>
                    <follow-list :users="followerList" :remove="removeFollower" />
                    <v-btn v-if="hasMoreFollower" color="blue" style="width: 100%" class="white--text" @click="loadMoreFollowers">view more</v-btn>
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
    middleware: 'authenticated',
    computed: {
        followerList() {
            return this.$store.state.users.followerList;
        },
        followingList() {
            return this.$store.state.users.followingList;
        },
        hasMoreFollowing() {
            return this.$store.state.users.hasMoreFollowing;
        }, 
        hasMoreFollower() {
            return this.$store.state.users.hasMoreFollower;
        }
    },
    fetch({ store }) {
        store.dispatch('users/loadFollowers', { offset: 0 }); // { offset: 0 } : 초기로딩상태로 되돌아간다.
        return store.dispatch('users/loadFollowings', { offset: 0 });
    },
    methods: {
        onChangeNickname() {
            this.$store.dispatch('users/changeNickname', {
                nickname: this.nickname
            });
        },
        removeFollowing(userId) {
            this.$store.dispatch('users/unfollow', { userId });
        },
        removeFollower(userId) {
            this.$store.dispatch('users/removeFollower', { userId });
        },
        loadMoreFollowings() {
            this.$store.dispatch('users/loadFollowings');
        },
        loadMoreFollowers() {
            this.$store.dispatch('users/loadFollowers');
        }
    }
}
</script>

<style>
</style>