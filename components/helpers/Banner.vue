<template>
  <section id="banner">
    <div class="banner-section">
      <div class="banner-image">
        <img :src="banner.image" alt="about-banner" />
      </div>
      <div class="container">
        <div class="banner-content col-md-6">
          <h2 class="banner-content-title">{{ banner.title }}</h2>
          <p v-html="banner.description ">
            
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    banner: {
      type: Object,
      require: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#banner {
  .banner-section {
    .banner-image {
      img {
        @include respond-above(xml) {
          width: 100%;
        }
      }
    }
    position: relative;
    .container {
      .banner-content {
        background: $darkblue;
        color: $white;
        padding: 50px;
        border-radius: 5px;
        z-index: 9;
        @include respond-below(lg) {
          padding: 25px;
        }

        .banner-content-title {
          @include title;
          // margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
