<script>
import foodImage from './foodImage.vue';
// import formInfo from './foodImage.vue';


var forms = [
    {
        fname: "Name",
        placeholder: "Enter Name",
        idx: 0
    },
    {
        fname: "Address",
        placeholder: "Enter Address",
        idx: 1
    },
    {
        fname: "Phone Number",
        placeholder: "Enter Phone Number",
        idx: 2
    },
    {
        fname: "Email",
        placeholder: "Enter Email",
        idx: 3
    }
]

var images = [{

      image: require('../assets/food3.jpg'),
      title: 'Frozen frosty coffee drink',
      alt: 'breakfast scramble 1',
      text: 'description about this delicious coffee thing',
      idx: 0
    },
    {

      image: require('../assets/food4.jpg'),
      title: 'Hippy dippy breakfast scramble',
      alt: 'breakfast scramble 2',
      text: 'description about this delicious breakast scramble',
      idx: 1
    },
    {

      image: require('../assets/food5.jpg'),
      title: 'Banana splitz',
      alt: 'breakfast scramble 3',
      text: 'description about this delicious banana splitz',
      idx: 2
}]

export default {
    name: 'Page2',
    components: {
      foodImage
      // formInfo,
    },
    data() {
      return {
        foodImages: images
        // formInfos: forms
      }
    }
  }

</script>


<template>
<div v-if="foodImages">
  <foodImage
  v-for="foodImage in foodImages"
  v-bind:foodImage="foodImage"
  v-bind:key="foodImage.idx"
  v-bind:src="foodImage.image"
  v-bind:title="foodImage.title"
  v-bind:alt="foodImage.alt"
  v-bind:text="foodImage.text"
  >
  </foodImage>
</div>
</template>


<!-- <template>
<div>
  <div class="col-sm-6 col-md-4 col-lg-3 mt-4" v-for="foodImage in foodImages" :key="foodImage.idx">
    <div class="card m-5" style="width: 15rem;">
      <img class="card-img-top" :src="foodImage.image" :alt="foodImage.alt">
        <div class="card-body">
          <h5 class="card-title">{{foodImage.title}}</h5>
            <p class="card-text">{{foodImage.alt}}</p>
            <a href="http://www.google.com" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  </div>
</div>

</template> -->
