export default {
    setUser(state, payload) {
        state.token = payload.token;
        state.userId = payload.userId;
        state.name = payload.name;
        state.tokenExp = payload.tokenExp
    }
};
