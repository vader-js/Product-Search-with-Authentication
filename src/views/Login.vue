<template>
<main>
<div class="loginimg">
    <img src="../assets/images/headerimg.jpg" alt="">
</div>
<div class="login-form">
    <LoginForm />
</div>
</main>
  
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
export default {
  components: { LoginForm },

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
    border: 1px solid grey;
    position: absolute;
    margin: 0 auto;
    top: 65%;
    left: calc(50% - 14rem);
}
</style>