import { createStore } from "vuex";
import { auth } from "../firebase";
import {
     signInWithEmailAndPassword, 
     createUserWithEmailAndPassword, 
     signOut 
    } from "firebase/auth";
import router from "../router";

export default createStore({
    state: {
        user: null,
        error: "",
        loading: false,
    },
    mutations: {
        set_User (state, payload) {
            state.user = payload;
        },

        clear_User (state) {
            state.user = null;
            state.loading = false;
        },

        error(state, payload){
            state.error = payload;
            state.loading = false;
        },
        loading(state, payload){
            state.loading = payload;
        }

    },
    actions: {
        async login ({ commit }, payload) {
            const { email, password } = payload;
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (error) {
                switch (error.code) {
                    case "auth/user-not-found":
                        commit("error", "User not found");
                        break;
                    case "auth/wrong-password":
                        commit("error", "Wrong password");
                        break;
                    case "auth/invalid-email":
                        commit("error", "Invalid email");
                        break;
                    default:
                        commit("error", "Something went wrong");
                        break;
                };
               return;
            }
            console.log(auth.currentUser)
            console.log(auth.currentUser.email)
            console.log(auth.currentUser.password)
            commit("set_User", auth.currentUser);
            router.push("/")
        },

        async register ({ commit }, payload) {
            const { name, email, password } = payload;
            try {
             await createUserWithEmailAndPassword(auth, email, password);
            } catch (error) {
                switch (error.code) {
                    case "auth/email-already-in-use":
                        commit("error", "Email already in use");
                        break;
                    case "auth/invalid-email":
                        commit("error", "Invalid email");
                        break;
                    case "auth/weak-password":
                        commit("error", "Weak password");
                        break;
                    case 'auth/operation-not-allowed':
                        commit("error", "Operation not allowed")
                        break
                    default:
                        commit("error", "Something went wrong");
                        break;
                }
                return
            }
            commit("set_User", auth.currentUser);
            router.push("/");
        },

        async logout ({ commit }) {
            await signOut(auth);
                
            commit("clear_User");
            router.push("/login")
        },
        getUser({commit}){
            auth.onAuthStateChanged(async user => {
                if(user == null){
                    commit("clear_User");}
                else{
                    commit("set_User", user);
                }
                if (router.isReady() && router.currentRoute.value.path === '/login') {
                    router.push('/')
                  }
        })
    },
    fetchLoading({commit}, payload){
        commit("loading", payload);
    }    
}
});