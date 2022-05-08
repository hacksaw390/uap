<template>
  <section id="pandemicPayment">
    <Banner :items="banner" />
    <Message />
    <PaymentDownload />
  </section>
</template>

<script>
import Banner from '../components/helpers/Banner.vue'
import Message from '../components/pandemicPayment/Message.vue'
import PaymentDownload from '../components/pandemicPayment/PaymentDownload.vue'
export default {
  components: { Banner, Message, PaymentDownload },
  layout: 'HomeLayout',
  data() {
    return {
      banner: {
        img: require('@/static/comittee.png'),
        title: 'Pandemic Payment Policy and Option',
        details: 'Pandemic & Special Fee Structure',
      },
    }
  },
}
</script>

<style></style>
