import { createStore } from 'vuex'
const url = "https://eomp-backend-9rbd.onrender.com/"

export default createStore({
  state: {
    products: null,
    product: null,
    user: null,
    asc: true
  },
 
  mutations: {
    setProducts: (state, value) => {
      state.products = value
    },
    setProduct: (state, value) => {
      state.product= value
    },
    sortProducts: (state) => {
      state.products.sort ((a, b) => {
        return a.Price - b.Price;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc= !state.asc
    }
  },
  actions: {
   
    getProducts: async (context) => {
      try {
        const res = await fetch(`${url}products`);
        if (!res.ok) {
          throw new Error("Unable to fetch products");
        }
        const products = await res.json();
        console.log(products.results)
        context.commit("setProducts", products.results);
        
      } catch (error) {
        context.commit('setSpinner', true);
        
      }
    },
    // getProduct: async (context, productID) => {
    //   try {
    //     const res = await fetch (`${url}product/:id`);
    //     if (!res.ok) {
    //       throw new Error ("Unable to fetch Product");
    //     }
    //     const product = await res.json();
    //     console.log(productID.results)
    //     context.commit("setProduct", productID.results);
    //   } catch(error) {
    //     context.commit(true);
    //   }
    // }
    getProduct: async (context, productID) => {
      fetch (`${url}Product/:id`)
      .then ((res) => res.json())
      .then ((product) => {
        let prod;
        product.forEach (prod => {
          if (prod.productID == productID) {
            product = prod
          }
        });
        context.commit("setProduct", product.results)
      });
    }
  }
  
})
