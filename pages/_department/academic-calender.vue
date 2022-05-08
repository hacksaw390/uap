<template>
  <section id="examSchedule">
    <Banner :items="banner" />
    <List />
  </section>
</template>

<script>
import Banner from '../../components/helpers/Banner.vue'
import List from '../../components/departmens/academic-calender/Calender.vue'

export default {
  components: {
    Banner,
    List,
  },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'Academic Calender',
      },
    }
  },
}
</script>

<style></style>
