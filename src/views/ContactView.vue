<template>
  <TheHeader />
  <div class="container">
    <!-- contact section start -------------------------------------->
    <div class="contact" id="contact">
      <h1 class="section-title"><span>contact</span> us</h1>
      <p class="about">
        A company specialized in supplying all kinds of mobile phones with all
        their accessories Marketing it through software or websites.
      </p>

      <div class="row">
        <div class="col-lg-12 col-md-12 col-12">
          <div class="contact-info">
            <div class="contact-info-item col-lg-4">
              <i class="fas fa-location-arrow"></i>
              <h4>Compant Location</h4>
              <p>199 xyz Yemen</p>
            </div>
            <div class="contact-info-item col-lg-4">
              <i class="fas fa-envelope"></i>
              <h4>Write to us at</h4>
              <p>info@gmail.com</p>
            </div>
            <div class="contact-info-item col-lg-4">
              <i class="fas fa-phone"></i>
              <h4>Call us on</h4>
              <p>(+967)777350652</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <iframe
          class="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <form action="">
          <h3>get in touch</h3>
          <div class="inputBox">
            <span class="fas fa-user"></span>
            <input type="text" placeholder="name" />
          </div>
          <div class="inputBox">
            <span class="fas fa-envelope"></span>
            <input type="email" placeholder="email" />
          </div>
          <div class="inputBox">
            <span class="fas fa-phone"></span>
            <input type="number" placeholder="number" />
          </div>

          <input type="submit" value="contact now" class="btn buzz" />
        </form>
      </div>
    </div>
    <!-- contact section end -->
  </div>
  <TheFooter />
</template>
<script>
import TheHeader from "../components/Layouts/TheHeader.vue";
import TheFooter from "../components/Layouts/TheFooter.vue";
export default {
  components: { TheHeader, TheFooter },
};
</script>

<style scoped>
/* start section  contact ***********************************************/

.section-title {
  color: #000;
  text-align: center;
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 2rem !important;
  position: relative;
  padding: 0.3rem;
  margin: auto;
  width: fit-content;
  text-transform: capitalize;
}
.section-title::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  left: 0;
  bottom: 0;
  background-color: var(--red-color);
}
.about {
  width: 65% !important;
  text-align: center;
  font-size: 20px;
  margin: auto;
  /* width: calc(100% - 10%); */
}
#contact {
  margin-top: 80px;
  margin-bottom: 40px;
}
.contact .row {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
}

.contact .row .map {
  flex: 1 1 45rem;
  width: 100%;
  object-fit: cover;
  height: 400px;
  margin: 5rem 0;
}

.contact .row form {
  flex: 1 1 45rem;
  text-align: center;
  margin: 5rem 0;
}

.contact .row form h3 {
  text-transform: uppercase;
  font-size: 2rem;
  color: #000;
}

.contact .row form .inputBox {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background: #fff;
  border-radius: 0.6rem;
  color: #000;
}
.contact .row form .inputBox input:focus {
  border: none !important;
  outline: none !important;
  color: #000;
}

/* Icons for form input */
.contact .row form .inputBox .fa-user,
.contact .row form .inputBox .fa-envelope,
.contact .row form .inputBox .fa-phone {
  color: var(--red-color);
  font-size: 1.2rem;
  margin-left: 10px;
  text-align: center;
}

.contact .row form .inputBox input {
  width: 100%;
  padding: 1rem;
  font-size: 24;
  color: #fff;
  text-transform: none;
  background: none;
  border: none;
}
.btn {
  background-color: var(--red-color);
  padding: 10px;
  color: #fff;
  text-transform: capitalize;
}
.btn:hover {
  background-color: var(--btn-color) !important;
  color: #fff !important;
}
.contact-info {
  width: 100% !important;
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin: 2rem 0;
}
.contact-info-item {
  display: block;
}
.contact-info-item .fa-phone,
.contact-info-item .fa-envelope,
.contact-info-item .fa-location-arrow {
  font-size: 23px;
  color: var(--red-color);
}
.contact-info-item h4 {
  font-size: 18px;
  font-weight: 400;
  margin: 0 0 10px;
  color: #000;
  font-weight: 550;
}

.contact-info-item p {
  font-size: 16px;
  font-weight: 300;
  margin: 0;
  line-height: 26px;
}
@media (max-width: 991px) {
  .section-title {
    margin-top: 7rem;
  }
  .about {
    width: 75% !important;
  }
  /* .contact-info {
    justify-content: space-between;
  } */
}
@media (max-width: 576px) {
  .contact-info {
    display: block;
  }
  .contact-info-item {
    margin: 1.5rem 0;
  }
  .about {
    width: 100% !important;
    font-size: 16px;
  }
}
@media (max-width: 780px) {
  .contact .row {
    display: block !important;
  }
  .about {
    width: 95% !important;
  }
}
/* End section contact */
</style>