<template>
  <section id="trustees">
    <div class="container">
      <div class="col-lg-12 col-md-10 col-sm-12 mx-auto">
        <!-- <div class="row">
                 <div v-for="(item, i) in items" :key="i" class="col-lg-6">
              <div class="card mb-4 loopCardContainer">
                <div class="row">
                  <div class="col-lg-5 col-md-5 col-sm-5 paddingRight">
                    <img
                      :src="item.image"
                      class="img-fluid h-100 w-100"
                      :alt="item.title"
                    />
                  </div>
                  <div class="col-lg-7 col-md-7 col-sm-7">
                    <div class="card-body">
                      <h5>{{ item.name }}</h5>
                      <h6>{{ item.designation }}</h6>
                      <h5>Occupation</h5>
                      <p>
                        {{ item.occupation }}
                      </p>
                      <h5>Address</h5>
                      <p>{{ item.address }}</p>
                      <h5>Email</h5>
                      <p>{{ item.email }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div> -->

        <div class="mb-4">
          <div class="row">
            <!-- card start -->
            <div v-for="(item, i) in items" :key="i" class="col-lg-6">
              <div class="card mb-4 loopCardContainer">
                <div class="row">
                  <div class="col-lg-5 col-md-5 col-sm-5 paddingRight">
                    <img
                      :src="item.image"
                      class="img-fluid h-100 w-100"
                      :alt="item.title"
                    />
                  </div>
                  <div class="col-lg-7 col-md-7 col-sm-7">
                    <div class="card-body">
                      <h5>{{ item.name }}</h5>
                      <h6>{{ item.designation }}</h6>
                      <h5>Occupation</h5>
                      <p>
                        {{ item.occupation }}
                      </p>
                      <h5>Address</h5>
                      <p>{{ item.address }}</p>
                      <h5>Email</h5>
                      <p>{{ item.email }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card end -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    chairperson: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      img: require('@/static/authorities-banner.png'),
    }
  },
}
</script>
<style lang="scss" scoped>
@import './styles/_main.scss';
#trustees {
  margin-top: 69px;

  .card {
    background: #e1f2f9;
    @include respond-between(xs, sm) {
      margin-right: 50px;
      margin-left: 50px;
    }
    @include respond-between(xsl, xs) {
      margin-right: 30px;
      margin-left: 30px;
    }
  }
  .loopCardContainer {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    .paddingRight {
      @include respond-between(sm, xl) {
        padding-right: 0px !important;
      }
    }
    img {
      // @include respond-between(sm, lg) {
      //   height: 300px !important;
      // }
      @include respond-below(lg) {
        height: 320px !important;
      }
      @include respond-between(lg, xl) {
        object-fit: cover;
      }
      // @include respond-below(xs) {
      //   height: 300px !important;
      // }
    }
    .card-body {
      @include respond-between(xl, xml) {
        padding: 8px;
      }
      @include respond-between(lg, xl) {
        padding: 3px;
      }
    }

    h5 {
      @include cardPara;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 3px;
      color: $darkblue;
    }
    h6 {
      font-size: 14px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      margin-bottom: 2px;
    }
    p {
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      margin-bottom: 1px;
    }
  }
}
</style>
