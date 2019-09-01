<template>
    <!-- PostCard -->
    <div style="margin-bottom: 20px">
        <v-card>
            <v-image />
            <v-card-title>
                <h3>
                    <nuxt-link :to="'/users/' + post.id">{{ post.User.nickname }}</nuxt-link>
                </h3>
            </v-card-title>
            <v-container>
                <v-img src="" />
                <v-card-text>
                    <div>{{ post.content }}</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color=""><v-icon>mdi-twitter-retweet</v-icon></v-btn>
                    <v-btn text color=""><v-icon>mdi-heart-outline</v-icon></v-btn>
                    <v-btn text color="" @click="onToggleComment"><v-icon>mdi-comment-outline</v-icon></v-btn>
                    <v-menu offset-y open-on-hover>
                        <template v-slot:activator="{ on }">
                            <v-btn text color="" v-on="on"><v-icon>mdi-dots-horizontal</v-icon></v-btn>
                        </template>
                        <div style="background: white">
                            <v-btn dark color="red" @click="onRemovePost">delete</v-btn>
                            <v-btn text color="blue" @click="onEditPost">edit</v-btn>
                        </div>
                    </v-menu>
                </v-card-actions>
            </v-container>
        </v-card>
        <!-- Comment -->
        <template v-if="commentOpened">
            <comment-form :post-id="post.id" />
            <v-list>
                <v-list-item v-for="c in post.Comments" :key="c.id">
                    <v-list-item-avatar color="teal">
                        <span>{{ c.User.nickname[0] }}</span>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ c.User.nickname }}</v-list-item-title>
                        <v-list-item-subtitle>{{ c.content }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </template>
    </div>
</template>

<script>
import CommentForm from '~/components/CommentForm';

export default {
    components: {
        CommentForm,
    },
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    data () {
        return {
            commentOpened: false
        }
    },
    methods: {
        onRemovePost() {
            this.$store.dispatch('posts/remove', {
                postId: this.post.id,
            });
        },
        onEditPost() {

        },
        onToggleComment() {
            if (!this.commentOpened) {
                this.$store.dispatch('posts/loadComments', { // 게시글에 대한 댓글 가져오기
                    postId: this.post.id,
                });
            }
            this.commentOpened = !this.commentOpened;            
        }
    }
};
</script>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
}
</style>