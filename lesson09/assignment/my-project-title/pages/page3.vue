<template>

  <!-- <div class="col-xl-2 col-lg-8 col-sm-2 col-12 p-5" >
    <img src="../static/nature8.jpg" class="img-fluid m-1">
    <img src="../static/nature8.jpg" class="img-fluid m-1">
    <img src="../static/nature8.jpg" class="img-fluid" m-1>
  </div> -->
  <div>
    <div class="col-sm-6 col-md-4 col-lg-3 mt-4" v-for="result in results">
      <div class="card m-5" style="width: 25rem;">
        <img class="card-img-top" :src="result.image" alt="breakfast food">
        <div class="card-body">
          <h5 class="card-title">{{result.title}} with Wine Pairing Recommendation:</h5>
          <p class="card-text">{{result.winePairing.pairingText}}</p>
          <a :href="result.sourceUrl" class="btn btn-primary">See full recipe</a>
        </div>
      </div>
    </div>
  </div>
</template>

        <!-- <div class="row"> -->
       <!-- <div class="col-xl-2 col-lg-8 col-sm-2 col-12 p-5" >
         <img src="../static/nature8.jpg" class="img-fluid m-1">
         <img src="../static/nature8.jpg" class="img-fluid m-1">
         <img src="../static/nature8.jpg" class="img-fluid" m-1>
       </div>
       <div class="col-xl-10 col-lg-4 col-sm-10 col-12 p-5">
         <img src="images/nature9.jpg" class="img-fluid">
       </div>
     </div>
  <div class="card">
        <!-- <img :src:"photo.urls.regular" :alt="photo.alt_description"/>
        <h5>{{ photo.alt_description}}</h5>
        <p>{{photo.user.first_name}} {{photo.user.last_name}}</p>
      </div> -->

<script>

  // Import axios for making API Calls
  const axios = require('axios');

  // Lowercases, trims, and replaces non-alpha chars
  function parse_query_string(query_string) {

  	return query_string.toLowerCase()
  					   .replace(/\s+/g, " ").trim()
  					   .replace(/[^A-Za-z]/g, '');
  }

  // Define Spoonacular API Key
  const API_KEY = 'adf96c4e880d489cae9e6e3fe8734999';

  // Define number of recipes to return
  const N_RECIPES = 6;

  // Take user input from HTML form
  var input = 'gnocchi';
  console.log('Got here!');

  // Parse user input
  var parsed_input = parse_query_string(input);

  // Build API get request string url
  var url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${parsed_input}&number=${N_RECIPES}&addRecipeInformation=true`;

  // Print request url
  console.log(`Making get request with url: ${url}`);

  export default {
      name: 'Page3',
      data() {
        return {
          results: []
        }
      },
      mounted () {
        // Make request and print response
        axios.get(url)
        	 .then(response => {
        	 	// console.log(response.data.results)
        	 	this.results = response.data.results
        	 	// console.log(this.results.length)
        	 	// console.log(this.results[0])
        	 })
        	 .catch(error => {
        	 	this.errored = true
        	 	// console.log(error)
        	 })
        	 .then(() => (this.loading = false));
      }
    }

</script>
