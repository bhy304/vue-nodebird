export const state = () => ({});

export const mutations = {};

export const actions = {
    nuxtServerInit({ commit, dispatch, state }, { req }) {
        // 서버에서 전달 받은 데이터를 초기화 과정에서 처리
        return dispatch('users/loadUser');
    }
};