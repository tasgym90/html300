<script>

export default {
    name: 'foodImage',
    props: ['foodImage'] // , 'formInfo']
    // components: {
    //   foodImage,
    //   formInfo
    // }
  }

</script>

<template>

  <div>
    <div class="col-sm-6 col-md-4 col-lg-3 mt-4" key="foodImage.idx">
      <div class="card m-5" style="width: 15rem;">
        <img class="card-img-top" :src="foodImage.image" :alt="foodImage.alt">
          <div class="card-body">
            <h5 class="card-title">{{foodImage.title}}</h5>
              <p class="card-text">{{foodImage.text}}</p>
              <a href="http://www.google.com" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>
  </div>


</template>
