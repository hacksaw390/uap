<template>
  <section id="events">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
          <div class="event-title">
            <h2>Upcoming Events</h2>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
          <div class="event-btn">
            <nuxt-link to="/events">More UAP Events</nuxt-link>
          </div>
        </div>
      </div>

      <div v-if="upcoming_events.length" class="row">
        <div class="col-lg-6 col-sm-12">
          <div class="event-img">
            <img
              :src="upcoming_events[0].image"
              :alt="upcoming_events[0].title"
              class="w-100"
            />
            <div class="overlay-event"></div>
            <div class="overlay-content">
              <p>{{ upcoming_events[0].date }}</p>
              <h6>{{ upcoming_events[0].title }}</h6>
              <span
                >{{ upcoming_events[0].from }} -
                {{ upcoming_events[0].to }}</span
              >
              <small>{{ upcoming_events[0].medium }}</small>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-sm-12">
          <div
            v-for="(item, i) in upcoming_events.slice(1)"
            :key="i"
            class="card mb-sm-3"
          >
            <div class="row g-0">
              <div class="col-md-4 col-sm-4">
                <div class="event-item-img">
                  <img :src="item.image" :alt="item.title" class="w-100" />
                  <div class="date">
                    <span>{{ item.date }}</span>
                  </div>
                </div>
              </div>
              <div class="col-md-8 col-sm-8">
                <div class="card-body">
                  <h5>{{ item.title }}</h5>
                  <div class="overlay-content">
                    <span>{{ item.from }} - {{ item.to }}</span>
                    <small>{{ item.medium }}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import backgroundImage from '../../static/test1.jpeg'
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      upcomingEvents: {
        background: backgroundImage,
        title: `WEBINAR SERIES ON "YOUNG WOMEN'S HEALTH PROBLEMS" HELD AT UAP`,
        from: '2.30 PM',
        to: '3.30 PM',
        medium: 'Online',
        date: 'Dec 21',
      },
    }
  },
  computed: {
    ...mapGetters('event', ['upcoming_events']),
  },
  created() {
    this.upcomingeventlist()
  },
  methods: {
    ...mapActions('event', ['upcomingeventlist']),
  },
}
</script>
