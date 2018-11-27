<template>
  <div id="app">
    <router-view/>
    <!--<Login></Login>-->
    <HomeContent></HomeContent>
  </div>
</template>

<script>
import Login from './components/Login/Login'
import HomeContent from './components/HomeContent/HomeContent'
export default {
  name: 'App',
  components:{
    Login,
    HomeContent
  }
}
</script>

<style>

#app {

}

</style>
