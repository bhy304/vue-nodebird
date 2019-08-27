<template>
    <div>
    <!-- Profile page -->
        <v-container>
            <v-card style="margin-bottom: 20px">
                <v-container>
                    <v-subheader>My Profile</v-subheader>
                
                <v-form>
                    <v-text-field label="nickname" required />
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
            name: 'Nuxt.js'
        }
    },
    head() {
        return {
            title: 'Profile'
        }
    },
}
</script>

<style scoped>
</style>