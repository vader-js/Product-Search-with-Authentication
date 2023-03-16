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
          loader.value = false;
          return res.json();
        })
        .then((data) => (result.value = data.products));
    });

    return { search, result, loader };
  },
};
</script>

<template>
  <section>
    <div class="searchbar">
      <input type="text" placeholder="search your product" v-model="search" />
    </div>
    <div class="search-result">
      <div class="result" v-if="result != '' && search.trim() != ''">
        <ul v-for="product in result" :key="product.id">
          <li>
            <router-link
              :to="{
                name: 'product',
                params: { title: product.title },
                query: {image: product.images[0], price: product.price,
                description: product.description, category: product.category,
                rating: product.rating},
              }"
              class="link"
              >{{ product.title }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="loader" v-show="loader">
        <img src="../assets/images/loader7.svg" alt="" />
      </div>
      <div class="alt" v-show="result == '' && search.trim() != '' && !loader">
        No Search Result!!
      </div>
    </div>
  </section>
</template>
<style scoped>
section {
  /* border: 1px solid white; */
  display: flex;
  width: 100%;
  max-height: 80%;
  flex-direction: column;
  align-content: center;
  flex: 9;
}
.search-result {
  height: 90%;
  position: relative;
  overflow-y: scroll;
}
.search-result::-webkit-scrollbar {
  width: 0px;
}

.searchbar {
  width: 80%;
  margin: 0 auto;
}
.searchbar input {
  width: 100%;
  padding: 7px;
  outline: none;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  background: #ccc;
}
.searchbar input:focus {
  outline: none;
  box-shadow: 10px 10px 5px black;
}
.result {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 10px;
  margin-top: 10px;
}
.result ul {
  list-style: none;
}
.result li {
  text-align: center;
  color: #bbbbbb;
  cursor: pointer;
  transition: 0.3s;
}
.result li:hover{
    color: aliceblue;
}
.loader,
.alt {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  text-align: center;
  color: aliceblue;
  font-size: 1.5rem;
}
.loader img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  background: transparent;
}
.link {
  color: inherit;
  text-decoration: none;
}
@media  screen and (max-width: 450px) {
    section{
        max-height: 78%;
    }
}
    

</style>
