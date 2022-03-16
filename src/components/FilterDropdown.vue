<template>
  <div class="select-wrapper">
    <select
      class="FilterDropdown"
      name="filter"
      v-model="activeFilter"
      @change="() => setFilterAction(activeFilter)"
    >
      <option value="default" selected>По умолчанию</option>
      <option value="min-max">Сначала дешёвые</option>
      <option value="max-min">Сначала дорогие</option>
      <option value="name">По наименованию</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterDropdown",
  data() {
    return {
      activeFilter: "default",
    };
  },
  methods: {
    ...mapActions(["setFilterAction"]),
  },
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;

  &::after {
    content: "";
    width: 8px;
    height: 5px;
    background: url("../assets/images/arrow.svg") no-repeat 50% 50%;
    background-size: cover;
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);

    @media screen and (max-width: 599px) {
      right: 10px;
    }
  }

  .FilterDropdown {
    appearance: none;
    padding: 10px 30px 10px 16px;
    font-size: 12px;
    line-height: 15px;
    color: #b4b4b4;
    background-color: #ffffffcc;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 5px 0 lightgray;
    transition: box-shadow 0.3s ease;
    position: relative;

    &:focus {
      outline: none;
      box-shadow: 0 2px 15px 0 lightgray;
    }

    @media screen and (max-width: 599px) {
      padding: 6px 20px 6px 10px;
      font-size: 10px;
    }
  }
}
</style>
