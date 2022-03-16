<template>
  <form class="AddProductForm" action="GET" @submit.prevent="submitHandler">
    <div :class="['input-wrapper', { error: titleError }]">
      <label class="label marked" for="title"> Наименование товара</label>
      <input
        class="input"
        type="text"
        placeholder="Введите наименование товара"
        id="title"
        v-model="title"
      />
    </div>
    <div class="input-wrapper">
      <label class="label" for="description"> Описание товара</label>
      <textarea
        class="input textarea"
        id="description"
        placeholder="Введите описание товара"
        v-model="description"
      />
    </div>
    <div :class="['input-wrapper', { error: imageError }]">
      <label class="label marked" for="image-link">
        Ссылка на изображение товара
      </label>
      <input
        class="input"
        type="text"
        id="image-link"
        placeholder="Введите ссылку"
        v-model="image"
      />
    </div>
    <div :class="['input-wrapper', { error: priceError }]">
      <label class="label marked" for="price">Цена товара</label>
      <input
        class="input"
        type="number"
        id="price"
        placeholder="Введите цену"
        v-model="price"
      />
    </div>
    <common-button
      text="Добавить товар"
      :blocked="!isFormValid"
      type="submit"
    />
    <div :class="['success', { visible: success }]">
      <span class="icon"></span>
      <p class="message">Карточка товара успешно добавлена!</p>
    </div>
  </form>
</template>

<script>
import CommonButton from "./CommonButton.vue";

export default {
  name: "AddProductForm",
  data() {
    return {
      title: "",
      description: "",
      image: "",
      price: "",
      titleError: false,
      imageError: false,
      priceError: false,
      success: false,
    };
  },
  methods: {
    submitHandler: function (evt) {
      if (!this.isFormValid) {
        this.showErrors();
        return;
      }

      const newCard = {
        title: this.title,
        description: this.description,
        image: this.image,
        price: +this.price,
      };

      this.$emit("card-ready", newCard);
      this.title = this.description = this.image = this.price = "";
      evt.target.reset();
      this.showSuccessMessage();
    },
    showErrors: function () {
      if (this.title === "") this.titleError = true;
      if (this.image === "") this.imageError = true;
      if (this.price === "") this.priceError = true;

      setTimeout(() => {
        this.titleError = this.imageError = this.priceError = false;
      }, 5000);
    },
    showSuccessMessage: function () {
      this.success = true;
      setTimeout(() => (this.success = false), 2500);
    },
  },
  computed: {
    isFormValid: function () {
      if (this.title === "" || this.image === "" || this.price === "") {
        return false;
      }
      return true;
    },
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
  position: relative;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;

    &:last-of-type {
      margin-bottom: 8px;
    }

    &.error {
      &::before {
        content: "Поле является обязательным";
        font-size: 8px;
        line-height: 10px;
        color: #ff8484;
        position: absolute;
        bottom: 2px;
        left: 0;
      }

      .input {
        outline: 1px solid #ff8484;
      }
    }
  }

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
    outline: 1px solid #00000000;
    transition: all 0.2s ease;

    &:focus {
      outline: 2px solid #7bae73;
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

  .success {
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color: #ffffff11;
    backdrop-filter: blur(3px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s ease;

    .message {
      font-size: 25px;
      font-weight: 600;
      text-align: center;
    }

    &.visible {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
