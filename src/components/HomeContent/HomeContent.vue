<template>
    <div style="width: 740px;margin:0 auto;">
      <First_item style="width: 160px;float: left" v-for="v in arr" ></First_item>
    </div>
</template>

<script>
  import First_item from './First_item'
    export default {
      name: "HomeContent",
      data:function(){
        return {
          arr:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
        }
      },
      components:{
        First_item
      }
    }
</script>

<style scoped>

</style>
