<template>
  <main>
    <div class="welcome">
    <h1>Hello Again</h1>
    <p>Welcome back</p>
    </div>
    <div class="form-group">
    <form class="form">
      <input type="email" id="email" name="email" placeholder="Email" />
      <input type="password" id="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    </div>
    <p class="footnote">Dont have an Account? go to <span>Register</span></p>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
main{
    padding: 15px;
}
.welcome{
    margin-bottom: 1rem;
}
   
.welcome h1,p{
    text-align: center;
     font-family: Comic Sans MS, Comic Sans, cursive;
     margin-bottom: 0.5rem;
}

.form  {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-content: center;
 margin-top: 3.5rem;
}
.form::placeholder{   
    color:#CED4DA;
}
.form input, button{
    width: 100%;
    height: 2.8rem;
    padding: 0.5rem;
    margin-bottom: 3rem;
    font-size: 1rem;
    border: 1px solid #CED4DA;
    border-radius: 8px;
    font-family: Comic Sans MS, Comic Sans, cursive;
}
.form button{
    font-size: 1.2rem;
    margin-bottom: 0;
    background: #343A40;
    border-radius: 8px;
    color: #FFFFFF;
    cursor: pointer;
}
.footnote{
    text-align: end;
    font-size: 0.8rem;
    margin-top: 0.5rem;
}
.footnote span{
    color: #007bff;
    cursor: pointer;
}
</style>