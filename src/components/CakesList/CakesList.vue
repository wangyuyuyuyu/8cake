<template>
  <div>
    <CateGoryNav></CateGoryNav>
    <CakeList_item v-for="v in arr"></CakeList_item>
  </div>
</template>

<script>
  import CakeList_item from './CakeList_item'
  import CateGoryNav from '../CateGoryNav/CateGoryNav'
  export default {
    name: "CakesList",
    data:function (){
      return {
        arr:[1,1,1,1,1,1,1,1]
      }
    },
    components:{
      CakeList_item,
      CateGoryNav
    }
  }
</script>

<style scoped>

</style>
