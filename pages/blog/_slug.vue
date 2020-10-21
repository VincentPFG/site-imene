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
      <v-btn v-if="prev" nuxt :to="`/blog/${'prev.slug'}`" disabled>
        <span>Précédent</span> <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn v-else disabled>
        <span>Précédent</span> <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="next" nuxt :to="`/blog/${'next.slug'}`">
        <span>Suivant</span> <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-btn v-else disabled>
        <span>Suivant</span> <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <nuxt-content :document="post" />

    <p v-if="prev">
      prev:
      <nuxt-link :to="`/blog/${prev.slug}`">
        {{ prev.title }}
      </nuxt-link>
    </p>
    <p v-if="next">
      next:
      <nuxt-link :to="`/blog/${next.slug}`">
        {{ next.title }}
      </nuxt-link>
    </p>
    <v-bottom-navigation>
      <v-btn v-if="prev" nuxt :to="`/blog/${'prev.slug'}`" disabled>
        <span>Précédent</span> <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn v-else disabled>
        <span>Précédent</span> <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="next" nuxt :to="`/blog/${'next.slug'}`">
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
    const post = (await $content('blog').where({ slug }).fetch())[0]
    const [prev, next] = await $content('blog').surround(slug).fetch()
    return { post, prev, next }
  },
}
</script>
