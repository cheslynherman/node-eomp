<template>
  <h1 class="text-center">Admin</h1>
  <div class="userSection container-fluid">
    <h3>Users</h3>
    <div>
        <AddUserComp/>
    </div>
    <div
      class="userTable"
      v-for="user of users"
      :key="user.userID"
      :user="user"
    >
      <table>
        <tr>
          <th>userID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
        <tbody v-if="users">
          <tr>
            <td>{{ user.userID }}</td>
            <td>{{ user.userName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.age }}</td>
            <td> <button>Delete</button></td>
          </tr>
        </tbody>
        <tbody v-else>
          sorry
        </tbody>
      </table>
    </div>
  </div>

  <div class="productSection container-fluid">
    <h3>Products</h3>
    <div>
     <add-product-comp/>
    </div>
    <div
      class="productsTable"
      v-for="product of products"
      :key="product.productID"
      :product="product"
    >
      <table>
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
        </tr>
        <tbody v-if="products">
            <tr>
                <td>{{ product.productID }}</td>
                <td>{{ product.productName }}</td>
                <td>{{ product.Quantity }}</td>
                <td>{{ product.Price }}</td>
                <td>{{ product.Category }}</td>
                <td><img :src="product.imageURL" :alt="product.productName"></td>
                <td><button>Delete</button></td>
            </tr>
        </tbody>
        <tbody v-else>sorry</tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AddUserComp from "@/components/AddUser-comp.vue"
import AddProductComp from '@/components/AddProduct-comp.vue';

export default {
  created() {
    this.$store.dispatch("getProducts"), this.$store.dispatch("getUsers");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  components: {
    AddUserComp,
    AddProductComp,
    
  }
};
</script>
