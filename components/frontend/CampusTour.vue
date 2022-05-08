/* eslint-disable no-console */
<template>
  <section class="main-campus">
    <video id="myVideo" ref="campustourvideo" autoplay muted loop>
      <source src="@/static/Sequence01a.mp4" type="video/mp4" />
    </video>
    <div class="overlay"></div>
    <div class="main-campus-content">
      <div class="campus-contant">
        <h2 class="campus-video-title">Our Campus Tour</h2>

        <PlayOnBtn v-if="isPlaying" id="myBtn" class="" @click.native="stop"
          ></PlayOnBtn
        >
        <PlayBtn v-else id="myBtn" class="" @click.native="play"
          ></PlayBtn
        >

        <h3 class="campus-video-subtitle">UNIVERSITY OF ASIA PACIFIC</h3>
      </div>
    </div>
  </section>
</template>

<script>
import PlayBtn from '../helpers/PlayBtn.vue'
import PlayOnBtn from '../helpers/PlayOnBtn.vue'
// eslint-disable-next-line no-var
// var video = document.getElementById('myVideo')

export default {
  components: {
    PlayBtn,
    PlayOnBtn,
  },
  data() {
    return {
      isPlaying: true,
    }
  },

  methods: {
    play() {
      this.$refs.campustourvideo.play()
      this.isPlaying = true
    },
    stop() {
      this.$refs.campustourvideo.pause()
      this.isPlaying = false
    },
  },
}
</script>
