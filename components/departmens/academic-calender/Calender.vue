<template>
  <section id="academic-calender">
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-12 text-center mx-auto">
          <div class="shadow-sm">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Update Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><u>Academic Calendar – Fall 2021</u></td>
                  <td class="date">23-Dec-2021</td>
                </tr>
                <tr>
                  <td><u>Academic Calendar – Summer 2021</u></td>
                  <td class="date">23-Jun-2021</td>
                </tr>
                <tr>
                  <td><u>Academic Calendar – spring 2021</u></td>
                  <td class="date">23-jan-2021</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import './styles/_main.scss';
#academic-calender {
  th {
    background-color: $background-color;
    padding-top: 48px;
    padding-bottom: 48px;
    padding-left: 131px;
    @include cardTitle;
  }

  .date {
    @include cardPara;
    font-weight: 300;
    color: $darkblue;
  }
  td {
    @include paragraph;
    font-weight: 500;
    text-align: left;
    padding-left: 131px;
    color: rgba(18, 102, 241, 0.75);

    padding-bottom: 20px;
    padding-top: 20px;
  }
}
</style>
