export default function({ store, redirect }) {
    if (!store.state.users.me) {
        // if user is not logged in the page
        redirect('/');
    }
}