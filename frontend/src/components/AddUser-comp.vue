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
            <input type="text" /><br />
          </div>

          <div class="inputs">
            <label>Last Name</label>
            <input type="text" /><br />
          </div>

          <div class="inputs">
            <label>Email Address</label>
            <input type="text" /><br />
          </div>

          <div class="inputs">
            <label>Gender</label>
            <input type="text" /><br />
          </div>

          <div class="inputs">
            <label>Age</label>
            <input type="number" /><br />
          </div>

          <div class="inputs">
            <label>Password</label>
            <input type="password" />
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
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>
