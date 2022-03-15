<template>
  <form class="AddProductForm" action="GET">
    <label class="label marked" for="title"> Наименование товара</label>
    <input
      class="input"
      type="text"
      placeholder="Введите наименование товара"
      required
      id="title"
    />
    <label class="label" for="description"> Описание товара</label>
    <textarea
      class="input textarea"
      id="description"
      placeholder="Введите описание товара"
    />
    <label class="label marked" for="image-link">
      Ссылка на изображение товара
    </label>
    <input
      class="input"
      type="text"
      id="image-link"
      placeholder="Введите ссылку"
      required
    />
    <label class="label marked" for="price">Цена товара</label>
    <input
      class="input"
      type="number"
      id="price"
      placeholder="Введите цену"
      required
    />
    <common-button text="Добавить товар" :blocked="false" type="submit" />
  </form>
</template>

<script>
import CommonButton from "./CommonButton.vue";

export default {
  name: "AddProductForm",
  data() {
    return {
      title: "",
    };
  },
  components: {
    CommonButton,
  },
};
</script>

<style lang="scss" scoped>
.AddProductForm {
  padding: 24px;
  background-color: #ffffffcc;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  .label {
    margin-bottom: 4px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    font-size: 10px;
    line-height: 13px;
    position: relative;

    &.marked {
      &::before {
        content: "";
        width: 4px;
        height: 4px;
        background-color: #ff8484;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: -5px;
      }
    }
  }

  .input {
    margin-bottom: 16px;
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 2px 0 lightgray;
    resize: none;

    &:last-of-type {
      margin-bottom: 24px;
    }

    &::placeholder {
      font-size: 12px;
      line-height: 15px;
      color: #b4b4b4;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  .textarea {
    height: 108px;
  }
}
</style>
