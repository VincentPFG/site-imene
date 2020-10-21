<template>
  <div>
    <v-carousel cycle interval="4000" class="primary">
      <v-carousel-item>
        <v-row class="fill-height" justify="center" align="center">
          <v-col cols="12" class="text-center text-h2 text-md-h1"
            >Pychologue Sociale</v-col
          >
          <v-col cols="12" class="text-center text-h3 text-md-h2"
            >Consultations en ligne*</v-col
          >
        </v-row>
      </v-carousel-item>
      <v-carousel-item>
        <v-row class="fill-height" justify="center" align="center">
          <v-col cols="12" class="text-center text-h2 text-md-h1"
            >Première séance offerte</v-col
          >
          <v-col cols="12" class="text-center text-h3 text-md-h2"
            >Puis 30€/séance**</v-col
          >
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <p class="text-caption">
      * Par appels, SMS ou réseaux sociaux <br />
      ** Payment par PayPal ou virement
    </p>

    <v-list>
      <v-list-item v-for="{ icon, text } in contacts" :key="text">
        <v-list-item-icon>
          <v-icon v-text="icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        { icon: 'mdi-cellphone', text: '07 62 27 89 17' },
        { icon: 'mdi-email', text: 'imenbmkz@gmail.com' },
        { icon: 'mdi-instagram', text: 'perledesoncoeur' },
        { icon: 'mdi-snapchat', text: '@imanetjrhmdl' },
      ],
    }
  },
  head: { title: 'Accueil' },
}
</script>
