<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, tooltip }">
      <v-btn
        v-bind="tooltip"
        v-on="on"
        fab
        color="black lighten-5"
        class="mt-10"
        to="login"
        small
      >
        <v-icon color="white">mdi-location-exit</v-icon>
      </v-btn>
    </template>
    <span>Sair</span>
  </v-tooltip>
</template>

<script>
export default {};
</script>

<style>
</style>