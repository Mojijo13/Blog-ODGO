<template>
  <div>
    <v-app-bar flat fixed hide-on-scroll>
      <v-toolbar-title>
        <div class="logo-header">
          <a href="/">
            <Logo />
          </a>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        id="btn-menu"
        tile
        depressed
        height="100%"
        @click="drawer = !drawer"
      >
        <v-icon color="#000">mdi-menu</v-icon>
        <span class="upper">Menu</span>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-btn
        v-for="item in menu"
        :key="item.name"
        class="d-flex nav"
        tile
        depressed
        text
        nuxt
        :href="item.href"
      >
        {{ item.name }}
      </v-btn>
      <v-btn class="d-flex nav" tile depressed text href="https://www.odgoperformance.com/" target="blank">
        Notre méthode
      </v-btn>
      <v-btn
        v-for="item in rs"
        :key="item.name"
        :href="item.href"
        target="blank"
        class="d-flex link"
        depressed
        small
      >
        <v-icon size="25px">{{ item.icon }}</v-icon>
      </v-btn>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    menuItems() {
      return this.$store.state.menu
    },
    menu() {
      return this.$store.state.menu
    },
    rs() {
      return this.$store.state.rs
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  width: 100% !important;
}
.v-toolbar {
  width: 100% !important;
}
#btn-menu {
  border-left: 1px solid $middle-grey;
  border-bottom: 1px solid $middle-grey;
  color: #000;
  background-color: $light-grey;
  padding: 0;
  padding: 0 20px;
}
.logo-header {
  max-width: 130px;
}
.v-btn.link {
  background: none !important;
  padding: 40px 0 !important;
  border-bottom: 1px solid $middle-grey;
}
.v-btn.nav {
  border-bottom: 1px solid $middle-grey;
  padding: 40px 0 !important;
}
</style>
