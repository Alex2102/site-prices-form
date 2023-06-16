<template>
  <div class="date__picker-custom">
    <VueDatePicker
        v-model="date"
        :auto-apply="autoApply"
        :enable-time-picker="enableTimePicker"
        :format="dateFormat"
        locale="ru"
        :placeholder="label"
        :required="isRequired"
        :min-date="minDate"
        :max-date="maxDate"
        @closed="pickerClose"
        :class="{'error': isError}"
    />

    <div class="error__message-wrap">
      <span v-if="isError" class="error__message">Поле обязательно для заполнения</span>
    </div>
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker"
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: 's-date-picker',
  components: {VueDatePicker},
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Date,
      default: null
    },
    autoApply: {
      type: Boolean,
      default: true
    },
    enableTimePicker: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    isRequired: {
      type: Boolean,
      default: true
    },
    minDate: {
      type: Date,
      default: null
    },
    maxDate: {
      type: Date,
      default: null
    }
  },

  data: () => ({
    error: false
  }),

  watch: {
    date(val) {
      this.error = val === null
    }
  },

  computed: {
    isError() {
      return this.isRequired && this.error
    },
    date: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
    dateFormat() {
      if(this.date instanceof Date) {
        let monthTemp = +this.date.getMonth() + 1

        const day = +this.date.getDate() < 10 ? `0${this.date.getDate()}` : this.date.getDate()
        const month = monthTemp < 10 ? `0${monthTemp}` : monthTemp
        const year = +this.date.getFullYear() < 10 ? `0${this.date.getFullYear()}` : this.date.getFullYear()

        return `${day}.${month}.${year}`
      }
      else {
        return ''
      }
    }
  },

  methods: {
    pickerClose() {
      this.error = this.date === null
    }
  }
}
</script>

<style>
.date__picker-custom input {
  height: 56px;
  border-color: #858585FF;
}

.date__picker-custom input::placeholder {
  color: #858585FF;
  opacity: 1;
}

.date__picker-custom .error .dp__icon,
.date__picker-custom .error input::placeholder {
  color: #B00020;
}

.date__picker-custom .error input {
  border-color: #B00020;
}

.date__picker-custom .error__message-wrap {
  height: 20px;
}

.date__picker-custom .error__message-wrap .error__message {
  padding-top: 6px;
  padding-left: 16px;
  overflow: hidden;
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 12px;
  color: #B00020;
  font-weight: 400;
  word-break: break-word;
  word-wrap: break-word;
}
</style>