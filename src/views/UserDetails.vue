<template>
<section>
  <h1>User with the following Credentials is logged-in</h1>
   <br />
    <p><span>Email</span>: {{email}}</p>
    <p>This information is provided by <b> {{password}}</b></p>
</section>
</template>

<script>
import user from "../components/useFetchUser.js"
export default {
    components: { user },
setup(){
  
    const {email, password} = user()

    return { email, password}
}
}
</script>

<style scoped>
section{
   flex: 9;
   font-family: Comic Sans MS, Comic Sans, cursive;
   color: #ccc;
}
section span{
    color: #f00;
}
section b{
    color: #f00;
}
</style>