<template>
  <div>
    <div class="card-group p-5">
          <img src="images/nature1.jpg" class="img-fluid m-5" style="width: 18rem;">
          <img src="images/nature2.jpg" class="img-fluid m-5" style="width: 18rem;">
          <img src="images/nature3.jpg" class="img-fluid m-5" style="width: 18rem;">
        </div>

      <form>
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
      </form>
  </div>
</template>
