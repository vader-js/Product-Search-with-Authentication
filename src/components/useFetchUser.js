import {useStore} from "vuex"
import {ref} from "vue"

function user(){
    const store = useStore();
    const email = ref(store.state.user.email);
    const password = ref(store.state.user.providerId);
  return {email, password}  
}
export default user;