<template>
  <div>
    <h1 class="text-h2" v-text="post.title"></h1>
    <p
      class="text-caption"
      v-text="
        new Date(post.date).toLocaleDateString('fr-FR', { dateStyle: 'long' })
      "
    ></p>

    <v-bottom-navigation>
      <v-btn v-if="prev" nuxt :to="`/blog/${prev.slug}`">
        <span>Précédent</span> <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn v-else disabled>
        <span>Précédent</span> <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="next" nuxt :to="`/blog/${next.slug}`">
        <span>Suivant</span> <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-btn v-else disabled>
        <span>Suivant</span> <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-container>
      <nuxt-content :document="post" class="text-justify" />
    </v-container>

    <v-bottom-navigation>
      <v-btn v-if="prev" nuxt :to="`/blog/${prev.slug}`">
        <span>Précédent</span> <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn v-else disabled>
        <span>Précédent</span> <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="next" nuxt :to="`/blog/${next.slug}`">
        <span>Suivant</span> <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-btn v-else disabled>
        <span>Suivant</span> <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params: { slug } }) {
    const post = (
      await $content('blog').sortBy('date', 'desc').where({ slug }).fetch()
    )[0]
    const [prev, next] = await $content('blog')
      .sortBy('date', 'desc')
      .surround(slug)
      .fetch()
    return { post, prev, next }
  },
}
</script>
