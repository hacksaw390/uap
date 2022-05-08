/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  banner: {},
  alumniStories: [],
})

const getters = {
  banner: (state) => state.banner,
  alumniStories: (state) => state.alumniStories,
}

const actions = {
  alumniHeader(context, preload) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/alumni/home/page/setting/${preload}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          result.data.image = this.$config.baseURL+result.data.image
          context.commit('BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getAlumniStories(context, preload) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(`/department/alumni/story/${preload}`)
      context.commit('DATA', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },
}

const mutations = {
  BANNER(state, preload) {
    state.banner = preload
  },
  DATA(state, alumniStories) {
    state.alumniStories = alumniStories
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
