<template>
  <v-app class="app">
    <MenuMini />
    <Toolbar /> 
    <v-divider ></v-divider>  
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

import InfoFooter from '~/components/home/footerCard.vue';
import MenuMini from '~/components/menu/navigationMini.vue';
import Toolbar from '~/components/menu/toolbar.vue';

export default {
  components: {
    InfoFooter,
    MenuMini,
    Toolbar
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