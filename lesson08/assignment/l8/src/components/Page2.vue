<script>
import foodImage from './foodImage.vue';
import formInfo from './foodImage.vue';


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

      src: require('../assets/food3.jpg'),
      title: 'Breakfast Scramble 1',
      alt: 'breakfast scramble 1',
      idx: 0
    },
    {

      image: require('../assets/food4.jpg'),
      title: 'Breakfast Scramble 2',
      alt: 'breakfast scramble 2',
      idx: 1
    },
    {

      image: require('../assets/food5.jpg'),
      title: 'Breakfast Scramble 3',
      alt: 'breakfast scramble 3',
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

  // export default {
  //   name: 'Page2',
  //   data() {
  //     return {
  //       foodImages: images,
  //       currentIdx: 0,
  //       forminfos: form
  //     }
  //   }
  // }

console.log(foodImage)

</script>

<template>
  <div>
    <div v-for="x in foodImages" :key="blah">
      <img :src="x.image" style="width: 18rem;">
    </div>
  </div>

</template>

<!-- <template>
  <div>
    <div class="card-group p-5" v-for="(cardinfo, index) in cardinfos" :key="index">
          <img :src="cardinfo.image" class="img-fluid m-5" style="width: 18rem;">
          <!-- <img :src="cardinfo.image" class="img-fluid m-5" style="width: 18rem;">
          <img :src="cardinfo.image" class="img-fluid m-5" style="width: 18rem;"> -->
        <!-- </div>

      <form>
        <div class="form-group m-1 p-1" v-for="(forminfo, index) in forminfos">
          <label for="forminfo.fname">{{forminfo.fname}}</label>
          <input class="form-control" type="text" id="name" :placeholder="forminfo.placeholder">
        </div>
        <button type="button" class="btn btn-lg btn-danger m-2" data-toggle="popover" title="Popover title" data-content="Before you click submit, make sure you have double checked all of your info.">Submit</button>
      </form> -->
<!--
  </div>
</template> -->
