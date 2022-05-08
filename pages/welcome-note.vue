<template>
  <section id="welcomeNote">
    <Banner :items="banner" />
    <Welcome />
  </section>
</template>

<script>
import Banner from '../components/helpers/Banner.vue'
import Welcome from '../components/welcomeNote/Welcome.vue'
export default {
  components: { Banner, Welcome },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/note.png'),
        title: 'Welcome Note',
        details:
          'We Are One of The Largest, Most Diverse Universities in The Bangladesh',
      },
    }
  },
}
</script>

<style></style>
