<template>
  <div>
    <v-card
      v-for="{ slug, title, date } in posts"
      :key="slug"
      nuxt
      :to="`/blog/${slug}`"
      style="margin: 3vh auto"
    >
      <v-card-title v-text="title"></v-card-title>
      <v-card-subtitle
        v-text="
          new Date(date).toLocaleDateString('fr-FR', { dateStyle: 'long' })
        "
      ></v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').sortBy('date', 'desc').fetch()
    return { posts }
  },
  head: { title: 'Blog' },
}
</script>

<style scoped>
/* * {
  margin: 5vh auto;
} */
</style>
