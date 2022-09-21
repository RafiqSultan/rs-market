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
        <p>
          <span
            id="price"
            v-if="disc > 0 ? 'discountPrice(phonePrice, disc)' : ''"
            >{{
          }}</span>
          <span id="">${{ phonePrice }}</span>
        </p>
      </div>

      <div class="addCard">
        <div class="detailsCard">
          <span class="hvr-rectangle-in" @click="addToCart"
            ><i class="fa fa-cart-shopping"></i
          ></span>
          <span class="hvr-rectangle-in"><i class="fa-solid fa-eye"></i></span>
          <span class="hvr-rectangle-in" @click="addToFav"
            ><i class="fa-solid fa-heart"></i
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Script js data -->
<script>
export default {
  props: ["phoneTitle", "phoneImg", "phonePrice", "disc"],
  data() {
    return {};
  },
  methods: {
    dicountPrice(price, discount) {
      return "$" + price - price * (discount / 100);
    },
  },
  computed: {
    addToCart() {
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
      this.$store.commit("inCart", 1);
    },
    // Add to Favorite menu
    addToFav() {
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
  p {
    color: var(--blue-color);
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
      border-radius: 50%;
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

@media (max-width: 468px) {
  .cardProduct {
    height: 280px;
    width: 220px;
  }
}
</style> 





