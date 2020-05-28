<template>
  <v-container fluid class="px-0">
    <ImageHeader img="about.jpg" />
    <v-container id="about">
      <v-row justify="center" class="my-12 py-12">
        <v-col lg="4" cols="10">
          <h1 class="heading">{{ about.title.rendered | capitalized }}</h1>
        </v-col>
        <v-col lg="8" cols="10" v-html="about.content.rendered"></v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import ImageHeader from '../components/ImageHeader.vue'

export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'desktop'),
  filters: {
    capitalized(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    }
  },
  components: {
    ImageHeader
  },
  async fetch({ store, params }) {
    await store.dispatch('posts/fetchAbout')
  },
  computed: {
    about() {
      return this.$store.state.posts.about
    }
  }
}
</script>

<style lang="scss" scoped>
.heading::before {
  content: '' !important;
  display: block !important;
  height: 4px !important;
  width: 120px !important;
  background-color: black !important;
  margin-top: 5px !important;
}
</style>
