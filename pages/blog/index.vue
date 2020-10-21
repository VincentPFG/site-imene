<template>
  <div>
    <v-card
      v-for="{ slug, title, date } in posts"
      :key="slug"
      nuxt
      :to="`/blog/${slug}`"
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
    const posts = await $content('blog').fetch()
    return { posts }
  },
}
</script>
