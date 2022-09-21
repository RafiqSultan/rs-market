<template>
  <div class="footer">
    <div class="card">
      <div class="row">
        <div class="col-lg-4 col-md-3 col-sm-11 col-xs-11 mb-4">
          <div class="footer-text pull-left">
            <div class="d-flex">
              <h1
                class="font-weight-bold mr-2 px-3"
                style="
                  color: #ed0370;
                  background-color: #5bafe5;
                  border-radius: 15px;
                "
              >
                RS
              </h1>
            </div>
            <p class="card-text">
              Specialized in all digital mobiles and accessories.
            </p>

            <div class="social">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram fa-lg"></i>
            </div>
          </div>
        </div>

        <div class="card-option col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>

        <div class="card-option col-md-2 col-sm-4 col-xs-4">
          <h5 class="heading">OS</h5>
          <ul>
            <li>Samsung</li>
            <li>Apple</li>
            <li>Google</li>
          </ul>
        </div>

        <div class="card-option col-lg-2 col-md-3 col-sm-4 col-xs-4">
          <h5 class="heading">Services</h5>
          <ul class="card-text">
            <li></li>
            <li>Programming</li>
            <li>Maintenance</li>
            <li>Buying</li>
            <li>Selling</li>
          </ul>
        </div>

        <div class="card-option col-lg-2 col-md-2 col-sm-4 col-xs-4">
          <h5 class="heading">Company</h5>
          <ul class="card-text">
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Join Us</li>
          </ul>
        </div>
      </div>

      <div class="divider mb-4"></div>

      <div class="row" style="font-size: 10px">
        <div class="col-md-6 col-sm-6 col-xs-6">
          <div class="pull-left">
            <p><i class="fa fa-copyright"></i> 2022 by RAAS</p>
          </div>
        </div>

        <div class="col-md-6 col-sm-6 col-xs-6">
          <div class="pull-right mr-4 d-flex policy">
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100% !important;
  padding: 0 !important;
  margin: 1rem 0 0 !important;
  background-color: #16151a;
}
.card {
  padding: 2% 7%;
  color: #646771;
  background-color: #16151a;
  /* text-align: center; */
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: left;
}

ul > li {
  padding: 4px;
}

ul > li:hover {
  color: var(--blue-color);
  cursor: pointer;
}

hr {
  border-width: 3px;
}

.social .fa-facebook,
.social .fa-instagram {
  font-size: 30px !important;
  margin: auto 3px;
  cursor: pointer;
}
.social .fa-facebook:hover,
.social .fa-instagram:hover {
  color: var(--blue-color);
}

.policy > div {
  padding: 4px;
}

.heading {
  font-family: "Titillium Web", sans-serif;
  color: white;
}

.divider {
  border-top: 2px solid rgba(189, 196, 203, 0.5);
}
@media (max-width: 576px) {
  .card,
  .footer-text,
  .card-option {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .pull-right {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>