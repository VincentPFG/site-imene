<template>
  <v-app>
    <v-app-bar app dense color="primary">
      <v-toolbar-title>Imane Boumekouez</v-toolbar-title>
      <v-spacer />
      <Dark />
    </v-app-bar>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-bottom-navigation app>
      <v-btn nuxt to="/">
        <span>Acceuil</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn nuxt to="/blog">
        <span>Blog</span>
        <v-icon>mdi-book-open-variant</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
