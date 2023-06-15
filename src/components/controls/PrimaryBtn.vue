<template>
  <v-btn
      class="fill__primary-btn pl-6 pr-6"
      height="50"
  >
    <slot>
      Сохранить
    </slot>
  </v-btn>
</template>

<script>
export default {
  name: 'primary-btn'
}
</script>

<style scoped>
  .fill__primary-btn {
    text-transform: initial;
    color: #fff;
    background: #1A4680;
  }
</style>