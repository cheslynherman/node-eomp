<template>
  <NavBarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavBarComp from './components/NavBar-comp.vue';
import FooterComp from './components/Footer-comp.vue';
export default {
  components: {
    NavBarComp,
    FooterComp

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
#app {
  font-family: 'Lobster', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #EEEBDD;
}
body {
  background-color: #1B1717;
}




</style>
