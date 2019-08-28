<template>
    <v-card style="margin-bottom: 20px">
        <v-container>
            <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                <v-textarea 
                    v-model="content"
                    outlined 
                    auto-grow 
                    clearable 
                    label="What's happening?"
                    :hide-details="hideDetails"
                    :success-message="successMessages"
                    :success="success"
                    :rules="[v => !!v.trim() || 'Write the comment']"
                    @input="onChangeTextarea" 
                />                
            <v-btn type="submit" color="#006064" absolute right>tweet</v-btn>
            <v-btn>Image Upload</v-btn>
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data () {
        return {
            valid: false,
            hideDetails: true,
            successMessages: '',
            success: false,
            content: '',
        }
    },
    computed: {
        ...mapState('users', ['me'])
    },
    methods: {
        onChangeTextarea(value) {
            if (value.length) {
                this.hideDetails = true;
                this.success = false;
                this.successMessages = '';
            }
        },
        onSubmitForm() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('posts/add', {
                    content: this.content,
                    User: {
                        nickname: this.me.nickname,
                    },
                    Comments: [],
                    Images: [],
                    id: Date.now(),
                    createdAt: Date.now(),
                }).then(() => {
                    this.content = '',
                    this.hideDetails = false,
                    this.success = true,
                    this.successMessages = 'Successfully posted!'; 
                }).catch(() => {

                });
            }
        }
    }
}
</script>

<style>
</style>