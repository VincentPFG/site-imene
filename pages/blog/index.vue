<template>
  <div>
    <div v-for="{ slug, title } in posts" :key="slug">
      <h1>
        <nuxt-link :to="`/blog/${slug}`">
          {{ title }}
        </nuxt-link>
      </h1>
    </div>
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
