<template>
  <section id="bscCurriculum">
    <Banner :items="banner" />
    <Curriculum />
  </section>
</template>

<script>
import Banner from '../../components/helpers/Banner.vue'
import Curriculum from '../../components/departmens/bsc-curriculum/Curriculum.vue'

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
        title: 'BSc. Curriculum',
      },
    }
  },
}
</script>

<style></style>
