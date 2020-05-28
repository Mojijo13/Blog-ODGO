<template>
  <v-app>
    <NavBar />
    <v-content v-scroll="onScroll">
      <nuxt />
      <Newsletter />
    </v-content>
    <Footer />
    <v-scale-transition origin="center">
      <template v-if="offsetTop > 5">
        <ScrollTop :offset-top="offsetTop" />
      </template>
    </v-scale-transition>
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBarDesktop.vue'
import Footer from '~/components/Footer.vue'
import Newsletter from '~/components/Newsletter.vue'
import ScrollTop from '~/components/ScrollTop.vue'

export default {
  loading: true,
  components: {
    NavBar,
    Footer,
    Newsletter,
    ScrollTop
  },
  data: () => ({
    offsetTop: 0
  }),
  methods: {
    onScroll(e) {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      this.offsetTop = Math.round((scrollPx / winHeightPx) * 100)
    }
  }
}
</script>
