<template>
  <div>
    <p class="display-1 m-5">Home</p>
    <p class="lead m-5"> Since moving to Seattle, cooking and exploring have been at the top of my priority list. As a flatlander from Minnesota,
    The mountain views, deep green forests, and endless hiking opportunities are what make Seattle great. Additionally, since COVID-19 has put restaurant
    going to a standstill, this Spoonacular API Generated website seemed particularly topical and relevant. This page site outlines some of Seattle's best
    outdoor adventures, as well as provides you the fuel you need to make those big climbs. The API is set to return 5 pasta recipes with a link to their full
    webiste, wine pairings, and more.

    enjoy!
    </p>
    <div class="col-sm-6 col-md-4 col-lg-3 mt-4" v-for="(cardinfo, index) in cardinfos" :key="index">
      <div class="card m-5" style="width: 18rem;">
        <img class="card-img-top" :src="cardinfo.image" alt="breakfast food">
        <div class="card-body">
          <h5 class="card-title">{{cardinfo.title}}</h5>
          <p class="card-text">{{cardinfo.text}}</p>
          <a href="http://www.google.com" class="btn btn-primary">See full recipe</a>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="container">
    <div>
      <logo />
      <h1 class="title">
        final
      </h1>
      <h2 class="subtitle">
        My supreme Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div> -->
</template>

<script>

  var cards = [{
    title: "Breakfast Scramble 1",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    image: require('../static/food1.jpg'),
},
{
    title: "Breakfast Scramble 2",
    text: "alrazy ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    image: require('../static/food2.jpg'),
},
{
    title: "Breakfast Scramble 3",
    text: "mohim ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    image: require('../static/food3.jpg'),
}]
export default {
  name: 'Home',
  data() {
    return {
      cardinfos: cards,
      currentIdx: 0,
    }
  }
}
// import Logo from '~/components/Logo.vue'
//
// export default {
//   components: {
//     Logo
//   }
// }
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
