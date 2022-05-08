/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  accolades: [],
  our_ranking: [],
  about_banner: {},
  vice_chancellor: {},
})

const getters = {
  about_banner: (state) => state.about_banner,
  accolades: (state) => state.accolades,
  our_ranking: (state) => state.our_ranking,
  vice_chancellor: (state) => state.vice_chancellor,
}

const actions = {
  async accoladingByCat(context, value) {
    const data = await this.$axios.get(`accolade/${value}/list`)
    context.commit('ACCOLADING_BY_CAT', data.data)
  },

  async ourRanking(context) {
    const data = await this.$axios.get(`our_ranking/list`)
    context.commit('OUR_RANKING', data.data)
  },
  getAboutBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/about/banner`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('ABOUT_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getViceChancellor(context) {
    const data = await this.$axios.get(`vice_chancellor/info`)
    context.commit('VICE_CHANCELLOR', data.data)
  },
}

const mutations = {
  ACCOLADING_BY_CAT(state, accolades) {
    state.accolades = accolades
  },
  OUR_RANKING(state, our_ranking) {
    state.our_ranking = our_ranking
  },
  ABOUT_BANNER(state, about_banner) {
    state.about_banner = about_banner
  },
  VICE_CHANCELLOR(state, vice_chancellor) {
    state.vice_chancellor = vice_chancellor
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
