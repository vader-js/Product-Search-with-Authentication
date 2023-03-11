<template>
  <main>
    <div class="welcome">
      <h1>Register</h1>
    </div>
    <div class="form-group">
      <form class="form" @submit.prevent="register">
        <input
          type="text"
          name="name"
          placeholder="Name"
          v-model="register_form.name"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          v-model="register_form.email"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          v-model="register_form.password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
    <p class="footnote">
      Already have an Account? return to
      <span @click="$router.push('/')">Login</span>
    </p>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const register_form = ref({});
    const register = () => {
      store.dispatch("register", register_form.value);
    };
    return { register_form, register };
  },
};
</script>

<style scoped>
main {
  padding: 15px;
  font-family: Comic Sans MS, Comic Sans, cursive;
}

.welcome h1 {
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
  margin-bottom: 2rem;
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
