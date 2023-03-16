<template>
<main>
<div class="left">
    <img :src="$route.query.image" alt="">
</div>
<div class="right">
   <h1>{{$route.params.title}}</h1> 
<ul >
<li><span>Description</span> <br/> {{$route.query.description}}</li>
<li><span>Price</span> <br/> ${{$route.query.price}}</li>
<li><span>Category</span> <br/>{{$route.query.category}}</li>
<li><span>Rating</span> <br/> {{$route.query.rating}}</li>
</ul>
</div>
</main>
 
</template>

<script>
export default {
   
}
</script>

<style scoped>
main{
    flex: 9;
    display: flex;
    justify-content: space-between;
}
.left{
    flex: 1;
    width: 50%;
    height: 80%;
}
.left img{
    width: 90%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.right{
    flex: 1;
}
.right h1{
    text-align: center;
    color: aliceblue;
}
.right ul{
    list-style: none;
    padding: 0;
}
.right li{
    margin-bottom: 2%;
    color: #ccc;
}
.right li span{
    font-weight: 700;
    color: gold;
}
@media screen and (max-width: 1200px){
  main{
    flex-direction: column;
  }
}
</style>