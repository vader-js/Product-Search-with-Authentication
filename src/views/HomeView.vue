<script>
export default {
  setup() {
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
      <button> <router-link to="" class="link"> User Details</router-link> </button>
     <router-view />
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
  overflow: hidden;
  width: 100%;
  height: 100vh;
}
.top{
    width: 100%;
    height: 100vh;
    flex: 0.8;
    position: relative;
}
.top img{
    width: 100%;
    height: 100vh;
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
  padding: 1% 0 1% 2%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.body button{
 align-self: flex-end;
 width: 6rem;
 padding: 3px;
 font-family: inherit;
 font-size: 1.2rem;
 margin-right: 1%;
 border: hidden;
 outline: none;
 border-radius: 5px;
  background: #343a40;
  transition: 0.3s;
  color: aliceblue;
  flex: 0.5;
}
.body button:hover{
  background: #6c757d;
  color: black;
}
.body button:nth-child(1){
  width: 10rem;
  padding: 4px;
  margin-bottom: 2%;
  align-self: flex-start;
}

.link{
  color: inherit;
  text-decoration: none;
}
</style>
