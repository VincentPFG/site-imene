<template>
  <div>
    <v-form v-show="false" netlify name="contact">
      <textarea name="contenu" />
    </v-form>

    <v-form ref="form" @submit.prevent="onSubmit">
      <v-container grid-list-xs>
        <p v-text="JSON.stringify(f)"></p>

        <v-row>
          <v-col cols="12" sm="6"
            ><v-text-field v-model="f.nom" label="Nom" outlined></v-text-field
          ></v-col>
          <v-col cols="12" sm="6"
            ><v-text-field
              v-model="f.prenom"
              label="Prénom"
              outlined
            ></v-text-field
          ></v-col>
        </v-row>

        <v-slider
          v-if="!f.ageSup100"
          v-model="f.age"
          label="Âge"
          thumb-label="always"
          thumb-size="20"
        ></v-slider>
        <v-checkbox
          v-if="f.age === 100"
          v-model="f.ageSup100"
          label="Plus de 100 ans"
        ></v-checkbox>
        <v-select
          v-model="f.genre"
          outlined
          :items="['Femme', 'Homme']"
          label="Genre"
        ></v-select>

        <v-row>
          <v-col cols="12" sm="4"
            ><v-text-field
              v-model="f.profession"
              outlined
              label="Profession"
            ></v-text-field
          ></v-col>
          <v-col cols="12" sm="4"
            ><v-text-field
              v-model="f.etudes"
              outlined
              label="Niveau d'étude"
            ></v-text-field
          ></v-col>
          <v-col cols="12" sm="4"
            ><v-text-field
              v-model="f.insee"
              outlined
              label="Catégorie INSEE"
            ></v-text-field
          ></v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6"
            ><v-text-field
              v-model="f.tel"
              outlined
              label="Téléphone"
            ></v-text-field
          ></v-col>
          <v-col cols="12" sm="6"
            ><v-text-field v-model="f.mail" outlined label="Mail"></v-text-field
          ></v-col>
        </v-row>

        <v-textarea v-model="f.adresse" outlined label="Adresse"></v-textarea>

        <v-row>
          <v-col cols="12" sm="4"
            ><v-select
              v-model="f.relation"
              outlined
              :items="[
                'Célibataire',
                'Concubinage',
                'PACS',
                'Mariage',
                'Veuvage',
                'En cours de séparatioin',
              ]"
              label="Relation"
            ></v-select
          ></v-col>
          <v-col cols="12" sm="8"
            ><v-checkbox v-model="f.enfants" label="Enfants"></v-checkbox>
            <v-slider
              v-if="f.enfants && !f.nombreEnfantsSup5"
              v-model="f.nombreEnfants"
              label="Nombre d'enfants"
              min="1"
              max="5"
              thumb-label="always"
              thumb-size="20"
            ></v-slider>
            <v-checkbox
              v-if="f.enfants && f.nombreEnfants === 5"
              v-model="f.nombreEnfantsSup5"
              label="Plus de 5 enfants"
            ></v-checkbox
          ></v-col>
        </v-row>

        <v-text-field
          v-model="f.diagnostic"
          outlined
          label="Diagnostic"
        ></v-text-field>
        <v-checkbox v-model="f.suicidant" label="Suicidant"></v-checkbox>
        <v-text-field
          v-model="f.proches"
          outlined
          label="Proche à contacter"
        ></v-text-field>
        <v-text-field
          v-model="f.referant"
          outlined
          label="Référent médico-psycho"
        ></v-text-field>
        <v-text-field
          v-model="f.traitement"
          outlined
          label="Traitement médicamenteux"
        ></v-text-field>
        <v-checkbox
          v-model="f.suivi"
          label="Suivi psychologique en cours"
        ></v-checkbox>
        <div v-if="f.suivi">
          <v-select
            v-model="f.etat"
            outlined
            :items="['Hospitalisation', 'Ambulatoire']"
            label="État institutionel"
          ></v-select>
        </div>
        <v-select
          v-model="f.modeHospitalisation"
          outlined
          :items="['SL', 'SDT', 'SPI', 'SDRE', 'CH. Isolement']"
          label="Mode d'hospitalisation"
        ></v-select>
        <v-select
          v-model="f.orientation"
          outlined
          :items="['Sortie', 'Soins ambulatoires', 'Hôpital', 'Clinique']"
          label="Orientation prévue"
        ></v-select>
        <v-checkbox v-model="f.recidive" label="Récidive"></v-checkbox>
        <div v-if="f.recidive && !f.recidiveSup24">
          <p>À {{ f.moisRecidive }} mois</p>
          <v-slider
            v-if="f.recidive && !f.recidiveSup24"
            v-model="f.moisRecidive"
            max="24"
            thumb-size="20"
          ></v-slider>
        </div>
        <v-checkbox
          v-if="f.recidive && f.moisRecidive === 24"
          v-model="f.recidiveSup24"
          label="À plus de 24 mois"
        ></v-checkbox>

        <v-row>
          <v-col cols="12" sm="6"
            ><v-checkbox
              v-model="f.participation"
              label="Participation à la recherche"
            ></v-checkbox
          ></v-col>
          <v-col cols="12" sm="6"
            ><v-checkbox
              v-model="f.consentement"
              label="Formulaire de consentement"
            ></v-checkbox
          ></v-col>
        </v-row>

        <v-row justify="center">
          <v-btn type="submit" color="primary">
            <v-icon class="mr-2"> mdi-send </v-icon>
            Envoyer
          </v-btn>
        </v-row>
      </v-container>
    </v-form>

    <v-snackbar
      v-model="snackbar"
      :color="failed ? 'error' : 'success'"
      :timeout="-1"
    >
      {{ failed ? 'Une erreur est survenue' : 'Formulaire envoyé' }}
      <template #action>
        <v-btn icon @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
const { entries } = Object

const encode1 = (data) =>
  entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
const encode2 = (data) =>
  '\n' +
  entries(data)
    .map(([k, v]) => `\t${k} : ${v}`)
    .join('\n')

export default {
  data() {
    return { f: {}, snackbar: false, failed: null }
  },
  methods: {
    async onSubmit() {
      if (this.$refs.form.validate()) {
        try {
          await fetch('/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: encode1({
              'form-name': 'contact',
              contenu: encode2(this.f),
            }),
          })
          this.$refs.form.reset()
          this.failed = false
          this.snackbar = true
        } catch {
          this.failed = true
          this.snackbar = true
        }
      }
    },
  },
}
</script>
