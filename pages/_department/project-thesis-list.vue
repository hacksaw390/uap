<template>
  <section id="projectThesis">
    <Banner :items="banner" />
    <List />
  </section>
</template>

<script>
import Banner from '../../components/helpers/Banner.vue'
import List from '../../components/departmens/project-thesis-list/Lists.vue'

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
        title: 'Project & Thesis List',
      },
    }
  },
}
</script>

<style></style>
