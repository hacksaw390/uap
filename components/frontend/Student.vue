<template>
  <!-- Student Part Start -->
  <section id="student">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 p-0">
          <div class="student-content">
            <div class="" data-aos="fade-right" data-aos-duration="1000">
              <h2>{{ student.title }}</h2>
              <p>{{ student.details }}</p>
              <a href="#">More Information</a>
            </div>
          </div>
          <div
            class="student-footer"
            :style="{ backgroundImage: 'url(' + student.imgBotton + ')' }"
          >
          <div class="img-padding">
            <h5
              v-for="(item, i) in student.links"
              :key="i"
              data-aos="fade-up"
              :data-aos-duration="item.duration"
            >
              <nuxt-link to="#" class="student-life-link"
                ><span>{{ item.title }}</span>
                <!-- <i class="fa fa-long-arrow-right" aria-hidden="true"></i> -->
                <span class="material-icons-outlined icon"> east </span>
              </nuxt-link>
            </h5>
            </div>
          </div>
        </div>
        <div
          class="col-md-6 p-0 student-img"
          :style="{ backgroundImage: 'url(' + student.imgRight + ')' }"
        ></div>
      </div>
    </div>
  </section>
  <!-- Student Part End -->
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],

  data() {
    return {
      student: {
        title: 'Student Life',
        details: 'Our students create a vibrant and inclusive community',
        imgRight: require('../../static/121.png'),
        imgBotton: require('../../static/Group3712.png'),
        links: [
          {
            title: 'Athletics & Fitness',
            url: '#',
            duration: 800,
          },
          {
            title: 'Student Activities',
            url: '#',
            duration: 1000,
          },
          {
            title: 'Support & Guidance',
            url: '#',
            duration: 1200,
          },
        ],
      },
    }
  },
}
</script>

<style scoped>
.container-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
</style>
