<template>
  <v-dialog v-model="dialogOn" height="500" width="600" transition="dialog-bottom-transition">
    <template v-slot:activator="{on, enable}" >
      <v-btn v-bind="enable" v-on="on" color="black" class="mt-10 white--text" >
        Entrar <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </template>

    <LoginCard v-if="mode=='login'" />
    <RegisterCard v-else />

  </v-dialog>
</template>

<script>

import LoginCard from '~/components/login/loginCard.vue';
import RegisterCard from '~/components/login/registerCard.vue'
import { mapState , mapMutations } from 'vuex'

export default {

  components: {
    LoginCard,
    RegisterCard
  },

  data: () => ({
    dialogOn: false,
  }),

  watch: {  
    dialogOn(val){
      if(!val){
        if(this.mode === 'register')
          this.SET_DIALOG_MODE("login");
      }
    }
  },

  computed: {
    ...mapState('login', ['mode'])
  },

  methods: {
    ...mapMutations("login", ["SET_DIALOG_MODE"]),
  }

};
</script>

<style>
</style>