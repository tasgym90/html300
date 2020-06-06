<script>
import foodImage from '../components/foodImage.vue';
import toggleShowHide from '../components/foodImage.vue';
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
      image: require('../static/food3.jpg'),
      title: 'Frozen frosty coffee drink',
      alt: 'breakfast scramble 1',
      text: 'description about this delicious coffee thing',
      idx: 0
    },
    {
      image: require('../static/food4.jpg'),
      title: 'Hippy dippy breakfast scramble',
      alt: 'breakfast scramble 2',
      text: 'description about this delicious breakast scramble',
      idx: 1
    },
    {
      image: require('../static/food5.jpg'),
      title: 'Banana splitz',
      alt: 'breakfast scramble 3',
      text: 'description about this delicious banana splitz',
      idx: 2
}]
export default {
    name: 'Page2',
    mixins: [toggleShowHide],
    components: {
      foodImage,

      // formInfo,
    },
    filters: {
      Upper(value) {
             return value.toUpperCase()
      }
   },
    data() {
      return {
        foodImages: images
        // formInfos: forms
      }
    }
  }
</script>

<!-- Create a mixin for the image component that should toggle on/off a border around
the image on click, apply the mixin to the image component. -->

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
  @click.native="toggleShowHide"
  >
  </foodImage>
</div>
</template>
