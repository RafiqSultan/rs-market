<template>
  <TheHeader />
  <div class="profile">
    <h1 class="title">my Profile</h1>
    <div class="container profile rounded bg-white mt-5">
      <div class="row">
        <div class="col-md-4 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              src="https://i.imgur.com/0eg0aG0.jpg"
              width="90"
            /><span class="font-weight-bold">John Doe</span
            ><span class="text-black-50">john_doe12@bbb.com</span
            ><span>United States</span>
          </div>
        </div>
        <div class="col-md-8">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <a class="text-right">Edit Profile</a>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="first name"
                  value="John"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  value="Doe"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  value="john_doe12@bbb.com"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  value="+19685969668"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="address"
                  value="D-113, right avenue block, CA,USA"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  value="USA"
                  placeholder="Country"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Bank Name"
                  value="Bank of America"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  value="043958409584095"
                  placeholder="Account Number"
                />
              </div>
            </div>
            <div class="mt-5 text-right">
              <button class="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from "../components/Layouts/TheHeader.vue";
import TheFooter from "../components/Layouts/TheFooter.vue";
export default { components: { TheHeader, TheFooter } };
</script>

<style scoped>
.title {
  width: 100%;
  text-align: center;
  margin-top: 80px;
}
@media (max-width: 991px) {
  .title {
    margin-top: 120px;
  }
}
.profile {
  margin-bottom: 50px;
}
.form-control:focus {
  box-shadow: none;
  border-color: #ba68c8;
}

.profile-button {
  background: #ba68c8;
  box-shadow: none;
  border: none;
}

.profile-button:hover {
  background: #682773;
}

.profile-button:focus {
  background: #682773;
  box-shadow: none;
}

.profile-button:active {
  background: #682773;
  box-shadow: none;
}

.back:hover {
  color: #682773;
  cursor: pointer;
}
</style>