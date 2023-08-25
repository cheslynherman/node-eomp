<template>
    <div v-if="product" class="container-fluid text-center">
        <h1>{{ product[0].productName }}</h1>
        <img :src="product[0].imageURL" :alt="product[0].productName" class="img-fluid"/>
        <p>Price: R {{ product[0].Price }}</p>
        <p>Stock Left: {{ product[0].Quantity }}</p>
    </div>
    <div v-else class="d-flex justify-content-center">
        <spinner-comp/>
    </div>

</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
    props: ["productID"],
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    mounted() {
        this.$store.dispatch("getProduct", this.$route.params.id );
    },
    components: {
        SpinnerComp
    }
}
</script>

<style scoped>

.text-center {
    height: 70vh;
    align-items: center;
    border-top: 2px solid #ce1212;
    border-bottom: 2px solid #ce1212;
    width: 60%;
    margin: auto;
}
img {
    height: 300px;
    border-radius: 30px;
    margin: 20px;
}

img:hover {
    transform: scale(1.1);
}

@media only screen and (max-width:701px) {
    .text-center {
        margin: auto !important;
    }
}
</style>