<template>
  <div id="app">
    <h1 class="display-1 m-5">Hero Image</h1>
    <hr>
    <!-- <nav>
      <ul>
        <router-link to="/Home">Home<li class="list-inline-item"></li></router-link>
        <router-link to="/Page2">Page 2<li class="list-inline-item"></li></router-link>
        <router-link to="/Page3">Page 3<li class="list-inline-item"></li></router-link>
        <router-link to="/Page4">Page 4<li class="list-inline-item"></li></router-link>
      </ul>
    </nav> -->
    <nav>
      <router-link v-for="route in routes"
        :key="route.path" :to="route.path">{{route.name}}<li class="list-inline-item m-2"></li></router-link>
    </nav>
    <hr>
    <main>
      <router-view></router-view>
    </main>
    <hr>
    <footer class="display-1 m-5">Footer</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      routes: this.$router.options.routes
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
