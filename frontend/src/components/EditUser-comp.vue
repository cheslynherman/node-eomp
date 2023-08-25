<template>
    <!-- Button trigger modal -->
    <button
      type="button"
      class=""
      data-bs-toggle="modal"
      data-bs-target="#editProduct"
    >
      Edit User
    </button>
  
    <!-- Modal -->
    <div
      class="modal fade"
      id="editProduct"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Update User
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              X
            </button>
          </div>
          <div class="modal-body">
  
            <div class="inputs">
              <label>First Name</label>
              <input type="text" v-model="userName" />
            </div>
  
            <div class="inputs">
              <label>Last Name</label>
              <input type="text" v-model="lastName" />
            </div>
  
            <div class="inputs">
              <label>Email Address</label>
              <input type="text" v-model="emailAdd" />
            </div>
  
            <div class="inputs">
              <label>Gender</label>
              <input type="text" v-model="gender" />
            </div>
  
            <div class="inputs">
              <label>Age</label>
              <input type="number" v-model="age" />
            </div>
            
            <div class="inputs">
              <label>Password</label>
              <input type="password" v-model="age" />
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" @click="updateUser(userID)" class="">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    
  }
  </script>
  
  <style scoped>
      button {
    background: #ce1212;
    color: #eeebdd;
    border: 2px solid #ce1212;
    
    border-radius: 30px;
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  
  button:hover {
    color: #eeebdd;
    background: #ce1212;
    box-shadow: 0 0 30px 5px #ce1212;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }
  
  .modal-content {
    background: #1b1717 !important;
    color: #eeebdd !important;
    display: block;
  }
  
  input {
    color: #eeebdd !important;
    border: 2px solid #ce1212;
    background: #ce1212 !important;
    border-radius: 20px;
    margin: 15px;
    width: 60%;
  }
  </style>
  