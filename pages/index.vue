<template>
  <v-container fluid class="px-0">
    <ImageHeader img="main.jpg" />
    <Posts />
  </v-container>
</template>

<script>
import Posts from '../components/Posts.vue'
import ImageHeader from '../components/ImageHeader.vue'

export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'desktop'),
  components: {
    Posts,
    ImageHeader
  },
  async fetch({ store }) {
    await store.dispatch('posts/fetchAllPosts')
    await store.dispatch('posts/fetchCategories')
  }
}
</script>
