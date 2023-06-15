<template>
  <v-btn
      class="transparent__primary-btn pl-6 pr-6"
      height="50"
      variant="outlined"
      v-bind="$props"
  >
    <slot>
      Редактировать
    </slot>
  </v-btn>
</template>

<script>
export default {
  name: 'transparent-primary-btn',
  props: {
    href: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped>
  .transparent__primary-btn {
    background: #fff;
    color: #1A4680;
    text-transform: initial;
  }
</style>