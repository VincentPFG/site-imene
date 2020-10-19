<template>
  <div>
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
