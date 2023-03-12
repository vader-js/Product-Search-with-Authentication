<script>
import { ref, watch } from "vue";
export default {
  setup() {
    const search = ref("");
    const result = ref([]);
    const loader = ref(false);

    watch(search, (val) => {
      loader.value = true;
      fetch(`https://dummyjson.com/products/search?q=${val}`)
        .then((res) => {
          return (loader.value = false), res.json();
        })
        .then((data) => (result.value = data.products));
    });

    return { search, result, loader };
  },
};
</script>

<template>
  <main>
    <div class="top">
      <img src="../assets/images/productimg.jpg" alt="">
      <span class="title">Vader's Product Search</span>
    </div>
    <div class="body">
    <div class="searchbar">
      <input type="text" placeholder="search your product" v-model="search" />
    </div>
    <div class="search-result">
      <div class="result" v-if="result != '' && search.trim() != ''">
        <ul v-for="product in result" :key="product.id">
          <li>{{ product.title }}</li>
        </ul>
      </div>

      <div class="loader" v-show="loader">hello</div>
      <div class="alt" v-show="result == '' && search.trim() != '' && !loader">
        No Search Result
      </div>
    </div>
    <button @click="$store.dispatch('logout')">Logout</button>
    </div>
  </main>
</template>
<style scoped>
main {
  font-family: Comic Sans MS, Comic Sans, cursive;
  display: flex;
  justify-content: space-between;
  background: rgb(17, 27, 27);
}
.top{
    width: 100%;
    height: 100vh;
    flex: 0.8;
    position: relative;
}
.top img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    font-size: 3rem;
    color: #fff;
    font-weight: 700;
    width: 70%;
    text-align: center;
}
.body{
  flex: 1;
}
</style>
