<script>

// export default {
//     name: 'foodImage',
//     props: {//['foodImage']
//       foodImage: Object,
//       required: true,
//     }
//     // }
//   }

export default {
  props: {
    foodImage: {
      type: Object,
       required: true,
       validator: function (obj) {
         return 'image' in obj &&
                'title' in obj &&
                'alt' in obj &&
                'text' in obj &&
                'idx' in obj
      }
    },
  },

  methods: {
    toggleShowHide(){
      this.isHidden = !this.isHidden;
      console.log('clicked!')
    }
  },
  data() {
    return {
      isHidden: false
    }
  }
}


</script>

<template>


  <div>
    <div class="col-sm-6 col-md-4 col-lg-3 mt-4" key="foodImage.idx">
      <div class="card m-5" style="width: 15rem;">
        <img v-bind:class="[isHidden ? 'card-img-top' : 'card-img-top border']" @click="toggleShowHide()" :src="foodImage.image" :alt="foodImage.alt">
        <!-- <img class="card-img-top ? border isHidden}" :src="foodImage.image" :alt="foodImage.alt"> -->
         <div class="card-body">
            <h5 class="card-title">{{foodImage.title}}</h5>
              <p class="card-text">{{foodImage.text}}</p>
              <a href="http://www.google.com" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>
  </div>


</template>


<style>

.border {
  box-shadow: 0 15px 15px rgba(0,0,0,0.5)
}
</style>
