<template>
    <div style="width: 950px;margin:0 auto;overflow: hidden;">
      <CateGoryNav></CateGoryNav>
      <First_item style="width: 210px;float: left;margin-left:22px" v-for="v in arr" v-bind:obj="v"></First_item>
    </div>
</template>

<script>
  import First_item from './First_item'
  import CateGoryNav from '../CateGoryNav/CateGoryNav'
    export default {
      name: "HomeContent",
      data:function(){
        return {
          arr:[],
        }
      },
      components:{
        First_item,
        CateGoryNav,
      },
      created(){
        fetch(this.$api+'/Cake_item.php').then(res=>res.json()).then(res=>{
          console.log(res);
          this.arr = res;
          console.log(this.arr);
        }).catch(err=>{
          console.log(err)
        })
      }
    }
</script>

<style scoped>

</style>
