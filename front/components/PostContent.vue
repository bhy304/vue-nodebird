<template>
    <div>
        <post-images :images="post.Images || []" /> 
        <v-card-title>
            <h3>
                <nuxt-link :to="'/users/' + post.id">{{ post.User.nickname }}</nuxt-link>
                <v-btn v-if="canFollow" @click="onFollow">Follow</v-btn>
                <v-btn v-if="canUnfollow" @click="onUnfollow">Unfollow</v-btn>
            </h3>
        </v-card-title>
        <v-container>
            <v-img src="" />
            <v-card-text>
                <div>{{ post.content }}</div>
            </v-card-text>
        </v-container>
    </div>
</template>

<script>
import PostImages from './PostImages';

export default {
    components: {
        PostImages,
    },
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    computed: {
        me() {
            return this.$store.state.users.me;
        },
        canFollow() {
            // 로그인이 되어있는지? && 게시글 작성자가 내가 아니어야한다 && 이미 내가 팔로잉하고 있지 않아야한다. 
            return this.me && this.post.User.id !== this.me.id && !this.me.Followings.find(v => v.id === this.post.User.id);
        },
        canUnfollow() {
            return this.me && this.post.User.id !== this.me.id && this.me.Followings.find(v => v.id === this.post.User.id);
        }
    },
    methods: {
        onFollow() {
            this.$store.dispatch('users/follow', {
                userId: this.post.User.id,
            });
        },
        onUnfollow() {
            this.$store.dispatch('users/unfollow', {
                userId: this.post.User.id,
            });
        }
    }
}
</script>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
}
</style>