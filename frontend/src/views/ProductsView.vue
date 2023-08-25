<template>
    <h1 class="text-center">Products</h1>
    <input type="text" v-model="search" placeholder="search">
   
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
            search: "",
            Categories: "All",
            
        };
    },
    methods: {
        sortByPrice() {
            this.$store.commit("sortProducts");
        },
        sortByName () {
            this.$store.commit("sortByName");
        }
       
    },
    computed: {
        Products() {
            return this.$store.state.products?.filter((product)=> {
                let isMatch = true;
                if (!product.productName.toLowerCase().includes(this.search.toLowerCase())){
                    isMatch = false;
                }
                if (this.Categories !== "All" && this.Categories !== product.Categories) {
                    isMatch = false
                }
                return isMatch
            })
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