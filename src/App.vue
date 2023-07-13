<template>
    <component :is="temp" @success="()=>{
      temp = 'def'
    }"></component>

</template>

<script>
import authLayout from './layout/auth.vue';
import defaultLayout from './layout/default.vue';
export default {
  components:{
    'auth':authLayout,
    'def':defaultLayout,
  },
  data:()=>({
    temp:'auth',

  })

}
</script>

<style lang="scss">
@import '@/styles/style.scss'
</style>