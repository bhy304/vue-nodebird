<template>
    <!-- PostCard -->
    <v-card style="margin-bottom: 20px">
        <v-container>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" height="300px">
                <v-card-title>Title</v-card-title>
            </v-img>
            <v-card-text>
                <div><h3>nickname</h3></div>
                <div>안녕하세요. 게시글입니다.</div>
            </v-card-text>
            <v-card-actions>
                <v-btn text><v-icon>mdi-twitter-retweet</v-icon></v-btn>
                <v-btn text><v-icon>mdi-heart-outline</v-icon></v-btn>
                <v-btn text><v-icon>mdi-comment-outline</v-icon></v-btn>
                <v-btn text><v-icon>mdi-dots-horizontal</v-icon></v-btn>
            </v-card-actions>
        </v-container>
    </v-card>
</template>

<script>
export default {
    
}
</script>

<style scoped>
</style>