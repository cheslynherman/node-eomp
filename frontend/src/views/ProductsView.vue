<template>
  <h1 class="text-center m-3 animate__animated animate__fadeInLeft">
    Products
  </h1>
  <div class="options">
    <div class="search">
      <input type="text" v-model="search" placeholder="search" />
    </div>
    <div>
      <button @click="sortByPrice" class="sort">Sort by Price</button>
      <button @click="sortByName" class="sort">Sort by Name</button>
    </div>
  </div>

  <div v-if="Products" class="display container-fluid">
    <ProductCardComp
      v-for="product of Products"
      :key="product.productID"
      :product="product"
    />
  </div>
  <div v-else class="d-flex justify-content-center">
    <spinner-comp/>
  </div>
</template>

<script>
import ProductCardComp from "@/components/ProductCard-comp.vue";
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
  data() {
    return {
      search: "",
      Categories: "All",
    };
  },
  methods: {
    sortByPrice() {
      this.$store.commit("sortProducts");
    },
    sortByName() {
      this.$store.commit("sortByName");
    },
  },
  computed: {
    Products() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (
          !product.productName.toLowerCase().includes(this.search.toLowerCase())
        ) {
          isMatch = false;
        }
        if (
          this.Categories !== "All" &&
          this.Categories !== product.Categories
        ) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  components: {
    ProductCardComp,
    SpinnerComp,
  },
};
</script>

<style scoped>
.options {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 10px;
}

input {
  color: #eeebdd !important;
  border: 2px solid #ce1212;
  background: #ce1212 !important;
  border-radius: 20px;
}

::placeholder {
  color: #eeebdd;
}

.sort {
  background: #ce1212;
  color: #eeebdd;
  border: 2px solid #ce1212;
  border-radius: 30px;
  width: 120px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin-left: 20px;
}

.sort:hover {
  color: #eeebdd;
  background: #ce1212;
  box-shadow: 0 0 30px 5px #ce1212;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.display {
  display: grid;
  grid-template-columns: auto auto auto auto;
}

@media only screen and (max-width: 705px) {
    .display {
        display: grid;
        grid-template-columns: auto auto;
    }
}
@media only screen and (max-width: 305px) {
    .display {
        display: grid;
        grid-template-columns: auto;
    }
    .options {
        display: flex;
        flex-direction: column;
        
    }
    input, .sort {
        width: 90%;
        margin: 10px;
    }
}

</style>
