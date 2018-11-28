<template>
  <div id="app">
    <!--<router-view/>-->

    <!--<Login></Login>-->
    <!--<HomeContent></HomeContent>-->
    <PageFramework></PageFramework>
  </div>
</template>

<script>

// import Login from './components/Login/Login'
// import HomeContent from './components/HomeContent/HomeContent'
import PageFramework from './components/PageFramework/PageFramework'

export default {
  name: 'App',
  components:{
    // Login,
    // HomeContent
    PageFramework
  }
}
</script>

<style>

#app {

}

</style>
