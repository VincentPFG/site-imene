<template>
  <v-form>
    <v-text-field label="Nom"></v-text-field>
    <v-text-field label="Prénom"></v-text-field>
    <v-slider label="Âge" thumb-label="always" thumb-size="20"></v-slider>
    <v-select
      v-model="value"
      :items="['Femme', 'Homme']"
      label="Genre"
    ></v-select>

    <v-text-field label="Profession"></v-text-field>
    <v-text-field label="Niveau d'étude"></v-text-field>
    <v-text-field label="Catégorie INSEE"></v-text-field>

    <v-text-field label="Téléphone"></v-text-field>
    <v-text-field label="Mail"></v-text-field>
    <v-textarea label="Adresse"></v-textarea>

    <v-select
      v-model="value"
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
    <v-checkbox v-model="test" label="Enfants"></v-checkbox>
    <v-slider
      v-if="test"
      label="Nombre d'enfants"
      min="1"
      max="5"
      thumb-label="always"
      thumb-size="20"
      ><template #thumb-label="{ value }"
        ><span v-text="value < 5 ? value : '5+'"></span></template
    ></v-slider>

    <v-text-field label="Diagnostic"></v-text-field>
    <v-checkbox v-model="value" label="Suicidant" value="value"></v-checkbox>
    <v-text-field label="Proche à contacter"></v-text-field>
    <v-text-field label="Référent médico-psycho"></v-text-field>
    <v-text-field label="Traitement médicamenteux"></v-text-field>
    <v-checkbox
      v-model="test2"
      label="Suivi psychologique en cours"
      value="value"
    ></v-checkbox>
    <div v-if="test2">
      <v-select
        v-model="value"
        :items="['Hospitalisation', 'Ambulatoire']"
        label="État institutionel"
      ></v-select>
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return { test: false, test2: false }
  },
}
</script>
