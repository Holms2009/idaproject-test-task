<template>
  <div id="app">
    <div class="header">
      <h1 class="page-title">Добавление товара</h1>
      <filter-dropdown />
    </div>
    <div class="main">
      <aside class="side-panel">
        <add-product-form />
      </aside>
      <div class="products">
        <product-card
          v-for="(card, index) of productCards"
          :cardTemplate="card"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FilterDropdown from "./components/FilterDropdown.vue";
import AddProductForm from "./components/AddProductForm.vue";
import ProductCard from "./components/ProductCard.vue";

export default {
  name: "App",
  data() {
    return {
      productCards: [
        {
          title: "Наименование товара",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          image:
            "https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/.jpg",
          price: 10000,
        },
        {
          title: "Наименование товара",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          image:
            "https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/.jpg",
          price: 10000,
        },
        {
          title: "Наименование товара",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          image:
            "https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/.jpg",
          price: 10000,
        },
      ],
    };
  },
  components: {
    FilterDropdown,
    AddProductForm,
    ProductCard,
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Source Sans Pro", sans-serif;
  color: #3f3f3f;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 32px;
  min-height: 100vh;
  background-color: #fffefb;

  .header {
    margin-bottom: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .page-title {
      margin: 0;
      font-size: 28px;
      font-weight: 600;
      line-height: 35px;
    }
  }

  .main {
    display: flex;

    .side-panel {
      margin-right: calc(100vw * (16 / 1440));
      width: calc(100vw * (332 / 1440));
      height: fit-content;
    }

    .products {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .ProductCard {
        margin-bottom: 16px;

        &:not(:nth-child(3n)) {
          margin-right: 16px;
        }
      }
    }
  }
}
</style>
