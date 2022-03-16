<template>
  <div class="ProductCard">
    <h2 class="title">{{ cardTemplate.title }}</h2>
    <img class="image" :src="cardTemplate.image" alt="Фото товара" />
    <p class="description">{{ cardTemplate.description }}</p>
    <span class="price">{{ cardTemplate.price.toLocaleString() }} руб.</span>
    <span class="remove" @click="$emit('remove-card', cardTemplate)"></span>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["cardTemplate"],
};
</script>

<style lang="scss" scoped>
.ProductCard {
  padding: 24px 16px;
  padding-top: calc(100vw * (216 / 1440));
  width: calc(100vw * (332 / 1440));
  min-height: calc(100vw * (423 / 1440));
  display: flex;
  flex-direction: column;
  background-color: #ffffffcc;
  border-radius: 4px;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.04);
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: showUp 0.5s ease;

  &:hover {
    transform: translateY(-3px);

    .remove {
      opacity: 1;
      pointer-events: all;
      cursor: pointer;
    }
  }

  .title {
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
  }

  .image {
    width: 100%;
    height: calc(100vw * (200 / 1440));
    position: absolute;
    border-radius: 4px 4px 0 0;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .price {
    margin-top: auto;
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
  }

  .remove {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    background: url("../assets/images/remove.svg") no-repeat 50% 50%, #ff8484;
    position: absolute;
    top: -8px;
    right: -8px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media screen and (max-width: 1439px) {
    width: calc(100vw * (232 / 1024));
    min-height: calc(100vw * (296 / 1024));
  }

  @media screen and (max-width: 1024px) {
    padding-top: calc(100vw * (216 / 1024));
    width: auto;
    min-height: calc(100vw * (423 / 1024));

    .title {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
    }

    .image {
      height: calc(100vw * (200 / 1024));
    }

    .description {
      margin-bottom: 10px;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: calc(100vw * (216 / 768));
    min-height: calc(100vw * (423 / 768));

    .image {
      height: calc(100vw * (200 / 768));
    }
  }

  @media screen and (max-width: 599px) {
    padding-top: calc(100vw * (216 / 599));
    min-height: calc(100vw * (423 / 599));

    .image {
      height: calc(100vw * (200 / 599));
    }
  }
}

@keyframes showUp {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
