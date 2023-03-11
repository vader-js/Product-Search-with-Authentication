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
        name: "",
    },
    mutations: {
        set_User (state, payload) {
            state.user = payload;
        },

        clear_User (state) {
            state.user = null;
        },

        error(state, payload){
            state.error = payload;
        },
        name(state, payload){
            state.name = payload;
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
                }
                return 
            }
            commit("set_User", auth.currentUser);
            router.push({name: 'home'})
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
            commit("name", name);
            router.push({name: 'home'})
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
    }
}
});