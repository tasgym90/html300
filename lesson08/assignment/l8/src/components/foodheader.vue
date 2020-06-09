<script>

export default {

  data() {
    return {
      msg: 'stupid'
    }
  }
}

</script>




<template>
  <div>
    <h2><slot>Here is my default value for header 1</slot></h2>
  </div>
</template>
