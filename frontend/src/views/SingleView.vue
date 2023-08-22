<template>
    <div v-if="product">
        <img :src="product.imageURL" :alt="productName"/>
        <h1>{{ product.productName }}</h1>
        <p>{{ product.Price }}</p>
    </div>
    <div v-else>
        ouch
    </div>
</template>

<script>
export default {
    props: ["productID"],
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    mounted() {
        this.$store.dispatch("getProduct", this.productID);
    }
}
</script>