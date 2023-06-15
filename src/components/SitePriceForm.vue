<template>
  <v-card max-width="800" class="ml-auto mr-auto mt-10" color="background" variant="flat">
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
<!--                <v-text-field-->
<!--                    v-model="startDate"-->
<!--                    variant="outlined"-->
<!--                    label="Дата начала действия прайса"-->
<!--                    clearable-->
<!--                />-->
<!--                <v-date-picker-->
<!--                    color="primary"-->
<!--                ></v-date-picker>-->
                <VueDatePicker v-model="year" year-picker />
              </div>
              <hr>
              <div class="right-block">
                <v-text-field
                    v-model="endDate"
                    variant="outlined"
                    label="Дата окончания действия прайса"
                    clearable
                />
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
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: 'site-price-form',
  components: {SliderFooterBtns, VueDatePicker},
  data:() =>({
    title: '',
    startDate: null,
    endDate: null,

    year: null,

    requiredValidation: [v=>!!v || 'Поле обязательно для заполнения']
  }),

  methods: {
    async save(closeSlider = 'Y') {
      const {valid} = await this.$refs.form.validate()

      if(!valid) return


    },
    closeSlider() {
      closeCurrentSlider()
    }
  }
}
</script>

<style scoped>
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