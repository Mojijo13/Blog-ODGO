<template>
  <v-data-iterator
    :items="filteredPost"
    :items-per-page="itemsPerPage"
    :page.sync="currentPage"
    :search="search"
    :sort-by="sortby"
    hide-default-footer
  >
    <template v-slot:header>
      <v-toolbar flat class="mb-10">
        <v-row class="fill-height" align="center">
          <v-col md="1" cols="2">
            <div style="text-align: center !important;">
              <v-icon color="#000" dense>mdi-filter</v-icon>
            </div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col md="2" cols="3">
            <v-select
              v-model="sortby"
              background-color="#f4f7f6"
              solo
              flat
              dense
              hide-details
              :items="categoriesKeys"
              :menu-props="{ bottom: true, offsetY: true }"
              label="Categories"
            ></v-select>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col lg="8" md="7" cols="6">
            <v-text-field
              v-model="search"
              background-color="#f4f7f6"
              hint
              clearable
              solo
              flat
              dense
              hide-details
              placeholder="Recherche"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-toolbar>
    </template>
    <template v-slot:default="props">
      <v-container>
        <v-row>
          <h3 class="mb-5 pl-3">
            Nos articles -
            <span style="font-weight: 300 !important;">
              Rester informé(e) de l'actu sport et performance
            </span>
          </h3>
        </v-row>
        <v-row>
          <v-col
            v-for="(item, index) in props.items"
            :key="index"
            cols="12"
            lg="4"
            md="4"
            sm="6"
          >
            <Post :item="item" />
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template v-slot:no-data>
      <v-row justify="center">
        <span>Aucun article</span>
      </v-row>
    </template>
    <template v-slot:no-results>
      <v-row justify="center">
        <span>Aucun résultats</span>
      </v-row>
    </template>
    <template v-slot:footer>
      <v-container class="mb-10">
        <v-row class="px-3">
          <v-btn
            v-for="page in pages"
            :key="page"
            class="mr-1"
            :class="page === currentPage ? 'v-btn_active' : ''"
            height="60px"
            depressed
            tile
            large
            :ripple="{ class: 'btnHover' }"
            background-color="#fcfcfc"
            @click="navPage(page)"
          >
            <v-icon
              style="font-size: 16px !important; font-weight: 300 !important; font-style: normal !important;"
            >
              {{ page }}
            </v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </template>
  </v-data-iterator>
</template>

<script>
import Post from '../components/Post.vue'

export default {
  components: {
    Post
  },
  data() {
    return {
      itemsPerPage: 9,
      currentPage: 1,
      search: '',
      sortby: 'Catégories',
      toggle: 0
    }
  },
  computed: {
    postItems() {
      return this.formatData(this.$store.state.posts.all, this.categories)
    },
    categories() {
      return this.$store.state.posts.categories
    },
    categoriesKeys() {
      const cat = []
      cat.push('Catégories')
      for (let i = 0; i < this.$store.state.posts.categories.length; i++) {
        cat.push(this.$store.state.posts.categories[i].name)
      }
      return cat
    },
    filteredPost() {
      let posts = []
      for (let i = 0; i < this.postItems.length; i++) {
        for (let j = 0; j < this.postItems[i].categories.length; j++) {
          if (this.sortby === 'Catégories') {
            posts = this.postItems
          } else if (this.postItems[i].categories[j] === this.sortby) {
            posts.push(this.postItems[i])
          }
        }
      }
      return posts
    },
    pages() {
      const pages = []
      for (
        let i = 1;
        i <= Math.ceil(this.filteredPost.length / this.itemsPerPage);
        i++
      ) {
        pages.push(i)
      }
      return pages
    }
  },
  methods: {
    formatData(posts, categories) {
      const data = []
      posts.forEach((el) => {
        const item = {
          id: el.id,
          title: el.title.rendered,
          categories: this.categorieName(el.categories, categories),
          img: el.jetpack_featured_media_url,
          excerpt: el.excerpt.rendered,
          content: el.content.rendered
        }
        data.push(item)
      })
      return data
    },
    categorieName(categoriesPost, categories) {
      const cat = []
      for (let i = 0; i < categoriesPost.length; i++)
        for (let j = 0; j < categories.length; j++)
          if (categoriesPost[i] === categories[j].id)
            cat.push(categories[j].name)
      return cat
    },
    navPage(selectPage) {
      this.currentPage = selectPage
    }
  }
}
</script>

<style lang="scss" scoped>
$btn-focus-opacity: 1 !important;

.v-toolbar {
  background: $light-grey !important;
  border-bottom: 1px solid $middle-grey;
}
.v-divider {
  border-color: $middle-grey !important;
}
.lightGrey {
  color: $light-grey !important;
}
.v-btn {
  background-color: $white !important;
  min-width: 60px !important;
  transition: all 0.3s ease-in-out !important;
}
.v-btn_active {
  background-color: #000 !important;
  color: white !important;
}
</style>
