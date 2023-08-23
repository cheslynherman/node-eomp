<template>
    <!-- Button trigger modal -->
<button type="button" class="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add a Product
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="inputs">
            <label>Product Name</label>
            <input type="text" /><br />
          </div>

          <div class="inputs">
            <label>Quantity</label>
            <input type="number" /><br />
          </div>

          <div class="inputs">
            <label>Price</label>
            <input type="text" /><br />
          </div>

          <div class="inputs">
            <label>Category</label>
            <input type="text" /><br />
          </div>

          <div class="inputs">
            <label>Image URL</label>
            <input type="url" /><br />
          </div>

          
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Submit</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    
}
</script>