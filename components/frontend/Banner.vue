<template>
  <div id="banner">
    <div
      v-for="(banner, bannerkey) in banners"
      v-show="bannerkey == showindex"
      :key="bannerkey"
      :style="{ backgroundImage: 'url(' +$config.baseURL+ banner.header_banner + ')' }"
      class="banner"
      :class="bannerkey == showindex ? 'banner-slide' : ''"
    >
      <video
        v-if="banner.header_video_link"
        :src="banner.header_video_link"
        loop
        muted
        autoplay
      ></video>
      <div class="overlay"></div>

      <div class="banner__content-main">
        <div class="container">
          <div class="banner__content col-md-10 col-md-12 col-lg-7 col-xl-5">
            <h2 class="banner__title">{{ banner.header_title }}</h2>

            <nuxt-link to="/" class="banner__link primary-btn btn"
              >Apply Now</nuxt-link
            >
          </div>

          <div class="row banner_button_group">
            <div v-for="(button, i) in banners" :key="i" class="col-md-4">
              <div
                class="bordered"
                :class="showindex === i ? 'bordered-active' : ''"
              >
                <a class="btn banner_button" @click="BannerShow(i)">
                  {{ button.header_category }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    banners: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showindex: 0,

   
    }
  },
  methods: {
    BannerShow(i) {
      this.showindex = i
    },
  },
}
</script>
<style scoped></style>
