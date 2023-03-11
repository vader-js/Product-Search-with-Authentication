<script >

</script>

<template>
  <main>
    Hello {{ $store.state.name }}
    <button @click="$store.dispatch('logout')">Logout</button>
  </main>
</template>
