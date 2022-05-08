/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
    events: [],
    banner: {},
    upcoming_events: [],
    parent_categories: [],
    topics: {},
  })
  
  
  const getters = {
    upcoming_events: state => state.upcoming_events,
    events: state => state.events,
    topics: state => state.topics,
    banner: state => state.banner,
  }
  
  const actions = {    
   
    async depEventBanner(context, payload) { 
   
      const data = await this.$axios.get(`/department/event/page/setting/${payload}`, )  
     
      data.data.image = this.$config.baseURL + data.data.image
      console.log(data.data)
      context.commit('BANNER', data.data)
    },
    async allEventList(context, payload) { 
   
      const data = await this.$axios.get(`/department/event/${payload.depatment}?page=${payload.page}`, )  
  
      context.commit('DATA', data.data)
    },
    async topicList(context) { 
      const data = await this.$axios.get(`/event/topic/list`)  
      context.commit('TOPIC_LIST', data.data)
    },
    async upcomingeventlist(context) { 
      const data = await this.$axios.get(`/event/upcoming/list`)  
      context.commit('UPCOMING_EVENT', data.data)
    },
    async filterByEvent(context, payload) {
        const data = await this.$axios.get(`/event/${payload.date}/${payload.topic}/filter`)
        console.log(data)
        context.commit('DATA', data.data)
      },
 
  }
  
  const mutations = {
    DATA(state, events) {
      state.events = events
    },
    BANNER(state, banner) {
      state.banner = banner
    },
    UPCOMING_EVENT(state, upcoming_events) {
      state.upcoming_events = upcoming_events
    },
    TOPIC_LIST(state, topics) {
      state.topics = topics
    },
    DETAILS(state, details) {
      state.details = details
    },
    CREATED(state) {},
    SHOW(state) {},
  }
  export default {
    state,
    getters,
    actions,
    mutations,
  }
  