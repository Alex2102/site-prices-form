<template>
  <div class="slider__footer-btns">
    <v-divider v-show="isDivider" color="divider" class="mb-8"/>

    <div class="btn-wrap">
      <v-btn
          class="btn"
          color="primaryBtn"
          height="50"
          @click="$emit('save')"
      >
        Сохранить
      </v-btn>

      <v-btn
          v-if="showApply"
          class="ml-5 btn"
          height="50"
          @click="$emit('apply')"
      >
        Применить
      </v-btn>

      <v-btn
          class="ml-5 btn"
          height="50"
          color="secondaryBtn"
          @click="$emit('cancel')"
      >
        Отменить
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider-footer-btns',
  props: {
    isDivider: {
      type: Boolean,
      default: true
    },
    showApply: {
      type: Boolean,
      default: true
    },
  },
  emits: ['save', 'apply', 'cancel']
}
</script>

<style scoped>
.slider__footer-btns hr {
  opacity: 1;
}

.slider__footer-btns .btn-wrap {
  display: flex;
  justify-content: end;
}

.slider__footer-btns .btn-wrap .btn {
  text-transform: capitalize;
  box-shadow: none;
}

.slider__footer-btns .btn-wrap .btn:nth-child(2) {
  border: 1px solid #79747E;
  color: #1A4680;
}
</style>