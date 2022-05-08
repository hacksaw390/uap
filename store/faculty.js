/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  faculty_banner: {},
  all_designation: [],
  designation_wise_member: [],
  faculty_details: {},
  faculty_thesis: [],
  faculty_research: [],
  faculty_resource: [],
})

const getters = {
  faculty_banner: (state) => state.faculty_banner,
  all_designation: (state) => state.all_designation,
  designation_wise_member: (state) => state.designation_wise_member,
  faculty_details: (state) => state.faculty_details,
  faculty_thesis: (state) => state.faculty_thesis,
  faculty_research: (state) => state.faculty_research,
  faculty_resource: (state) => state.faculty_resource,
}

const actions = {
  getFacultyBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/faculty/page/setting/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('FACULTY_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getAllDesignation(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/faculty/designation/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          result.data.forEach((element) => {
            element.section = element.category_name
          })
          // console.log(data.data)
          context.commit('ALL_DESIGNATION', result.data)
          resolve(result)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getDesignationWiseMember(context, payload) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(
        `department/faculty/designation/wise/member/${payload.department}/${payload.slug}`
      )
      if (data.data) {
        data.data.forEach((item) => {
          item.profile = this.$config.baseURL + item.image
        })
      }
      context.commit('DESIGNATION_WISE_MEMBER', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },

  getFacultyDetails(context, value) {
    // console.log(value)
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(
          `/department/faculty/member/details/${value.department}/${value.designation}/${value.id}`
        )
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.banner_image = this.$config.baseURL + result.data.banner
            result.data.profile_image = this.$config.baseURL + result.data.image
          }
          context.commit('FACULTY_DETAILS', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getFacultyThesis(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/faculty/member/details/thesis/${value.id}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)

          context.commit('FACULTY_THESIS', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getFacultyResearch(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/faculty/member/details/research/${value.id}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)

          context.commit('FACULTY_RESEARCH', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getFacultyResource(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/faculty/member/details/resource/${value.id}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)

          context.commit('FACULTY_RESOURCE', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

const mutations = {
  FACULTY_BANNER(state, faculty_banner) {
    state.faculty_banner = faculty_banner
  },
  ALL_DESIGNATION(state, all_designation) {
    state.all_designation = all_designation
  },
  DESIGNATION_WISE_MEMBER(state, designation_wise_member) {
    state.designation_wise_member = designation_wise_member
  },
  FACULTY_DETAILS(state, faculty_details) {
    state.faculty_details = faculty_details
  },
  FACULTY_THESIS(state, section) {
    state.faculty_thesis = section
  },
  FACULTY_RESEARCH(state, section) {
    state.faculty_research = section
  },
  FACULTY_RESOURCE(state, section) {
    state.faculty_resource = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
