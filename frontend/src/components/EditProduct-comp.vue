<template>
    <!-- Button trigger modal -->
<button type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Edit
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <div class="inputs">
            <label>Product Name</label>
            <input type="text" v-model="productName"> <br>
        </div>

         <div class="inputs">
            <label>Quantity</label>
            <input type="number" v-model="Quantity"> <br>
        </div>

         <div class="inputs">
            <label>Price</label>
            <input type="text" v-model="Price"> <br>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>