<template>
  <v-container fluid fill-height>
    <v-col cols="11" md="12" sm="12">
      <v-card class="mx-auto mt-15 mb-10" min-height="350px" outlined 
      flat width="60%" color="#fcf9f7" >
      <v-card-title>
        <v-toolbar flat width="100%" color="#fcf9f7">
          <v-toolbar-title class="font-weight-bold text-lg-h4 text-md-h5">
            <span class="pink--text">Evento</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{on: tooltip}" >
              <v-btn class="mx-2" v-on="{...tooltip}" fab small color="purple lighten-1" @click="share">
                <v-icon color="white">mdi-share-variant</v-icon>
              </v-btn>
            </template>
            <span> Compartilhar evento com convidados </span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{on: tooltip}" >
              <v-btn class="mx-2" v-on="{...tooltip}" fab large :color="lock? 'blue lighten-1' : 'green lighten-1'
              " @click="editEvent">
                <v-icon color="white"> {{lock ? 'mdi-pencil' : 'mdi-check' }} </v-icon>
              </v-btn>
            </template>
            <span> {{lock ? 'Editar informações' : 'Finalizar edição' }} </span>
          </v-tooltip>
        </v-toolbar>
      </v-card-title>

      <v-card-text>
        <v-card class="mt-10" color="white" min-height="350">
          
          <v-row>
            <!-- // coluna da imagem -->
            <v-col cols="5" lg="5" md="10" sm="10" class="ml-5">
              <v-hover v-slot="{ hover }">
                <v-card :elevation="hover ? 12 : 3" :class="{ 'on-hover' : hover} " >
                  <v-img :src="imgSrc" :lazy-src="imgLazy" >

                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>

                    <v-container fluid fill-height class="justify-center" >
                      <v-btn icon :class="{ 'show-btns': hover }" :color="transparent" >
                        <v-icon :class="{ 'show-btns': hover }" :color="transparent" >
                          mdi-pencil
                        </v-icon>
                      </v-btn>
                    </v-container>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>

            <!-- // coluna dos campos -->
            <v-col cols="6" lg="6" md="12" sm="12" class="mt-6" >
              <v-row justify="center" class="mx-1">
                <v-text-field v-model="invitation.grooms" prepend-icon="mdi-account-supervisor-circle" label="Noivos" :readonly="lock" ></v-text-field>
              </v-row>
              <v-row justify="center" class="mx-1">
                <v-text-field v-model="invitation.place" prepend-icon="mdi-map-marker" label="Local" :readonly="lock">
                </v-text-field>
              </v-row>
              <v-row justify="center" class="mx-1">
                <v-text-field v-model="invitation.date" prepend-icon="mdi-calendar-clock" label="Data/Hora" :readonly="lock">
                </v-text-field>
              </v-row>
            </v-col>
          </v-row>

          <!-- // coluna dos demais campos -->
          <v-col cols="12" lg="12" md="12" sm="12">
            <v-textarea v-model="invitation.details" label="Detalhes" outlined auto-grow class="mt-5" :readonly="lock" >

            </v-textarea>
          </v-col>
        </v-card>
      </v-card-text>
    </v-card>
    </v-col>
  </v-container>
</template>

<script>
var img = require('~/assets/img/weddingplace.jpg')
var img2 = require('~/assets/img/weddingplace3.jpg')

export default {
  layout: 'navHeader',

  data: () => ({

    imgSrc: img,
    imgLazy: img2,

    transparent: 'rgba(255, 255, 255, 0)',

    invitation: {
      grooms: 'Oliver e Paula',
      date: '27/10/2021 - 18hrs',
      place: 'Igreja São Bento (Rua marechal Floriano, 33, BH)',
      details: 'Após o casameto na igreja, o buffet ocorrerá no Paradise House (Rua Benjamin Constante, 129, Centro, Belo Horioznte). Dress code: Formal'
    },

    lock: true,

  }),

  methods: {

    editEvent(){
      this.lock = !this.lock
    },

    share(){
      alert("O evento foi compartilhado")
    }

  }

}
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.9;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>

</style>