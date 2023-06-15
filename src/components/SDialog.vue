<template>
  <v-dialog max-width="600" v-model="value">
    <v-card>
      <v-toolbar dense color="primaryBtn" class="mb-5">
        <v-toolbar-title>
          <slot name="title">Вы действительно хотите удалить элемент?</slot>
        </v-toolbar-title>
        <v-btn icon="mdi-close" variant="text" @click="value=false"/>
      </v-toolbar>

      <v-spacer/>

      <v-card-text class="mb-5">
        <slot name="text"/>
      </v-card-text>

      <slot name="actions">
        <v-card-actions>
          <v-spacer/>
          <primary-btn @click="$emit('agree', elemId)">Удалить</primary-btn>
          <transparent-primary-btn @click.prevent="value=false">Отмена</transparent-primary-btn>
          <v-spacer/>
        </v-card-actions>
      </slot>
    </v-card>
  </v-dialog>
</template>

<script>
import PrimaryBtn from "@/components/controls/PrimaryBtn.vue"
import TransparentPrimaryBtn from "@/components/controls/TransparentPrimaryBtn.vue"

export default {
  name: 's-dialog',
  components: {PrimaryBtn, TransparentPrimaryBtn},
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    elemId: {
      type: Number,
      default: null
    }
  },
  emits: ['update:modelValue', 'agree'],
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

<style scoped>

</style>