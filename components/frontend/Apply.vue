<template>
  <!-- Apply Part Start -->
  <section id="apply">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
          <div class="apply-title">
            <h2>How to Apply</h2>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1200">
          <div class="apply-btn">
            <nuxt-link to="/">View All Requirements</nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, i) in how_to_apply"
          :key="i"
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          :data-aos-duration="item.duration"
        >
          <div class="apply-item">
            <img :src="apply[i].icon" :alt="item.title" />
            <span>{{ item.title }}</span>
            <p>
              {{ item.description }} 
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Apply Part End -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      apply: [
        {
          icon: require('@/static/icon4.png'),
       
        },
        {
          icon: require('@/static/icon5.png'),
        
        },
        {
          icon: require('@/static/icon6.png'),
         
        },
      ],
    }
  },
    computed: {
  ...mapGetters('home', ['how_to_apply']),
  },
  created () {
    this.howToApply()
  },
  methods: {
    ...mapActions('home', ['howToApply']),
  },
}
</script>

<style></style>
