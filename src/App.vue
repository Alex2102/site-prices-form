<template>
  <v-app>
    <v-main>
      <site-price-form/>
    </v-main>
  </v-app>
</template>

<script>
import SitePriceForm from "@/components/SitePriceForm.vue"

export default {
  name: 'App',
  components: {SitePriceForm}
}
</script>