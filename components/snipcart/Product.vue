<template>
  <v-btn v-bind="attrs" class="snipcart-add-item">
    <slot />
  </v-btn>
</template>

<script>
export default {
  computed: {
    attrs() {
      const { customs = [], ...others } = this.$attrs
      const value = {}
      for (const key in others) {
        value['data-item-' + key] = others[key]
      }
      for (const [index, custom] of customs.entries()) {
        for (const key in custom) {
          value[`data-item-custom${index}-${key}`] = custom[key]
        }
      }
      return value
    },
  },
}
</script>
