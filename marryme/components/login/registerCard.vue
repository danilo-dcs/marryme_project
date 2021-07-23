<template>
  <v-card rounded="4" >
    <v-card-title class="mb-10">
      <v-toolbar color="pink lighten-2">
        <div class="white--text mx-auto text-xm-h6 text-sm-h5 font-weight-bold"> Cadastro </div>
      </v-toolbar>
    </v-card-title>
    <v-card-text>
      <RegisterForm />
    </v-card-text>
  </v-card>
</template>

<script>

import RegisterForm from '~/components/login/registerForm.vue'

export default {

  components:{
    RegisterForm
  },

  data: () => ({


  }),

  methods: {

  }

};
</script>

<style>
</style>