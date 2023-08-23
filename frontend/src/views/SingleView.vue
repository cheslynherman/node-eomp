<template>
    <div v-if="product">
        <h1>{{ product[0].productName }}</h1>
        <img :src="product[0].imageURL" :alt="product[0].productName"/>
        <p>{{ product[0].Price }}</p>
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
        this.$store.dispatch("getProduct", this.$route.params.id );
    }
}
</script>