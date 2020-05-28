<template>
  <v-hover v-slot:default="{ hover }" open-delay="225" close-delay="200">
    <a
      :key="item.id"
      :href="'/posts/' + item.id"
    >
      <v-card
        :elevation="hover ? 5 : 0"
        :class="{ 'on-hover': hover }"
        tile
        height="550"
      >
        <v-img
          height="250px"
          :src="item.img"
          :class="{ 'scale-img': hover }"
        ></v-img>
        <v-card-subtitle class="pb-0">
          <v-chip
            v-for="(categorie, i) in item.categories"
            :key="i"
            class="ma-1"
            dense
            small
            :color="checkCatCol(categorie)"
            :text-color="checkCatColText(categorie)"
          >
            {{ categorie }}
          </v-chip>
        </v-card-subtitle>
        <v-card-title>{{ item.title | capitalized }}</v-card-title>
        <v-card-text>
          <span v-html="item.excerpt"></span>
        </v-card-text>
      </v-card>
    </a>
  </v-hover>
</template>

<script>
export default {
  filters: {
    capitalized(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    }
  },
  props: {
    item: {
      type: Object,
      default() {
        return {
          id: '',
          title: '',
          img: '',
          categories: [],
          excerpt: '',
          content: ''
        }
      }
    }
  },
  methods: {
    checkCatColText(categorie) {
      if (
        categorie === 'Performance' ||
        categorie === 'Hygiène de vie' ||
        categorie === 'Nutrition' ||
        categorie === 'Videos'
      )
        return 'white'
      else return 'black'
    },
    checkCatCol(categorie) {
      if (categorie === 'Performance') return '#f44130'
      if (categorie === 'Hygiène de vie') return '#0cce6b'
      if (categorie === 'Nutrition') return '#ffbd00'
      if (categorie === 'Videos') return '#6610f2'
      else return '#e6eaea'
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card__title {
  font-size: 18px !important;
  line-height: 22px !important;
  font-weight: 600 !important;
  word-break: normal !important;
}
.v-image {
  background-color: #e6eaea;
}
.v-image__image {
  transition: all 0.3s ease-in-out !important;
}
.scale-img {
  .v-image__image {
    transform: scale(1.1) !important;
    transition: all 0.3s ease-in-out !important;
  }
}
</style>
