export const state = () => ({
    hello: 'vuex',
});

export const mutations = {
    increment(state, payload) {
        state.hello = payload;
    }
};

export const actions = {
    nuxtServerInit({ commit, dispatch, state }, {req}) {
        console.log('nuxtServerInit');
        console.log(state);
        return dispatch('users/loadUser');
    }
};