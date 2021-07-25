<template>
  <v-container fluid fill-height>
    <v-dialog v-model="dialog" width="550">
      <v-card min-height="400" width="550"  >
        <v-form v-model="valid" ref="form" lazy-validation >
          <v-container>
            <v-row justify="left" class="mt-5">
              <v-col cols="8" >
                <v-text-field v-model="newGift.product" label="Item" :rules="rules.default" required></v-text-field>
              </v-col>
            </v-row>

            <v-row justify="left" class="mt-2">
              <v-col cols="12" >
                <v-text-field v-model="newGift.link" label="Link do produto" :rules="rules.default" required > </v-text-field>
              </v-col>
            </v-row>
            <v-row justify="left" class="mt-10">
              <v-col cols="12" >
                <v-text-field v-model="newGift.description" label="Descrição" :rules="rules.default" required></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center" class="mt-5 mb-5 ">
              <v-btn color="blue" outlined @click="createGift" class="white--text" >
                Adicionar
              </v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>

    <v-col cols="11" md="11" sm="8">
      <v-card class="mx-auto mt-15 mb-10" min-height="350px" outlined 
      flat width="60%" color="#fcf9f7" >
      <v-card-title>
        <v-toolbar flat width="100%" color="#fcf9f7">
          <v-toolbar-title class="font-weight-bold text-lg-h4 text-md-h5">
            <span class="pink--text">Lista de Presentes</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{on: tooltip}" >
              <v-btn class="mx-2" v-on="{...tooltip}" fab small color="purple lighten-2" @click="share">
                <v-icon color="white">mdi-share-variant</v-icon>
              </v-btn>
            </template>
            <span> Compartilhar lista com convidados </span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{on: tooltip}" >
              <v-btn class="mx-2" v-on="{...tooltip}" fab large color="blue lighten-1" @click="addGift">
                <v-icon color="white">mdi-plus</v-icon>
              </v-btn>
            </template>
            <span> Adicionar presente </span>
          </v-tooltip>
        </v-toolbar>
      </v-card-title>

      <v-card-text>
        <v-container fluid >
          <v-card color="white">
            <v-list three-line>
              <template v-for="(item,index) in giftsList">
                <v-list-item :key="item.id">
                  <v-list-item-content>
                    <v-list-item-title>{{item.product}}</v-list-item-title>
                    <v-list-item-subtitle> {{item.description}} </v-list-item-subtitle>
                    <v-list-item-subtitle> <a :href="item.link"> {{item.link}} </a> </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-tooltip bottom>
                      <template #activator="{on: tooltip}" >
                        <v-icon v-on="tooltip" color="red" 
                          @click="removeGift(index)"
                        >mdi-minus-circle</v-icon>
                      </template>
                      <span>Remover item</span>
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
  </v-container>
</template>

<script>

import db from '~/database/gifts.json'

export default {
  layout: 'navHeader',

  data: () => ({

    dialog: false,

    valid: true,

    giftsList: [],
    newGift: {
      product: '',
      description: '',
      link: ''
    },
    defaultGift: {
      product: '',
      description: '',
      link: ''
    },

    rules: {
      default: [ v=> !!v || "Campo vazio" ],
      // link: [ v => (v &&  /.+@.+\..+/.test(v)||   ) || 'Digite um email válido' ]
    },

  }),

  created(){
    this.giftsList = db;
  },

  watch: {
  
  },

  methods: {

    addGift(){
      this.dialog = true;
      this.reset();
    },

    removeGift(index){
      this.giftsList.splice(index,1)
    },
    createGift(){
      if(this.valid){

        let obj = {
          product: this.newGift.product,
          description: this.newGift.description,
          link: this.newGift.link
        }

        this.giftsList.push(obj);
        this.reset();
        this.dialog = false;
      }else{
        alert('Preencha os campos corretamente')
      }
    },
    reset(){
      this.newGift.product = '';
      this.newGift.description = '',
      this.newGift.link = ''
    },
    share(){
      alert('Lista de presentes compartilhada')
    }
  }

}
</script>

<style>

</style>