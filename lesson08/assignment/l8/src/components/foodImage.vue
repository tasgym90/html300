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
    <div class="card-group p-5">
      <img :src="foodImage__image">{{ foodImage.image}} >
    </div>

    <!-- <form>
    <div class="form-group m-1 p-1" v-for="x in formInfos">
      <label for="x.fname">{x.fname}}</label>
      <input class="form-control" type="text" id="name" :placeholder="x.placeholder">
    </div>
    <button type="button" class="btn btn-lg btn-danger m-2" data-toggle="popover" title="Popover title" data-content="Before you click submit, make sure you have double checked all of your info.">Submit</button>

      </form> -->
  </div>
</template>
