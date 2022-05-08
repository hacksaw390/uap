<template>
  <section id="missionOutcome">
    <Banner :items="banner" />
    <Curriculum />
  </section>
</template>

<script>
import Banner from '../../components/helpers/Banner.vue'
import Curriculum from '../../components/departmens/mission-outcome/MissionOutcome.vue'

export default {
  components: {
    Banner,
    Curriculum,
  },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'Mission & Outcome',
      },
    }
  },
}
</script>

<style></style>
