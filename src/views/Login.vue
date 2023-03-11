<template>
<main>
<div class="loginimg">
    <img src="../assets/images/headerimg.jpg" alt="">
</div>
<div class="login-form">
<router-view />
<span>{{$store.state.error}}</span>
</div>

</main>
  
</template>

<script >


export default {
    setup() {
     

}
}
</script>

<style scoped>
main{
    position: relative;
}
.loginimg{
    width: 100%;
    height: 40vh;
}
.loginimg img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.login-form {
    width: 28rem;
    height: 28rem;
    background: #FFFFFF;
    border-radius: 24px;
    position: absolute;
    margin: 0 auto;
    top: 65%;
    left: calc(50% - 14rem);
}
.login-form span{
   text-align: center;
   margin-bottom: 5px;
   margin-right: px;
   font-family: Comic Sans MS, Comic Sans, cursive;;
   color: red;
   float: right;
}
</style>