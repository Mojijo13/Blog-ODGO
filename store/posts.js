export const state = () => ({
  all: [],
  categories: [],
  about: {}
})

export const actions = {
  async fetchAllPosts({ commit }) {
    const posts = await this.$axios.$get(
      `api/posts?_fields[]=title&_fields[]=excerpt&_fields[]=content&_fields[]=categories&_fields[]=jetpack_featured_media_url&_fields[]=id`
    )
    commit('setPosts', posts)
  },
  async fetchPost({ commit }, id) {
    const post = await this.$axios.$get(
      `api/posts/${id}?_fields[]=title&_fields[]=excerpt&_fields[]=content&_fields[]=categories&_fields[]=jetpack_featured_media_url&_fields[]=id`
    )
    commit('setPost', post)
  },
  async fetchCategories({ commit }) {
    const categories = await this.$axios.$get(
      `api/categories?_fields[]=id&_fields[]=name`
    )
    commit('setCategories', categories)
  },
  async fetchAbout({ commit }) {
    const about = await this.$axios.$get(
      `api/pages/2095?_fields[]=title&_fields[]=content`
    )
    commit('setAbout', about)
  }
}

export const mutations = {
  setPost(state, post) {
    state.all.push(post)
  },
  setPosts(state, posts) {
    state.all = posts
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  setAbout(state, about) {
    state.about = about
  }
}
