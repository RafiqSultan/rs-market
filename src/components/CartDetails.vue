<!-- <template> -->
  <!-- <div
    layoutShow
    class="layoutShow layoutHiden"
    :class="{ layoutShow: this.showContent == 'active' }"
  > -->
  <!-- <div class="container">
    <div class="popup">
      <slot />
      <button class="popup-close" @click="TogglePopup()">Close Popup</button>
    </div> -->

    <!-- <div class="row">
        <div class="col-lg-6">
          <div class="details">
            <span class="remove" @click="removeLayout()"
              ><i class="fas fa-xmark"></i
            ></span>
            <div class="col-lg-6">
              <div class="img">
                <img
                  src="https://www.gizmochina.com/wp-content/uploads/2018/07/Samsung-Galaxy-Note9-SD845-458x344.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="info">
                <div class="info-1">
                  <h4>model Name</h4>
                  <span>Type</span>
                </div>
                <div class="info-2">
                  <p>
                    Lorem ipsum dolor sit amet minus asperiores accusantium
                    ullam unde praesentium quos labore placeat officiis.
                  </p>
                </div>
                <div class="info-3">
                  <h5>colors</h5>
                  <div class="colors">
                    <div class="red"></div>
                    <div class="white"></div>
                    <div class="blue"></div>
                    <div class="red"></div>
                  </div>
                </div>
                <div class="info-4">
                  <h5>Rate</h5>
                  <div class="star">
                    <i class="fa-solid fa-star" v-for="star in 4"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                  </div>
                </div>
                <div class="info-5">
                  <button>
                    <i class="fas fa-shopping-cart"></i>
                    ADD TO CART
                  </button>
                  <p class="price"> -->
    <!-- <span :class="{ discount: phoneDiscount > 0 }" id=""
                    >${{ phonePrice }}</span
                  >
                  <span v-if="phoneDiscount > 0">
                    $
                    {{
                      Math.floor(
                        phonePrice - phonePrice * (phoneDiscount / 100)
                      )
                    }}</span> -->
    <!-- $3000 -->
    <!-- </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
  <!-- </div>
 </div> -->
<!-- </template> --> 
<!-- <script>
export default {
  props: {
    show: String,
  },
  data() {
    return {
      showContent: show,
    };
  },
  methods: {
    removeLayout() {
      console.log("SSSSSSS");
      console.log(this.showContent);
      this.showContent = null;
      console.log("RRRRRRRRRRr");
      console.log(this.showContent);
    },
  },
};
</script>
<style scoped> -->
<!-- /* .popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
} */
/* .layoutShow {
  position: absolute;
  background-color: rgba(1, 1, 1, 0.1) !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  bottom: 100%;
  width: 100%;
  height: 100vh !important;
  display: flex;
  align-items: center !important;
  justify-content: center !important;
}
.layoutHiden {
  position: absolute;
  background-color: rgba(1, 1, 1, 0.1) !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  bottom: 100%;
  width: 100%;
  height: 100vh !important;
  display: none;
  align-items: center !important;
  justify-content: center !important;
}
.details {
  display: flex;
  width: 100%;
  height: 300px;
  /* padding: 5px 10px; */
  overflow: hidden !important;
  position: relative;
  /* top: 50% !important; */
  box-shadow: 0 3px 3px var(--blue-dark-color);
}
.details .remove {
  position: absolute;
  content: "";
  width: 25px;
  height: 25px;
  right: 0;
  top: 0;
  background-color: rgb(218, 20, 20);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #f1f1f1;
  cursor: pointer;
}

.img {
  background-color: #fff;
  /* border: 1px solid var(--blue-dark-color); */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
img {
  width: 80%;
  height: auto;
}
.info {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  height: 100%;
  background-color: #fff;
  border-left: 2px solid var(--blue-color);
}
.info .info-1,
.info-2,
.info-3,
.info-4 {
  height: 22%;
  background: #fff;
  line-height: 10px;
  padding: 0 0 5px;
  margin: 2px 0;
  border-bottom: 1px solid var(--blue-dark-color);
}
.info-1 {
  height: 22% !important;
}
.info .info-1 h4 {
  font-size: 20px;
  font-weight: bold;
}
.info .info-1 span {
  font-size: 20px;
  font-weight: 500;
}
.info-2 {
  line-height: 18px;
}
.info-2 p {
  font-size: 14px;
}
.info-3 {
  display: block;
  height: 22% !important;
}
.colors {
  display: flex;
}
.red,
.blue,
.white {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
}
.info-3 .red {
  background-color: var(--red-color);
}
.info-3 .blue {
  background-color: #00f;
}
.info-3 .white {
  background-color: #ccc;
}
.info-4 {
  display: block;
  height: 21% !important;
}
.star .fa-star,
.fa-star-half-stroke {
  color: #f0bb0d !important;
  font-size: 16px;
}
.info-5 {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
}
.info-5 button {
  background: var(--red-color);
  border: none;
  padding: 2px 10px;
  border-radius: 5px;
  color: #fff;
}
.info-5 button:hover {
  letter-spacing: 0.5px;
  background-color: var(--btn-color);
}
.fa-shopping-cart {
  background-color: #00f;
  margin-left: 10px;
}
.info-5 .price {
  font-size: 18px;
  margin-top: 4%;
}
</style>  */ -->