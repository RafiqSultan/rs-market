<template>
  <TheHeader />
  <div class="container" v-if="myFavorite.length > 0">
    <div class="favCart">
      <div class="cardProduct" v-for="item in myFavorite" :key="item.id">
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
            <span class="hvr-rectangle-in"
              ><i class="fa-solid fa-eye"></i>
            </span>
          </div>
        </div>

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
// import ModalView from "./../components/ModalView.vue";
import TheFooter from "../components/Layouts/TheFooter.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  data() {
    return {
      isCart: null,
      // isOpen: false,
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
  components: { TheHeader, TheFooter },
};
</script>

<style lang="scss" scoped>
// .modal {
//   position: fixed !important;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(1, 1, 1, 0.5);
//   width: 100% !important;
//   height: 100vh !important;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000 !important;
// }
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
  margin-top: -65vh !important;
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
  margin-top: 100px;
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
    
    