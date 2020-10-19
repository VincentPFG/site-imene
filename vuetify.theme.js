import colors from 'vuetify/es5/util/colors'

const { red, blue, green, orange, pink, purple } = colors

const [primary, secondary, accent] = [pink, pink, purple]

const base = {
  primary,
  secondary,
  error: red,
  info: blue,
  success: green,
  warning: orange,
}

const { entries, fromEntries } = Object

const light = fromEntries(entries(base).map(([k, v]) => [k, v.lighten1]))
const dark = fromEntries(entries(base).map(([k, v]) => [k, v.darken1]))

module.exports = {
  dark: true,
  themes: {
    light: { ...light, accent },
    dark: { ...dark, accent },
  },
}
