<template>
  <section id="faq">
    <Banner :items="banner" />
    <AllFaq />
  </section>
</template>

<script>
import Banner from '../components/helpers/Banner.vue'
import AllFaq from '../components/faq/AllFaq.vue'
export default {
  components: { Banner, AllFaq },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/faq.png'),
        title: 'Freequently Ask question',
        details: 'Key dates for 2020 and 2021',
      },
    }
  },
}
</script>

<style></style>
