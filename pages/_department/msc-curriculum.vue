<template>
  <section id="mscCurriculum">
    <Banner :items="banner" />
    <Curriculum />
  </section>
</template>

<script>
import Banner from '../../components/helpers/Banner.vue'
import Curriculum from '../../components/departmens/msc-curriculum/Curriculum.vue'

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
        title: 'MSc. Curriculum',
      },
    }
  },
}
</script>

<style></style>
