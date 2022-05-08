<template>
  <section id="alumni">
    <div class="container">
      <div class="text-center mb-lg-5 pb-5">
        <h4 class="mb-lg-5 top-text">Alumni Stories</h4>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div v-for="(alumni, i) in alumniInformation" :key="i" class="col main-card-cover p-3">
          <div class="main-card h-100 shadow">
            <div class="card-top">
              <div
                
                class="d-flex justify-content-center img-top mb-4"
              >
                <img
                  :src="$config.baseURL+alumni.image"
                  alt="alumni.name"
                  class="img-fluid rounded-circle"
                />
              </div>
              <div
                class="h-100 text-top d-flex justify-content-center text-center"
              >
                <div class="ms-3 py-2 info">
                  <h4 class="mb-0">{{ alumni.name }}</h4>
                  <p class="card-text title my-1">
                    {{ alumni.designation }}
                  </p>
                  <small class="date mb-0"
                    >Year Of Graduation:{{ alumni.year }}</small
                  >
                  <div class="text-center my-4">
                    <nuxt-link to="/" class="primary-btn calculator-btn"
                      >Learn More</nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-flex align-items-center justify-content-center text-center my-3"
      >
    
        <nuxt-link :to="'/'+$route.params.department+'/alumni'" class="primary-btn calculator-btn"
          >See More</nuxt-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    alumniInformation: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';

#alumni {
  margin-top: $section-padding;
  margin-bottom: $section-padding;
  .top-text{
   @include title;
  color: $text-color;
  }
  .main-card-cover{
    @include respond-below(lg){
      margin-top: 100px;
    }
    //breakpoint mt-100
    &:nth-child(n+1){
      --shadowColor:#80daff;
      --bg: #e1f2f9;
      
    }
    &:nth-child(n+2){
      --shadowColor:#42f98b;
      --bg:#e6fff0;
    }
    &:nth-child(n+3){
      --shadowColor:#e7a934;
      --bg:#eae1d0;

    }
  }
  .main-card {
    background:var(--bg);
    .card-top {
      .img-top {
        // --shadowColor:#80daff;
        img {
          height: 270px;
          width: 270px;
          margin-top: -100px;
          box-shadow: -8px 0px 0px var(--shadowColor);
        }
      }
      position: relative;
      .serial {
        position: absolute;
        top: 10px;
        right: 10px;
        color: $white;
        .event-btn {
          background-color: $darkblue;
          padding: 11px 9px 11px 9px;
          @include paragraph1;
        }
      }
      .info {
        h4 {
          @include title3;
          font-weight: 600;
          color: $darkblue;
        }
        .title {
          color: $text-color;
          @include paragraph2;
        }
        .date {
          color: $text-color;
          @include paragraph2;
          font-weight: 500;
        }
        .calculator-btn {
          @include title3;
          display: inline-block;
          text-align: center;
          width: 150px;
          margin: 0 auto;
          padding: 11px 10px;
          color: $white !important;
          background: $darkblue;
          &:hover {
            color: $darkblue !important;
            background: $white;
          }
        }
      }
      .text-top {
      }
    }
  }
  
}
</style>
