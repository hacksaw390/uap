<template>
  <!-- Admission Part Start -->
  <section id="admission">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-6 col-12" data-aos="fade-right" data-aos-duration="1000">
          <div class="admission-content">
            <h2>{{ admission.title }}</h2>
            <p>
              {{ admission.details }}
            </p>
            <!-- <div class="admission-icon">
              <a href="#">Read More</a>
            </div> -->
            <nuxt-link class="primary-btn admission-icon" to="/"
              >Read More</nuxt-link
            >
          </div>
        </div>
        <div class="col-lg-7 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1000">
          <div class="admission-img">
            <img :src="admission.img" :alt="admission.title" class="w-100" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Admission Part End -->
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      admission: {
        title: 'Admission & Aid',
        details:
          'UAP University, we prepare you to launch your career by providing a supportive, creative, and professional environment from which to learn practical skills, build a network of industry contacts.',
        img: require('@/static/campusresourceclass.png'),
      },
    }
  },
}
</script>

<style></style>
