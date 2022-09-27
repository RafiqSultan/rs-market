<template>
  <TheHeader />
  <div class="container" v-if="myFavorite.length > 0">
    <div class="favCart">
      <div class="cardProduct" v-for="item in myFavorite">
        <div class="img">
          <img :src="item.img" alt="phone" />
        </div>
        <div class="model-Rate">
          <h5>{{ item.model }}</h5>
          <div class="star">
            <i class="fa-solid fa-star" v-for="star in 4"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <p>
            $<span id="price">{{ item.price }}</span>
          </p>
        </div>

        <div class="addCard">
          <div class="detailsCard">
            <span
              class="hvr-rectangle-in"
              :class="{ isActive: isCart == true }"
              @click="
                addProduct(
                  item.id,
                  item.type,
                  item.model,
                  item.img,
                  item.price,
                  item.discount,
                  item.quantity,
                  item.cart
                );
                changeStyle('add');
              "
              ><i class="fa fa-cart-shopping"></i
            ></span>
            <span class="hvr-rectangle-in" @click="isOpen = true"
              ><i class="fa-solid fa-eye"></i
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
                          <button
                            @click="
                              addProduct(
                                item.id,
                                item.type,
                                item.model,
                                item.img,
                                item.price,
                                item.discount,
                                item.quantity,
                                item.cart
                              );
                              this.isOpen = false;
                            "
                          >
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
                                  phonePrice -
                                    phonePrice * (phoneDiscount / 100)
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
          </div>
        </teleport>
        <!-- Finsh Slot Card Modal -->
        <span class="remove" @click="removeItem(item.id)"
          ><i class="fas fa-xmark"></i
        ></span>
      </div>
    </div>
  </div>
  <!-- IF No Fav Item -->
  <div
    class="container"
    v-if="this.myFavorite.length <= 0"
    :class="{ noItem: myFavorite.length == 0 }"
  >
    <div class="noorder">
      <img src="../assets/cart.webp" alt="no order" />
      <h1>No Item Now</h1>
      <router-link tag="a" to="/products">Shop Now</router-link>
    </div>
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from "../components/Layouts/TheHeader.vue";
import ModalView from "./../components/ModalView.vue";
import TheFooter from "../components/Layouts/TheFooter.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  data() {
    return {
      isCart: null,
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
    // remove Cart
    function removeItem(id) {
      store.dispatch("removeFavorite", id);
    }

    return {
      addProduct,
      removeItem,
      myFavorite: computed(() => store.getters.getCartFavorite),
    };
  },
  components: { TheHeader, ModalView, TheFooter },
};
</script>

<style lang="scss" scoped>
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
.noItem {
  margin-top: 61.2vh !important ;
  animation: timeOut 5s linear;
}
@keyframes timeOut {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.noorder {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 500px;
  margin-top: -69vh !important;
}
.noorder img {
  width: 200px;
  height: 200px;
}
.noorder h1 {
  font-size: 35px;
  margin: 1rem 0;
}
.noorder a {
  background-color: var(--red-color);
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
}
.noorder a:hover {
  background-color: var(--btn-color);
}
// *Style Card Product
.favCart {
  margin-top: 146px;
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
}
.cardProduct {
  height: 280px;
  width: 220px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 1.5px #111;
  border-radius: 10px;
  padding: 10px !important;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  position: relative;
  margin-bottom: 1rem;

  .remove {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    top: 0;
    right: -2px;
    background-color: var(--red-color);
    z-index: 100 !important;
    font-size: 19px;
    color: #fff;
    cursor: pointer;
  }

  //   Style img
  .img {
    width: 60%;
    height: 50%;
    overflow: hidden;

    img {
      height: 100%;
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
.model-Rate {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 0.5rem;
  h5 {
    font-weight: 500;
    margin: 0 !important;
  }
  p {
    color: #5943b5;
    margin: auto;
    font-size: 22px;
    font-weight: 500;
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
        font-size: 23px;
      }
      &:hover {
        color: #000;
      }
    }
  }
}
@media (max-width: 516px) {
  .favCart {
    display: flex !important;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style> 
    
    