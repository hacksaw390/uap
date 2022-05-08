<template>
  <section id="whatIsRequired">
    <Banner :items="banner" />
    <Header :list="whatIsRequired" />
    <Graduate v-show="whatIsRequired[0].active == true" />
    <Undergraduate v-show="whatIsRequired[1].active == true" />
    <Payment v-show="whatIsRequired[2].active == true" />
    <AdmissionCriteria v-show="whatIsRequired[3].active == true" />
  </section>
</template>

<script>
import Banner from '../components/helpers/Banner.vue'
import Header from '../components/helpers/Header.vue'
import Graduate from '../components/whatIsRequire/Graduate.vue'
import Undergraduate from '../components/whatIsRequire/Undergraduate.vue'
import Payment from '../components/whatIsRequire/Payment.vue'
import AdmissionCriteria from '../components/whatIsRequire/AdmissionCriteria.vue'
export default {
  components: {
    Banner,
    Header,
    Graduate,
    Undergraduate,
    Payment,
    AdmissionCriteria,
  },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'What is required',
        details:
          'Undergraduate admission Criteria and Application Fee Payment Procedure',
      },
      whatIsRequired: [
        {
          section: 'Graduate admission criteria',
          url: '#',
          active: true,
        },
        {
          section: 'Undergraduate admission criteria',
          url: '#',
          active: false,
        },
        {
          section: 'Application fee payment procedure',
          url: '#',
          active: false,
        },
        {
          section: 'Direct admission criteria',
          url: '#',
          active: false,
        },
      ],
    }
  },
}
</script>

<style></style>
