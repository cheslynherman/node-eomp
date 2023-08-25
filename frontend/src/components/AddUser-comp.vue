<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class=""
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Add New User
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="inputs">
            <label>First Name</label>
            <input type="text" v-model="userName" placeholder="Bruce" /><br />
          </div>

          <div class="inputs">
            <label>Last Name</label>
            <input type="text" v-model="lastName" placeholder="Wayne" /><br />
          </div>

          <div class="inputs">
            <label>Email Address</label>
            <input
              type="text"
              v-model="emailAdd"
              placeholder="bwayne@batmancorp.org"
            /><br />
          </div>

          <div class="inputs">
            <label>Gender</label>
            <input type="text" v-model="gender" placeholder="Male" /><br />
          </div>

          <div class="inputs">
            <label>Age</label>
            <input type="number" v-model="age" placeholder="30" /><br />
          </div>

          <div class="inputs">
            <label>Password</label>
            <input type="password" v-model="userPass" />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" @click="addNewUser()">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userName: "",
      lastName: "",
      emailAdd: "",
      gender: "",
      age: "",
      userPass: "",
    };
  },
  methods: {
    async addNewUser() {
      try {
        await axios.post("https://eomp-backend-9rbd.onrender.com/register", {
          userName: this.userName,
          lastName: this.lastName,
          emailAdd: this.emailAdd,
          gender: this.gender,
          age: this.age,
          userPass: this.userPass,
        });
        this.userName = "";
        this.lastName = "";
        this.emailAdd = "";
        this.gender = "";
        this.age = "";
        this.userPass = "";
        this.$router.push("/admin");
        alert ("User Has Successfully Been Added")
        window.location.reload();
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style scoped></style>
