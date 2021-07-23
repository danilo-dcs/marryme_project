<template>
  <v-form ref="loginForm" lazy-validation >
      
      <v-col cols="10" class="mx-auto">
        <v-text-field v-model="email" class="mb-4" prepend-inner-icon="mdi-lock"
        label="E-mail" :rules="formRules.email" rounded outlined color="blue"
      >
      </v-text-field>
      <v-text-field v-model="password" prepend-inner-icon="mdi-account"
        label="Senha" :rules="formRules.password" :type="showPass ? 'text' : 'password'"
        @click:append="showPass = !showPass" :append-icon="showPass? 'mdi-eye' : 'mdi-eye-off' "
        rounded outlined color="blue"
      >
      </v-text-field>
      
      <v-row justify="center" class="mb-8">
        <v-btn text x-small @click="registerAction" color="blue" > 
          Cadastre-se
        </v-btn>
      </v-row>
      </v-col>

      <v-row justify="center" class="mb-2">
        <v-btn rounded @click="submitForm" color="blue" class="white--text"> 
          Entrar
        </v-btn>
      </v-row>
      
  </v-form>
</template>

<script>

import { mapMutations } from 'vuex'

export default {

  data: () => ({

    email: '',
    password: '',
    showPass: false,

    formRules: {
      email: [ 
        (text) => !!text || 'Digite um email',
        (text) => /.+@.+\..+/.test(text) || 'Digite um email válido'
      ],
      password: [ text=> !!text || 'Digite uma senha' ]
    }

  }),

  watch: {
  },

  computed: {
  },

  methods: {

    ...mapMutations('login', ['SET_DIALOG_MODE']),

    submitForm(){
      if(this.$refs.loginForm.validate()){
        this.$router.push('event');
      }else{
        alert("Preencha o formulário corretamente")
      }
    },

    registerAction(){
      this.SET_DIALOG_MODE('register');
    }

  }

}
</script>

<style>

</style>