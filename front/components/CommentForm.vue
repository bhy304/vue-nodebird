<template>
    <v-form ref="form" v-model="valid" style="position: relative" @submit.prevent="onSubmitForm">
        <v-textarea 
            v-model="content"
            filled
            label="Add a comment"
            :hide-details="hideDetails"
            :success="success"
            :success-messages="successMessages"
            @input="onChangeTextarea"
        />
        <v-btn color="#0D47A1" dark absolute top right type="submit">reply</v-btn>
    </v-form>
</template>

<script>
export default {
    props: {
        postId: {
            type: String,
            required: true,
        }
    },
    data () {
        return {
            valid: false,
            content: '',
            success: false,
            successMessages: '',
            hideDetails: true,
        }
    },
    computed: {
        me() {
            return this.$store.state.users.me;
        }
    },
    methods: {
        onChangeTextarea(value) {
            if (value.lenght) {
                this.hideDetails = true;
                this.success = false;
                this.successMessages = '';
            }
        },
        onSubmitForm() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('posts/addComment', {
                    postId: this.postId,
                    content: this.content,
                }).then(() => {
                    this.content = '';
                    this.success = true;
                    this.successMessages = 'Successfully replied!';
                    this.hideDetails = false;
                }).catch(() => {

                });
            }
        }
    }
};
</script>

<style>
</style>