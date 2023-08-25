<template>
  <div class="landing">
    <div class="firstWord">
      <h1 class="appliance animate__animated animate__fadeInLeft">Appliance</h1>
    </div>
    <div class="secondWord">
      <h1 class="cartel animate__animated animate__fadeInRight">Cartel</h1>
    </div>
    <div class="text text-center animate__animated animate__fadeIn">
      <p class="motto">Where We Make Your House A Home !</p>
    </div>
  </div>

  <div class="bestSeller">
    <h1 class="text-center m-3">Our Best Seller</h1>
    <div>
      <div class="card">
        <img
          src="https://i.postimg.cc/tTnsV8Y3/nespresso-vertuo.jpg"
          class="card-img-top"
          alt="Nespresso Vertuo Red"
        />
        <div class="card-body">
          <h5 class="card-title">Nespresso Vertuo Aqua</h5>
          <p class="card-text">Price: R 4000</p>
          <router-link to="/products" class="buttons">See Products</router-link>
        </div>
      </div>
    </div>
  </div>

  <div class="featured">
    <h1 class="text-center m-3">Featured Products</h1>
    <div class="products">
      <div class="card">
        <img
          src="https://i.postimg.cc/NjQ2PNzt/smeg-kettle.jpg"
          class="card-img-top"
          alt="Smeg Kettle"
        />
        <div class="card-body">
          <h5 class="card-title">Smeg Kettle</h5>
          <p class="card-text">Price: R 2500</p>
          <router-link to="/products" class="buttons">See Products</router-link>
        </div>
      </div>
      <div class="card">
        <img
          src="https://i.postimg.cc/26W55vKT/Russel-hop-kettle.jpg"
          class="card-img-top"
          alt="Russel Hobbs Glass Kettle"
        />
        <div class="card-body">
          <h5 class="card-title">Russell Hobbs Glass Kettle</h5>
          <p class="card-text">Price: R 500</p>
          <router-link to="/products" class="buttons">See Products</router-link>
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
          <p class="card-text">Price: R 1200</p>
          <router-link to="/products" class="buttons">See Products</router-link>
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
  margin: 20px;
}

.firstWord {
  text-align: right;
  margin-top: 15vh;
}

.appliance {
  font-size: 70px;
}

.cartel {
  font-size: 85px;
}
.motto {
  font-size: 25px;
  margin: 20px;
}

.firstWord,
.secondWord {
 
  width: 50%;
}

.secondWord {
  margin-left: auto;
  color: #ce1212;
}

.card {
  width: 20rem;
  margin: auto;
  background-color: #1b1717;
  color: #eeebdd;
  border: 2px solid #ce1212;
  border-radius: 30px;
  padding: 5px;
}
.card:hover {
  box-shadow: 0 0 30px 5px #CE1212
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
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: #eeebdd;
  border: 2px solid #ce1212;
  background: #ce1212;
  padding: 5px;
  border-radius: 30px;
}

.featured {
  margin: 20px;
}

.buttons {
    background: #CE1212;
    color: #EEEBDD;
    border: 2px solid #CE1212;
    border-radius: 30px;
    width: 120px;
    box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.buttons:hover {
    color: #EEEBDD;
    background: #CE1212;
  box-shadow: 0 0 30px 5px #CE1212;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

@media only screen and (max-width:705px) {
  .products {
    display: grid;
    grid-template-columns: auto auto;
  }
  .card {
    margin-top: 10px;
  }
}

@media only screen and (max-width:305px) {
  .products {
    display: grid;
    grid-template-columns: auto;
  }
  .card {
    margin-top: 10px;
  }
  .firstWord, .secondWord, .text {
    margin: auto;
  }

  .cartel, .appliance {
    font-size: 50px;
  }
}

@media only screen and (max-width: 450px) {
    .card {
        width: 16rem;
    }
    .card-img-top {
        width: 14rem;
        height: 16rem;
    }
}
</style>
