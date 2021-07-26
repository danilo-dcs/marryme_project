<template>
    <v-navigation-drawer v-model="navigationDrawer" hide-overlay height="250" width="300px"
        temporary absolute app >    
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5 pink--text font-weight-bold">
            Navegação
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="blue--text">
          <v-list-item v-for="(option,i) in options" :key="i" :to="option.link" >
            <v-list-item-title>
                <v-icon class="mr-4"> {{option.icon}} </v-icon> 
                <span>{{option.text}}</span>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {

  data: ()=> ({
    navigationDrawer: false,
    // navigationAux: this.drawerValue,
    group: null,

    options: [
      {text: 'Evento', color: '#5D8777', link: 'event', icon: 'mdi-calendar-star'},
      {text: 'Convidados', color: '#59302D', link: 'guests', icon: 'mdi-account-group'},
      {text: 'Presentes', color: '#F27BAC' , link: 'gifts' , icon: 'mdi-gift-open'},
      {text: 'História', color: 'success' , link: 'aboutUs' , icon: 'mdi-information-variant'},      
    ],
  }),

  computed: {
    ...mapState('navigation', ['drawerState']),

    // ...mapGetters({
    //   navigationAux: getDrawer()
    // }),
    
  },

  watch: {
    navigationDrawer(val){
      if(!val)
        this.SET_DRAWER(val)
    },
    drawerState(val){
      this.navigationDrawer = val;
    }
  },

  methods: {
    ...mapMutations('navigation', ['SET_DRAWER']),
  }

}
</script>

<style>

</style>