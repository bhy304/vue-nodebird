export const state = () => ({
    me: null,
    followerList: [{
    // dummy data
        id: 1,
        nickname: 'bhy',
    }, {
        id: 2,
        nickname: 'hayeon',
    }, {
        id: 3,
        nickname: 'hay',
    }],
    followingList: [{
    // dummy data
        id: 1,
        nickname: 'bhy',
    }, {
        id: 2,
        nickname: 'hayeon',
    }, {
        id: 3,
        nickname: 'hay',
    }]
});

// 동기적작업
export const mutations = {
    setMe(state, payload) {
        state.me = payload;
    },
    changeNickname(state, payload) {
        state.me.nickname = payload.nickname;
    },
    addFollowing(state, payload) {
        state.followingList.push(payload);
    },
    addFollower(state, payload) {
        state.followerList.push(payload);
    },
    removeFollowing(state, payload) {
        const index = state.followingList.findIndex(v => v.id === payload.id);
        state.followingList.splice(index, 1);
    },
    removeFollower(state, payload) {
        const index = state.followerList.findIndex(v => v.id === payload.id);
        state.followerList.splice(index, 1);
    },
};

// 비동기적작업
export const actions = {
    signUp({ commit }, payload) {
        // 서버에 회원가입 요청을 보내는 부분
        commit('setMe', payload);
    },
    logIn({ commit }, payload) {
        commit('setMe', payload);
    },
    logOut({ commit }, payload) {
        commit('setMe', null);
    }, 
    changeNickname({ commit }, payload) {
        commit('changeNickname', payload);
    },
    addFollowing({ commit }, payload) {
        commit('addFollowing', payload);
    },
    addFollower({ commit }, payload) {
        commit('addFollower', payload);
    },
    removeFollowing({ commit }, payload) {
        commit('removeFollowing', payload);
    },
    removeFollower({ commit }, payload) {
        commit('removeFollower', payload);
    }, 
};