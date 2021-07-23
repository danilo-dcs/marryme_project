<template>
  <v-card rounded="4"  >
    <v-card-title class="mb-10">
      <v-toolbar color="pink lighten-2">
        <div class="white--text mx-auto text-xm-h6 text-sm-h5 font-weight-bold"> Login </div>
      </v-toolbar>
    </v-card-title>
    <v-card-text>
      <LoginForm />
    </v-card-text>
  </v-card>
</template>

<script>

import LoginForm from '~/components/login/loginForm.vue'

export default {

  components:{
    LoginForm
  },

  data: () => ({

    dialogOn: false,

  }),

  methods: {

  }

};
</script>

<style>
</style>