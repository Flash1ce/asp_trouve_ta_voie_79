export default {
    userId(state) {
        return state.userId;
    },
    token(state) {
        return state.token;
    },
    isAuthenticated(state) {
        return !!state.token;
    },
    name(state) {
        return state.name;
    },
    tokenExp(state) {
        return state.tokenExp;
    }
};
