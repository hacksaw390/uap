<template>
  <section id="classSchedule">
    <Banner :items="banner" />
    <List />
  </section>
</template>

<script>
import Banner from '../../components/helpers/Banner.vue'
import List from '../../components/departmens/class-schedule/Schedule.vue'

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
        title: 'Class Schedule',
      },
    }
  },
}
</script>

<style></style>
