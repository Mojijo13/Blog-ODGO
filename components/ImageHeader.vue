<template>
  <v-img
    height="400"
    position="center top"
    gradient="to top right, rgba( 0, 0, 15, .6), rgba( 0, 0, 5, .6)"
    :lazy-src="require(`~/assets/${img}`)"
    :src="require(`~/assets/${img}`)"
  >
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="8">
        <h1>
          Tester gratuitement l'application
        </h1>
        <h3>Par <span>ODGO Performance</span></h3>
        <v-btn
          v-ripple="{ class: 'myRed' }"
          class="d-flex ml-auto mr-auto mt-5 pl-8 pr-8"
          href="https://www.odgoperformance.com/" 
          target="blank"
          depressed
          outlined
          rounded
          color="white"
        >
          Tester
        </v-btn>
      </v-col>
    </v-row>
  </v-img>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.v-btn {
  width: 120px
}
</style>