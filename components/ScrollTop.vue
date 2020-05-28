<template>
  <v-btn fab color="#000">
    <v-progress-circular
      width="4"
      size="50"
      rotate="-90"
      color="#fcfcfc"
      :value="offsetTop"
      @click="$vuetify.goTo(target, options)"
    >
      <v-icon color="#fcfcfc">mdi-chevron-double-up</v-icon>
    </v-progress-circular>
  </v-btn>
</template>

<script>
export default {
  props: {
    offsetTop: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  computed: {
    target() {
      return 0
    },
    options() {
      return {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn {
  position: fixed;
  right: 35px;
  bottom: 30px;
}
</style>
