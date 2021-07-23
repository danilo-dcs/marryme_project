<template>
  <v-app class="app">
    <div class="head">
      <v-toolbar color="#fff7fb" prominent fixed>
        <h1 class="pink--text mt-8">Marry.me</h1>
        <v-icon class="mt-11" color="black lighten-5">mdi-ring</v-icon>
        <v-spacer></v-spacer>
        <MenuOptions />
        <v-spacer></v-spacer>
        <ExitButton />
      </v-toolbar>
      <v-divider ></v-divider>
    </div>
    <v-main class="main">
      <v-container fluid fill-height>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer absolute padless app>
      <InfoFooter />
    </v-footer>
  </v-app>
</template>

<script>
import ExitButton from "~/components/menu/exitButton.vue";
import MenuOptions from '~/components/menu/navigationItems.vue';
import InfoFooter from '~/components/home/footerCard.vue';

export default {
  components: {
    ExitButton,
    MenuOptions,
    InfoFooter
  },

  data: () => ({}),
  methods: {
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap");

.font {
  font-family: "Zen Loop", cursive;
  font-size: 40px;
}

@media screen and (max-width: 960px) {
  .font {
    display: none !important;
  }
}

.app {
  background-color: #fff7fb;
}
</style>