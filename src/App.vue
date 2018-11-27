<template>
  <div id="app">
    <router-view/>
    <Login></Login>
  </div>
</template>

<script>
import Login from './components/Login/Login'
export default {
  name: 'App',
  components:{
    Login
  }
}
</script>

<style>

</style>
