/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  dep_club_banner: {},
  dep_club_body: {},
})

const getters = {
  dep_club_banner: (state) => state.dep_club_banner,
  dep_club_body: (state) => state.dep_club_body,
}

const actions = {
  getDepClubBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/club/page/setting/${value.department}/${value.slug}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('DEP_CLUB_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getDepClubBody(context, value) {
    const data = await this.$axios.get(
      `/department/club/${value.department}/${value.slug}`
    )
    if (data.data) {
      data.data.introduction_image =
        this.$config.baseURL + data.data.introduction_image
    }
    context.commit('DEP_CLUB_BODY', data.data)
  },
}

const mutations = {
  DEP_CLUB_BANNER(state, dep_club_banner) {
    state.dep_club_banner = dep_club_banner
  },
  DEP_CLUB_BODY(state, dep_club_body) {
    state.dep_club_body = dep_club_body
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
