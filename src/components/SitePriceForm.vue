<template>
  <v-card max-width="800" class="ml-auto mr-auto mt-10 price__edit-card" color="background" variant="flat">
    <v-card-title>Редактирование прайса</v-card-title>

    <v-card-item>
      <v-form ref="form">
        <v-row class=mt-0>
          <v-col cols="12">
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
          <v-col cols="12">
            <div class="date__field-wrap">
              <div class="left-block">
                <s-date-picker
                    v-model="startDate"
                    :max-date="endDate"
                    :in-valid="!startDateValid"
                    label="Дата начала действия прайса"/>
              </div>
              <hr>
              <div class="right-block">
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
          <v-col cols="12">
            <slider-footer-btns :show-apply="false" @save="save" @cancel="closeSlider"/>
          </v-col>
        </v-row>
      </v-form>
    </v-card-item>
  </v-card>
</template>

<script>
import SliderFooterBtns from "@/components/controls/SliderFooterBtns.vue"
import SDatePicker from "@/components/fields/SDatePicker.vue"

export default {
  name: 'site-price-form',
  components: {SliderFooterBtns, SDatePicker},
  data:() =>({
    title: '',
    startDate: null,
    endDate: null,

    requiredValidation: [v=>!!v || 'Поле обязательно для заполнения'],
    startDateValid: true,
    endDateValid: true
  }),

  methods: {
    async save(closeSlider = 'Y') {
      const {valid} = await this.$refs.form.validate()

      if(this.startDate === null) this.startDateValid = false
      if(this.endDate === null) this.endDateValid = false

      if(!valid || this.startDateValid !== true || this.endDateValid !== true) return


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