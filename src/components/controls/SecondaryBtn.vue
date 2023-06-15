<template>
  <v-btn
      class="fill__primary-btn pl-6 pr-6"
      height="50"
      v-bind="$props"
  >
    <slot>
      Отменить
    </slot>
  </v-btn>
</template>

<script>
export default {
  name: 'secondary-btn',
  props: {
    href: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped>
  .fill__primary-btn {
    text-transform: initial;
    color: #fff;
    background: #49454F;
  }
</style>