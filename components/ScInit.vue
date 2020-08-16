<template>
  <div id="snipcart" hidden :data-api-key="apiKey" />
</template>

<script>
export default {
  props: {
    apiKey: {
      type: String,
      required: true,
    },
  },
  head() {
    return {
      link: [
        { rel: 'preconnect', href: 'https://app.snipcart.com' },
        { rel: 'preconnect', href: 'https://cdn.snipcart.com' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js',
          body: true,
        },
      ],
    }
  },
}
</script>
