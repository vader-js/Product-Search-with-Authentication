<script>
export default {
  setup() {
  },
};
</script>

<template>
  <main>
    <div class="mobilehead">
      Vader's Product Search
    </div>
    <div class="top">
      <img src="../assets/images/productimg.jpg" alt="">
      <span class="title">Vader's Product Search</span>
    </div>
    <div class="body">
      <span class="setails">
        <button> <router-link :to="{name: 'userDetails'}" class="link"> User Details</router-link> </button>
      </span>
      
     <router-view />
     <span class="logout">
       <button @click="$store.dispatch('logout')">Logout</button>
     </span>
   
    </div> 
  </main>
  
</template>
<style scoped>
main {
  font-family: Comic Sans MS, Comic Sans, sans-serif;
  display: flex;
  justify-content: space-between;
  background: rgb(17, 27, 27);
  overflow: hidden;
  width: 100%;
  height: 100vh;
}
.mobilehead{
  display: none;
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
.body span{
  width: 100%;
  height: 100%;
  flex: 0.2;
}

.logout{
  text-align: end;
}
.body button{
 width: 6rem;
 height: 2.5rem;
 font-family: inherit;
 font-size: 1.2rem;
 margin-right: 1%;
 border: hidden;
 outline: none;
 border-radius: 5px;
  background: #343a40;
  transition: 0.3s;
  color: aliceblue;
}
.body button:hover{
  background: #6c757d;
  color: black;
}
.body button:nth-child(1){
  width: 10rem;
  padding: 2px;
  margin-bottom: 2%;
}

.link{
  color: inherit;
  text-decoration: none;
}

@media screen and (max-width: 450px){
  main{
    flex-direction: column;
  }
  .top{
    display: none;
  }
  .mobilehead{
    display: block;
    width: 100%;
    color: aliceblue;
    font-size: 1.2rem;
    text-align: center;
    padding: 1% 0 0 0;
  }

}
</style>
