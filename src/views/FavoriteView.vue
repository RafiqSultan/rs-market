<template>
  <TheHeader />
  <div class="container" v-if="this.myFavorite.length > 0">
    <div class="favCart">
      <div class="cardProduct" v-for="item in myFavorite">
        <div class="img">
          <img :src="item.phoneImg" alt="phone" />
        </div>
        <div class="model-Rate">
          <h5>{{ item.phoneModel }}</h5>
          <div class="star">
            <i class="fa-solid fa-star" v-for="star in 4"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <p>
            $<span id="price">{{ item.phonePrice }}</span>
          </p>
        </div>

        <div class="addCard">
          <div class="detailsCard">
            <span @click="addToCart"><i class="fa fa-cart-shopping"></i></span>
            <span><i class="fa-solid fa-eye"></i></span>
          </div>
        </div>
        <span class="remove" @click="removeItem(item)"
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
      <router-link tag="a" to="/product">Shop Now</router-link>
    </div>
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from "../components/Layouts/TheHeader.vue";
import TheFooter from "../components/Layouts/TheFooter.vue";
export default {
  data() {
    return {
      myFavorite: [],
    };
  },
  methods: {
    // Remove item from Cart
    removeItem(fav) {
      this.myFavorite = this.myFavorite.filter((item) => item.id !== fav.id);
    },
  },
  mounted() {
    fetch(
      "https://mobile-market-bf248-default-rtdb.firebaseio.com/CartFav.json"
    )
      .then((Response) => {
        if (Response.ok) {
          return Response.json();
        }
      })
      .then((data) => {
        const results = [];
        for (const id in data) {
          results.push({
            id: id,
            phoneImg: data[id].img,
            phoneModel: data[id].model,
            phonePrice: data[id].price,
            phoneQuantity: data[id].quantity,
            totalPrice: data[id].total,
          });
        }
        this.myFavorite = results;
      });
  },
  components: { TheHeader, TheFooter },
};
</script>

<style lang="scss" scoped>
.noItem {
  margin-top: 58vh !important ;
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
.noorder a {
  background-color: #f00;
  color: #fff;
  padding: 5px 15px;
  border-radius: 10px;
}
// *Style Card Product
.favCart {
  margin-top: 120px;
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(28px, 1fr));
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
    background-color: #f0bb0d;
    z-index: 100 !important;
    font-size: 19px;
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
      border-radius: 50%;
      background-color: #97d2ec;
      display: flex;
      justify-content: center;
      align-items: center;
      .fa-heart {
        font-size: 23px;
      }
    }
  }
}
</style> 
    
    