<template>
  <div>
    <p class="display-1 m-5">Home Landing Page</p>
    <p class="lead m-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
      <div class="col-sm-6 col-md-4 col-lg-3 mt-4" v-for="(cardinfo, index) in cardinfos" :key="index">
        <div class="card m-5" style="width: 18rem;">
          <img class="card-img-top" :src="cardinfo.image" alt="breakfast food">
          <div class="card-body">
            <h5 class="card-title">{{cardinfo.title}}</h5>
            <p class="card-text">{{cardinfo.text}}</p>
            <a href="http://www.google.com" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
var cards = [{

    title: "Breakfast Scramble 1",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    image: require('../assets/food1.jpg'),
},
{
    title: "Breakfast Scramble 2",
    text: "alrazy ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    image: require('../assets/food2.jpg'),
},
{
    title: "Breakfast Scramble 3",
    text: "mohim ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
    image: require('../assets/food3.jpg'),
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
