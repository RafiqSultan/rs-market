<template>
  <div class="cardModal">
    <slot />
  </div>
</template>

<style>
.details {
  display: flex;
  width: 600px !important;
  /* width: 100% !important; */
  margin: 0 auto !important;
  height: 300px;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  overflow: hidden !important;
  position: relative;
  /* left: 50%; */
  /* box-shadow: 0 3px 3px var(--blue-dark-color); */
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

.details .img {
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  padding: 10px !important;
}
.details img {
  width: 60%;
  height: auto;
  max-height: 100%;
}
.details .info {
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
  background: #fff;
  line-height: 10px;
  padding: 0 0 5px;
  margin: 2px 0;
  border-bottom: 1px solid var(--blue-dark-color);
}
.info-1 {
  height: 20% !important;
}
.info .info-1 h5 {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -1px;
}
.info .info-1 span {
  font-size: 16px;
  font-weight: 300;
}
.info-2 {
  line-height: 16px;
  height: 25% !important;
  display: block;
}
.info-2 span {
  font-size: 14px;
  display: block;
}
.info-3 {
  display: block;
  height: 20% !important;
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
  height: 20% !important;
}
.star .fa-star,
.fa-star-half-stroke {
  color: #f0bb0d !important;
  font-size: 16px;
}
.info-5 {
  display: flex !important;
  justify-content: space-between !important;
  align-items: flex-start !important;
  height: 20% !important;
}
.info-5 button {
  background: var(--red-color);
  border: none;
  padding: 5px 10px;
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
  font-size: 16px;
  margin-right: 2%;
  margin-top: 1%;
}
.info-5 .price span:first-child {
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
@media (max-width: 768px) {
  .details {
    display: flex;
    flex-direction: column;
    width: 300px !important;
    /* width: 100% !important; */
    margin: 0 auto !important;
    height: auto;
  }
  .details .img {
    margin-left: 50%;
  }
  .red,
  .blue,
  .white {
    width: 15px;
    height: 15px;
  }
  .info-3 h5,
  .info-4 h5 {
    font-size: 18px;
  }
  .info-4 {
    border-color: #fff;
  }
  .details .info {
    border-left: none;
    border-top: 2px solid var(--red-color);
  }
}
@media (max-width: 450px) {
  .details {
    width: 250px !important;
    height: auto;
  }
}
</style>