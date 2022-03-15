<template>
  <div class="ProductCard">
    <h2 class="title">{{ cardTemplate.title }}</h2>
    <img class="image" :src="cardTemplate.image" alt="Фото товара" />
    <p class="description">{{ cardTemplate.description }}</p>
    <span class="price">{{ cardTemplate.price }} руб.</span>
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
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
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
}
</style>
