<template>
  <router-link :to="{ name: 'product', params: { id: product.productID } }">
    <div class="card" style="width: 18rem">
      <img
        :src="product.imageURL"
        class="card-img-top"
        :alt="product.productName"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.productName }}</h5>
        <p class="card-text">Price: R {{ product.Price }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["product"],
};
</script>
