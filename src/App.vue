<template>
<Navbar/>


<router-view/>

</template>

<script>
import Home from './views/HomeView.vue'
import Navbar from './components/Navbar.vue'

export default {
  name:'App',
  components:{
    Home,
    Navbar
  
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #2c3e50;

}
body{
  background-color: cadetblue;
}


</style>
