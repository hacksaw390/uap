<template>
  <!-- Choose Part Start -->
  <section id="choose">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="choose-content">
            <h2 data-aos="fade-right" data-aos-duration="1000">
              {{ choose.title }}
            </h2>
            <p data-aos="fade-right" data-aos-duration="1000">
              {{ choose.details }}
            </p>
          </div>
        </div>

        <div
          v-for="(item, i) in why_choose_uap"
          :key="i"
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          :data-aos-duration="item.duration"
        >
          <div class="choose-item">
            <img :src="item.image" :alt="item.title" />
            <h6>{{ item.title }}</h6>
            <p>
              {{ item.description }}
            </p>

            <nuxt-link class="primary-btn choose-icon" to="/"
              >Learn More</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Choose Part End -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      choose: {
        title: 'Why choose UAP',
        details:
          'We Are One of The Largest, Most Diverse Universities in The Bangladesh',
      
      },
    }
  },
    computed: {
  ...mapGetters('home', ['why_choose_uap']),
  },
  created () {
    this.whyChooseUap()
  },
  methods: {
    ...mapActions('home', ['whyChooseUap']),
  },
}
</script>

<style></style>
