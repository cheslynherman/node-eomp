<template>
  <div class="landing">
    <div class="firstWord">
      <h1 class="appliance">Appliance</h1>
    </div>
    <div class="secondWord">
      <h1 class="cartel">Cartel</h1>
    </div>
  </div>

  <div class="bestSeller">
    <h1 class="text-center">Best Seller</h1>
    <div>
      <div class="card">
        <img
          src="https://i.postimg.cc/tTnsV8Y3/nespresso-vertuo.jpg"
          class="card-img-top"
          alt="Nespresso Vertuo Red"
        />
        <div class="card-body">
          <h5 class="card-title">Nespresso Vertuo Red</h5>
          <p class="card-text">R</p>
          <router-link to="/products">See Products</router-link>
        </div>
      </div>
    </div>
  </div>

  <div class="featured">
    <h1 class="text-center">Featured Products</h1>
    <div class="products">
      <div class="card">
        <img
          src="https://i.postimg.cc/NjQ2PNzt/smeg-kettle.jpg"
          class="card-img-top"
          alt="Smeg Kettle"
        />
        <div class="card-body">
          <h5 class="card-title">Smeg Kettle</h5>
          <p class="card-text">R</p>
          <router-link to="/products">See Products</router-link>
        </div>
      </div>
      <div class="card">
        <img
          src="https://i.postimg.cc/26W55vKT/Russel-hop-kettle.jpg"
          class="card-img-top"
          alt="Russel Hobbs Glass Kettle"
        />
        <div class="card-body">
          <h5 class="card-title">Russel Hobbs Glass Kettle</h5>
          <p class="card-text">R</p>
          <router-link to="/products">See Products</router-link>
        </div>
      </div>
      <div class="card">
        <img
          src="https://i.postimg.cc/qvBgGNNM/milex-kettle.jpg"
          class="card-img-top"
          alt="Milex Kettle"
        />
        <div class="card-body">
          <h5 class="card-title">Milex Kettle</h5>
          <p class="card-text">R</p>
          <router-link to="/products">See Products</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.landing {
  height: 50vh;
  border: 2px solid saddlebrown;
}

.firstWord,
.secondWord {
  border: 2px solid green;
  width: 50%;
}

.secondWord {
  margin-left: auto;
}

.card {
  width: 20rem;
  margin: auto;
  background-color: #1b1717;
  color: #eeebdd;
  border: 2px solid #ce1212;
  border-radius: 30px;
}
.card-img-top {
  height: 40vh;
  width: 18rem;
  border-radius: 30px;
  margin: auto;
  padding: 15px;
}

.products {
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: #eeebdd;
  border: 2px solid #ce1212;
  background: #ce1212;
  padding: 5px;
  border-radius: 30px;
}
</style>
