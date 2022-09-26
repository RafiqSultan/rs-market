<template>
  <div class="container">
    <div class="cardProduct">
      <div class="img">
        <img :src="phoneImg" alt="phone" />
      </div>
      <div class="model-Rate">
        <h5>{{ phoneModel }}</h5>
        <div class="star">
          <i class="fa-solid fa-star" v-for="star in 4"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>

        <p class="price">
          <span :class="{ discount: phoneDiscount > 0 }" id=""
            >${{ phonePrice }}</span
          >
          <span v-if="phoneDiscount > 0">
            $
            {{
              Math.floor(phonePrice - phonePrice * (phoneDiscount / 100))
            }}</span
          >
        </p>
      </div>

      <div class="addCard">
        <div class="detailsCard">
          <span
            class="hvr-rectangle-in"
            @click="
              addProduct(
                phoneId,
                type,
                phoneModel,
                phoneImg,
                phonePrice,
                phoneDiscount,
                quantity,
                cart
              );
              changeStyle('add');
            "
            :class="{ isActive: isCart == true }"
            ><i class="fa fa-cart-shopping"></i
          ></span>
          <span class="hvr-rectangle-in" @click="isOpen = true"
            ><i class="fa-solid fa-eye"></i>
          </span>

          <span
            class="hvr-rectangle-in"
            @click="
              addToFav(
                phoneId,
                type,
                phoneModel,
                phoneImg,
                phonePrice,
                phoneDiscount,
                quantity,
                cart
              );
              changeStyle('fav');
            "
            :class="{ isActive: isFav == true }"
            ><i class="fa-solid fa-heart"></i
          ></span>
        </div>
      </div>
      <teleport to="body">
        <div class="modal" v-if="isOpen == true">
          <!-- <ModalView @close="isOpen = false" /> -->
          <ModalView>
            <div class="row">
              <div class="">
                <div class="details">
                  <span class="remove" @click="isOpen = false"
                    ><i class="fas fa-xmark"></i
                  ></span>
                  <!-- Img in Details -->
                  <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div class="img">
                      <img :src="phoneImg" alt="img" />
                    </div>
                  </div>
                  <!-- Content Details -->
                  <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="info">
                      <div class="info-1">
                        <h5>{{ phoneModel }}</h5>
                        <span>Type :{{ type }}</span>
                      </div>
                      <div class="info-2">
                        <span>Network:5G GSM - Android 11</span>
                        <span>RAM:6GB-Memory:128GB</span>
                        <span>Camera:12-12-16 Mp- Size:6.5inch</span>
                        <span>Battery:4500 mAh-:128GB</span>
                      </div>
                      <div class="info-3">
                        <h5>Colors</h5>
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
                        <p class="price">
                          <span :class="{ discount: phoneDiscount > 0 }" id=""
                            >${{ phonePrice }}</span
                          >
                          <span v-if="phoneDiscount > 0">
                            $
                            {{
                              Math.floor(
                                phonePrice - phonePrice * (phoneDiscount / 100)
                              )
                            }}</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalView>
          <!-- Finsh Slot Card Modal -->
        </div>
      </teleport>
    </div>
  </div>
</template>

<!-- Script js data -->
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import ModalView from "./ModalView.vue";
export default {
  props: [
    "phoneId",
    "type",
    "phoneModel",
    "phoneImg",
    "phonePrice",
    "cart",
    "quantity",
    "phoneDiscount",
  ],
  data() {
    return {
      noCart: 0,
      isFav: null,
      isCart: null,
      disco: this.disc,
      addNum: [],
      isOpen: false,
    };
  },
  methods: {
    changeStyle(option) {
      if (option == "add") {
        if (this.isCart == true) {
          this.isCart = null;
        } else {
          this.isCart = true;
        }
      }
      // Test Fav
      else if (option == "fav") {
        if (this.isFav == true) {
          this.isFav = null;
        } else {
          this.isFav = true;
        }
      }
    },
  },
  setup() {
    const store = useStore();
    function addProduct(
      phoneId,
      type,
      phoneModel,
      phoneImg,
      phonePrice,
      phoneDiscount,
      quantity
    ) {
      let product = {
        id: phoneId,
        type: type,
        model: phoneModel,
        img: phoneImg,
        price: Math.floor(phonePrice - phonePrice * (phoneDiscount / 100)),
        discount: phoneDiscount,
        quantity: quantity,
        cart: true,
      };
      console.log("click");
      product.timestamp = new Date().getTime();
      store.dispatch("addProduct", product);
    }
    // Add to Favorite
    function addToFav(
      phoneId,
      type,
      phoneModel,
      phoneImg,
      phonePrice,
      phoneDiscount,
      quantity
    ) {
      let product = {
        id: phoneId,
        type: type,
        model: phoneModel,
        img: phoneImg,
        price: Math.floor(phonePrice - phonePrice * (phoneDiscount / 100)),
        discount: phoneDiscount,
        quantity: quantity,
        cart: true,
      };
      console.log("click");
      product.timestamp = new Date().getTime();
      store.dispatch("addToFavorite", product);
    }
    // function removeProduct(id) {
    //   store.dispatch("removeProduct", id);
    // }
    // function increaseQ(id) {
    //   store.dispatch("increase", id);
    // }
    // function decreaseQ(id) {
    //   store.dispatch("decrease", id);
    // }
    return {
      addProduct,
      addToFav,
    };
  },
  components: { ModalView },
};
</script>

<style lang="scss" scoped>
// *Style Card Product

.modal {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(1, 1, 1, 0.5);
  width: 100% !important;
  height: 100vh !important;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000 !important;
}
.cardProduct {
  height: 330px;
  width: 250px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  padding: 5px !important;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  margin: 10px 0;
  position: relative;

  //   Style img
  .img {
    max-width: 80%;
    height: 50%;
    overflow: hidden;

    img {
      max-width: 100%;
      height: 100%;
    }
  }
}
.model-Rate {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 0.5rem;
  h5 {
    font-weight: 500;
    width: 100%;
    height: 40px;
    margin: 0 !important;
    color: #000;
    // font-size: 19px;
    line-height: 22px;
    overflow: hidden !important;
  }

  // discount and price
  .price {
    color: var(--blue-dark-color);
    margin: auto;
    font-size: 22px;
    font-weight: 500;
  }
  .discount {
    margin: 0 0.5rem;
    font-size: 20px;
    position: relative;
  }
  .discount::before {
    content: "";
    position: absolute;
    width: 140%;
    height: 2px;
    left: -8px;
    top: 50%;
    background-color: var(--red-color);
  }
  .star {
    .fa-star,
    .fa-star-half-stroke {
      color: #f0bb0d;
    }
  }
}

.addCard {
  height: 50px;
  width: 100%;
  border-radius: 10px;
  transition: all 0.5s;
  text-align: center;
  cursor: pointer;

  .detailsCard {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    span {
      height: 40px;
      width: 40px;
      border-radius: 50% !important;
      background-color: var(--blue-color);
      display: flex;
      color: var(--red-color);
      justify-content: center;
      align-items: center;
      font-size: 18px;

      .fa-heart {
        font-size: 20px;
      }
    }
    span:hover {
      color: #000;
    }
  }
}
.isActive {
  height: 40px;
  width: 40px;
  border-radius: 50% !important;
  background-color: var(--blue-color) !important;
  display: flex;
  color: #000 !important;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}

.isActive:hover {
  color: var(--red-color) !important;
}
.isNotActive {
  height: 40px;
  width: 40px;
  border-radius: 50% !important;
  background-color: var(--blue-color) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: var(--red-color) !important;
}

@media (max-width: 468px) {
  .cardProduct {
    height: 280px;
    width: 220px;
  }
}
</style> 





