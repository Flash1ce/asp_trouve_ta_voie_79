import axios from "axios";


export default {
    async login(context, payload) {
        return new Promise((resolve, reject) => {
            axios.post("http://localhost:8090/api/connexion", payload)
                .then((response) => {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("userId", response.data.userId);
                    localStorage.setItem("name", response.data.name);

                    context.commit("setUser", {
                        token: response.data.token,
                        userId: response.data.userId,
                        name: response.data.name,
                    });

                    resolve(response);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },
    async signup(context, payload) {
        return new Promise((resolve, reject) => {
            axios.post("http://localhost:8090/api/inscription", payload)
                .then((response) => {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("userId", response.data.userId);
                    localStorage.setItem("name", response.data.name);

                    context.commit("setUser", {
                        token: response.data.token,
                        userId: response.data.userId,
                        name: response.data.name,
                    });

                    resolve(response);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },
    async logout(context) {
        return new Promise((resolve) => {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            localStorage.removeItem("name");
            localStorage.clear();

            context.commit("setUser", {
                token: null,
                userId: null,
                name: null,
            });

            resolve();
        });
    },
    reloadGetDataFromLocalStorage(context) {
        context.commit("setUser", {
            token: localStorage.getItem("token"),
            userId: localStorage.getItem("userId"),
            name: localStorage.getItem("name"),
        });
    },
};
