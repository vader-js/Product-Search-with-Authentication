<template>
<main>
<div class="loginimg">
    <img src="../assets/images/headerimg.jpg" alt="">
</div>
<div class="login-form">
<router-view />
<div v-show="$store.state.loading">
    <img src="../assets/images/loader2.svg" alt="">
</div>
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
   color: red;
   float: right;
}
.login-form div{
    width: 100%;
    margin-top: 0;
    text-align: center;
   
}
.login-form img{
    width: 30px;
    height: 30px;
    margin: 0 auto;
    background: transparent;
    object-fit: cover;
}

@media screen and (max-width: 450px) {
    .loginimg{
        width: 100%;
        height: 30vh;
    }
    .login-form {
        width: 100%;
        height: 100%;
        position: relative;
        top: 0;
        left: 0;
        border-radius: 0;
    }
}
</style>