<template>
  <div id="app">
    <h1 class="display-1 m-5">{{ msg }}</h1>
    <nav>
      <ul>
        <li v-for="page in pages">
          <a class="list-inline m-5" v-bind:href="page + '.html'"> {{page}}</a></li>
      </ul>
    </nav>
    <main class="main">
      <div class="card-group p-5" v-for="image in images">
         <img :src="image" class="img-fluid m-5" style="width: 18rem;"/>
      </div>
    </main>

    <!-- <main class="main">
    <div class="card-group p-5">
      <img src="src/assets/nature1.jpg" class="img-fluid m-5" style="width: 18rem;">
      <img src="src/assets/nature2.jpg" class="img-fluid m-5" style="width: 18rem;">
      <img src="src/assets/nature3.jpg" class="img-fluid m-5" style="width: 18rem;">
    </div> -->

        <!-- <form>
          <div class="form-group m-5 p-5">
            <label for="name">Name</label>
            <input class="form-control" type="text" id="name" placeholder="Enter name">

            <label for="name">Address</label>
            <input class="form-control" type="text" id="name" placeholder="Enter Address">

            <label for="name">Phone Number</label>
            <input class="form-control" type="text" id="name" placeholder="Enter Phone Number">

            <label for="name">Email</label>
            <input class="form-control" type="text" id="name" placeholder="Enter Email">

            <button type="button" class="btn btn-lg btn-danger m-2" data-toggle="popover" title="Popover title" data-content="Before you click submit, make sure you have double checked all of your info.">Submit</button>

          </div>
        </form> -->


      <!-- </main> -->
  <!-- </div> -->

  <div id="app">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 mt-4">
          <div class="card m-5" style="width: 18rem;">
            <img class="card-img-top" src="src/assets/food4.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Breakfast Scramble</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hero Image',
      pages: ["home", "page2", "page3", "page4"],
      images: ["src/assets/nature1.jpg", "src/assets/nature2.jpg", "src/assets/nature3.jpg" ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
