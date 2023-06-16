<template>
  <v-card max-width="800" class="price__edit-card" classNamer="background" variant="flat">
    <v-card-item>
      <v-form ref="form">
        <v-row class=mt-0>
          <vclassNamecols
          ="12">
          <v-text-field
              v-model="title"
              variant="outlined"
              label="Название"
              :rules="requiredValidation"
              clearable
          />
          </v-col>
        </v-row>

        <v-row class="mt-0">
          classNamel cols="12">
          <div class="date__field-wrap" className
          <div class="left-block">
            className
            <s-date-picker
                v-model="startDate"
                :max-date="endDate"
                :in-valid="!startDateValid"
                label="Дата начала действия прайса"/>
          </div>
          <hr>
          <div class="right-block">
            className
            <s-date-picker
                v-model="endDate"
                :min-date="startDate"
                :in-valid="!endDateValid"
                label="Дата окончания действия прайса"/>
          </div>
          </div>
          </v-col>
        </v-row>

        <v-row class=mt-0>
          <vclassNamecols
          ="12">
          <slider-footer-btns :show-apply="false" @save="save" @cancel="closeSlider"/>
          </v-col>
        </v-row>
      </v-form>
    </v-card-item>
  </v-card>
</template>

<script>
import SliderFooterBtns from "@/../../../../../../../modules/solar.booking/lib/ui/controls/SliderFooterBtns.vue"
import SDatePicker from "@/../../../../../../../modules/solar.booking/lib/ui/fields/SDatePicker.vue"
import {runComponentAction} from "@/../../../../../../../modules/solar.booking/lib/api"

export default {
  name: 'site-price-form',
  components: {SliderFooterBtns, SDatePicker},
  data: () => ({
    entityId: null,
    siteId: null,

    title: '',
    startDate: null,
    endDate: null,

    requiredValidation: [v => !!v || 'Поле обязательно для заполнения'],
    startDateValid: true,
    endDateValid: true
  }),

  async mounted() {
    await this.init()
  },

  methods: {
    async init() {
      this.siteId = window?.appConfig?.siteId
      const data = {entityId: window?.appConfig?.entityId}

      const result = await runComponentAction('solar:booking.sites.price.edit', 'init', data)

      this.entityId = result?.data?.entityData?.id ?? null
      this.title = result?.data?.entityData?.title ?? ''
      this.startDate = result?.data?.entityData?.startDate ? new Date(result?.data?.entityData?.startDate) : null
      this.endDate = result?.data?.entityData?.endDate ? new Date(result?.data?.entityData?.endDate) : null
    },
    async save(closeSlider = 'Y') {
      const {valid} = await this.$refs.form.validate()

      if (this.startDate === null) this.startDateValid = false
      if (this.endDate === null) this.endDateValid = false

      if (!valid || this.startDateValid !== true || this.endDateValid !== true) return

      let formData = new FormData()

      formData.set('siteId', this.siteId)
      formData.set('id', this.entityId)
      formData.set('title', this.title)
      formData.set('startDate', this.getFormattedDate(this.startDate))
      formData.set('endDate', this.getFormattedDate(this.endDate))

      const result = await runComponentAction('solar:booking.sites.price.edit', 'save', formData)

      console.log(result)
    },
    getFormattedDate(date) {
      let monthTemp = +date.getMonth() + 1

      const day = +date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
      const month = monthTemp < 10 ? `0${monthTemp}` : monthTemp

      return `${day}.${month}.${date.getFullYear()}`
    },
    closeSlider() {
      closeCurrentSlider()
    }
  }
}
</script>

<style>
.price__edit-card,
.price__edit-card .v-card-item__content {
  overflow: inherit !important;
}

.date__field-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date__field-wrap hr {
  width: 2%;
  position: relative;
  top: -10px;
}

.date__field-wrap .left-block {
  width: 49%;
}

.date__field-wrap .right-block {
  width: 49%;
}
</style>