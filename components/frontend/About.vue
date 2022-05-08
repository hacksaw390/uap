<template>
  <!-- About Part Start -->
  <section   id="about">
   
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 col-md-12"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="about-content">
            <h2>{{ welcome_info.title }}</h2>
            <p>
              {{ welcome_info.description }}
            </p>

            <nuxt-link class="primary-btn read-more-icon" to="/"
              >Read More</nuxt-link
            >
          </div>
        </div>
        <div
          class="col-lg-6 col-md-12"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div class="about-img">
            <img :src="welcome_info.image" :alt="welcome_info.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About Part End -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
 
  computed: {
  ...mapGetters('home', ['welcome_info']),
  },
  created () {
    this.welcomeInfo()
  },
  methods: {
    ...mapActions('home', ['welcomeInfo']),
  },
}
</script>

<style></style>
