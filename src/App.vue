<template>
  <div id="app">
    <div class="header">
      <h1 class="page-title">Добавление товара</h1>
      <filter-dropdown />
    </div>
    <div class="main">
      <aside class="side-panel">
        <add-product-form @card-ready="(card) => addCard(card)" />
      </aside>
      <div class="products">
        <product-card
          v-for="(card, index) of sortedCards"
          :cardTemplate="card"
          :key="index"
          @remove-card="(card) => removeCard(card)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import FilterDropdown from "./components/FilterDropdown.vue";
import AddProductForm from "./components/AddProductForm.vue";
import ProductCard from "./components/ProductCard.vue";

export default {
  name: "App",
  data() {
    return {
      productCards: sessionStorage.savedCards
        ? JSON.parse(sessionStorage.savedCards)
        : [
            {
              title: "Статуя свободы",
              description:
                "Символ свободы! Ещё и из меди! Правда, слегка позеленела от коррозии. Зато стоит на труднодоступном острове и вряд ли кто-то оттуда её украдет. Хотя и вам до неё будет не так просто добраться...",
              image:
                "https://prousa.info/images/cities/statue_of_liberty/statue_of_liberty.webp",
              price: 999999999,
            },
            {
              title: "Эйфелева башня",
              description:
                "Прекрасный вид на Елисейские поля и Сену. Красивая подсветка по ночам. В комплект входит ресторан и лифт.",
              image:
                "https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/.jpg",
              price: 1000000000,
            },
            {
              title: "Пирамида Хеопса",
              description:
                "Настоящий раритет. Антиквариат. Стоит уже почти 3000 лет и простоит ещё столько же. К сожалению, наружное покрытие давно растащили. В качестве утешения вы получите Сфинкса в подарок (без носа).",
              image:
                "https://cdnimg.rg.ru/img/content/157/34/81/Piramida_Heopsa_d_850.jpg",
              price: 20304070,
            },
            {
              title: "Статуя свободы",
              description:
                "Символ свободы! Ещё и из меди! Правда, слегка позеленела от коррозии. Зато стоит на труднодоступном острове и вряд ли кто-то оттуда её украдет. Хотя и вам до неё будет не так просто добраться...",
              image:
                "https://prousa.info/images/cities/statue_of_liberty/statue_of_liberty.webp",
              price: 999999999,
            },
            {
              title: "Эйфелева башня",
              description:
                "Прекрасный вид на Елисейские поля и Сену. Красивая подсветка по ночам. В комплект входит ресторан и лифт.",
              image:
                "https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/.jpg",
              price: 1000000000,
            },
            {
              title: "Пирамида Хеопса",
              description:
                "Настоящий раритет. Антиквариат. Стоит уже почти 3000 лет и простоит ещё столько же. К сожалению, наружное покрытие давно растащили. В качестве утешения вы получите Сфинкса в подарок (без носа).",
              image:
                "https://cdnimg.rg.ru/img/content/157/34/81/Piramida_Heopsa_d_850.jpg",
              price: 20304070,
            },
          ],
    };
  },
  methods: {
    ...mapGetters(["getFilter"]),
    addCard: function (card) {
      this.productCards.push(card);
      sessionStorage.savedCards = JSON.stringify(this.productCards);
    },
    removeCard: function (card) {
      const cardIndex = this.productCards.indexOf(card);

      this.productCards.splice(cardIndex, 1);
      sessionStorage.savedCards = JSON.stringify(this.productCards);
    },
  },
  computed: {
    sortedCards: function () {
      switch (this.getFilter()) {
        case "min-max":
          return Array(...this.productCards).sort((a, b) => a.price - b.price);
        case "max-min":
          return Array(...this.productCards).sort((a, b) => b.price - a.price);
        case "name":
          return Array(...this.productCards).sort((a, b) => {
            if (a.title > b.title) {
              return 1;
            } else {
              return -1;
            }
          });
      }

      return this.productCards;
    },
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
      min-width: calc(100vw * (332 / 1440));
      height: fit-content;
    }

    .products {
      width: calc(100vw * (1028 / 1440));
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 16px;
    }
  }
}
</style>
