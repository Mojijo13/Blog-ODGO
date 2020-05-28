<template>
  <v-footer padless tile>
    <v-container class="pt-0 pb-0">
      <v-row align="center">
        <v-col lg="3" md="4" sm="4" cols="12" class="pt-10 pb-10">
          <v-img
            gradient="to top right, rgba( 0, 0, 15, .2), rgba( 0, 0, 5, .2)"
            :lazy-src="require(`~/assets/ac.jpg`)"
            :src="require(`~/assets/ac.jpg`)"
          ></v-img>
        </v-col>
        <v-col
          lg="5"
          md="6"
          sm="6"
          cols="9"
          style="line-height: 1.2 !important; border-right: 1px solid #e6eaea !important;"
          class="pt-10 pb-10"
        >
          <h1>Arnaud Chabert</h1>
          <h4 class="heading">Fondateur d’Odgo et auteur du blog</h4>
          <p>
            Kiné du sport et préparateur physique depuis près de 10 ans auprès
            de footballeurs professionnels, d’équipes de foot et de sélection
            nationale, Arnaud Chabert est le fondateur de la méthode Odgo.
          </p>
          <p>
            Partant du principe que chaque athlète est unique, il s’est
            construit une expertise complète autour de toutes les thématiques de
            la performance afin d’accompagner chaque sportif de manière
            personnalisée : suivi nutritionnel, prévention des blessures,
            définition du profil psychomoteur…
          </p>
          <p>
            Avec Odgo, son objectif est que chaque sportif optimise ses
            performances pour devenir la meilleure version de lui-même.
          </p>
        </v-col>
        <v-col lg="4" md="2" sm="2" cols="3" align="center">
          <v-btn
            v-for="item in rs"
            :key="item.name"
            :href="item.href"
            target="blank"
            fab
            depressed
            color="#fcfcfc"
            x-large
            class="d-block mt-2 mb-2"
          >
            <v-icon size="40">{{ item.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0">
      <v-divider></v-divider>
      <v-row align="center" justify="center" style="height:40px;">
        <span>ODGO Performance © 2020</span>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  computed: {
    rs() {
      return this.$store.state.rs
    }
  }
}
</script>

<style lang="scss" scoped>
.v-footer {
  background-color: $white !important;
  border-top: 1px solid $middle-grey !important;
}
p {
  font-weight: 300 !important;
  margin-top: 10px !important;
}
.heading::after {
  content: '' !important;
  display: block !important;
  height: 4px !important;
  width: 120px !important;
  background-color: black !important;
  margin-top: 10px !important;
}
h4 {
  text-transform: uppercase !important;
  font-weight: 500 !important;
}
</style>
