import axios from "axios";


export default {
    async createGrimpe(context, payload) {
        axios.post("http://localhost:8090/api/grimpe/create", payload.data, {
            headers: {"Authorization": `Bearer ${payload.token}`, "Content-Type": "application/json"}
        }).then(res => {
            context.commit("setGrimpe", res.data);
        }).catch(err => {
            console.error(err);
        });
    },
    async updateGrimpe(context, payload) {
        axios.put(`http://localhost:8090/api/grimpe/${payload.data.id}`, payload.data, {
            headers: {"Authorization": `Bearer ${payload.token}`, "Content-Type": "application/json"}
        }).then(res => {
            context.commit("setGrimpe", res.data);
        }).catch(err => {
            console.error(err);
        });
    },
    async loadUserGrimpes(context, payload) {
        axios.get(`http://localhost:8090/api/grimpes/${payload.userId}`, {
            headers: {"Authorization": `Bearer ${payload.token}`}
        }).then(res => {
            context.commit("setUserGrimpes", res.data);
        }).catch(err => {
            console.log(err);
        });
    }
};