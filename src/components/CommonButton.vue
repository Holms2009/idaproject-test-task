<template>
  <button :class="['CommonButton', { blocked: blocked }]" :type="type">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "CommonButton",
  props: ["text", "blocked", "type"],
};
</script>

<style lang="scss" scoped>
.CommonButton {
  padding: 10px;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  background-color: #7bae73;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #88bd7f;
  }

  &.blocked {
    background-color: #eeeeee;
    color: #b4b4b4;
  }
}
</style>
