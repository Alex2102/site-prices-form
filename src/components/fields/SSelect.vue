<template>
  <v-select
      v-model="value"
      :items="items"
      v-bind="$props"
      class="custom-select"
  />
</template>

<script>
export default {
  name: 's-select',
  props: ['label', 'chips', 'multiple', 'variant', 'item-value', 'item-title', 'items', 'rules', 'error', 'disabled',
    'closable-chips', 'modelValue', 'hint', 'persistent-hint'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<style>
.custom-select .v-chip {
  background: #D5E3F6;
  border-radius: 8px;
}

.custom-select .v-chip .mdi-close-circle:before {
  content: "\F0156";
}
</style>