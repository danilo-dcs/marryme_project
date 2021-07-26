<template>
  <v-col cols="12" lg="8" md="9" sm="10" xs="12" class="mx-auto">
    <v-dialog v-model="dialog" max-width="500">
      <v-card height="400" width="100%" class="overflow-y-auto" >
        <v-form v-model="valid" ref="form" lazy-validation >
          <v-container>
            <v-row justify="left" class="mt-5">
              <v-col cols="12" lg="7" md="12" sm="12">
                <v-text-field v-model="newGuest.name" label="Nome" :rules="rules.default" required ></v-text-field>
              </v-col>
              <v-col cols="6" lg="5" md="6" sm="6" >
                <v-text-field v-model="newGuest.phone" counter="15" 
                label="Telefone" :rules="rules.phone" v-mask="['(##) ####-####','(##) #####-####']" ></v-text-field>
              </v-col>
            </v-row>

            <v-row justify="left">
              <v-col cols="12" >
                <v-text-field v-model="newGuest.email" label="E-mail" :rules="rules.email" required> </v-text-field>
              </v-col>
            </v-row>
            <v-row justify="left">
              <v-col cols="12" >
                <v-text-field v-model="newGuest.adress" label="Endereço" :rules="rules.default" required ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center" class="mt-5">
              <v-btn color="blue" outlined @click="createGuest" class="white--text mx-5 mb-10" >
                Adicionar
              </v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>

    <v-card class="mx-auto mt-15 mb-10" min-height="350px" outlined 
    flat width="100%" color="#fcf9f7" >
    <v-card-title>
      <v-toolbar flat width="100%" color="#fcf9f7">
        <v-toolbar-title class="font-weight-bold text-lg-h4 text-md-h5">
          <span class="pink--text ">Lista de Convidados</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{on: tooltip}" >
            <v-btn class="mx-2" v-on="{...tooltip}" fab large color="blue lighten-1" @click="addGuest">
              <v-icon color="white">mdi-plus</v-icon>
            </v-btn>
          </template>
          <span> Adicionar novo convidado </span>
        </v-tooltip>
      </v-toolbar>
    </v-card-title>

    <v-card-text>
      <v-container fluid >
        <v-card color="white">
          <v-list three-line>
            <template v-for="(item,index) in guestList">
              <v-list-item :key="item.id">
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{item.name}}</v-list-item-title>
                  <v-list-item-subtitle>Email: {{item.email}} | Tel: {{item.phone}}</v-list-item-subtitle>
                  <v-list-item-subtitle> Endereço: {{item.adress}} </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-tooltip bottom>
                    <template #activator="{on: tooltip}" >
                      <v-icon v-on="tooltip" color="red" 
                        @click="removeGuest(index)"
                      >mdi-minus-circle</v-icon>
                    </template>
                    <span>Remover convidado</span>
                  </v-tooltip>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-container>
    </v-card-text>
  </v-card>
  </v-col>
 
</template>

<script>

const defaultAvatar = require('~/assets/img/avatardefault.png');

import db from '~/database/guests'

export default {
  layout: 'navHeader',

  data: () => ({

    dialog: false,

    valid: true,

    newGuest: {
      name: '',
      email: '',
      adress: '',
      phone: '',
      avatar: defaultAvatar,
    },

    defaultGuest: {
      name: '',
      email: '',
      adress: '',
      phone: '',
      avatar: defaultAvatar,
    },

    guestList: [],

    rules: {
      default: [ v=> !!v || "Campo vazio" ],
      email: [ v => (v &&  /.+@.+\..+/.test(v)) || 'Digite um email válido' ],
      phone: [ v=> !!v || "Campo vazio" , 
              v => (v && v.length > 13) || "Digite um número válido"
              ]
    },

  }),

  created(){

    this.guestList = db;
    // console.log(this.guestList)


  },

  watch: {
  },

  methods: {

    addGuest(){
      this.reset()
      this.dialog = true;
    },

    removeGuest(index){
      this.guestList.splice(index,1)
    },
    createGuest(){
      if(this.valid){
        let objc = {
          name: this.newGuest.name,
          email: this.newGuest.email,
          adress: this.newGuest.adress,
          phone: this.newGuest.phone,
          avatar: this.newGuest.avatar
        }
        this.guestList.push(objc);
        this.dialog = false;
      }else{
        alert("Preencha os campos corretamente")
      }
    },
    reset(){
      this.newGuest = this.defaultGuest;
    },
  }

}
</script>

<style>

</style>