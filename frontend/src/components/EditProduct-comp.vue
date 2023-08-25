<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class=""
    data-bs-toggle="modal"
    data-bs-target="#editProduct"
  >
    Edit Product
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="editProduct"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Update Product
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div class="modal-body">

          <div class="inputs">
            <label>Product Name</label>
            <input type="text" v-model="productName" />
          </div>

          <div class="inputs">
            <label>Quantity</label>
            <input type="number" v-model="Quantity" />
          </div>

          <div class="inputs">
            <label>Price</label>
            <input type="number" v-model="Price" />
          </div>

          <div class="inputs">
            <label>Category</label>
            <input type="text" v-model="Category" />
          </div>

          <div class="inputs">
            <label>Image URL</label>
            <input type="url" v-model="imageURL" />
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" @click="updateProd(productID)" class="">Save changes</button>
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
    async updateProd(id) {
        try {
            await axios.patch(`https://eomp-backend-9rbd.onrender.com/Products/${id}`, {
                productName: this.productName,
                Quantity: this.Quantity,
                Price: this.Price,
                Category: this.Category,
                imageURL: this.imageURL,
            });
            this.productName= "";
            this.Quantity = "";
            this.Price= ""; 
            this.Category= "";
            this.imageURL= "";
            alert("Product Has Been Updated");
            window.location.reload();
        } catch (error) {
            alert (error);
        }
    },
  },
};
</script>

<style scoped>
    button {
  background: #ce1212;
  color: #eeebdd;
  border: 2px solid #ce1212;

  border-radius: 30px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin-top: 15px;
  margin-bottom: 15px;
}

button:hover {
  color: #eeebdd;
  background: #ce1212;
  box-shadow: 0 0 30px 5px #ce1212;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.modal-content {
  background: #1b1717 !important;
  color: #eeebdd !important;
  display: block;
}

input {
  color: #eeebdd !important;
  border: 2px solid #ce1212;
  background: #ce1212 !important;
  border-radius: 20px;
  margin: 15px;
  width: 60%;
}
</style>
