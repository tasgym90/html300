
<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Explore.Eat.Be happy.</h1>
      </div>
    </div>
    <!-- <h1 class="display-1 m-5">Hero Image</h1> -->

    <!-- <section class="bgimage">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h5>Hello, world! Full width Hero-unit header</h5>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p><a href="#" class="btn btn-primary btn-large">Learn more »</a></p>
          </div>
        </div>
      </div>
    </section> -->

    <div class="mb-3 navbar navbar-expand-lg">
      <nav class="navbar-brand navbar-dark bg-light">
        <nuxt-link to="/" class="list-inline-item">Home</nuxt-link>
        <nuxt-link to="/page2" class="list-inline-item">Breakfast</nuxt-link>
        <nuxt-link to="/page3" class="list-inline-item">Recipes</nuxt-link>
        <nuxt-link to="/page4" class="list-inline-item">Nature</nuxt-link>
      </nav>
    </div>

    <main>
      <nuxt></nuxt>
    </main>

    <footer class="display-1 m-5">Footer</footer>

  </div>
</template>

<script>


</script>

<style>
html {

  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

nav {
  background-color: #D6DBDF;

}

.jumbotron {
  color: white;
  background-image: url("https://images.unsplash.com/photo-1438109491414-7198515b166b?q=80&fm=jpg&s=cbdabf7a79c087a0b060670a6d79726c");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
}

/* .bgimage {
  width:100%;
  height:500px;
  background: url('https://images.unsplash.com/photo-1438109491414-7198515b166b?q=80&fm=jpg&s=cbdabf7a79c087a0b060670a6d79726c');
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  background-attachment: fixed;
}
.bgimage h5 {
  color:white;
  text-shadow:2px 2px #333;
} */

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
