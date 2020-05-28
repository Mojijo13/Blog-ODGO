<template>
  <v-app-bar flat fixed hide-on-scroll>
    <v-toolbar-title>
      <div class="logo-header">
        <a href="/">
          <Logo />
        </a>
      </div>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="pr-5">
      <v-btn
        tile
        depressed
        text
        nuxt
        :href="menu[1].href"
        height="100%"
        class="link"
      >
        {{ menu[1].name }}
      </v-btn>
    </div>
    <div class="pr-5">
      <v-btn
        v-for="item in rs"
        :key="item.name"
        :href="item.href"
        target="blank"
        fab
        depressed
        x-small
      >
        <v-icon size="20px">{{ item.icon }}</v-icon>
      </v-btn>
    </div>
    <v-btn class="link-site" tile depressed href="https://www.odgoperformance.com/" target="blank" height="100%">
      Notre méthode
    </v-btn>
  </v-app-bar>
</template>

<script>
import Logo from './Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    menu() {
      return this.$store.state.menu
    },
    rs() {
      return this.$store.state.rs
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn.link-site {
  background: $color-red !important;
  font-size: 13px !important;
  color: $white !important;
  padding: 0 36px !important;
}
.v-btn.link {
  background: none !important;
  color: #000 !important;
  padding: 0 8px !important;
}
</style>
