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
            <input type="text" v-model="productName" placeholder="Defy Toaster" /><br />
          </div>

          <div class="inputs">
            <label>Quantity</label>
            <input type="number" v-model="Quantity"/><br />
          </div>

          <div class="inputs">
            <label>Price</label>
            <input type="number" v-model="Price" placeholder="400"/><br />
          </div>

          <div class="inputs">
            <label>Category</label>
            <input type="text" v-model="Category"/><br />
          </div>

          <div class="inputs">
            <label>Image URL</label>
            <input type="url" v-model="imageURL"/><br />
          </div>

          
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Submit</button>
        <button type="button" @click="addNewProd()">Submit</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            productName: "",
            Quantity: "",
            Price: "",
            Category: "",
            imageURL: "",
        };
    },
    methods: {
       async addNewProd() {
        try {
            await axios.post("https://eomp-backend-9rbd.onrender.com/Product", {
                productName: this.productName,
                Quantity: this.Quantity,
                Price: this.Price,
                Category: this.Quantity, 
                imageURL: this.imageURL,
            });
            this.productName= "";
            this.Quantity= "";
            this.Price= "";
            this.Category= "";
            this.imageURL= "";
            alert ("Product Has Been Added")
            window.location.reload();
        }   catch (error) {
            alert (error);
        }
       } 
    }
    
}
</script>