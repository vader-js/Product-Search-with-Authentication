<template>
  <main>
    <div class="welcome">
      <h1>Hello Again</h1>
      <p>Welcome back</p>
    </div>
    <div class="form-group">
      <form class="form" @submit.prevent="login">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          v-model="login_form.email"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          v-model="login_form.password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
    <p class="footnote">
      Dont have an Account? go to
      <span @click="$router.push('/register')">Register</span>
    </p>
  </main>
</template>

<script>
import { ref } from "vue";
import {useStore} from "vuex";
export default {
  setup() {
    const store = useStore();
    const login_form = ref({});
    const login = () => {
      store.dispatch("login", login_form.value);
    };
    return { login_form, login };
  },
};
</script>

<style scoped>
main {
  padding: 15px;
  font-family: Comic Sans MS, Comic Sans, cursive;
}
.welcome {
  margin-bottom: 1rem;
}

.welcome h1,
p {
  text-align: center;
  margin-bottom: 0.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top: 3.5rem;
}
.form input::placeholder {
  color: #ced4da;
}
.form input,
button {
  width: 100%;
  height: 2.8rem;
  padding: 0.5rem;
  margin-bottom: 3rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 8px;
}
.form input:focus {
  outline: none;
  border: 0.3px solid #bcd8f7;
}
.form button {
  font-size: 1.2rem;
  margin-bottom: 0;
  background: #343a40;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  font-family: inherit;
}
.footnote {
  text-align: end;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}
.footnote span {
  color: #007bff;
  cursor: pointer;
}
</style>
