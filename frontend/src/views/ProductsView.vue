<template>
    <h1 class="text-center">Products</h1>
    <select v-model="categories" @change="filters">
    <option value="All">All</option>
    <option value="TOASTER">Toaster</option>
    <option value="Kenwood">Kenwood</option>
    <option value="SMEG">SMEG</option>
    <option value="Russell Hobbs">Russell Hobbs</option>
    <option value=""></option>
    </select>
    <button @click="sortByPrice" class="sort">Sort by Price</button>
    <button @click="sortByName" class="sort">Sort by Name</button>

    <div v-if="Products" class="container-fluid">
    <ProductCardComp v-for="product of Products" :key="product.productID" :product="product"/>

    </div>
    <div v-else>nope</div>
</template>

<script>
import ProductCardComp from '@/components/ProductCard-comp.vue';
export default {
    data() {
        return {
            Categories: "All",
            
        };
    },
    methods: {
        sortByPrice() {
            this.$store.commit("sortProducts");
        },
       
    },
    computed: {
        Products() {
            return this.$store.state.products
        },
        
    },
    mounted() {
        this.$store.dispatch("getProducts")
    },
    components: {
        ProductCardComp
    }
}
</script>