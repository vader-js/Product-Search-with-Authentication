<script >
import {onBeforeMount} from 'vue';
import {useStore} from 'vuex';
export default {
  setup() {
    const store= useStore();

    onBeforeMount(() => {
     store.dispatch("getUser") 
    })
    return {};
  },

};

</script>

<template>

  <router-view />
</template>

<style scoped>
</style>
