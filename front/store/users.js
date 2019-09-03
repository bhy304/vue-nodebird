export const state = () => ({
    me: null,
    followerList: [],
    followingList: [],
    hasMoreFollower: true,
    hasMoreFollowing: true,
});

const totalFollowers = 8;
const totalFollowings = 6;
const limit = 3;

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
        const index = state.me.Followings.findIndex(v => v.id === payload.userId);
        state.me.Followings.splice(index, 1);
    },
    removeFollower(state, payload) {
        const index = state.followerList.findIndex(v => v.id === payload.id);
        state.followerList.splice(index, 1);
    },
    loadFollowings(state) {
        const diff = totalFollowings - state.followingList.length;
        const fakeUsers = Array(diff > limit ? limit : diff).fill().map(v => ({
            id: Math.random().toString(),
            nickname: Math.floor(Math.random() * 1000),
        }));
        state.followingList = state.followingList.concat(fakeUsers);
        state.hasMoreFollowing =  fakeUsers.length === limit;
    },    
    loadFollowers(state) {
        const diff = totalFollowers - state.followerList.length;
        const fakeUsers = Array(diff > limit ? limit : diff).fill().map(v => ({
            id: Math.random().toString(),
            nickname: Math.floor(Math.random() * 1000),
        }));
        state.followerList = state.followerList.concat(fakeUsers);
        state.hasMoreFollower =  fakeUsers.length === limit;
    },
    following(state, payload) {
        state.me.Followings.push({ id: payload.userId });
    },
};

// 비동기적작업
export const actions = {
    async loadUser({ state, commit }) {
        console.log('loadUser');
        try {
            const res = await this.$axios.get('http://localhost:3085/user', {
                withCredentials: true,
            });
            console.log(res.data);
            commit('setMe', res.data);
            console.log(state);
        } catch (err) {
            console.error(err);
        }
    },
    signUp({ commit }, payload) {
        // 서버에 회원가입 요청을 보내는 부분
        this.$axios.post('http://localhost:3085/user', {
            email: payload.email,
            nickname: payload.nickname,
            password: payload.password,
        }, {
            withCredentials: true,
        }).then((res) => {
            commit('setMe', res.data);
        }).catch((err) => {
            console.error(err);
        }); 
    },
    logIn({ commit }, payload) {
        this.$axios.post('http://localhost:3085/user/login', {
            email: payload.email,
            password: payload.password,
        }, {
            withCredentials: true,
        }).then((res) => {
            commit('setMe', res.data);
        }).catch((err) => {
            console.error(err);
        }); 
    },
    logOut({ commit }) {
        this.$axios.post('http://localhost:3085/user/logout', {}, {
            withCredentials: true,
        })
        .then((data) => {
            commit('setMe', null);
        }).catch((err) => {
            console.error(err);
        }); 
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
    loadFollowings({ commit, state }, payload) {
        if (state.hasMoreFollowing) {
            commit('loadFollowings');
        }
    },
    loadFollowers({ commit, state }, payload) {
        if (state.hasMoreFollower) {
            commit('loadFollowers');
        }
    },
    follow({ commit, state }, payload) {
        this.$axios.post(`/user/${payload.userId}/follow`, {}, {
            withCredentials: true,
        }).then((res) => {
            commit('following', {
                userId: payload.userId,
            });
        }).catch((err) => {
            console.error(err);
        });
    },
    unfollow({ commit, state }, payload) {
        this.$axios.delete(`/user/${payload.userId}/follow`, {
            withCredentials: true,
        }).then((res) => {
            commit('removeFollowing', {
                userId: payload.userId,
            });
        }).catch((err) => {
            console.error(err);
        });;
    }
};