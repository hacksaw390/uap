<template>
  <section id="schedule">
    <div class="container my-5">
      <div class="col-lg-9 text-center mx-auto">
        <div class="shadow-sm">
          <h2>Class Schedule Checker</h2>
          <div class="lists">
            <div class="row">
              <div class="col-md-6">
                <select class="form-select select-item shadow-sm">
                  <option selected>Semester</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-md-6">
                <select class="form-select select-item shadow-sm">
                  <option selected>Section</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <button>Check</button>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="pdfImage">
                <img :src="img" alt="" class="w-100 h-100" />
                <button class="pink-btn mt-5">
                  Download <i class="fas fa-download"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      img: require('@/static/pdf/classpdf.png'),
    }
  },
}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#schedule {
  h2 {
    border-bottom: 2px solid $darkblue;
    padding-top: 27px;
    padding-bottom: 27px;
    background-color: $lightblue;
    margin-bottom: 0px;
    @include title2;
    font-weight: 600;
  }
  .lists {
    padding: 50px;

    background-color: $lightblue;
    button {
      padding: 11px 124px;
      background-color: rgba(18, 102, 241, 0.75);
      border-radius: 5px;
      margin-top: 55px;
      color: $white;
    }
  }
  .pdfImage {
    background-color: $lightblue;
    display: block;
    text-align: center;
    padding-bottom: 100px;
    button {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
