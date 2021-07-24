<template>
  <v-app class="app">
    <div class="header">
      <v-toolbar color="#fff2f9" fixed prominent>
        <h1 class="pink--text mt-8">Marry.me</h1>
        <v-icon class="mt-11" color="black lighten-5">mdi-ring</v-icon>
        <v-spacer></v-spacer>
          <span class="font mt-8 mr-10 pink--text">
            "O melhor site para organizar o seu casamento"
          </span>
        <v-spacer></v-spacer>
        <LoginDialog />
      </v-toolbar>
    </div>
  
    <v-main class="main">
      <v-container fluid fill-height>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer fixed color="blue lighten-2" app>
      <span class="footer white--text"
        >Copyright &copy; {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
var logoPath = require("~/assets/img/logoname2.png");
import LoginDialog from '~/components/login/loginDialog.vue'

export default {
  components:{
    LoginDialog
  },
  data: () => ({
    img: logoPath,
  }),
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

.header{
  margin: 0;
}

.footer {
  text-align: center;
  align-content: center;
  justify-content: center;
}
</style>