<template>
  <section id="faq">
    <Banner :items="banner" />
    <DatesandDeadlines />
  </section>
</template>

<script>
import Banner from '../components/helpers/Banner.vue'
import DatesandDeadlines from '../components/faq/DatesandDeadlines.vue'
export default {
  components: { Banner, DatesandDeadlines },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/1.JPG'),
        title: 'Important Dates and Deadlines',
        details: 'Key dates for 2020 and 2021',
      },
    }
  },
}
</script>

<style></style>
