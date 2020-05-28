<template>
  <v-container fluid class="px-0">
    <v-img
      height="400"
      position="center top"
      gradient="to top right, rgba( 0, 0, 15, .6), rgba( 0, 0, 5, .6)"
      :lazy-src="currentPost.img"
      :src="currentPost.img"
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
    <v-container id="content">
      <v-row justify="center" class="mt-12 pt-12">
        <v-chip
          v-for="(categorie, i) in currentPost.categories"
          :key="i"
          class="ma-1"
          :color="checkCatCol(categorie)"
          :text-color="checkCatColText(categorie)"
        >
          {{ categorie }}
        </v-chip>
      </v-row>
      <v-row justify="center">
        <v-col lg="8" sm="10" cols="11">
          <h1>{{ currentPost.title | capitalized }}</h1>
        </v-col>
      </v-row>
      <v-row justify="center">
        <social-sharing
          :url="'https://odgo-blog.appspot.com/posts/' + currentPost.id"
          :title="currentPost.title"
          inline-template
        >
          <div>
            <network network="facebook">
              <button class="btn-share">
                <i class="mdi mdi-facebook"></i>
              </button>
            </network>
            <network network="twitter">
              <button class="btn-share">
                <i class="mdi mdi-twitter"></i>
              </button>
            </network>
            <network network="linkedin">
              <button class="btn-share">
                <i class="mdi mdi-linkedin"></i>
              </button>
            </network>
          </div>
        </social-sharing>
      </v-row>
      <v-row justify="center" class="mt-8 pt-8 mb-12 pb-12">
        <v-col lg="8" sm="10" cols="11" v-html="currentPost.content"></v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'desktop'),
  filters: {
    capitalized(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('posts/fetchPost', params.id)
    await store.dispatch('posts/fetchCategories')
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    currentPost() {
      return this.formatData(
        this.$store.state.posts.all.find((post) => post.id === Number(this.id)),
        this.categories
      )
    },
    categories() {
      return this.$store.state.posts.categories
    }
  },
  methods: {
    formatData(el, categories) {
      return {
        id: el.id,
        title: el.title.rendered,
        categories: this.categorieName(el.categories, categories),
        img: el.jetpack_featured_media_url,
        excerpt: el.excerpt.rendered,
        content: el.content.rendered
      }
    },
    categorieName(categoriesPost, categories) {
      const cat = []
      for (let i = 0; i < categoriesPost.length; i++)
        for (let j = 0; j < categories.length; j++)
          if (categoriesPost[i] === categories[j].id)
            cat.push(categories[j].name)
      return cat
    },
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

<style scoped>
.v-btn {
  width: 120px
}
</style>
