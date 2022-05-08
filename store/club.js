/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  club_banner: {},
  club_body: {},
})

const getters = {
  club_banner: (state) => state.club_banner,
  club_body: (state) => state.club_body,
}

const actions = {
  getClubBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/general/club/page/setting/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('CLUB_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getClubBody(context, value) {
    const data = await this.$axios.get(
      `/general/club/${value}`
    )
    if (data.data) {
      data.data.introduction_image =
        this.$config.baseURL + data.data.introduction_image
    }
    context.commit('CLUB_BODY', data.data)
  },
}

const mutations = {
  CLUB_BANNER(state, club_banner) {
    state.club_banner = club_banner
  },
  CLUB_BODY(state, club_body) {
    state.club_body = club_body
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
