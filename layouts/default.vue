<template>
  <v-app>
    <!-- <v-navigation-drawer v-model="drawer" app>
      <v-list nav>
        <v-list-item
          v-for="{ route, name } in nav"
          :key="name"
          @click="
            $vuetify.goTo(route)
            drawer = defaultDrawer
          "
        >
          <v-list-item-content>
            <v-list-item-title>{{ name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar app color="primary">
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer" /> -->
      <v-toolbar-title>Imène</v-toolbar-title>
      <v-spacer />
      <Dark />
    </v-app-bar>
    <v-main>
      <v-container>
        <!-- <v-alert type="warning">
          Ce site est en cours de développement.
        </v-alert> -->
        <nuxt />
      </v-container>
    </v-main>
    <!-- <v-footer app absolute color="primary">
      <v-row justify="center">
        Développé par Vincent GIRAUD
      </v-row>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      defaultDrawer: null,
      nav: [],
    }
  },
  mounted() {
    this.defaultDrawer = this.drawer
  },
}
</script>
