<template>
  <div
    class="
      container-fluid
      px-1 px-md-5 px-lg-1 px-xl-5
      py-5
      mx-auto
      mobile-home
    "
  >
    <div class="card card0 border-0">
      <div class="row d-flex">
        <div class="col-lg-6">
          <div class="card1 pb-5">
            <div class="row">
              <img
                src="../assets/mobile-logo1-removebg-preview.png"
                class="logo"
              />
            </div>
            <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
              <img src="../assets/mobile_vector.jpg" class="image" />
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card2 card border-0 px-4 py-5">
            <div class="row mb-4 px-3 col-lg-12 col-md-12 mx-auto">
              <h2 class="mb-0 mr-4 mt-2">
                SignUp <span style="font-size: 20px">with</span>
              </h2>
              <div class="facebook text-center mr-3">
                <i class="fab fa-facebook"></i>
              </div>
              <div class="twitter text-center mr-3">
                <div class="fab fa-twitter"></div>
              </div>
              <div class="google text-center mr-3">
                <div class="fab fa-google"></div>
              </div>
            </div>
            <div class="row px-3">
              <div class="line"></div>
              <small class="or text-center">Or</small>
              <div class="line"></div>
            </div>
            <form>
              <div class="row">
                <label><h6>Username</h6> </label>
                <input type="text" name="email" placeholder="Enter username" />
              </div>
              <div class="row">
                <label><h6>Email</h6> </label>
                <input type="email" name="email" placeholder="Enter email" />
              </div>
              <div class="row">
                <label><h6>Password</h6> </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </div>
              <div class="row">
                <label><h6>Confirm Password</h6> </label>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Enter Password"
                />
              </div>

              <div class="row mb-3 px-3">
                <router-link
                  to="/"
                  type="submit"
                  class="btn btn-blue text-center"
                >
                  Sign Up
                </router-link>
              </div>
            </form>

            <div class="row mb-4 px-3">
              <small class="font-weight-bold"
                >Already have an account:
                <router-link tag="a" to="/login" class="text-danger"
                  >Login</router-link
                ></small
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  
  
  <style scoped>
.mobile-home {
  background-image: url(../assets/mobile-market.jpg);
  background-size: cover;
}
.card0 {
  box-shadow: 0px 4px 8px 0px #757575;
  border-radius: 0px;
}

.card2 {
  margin: 0px 40px;
}

.logo {
  width: 200px;
  height: 100px;
  margin-top: 20px;
  margin-left: 35px;
}

.image {
  width: 360px;
  height: 280px;
}

.border-line {
  border-right: 1px solid #eeeeee;
}

.facebook {
  background-color: #3b5998;
  color: #fff;
  font-size: 33px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}
.facebook,
.twitter,
.google {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 5px;
}

.twitter {
  background-color: #1da1f2;
  color: #fff;
  font-size: 22px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.google {
  background-color: #2867b2;
  color: #fff;
  font-size: 22px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}
form {
  padding: 20px;
}
label {
  margin: 0 !important;
  padding: 0 !important;
  margin-left: 5px !important;
}
.line {
  height: 1px;
  width: 45%;
  background-color: #e0e0e0;
  margin-top: 10px;
}

.or {
  width: 10%;
  font-weight: bold;
}
.checkbox {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: -25px !important;
  padding-left: 0 !important;
}
.forget {
  margin-right: -27px !important;
  text-align: right;
}
:-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

::-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

input {
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  margin-bottom: 5px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  font-size: 14px;
  letter-spacing: 1px;
}

input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid var(--red-color);
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}
.card2 h2 {
  font-weight: bold;
}
.card2 span {
  font-weight: 300;
}
a {
  color: inherit;
  cursor: pointer;
}

.btn {
  background-color: var(--red-color);
  padding: 8px 40px;
  font-weight: 500;
  color: #fff;
  width: fit-content;
  text-transform: capitalize;
  margin-left: -13px !important;
  font-size: 18px;
}
.btn:hover {
  background-color: var(--btn-color) !important;
  color: #fff !important;
}
@media screen and (max-width: 991px) {
  .logo {
    margin: auto;
  }

  .image {
    width: 300px;
    height: 220px;
  }

  .border-line {
    border-right: none;
  }

  .card2 {
    border-top: 1px solid #eeeeee !important;
    margin: 0px 15px;
  }
}
@media (max-width: 576px) {
  .line {
    height: 1px;
    width: 35%;
    background-color: #e0e0e0;
    margin-top: 10px;
  }
  .or {
    width: 30%;
    font-weight: bold;
  }
}
</style>