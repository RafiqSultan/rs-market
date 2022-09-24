<template>
  <div class="container">
    <div class="cardProduct">
      <div class="img">
        <img :src="phoneImg" alt="phone" />
      </div>
      <div class="model-Rate">
        <h5>{{ phoneTitle }}</h5>
        <div class="star">
          <i class="fa-solid fa-star" v-for="star in 4"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>

        <p class="price">
          <span :class="{ discount: disc > 0 }" id="">${{ phonePrice }}</span>
          <span v-if="disc > 0">
            $ {{ Math.floor(phonePrice - phonePrice * (disc / 100)) }}</span
          >
        </p>
      </div>

      <div class="addCard">
        <div class="detailsCard">
          <span
            class="hvr-rectangle-in"
            @click="
              addItemToCart(phoneTitle);
              addToCart();
            "
            :class="{ isActive: isCart == true }"
            ><i class="fa fa-cart-shopping"></i
          ></span>
          <span class="hvr-rectangle-in"><i class="fa-solid fa-eye"></i></span>
          <span
            class="hvr-rectangle-in"
            @click="addToFav"
            :class="{ isActive: isFav == true }"
            ><i class="fa-solid fa-heart"></i
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Script js data -->
<script>
import { mapActions } from "vuex";
export default {
  // setup() {
  //   provide("addNumberTo", addNum);
  //   return {
  //     addNum,
  //   };
  // },
  props: ["phoneTitle", "phoneImg", "phonePrice", "disc"],
  data() {
    return {
      noCart: 0,
      isFav: null,
      isCart: null,
      disco: this.disc,
      addNum: [],
    };
  },
  methods: {
    ...mapActions(["addItemToCart"]),

    addToCart() {
      if (this.isCart === null) {
        this.isCart = true;
      }
      fetch(
        "https://mobile-market-bf248-default-rtdb.firebaseio.com/itemCart.json",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            model: this.phoneTitle,
            img: this.phoneImg,
            price: this.phonePrice,
            quantity: 1,
            total: this.phonePrice,
          }),
        }
      );
      countNum++;
      // this.addNum.push("1");
    },
    // computed: {},

    // Add to Favorite menu
    addToFav() {
      if (this.isFav === null) {
        this.isFav = true;
      }

      fetch(
        "https://mobile-market-bf248-default-rtdb.firebaseio.com/CartFav.json",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            model: this.phoneTitle,
            img: this.phoneImg,
            price: this.phonePrice,
            quantity: 1,
            total: this.phonePrice,
          }),
        }
      );
    },
  },
  mounted() {
    // dicountPrice(price, discount) {
    // console.log("dddddddddddddisisisisis");
    // console.log(this.disco);
    // let disco = 0;
    // disco = this.price - this.price * (this.discount / 100);
    // console.log(disco);
    // },
  },
};
</script>

<style lang="scss" scoped>
// *Style Card Product
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
      color: var(--back-color);
    }
  }
}
.isActive {
  height: 40px;
  width: 40px;
  border-radius: 50% !important;
  background-color: var(--blue-color) !important;
  display: flex;
  color: var(--blue-dark-color) !important;
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





