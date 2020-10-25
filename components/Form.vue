<template>
  <v-form>
    <p v-text="JSON.stringify(f)"></p>

    <v-text-field v-model="f.nom" label="Nom"></v-text-field>
    <v-text-field v-model="f.prenom" label="Prénom"></v-text-field>
    <v-slider
      v-model="f.age"
      label="Âge"
      thumb-label="always"
      thumb-size="20"
    ></v-slider>
    <v-select
      v-model="f.genre"
      :items="['Femme', 'Homme']"
      label="Genre"
    ></v-select>

    <v-text-field v-model="f.profession" label="Profession"></v-text-field>
    <v-text-field v-model="f.etudes" label="Niveau d'étude"></v-text-field>
    <v-text-field v-model="f.insee" label="Catégorie INSEE"></v-text-field>

    <v-text-field v-model="f.tel" label="Téléphone"></v-text-field>
    <v-text-field v-model="f.mail" label="Mail"></v-text-field>
    <v-textarea v-model="f.adresse" label="Adresse"></v-textarea>

    <v-select
      v-model="f.relation"
      :items="[
        'Célibataire',
        'Concubinage',
        'PACS',
        'Mariage',
        'Veuvage',
        'En cours de séparatioin',
      ]"
      label="Relation"
    ></v-select>
    <v-checkbox v-model="f.enfants" label="Enfants"></v-checkbox>
    <v-slider
      v-if="f.enfants"
      v-model="f.nombreEnfants"
      label="Nombre d'enfants"
      min="1"
      max="5"
      thumb-label="always"
      thumb-size="20"
    ></v-slider>

    <v-text-field v-model="f.diagnostic" label="Diagnostic"></v-text-field>
    <v-checkbox v-model="f.suicidant" label="Suicidant"></v-checkbox>
    <v-text-field v-model="f.proches" label="Proche à contacter"></v-text-field>
    <v-text-field
      v-model="f.referant"
      label="Référent médico-psycho"
    ></v-text-field>
    <v-text-field
      v-model="f.traitement"
      label="Traitement médicamenteux"
    ></v-text-field>
    <v-checkbox
      v-model="f.suivi"
      label="Suivi psychologique en cours"
    ></v-checkbox>
    <div v-if="f.suivi">
      <v-select
        v-model="f.etat"
        :items="['Hospitalisation', 'Ambulatoire']"
        label="État institutionel"
      ></v-select>
    </div>
    <v-select
      v-model="f.modeHospitalisation"
      :items="['SL', 'SDT', 'SPI', 'SDRE', 'CH. Isolement']"
      label="Mode d'hospitalisation"
    ></v-select>
    <v-select
      v-model="f.orientation"
      :items="['Sortie', 'Soins ambulatoires', 'Hôpital', 'Clinique']"
      label="Orientation prévue"
    ></v-select>
    <v-checkbox v-model="f.recidive" label="Récidive"></v-checkbox>
    <p>À {{ f.moisRecidive === 24 ? '24+' : f.moisRecidive }} mois</p>
    <v-slider
      v-if="f.recidive"
      v-model="f.moisRecidive"
      max="24"
      thumb-size="20"
    ></v-slider>
    <v-checkbox
      v-model="f.participation"
      label="Participation à la recherche"
    ></v-checkbox>
    <v-checkbox
      v-model="f.consentement"
      label="Formulaire de consentement"
    ></v-checkbox>
  </v-form>
</template>

<script>
export default {
  data() {
    return { f: {} }
  },
}
</script>
