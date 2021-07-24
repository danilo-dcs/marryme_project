<template>
  <v-container fluid fill-height>
    <v-col cols="11" md="11" sm="8">
      <v-card class="mx-auto mt-15 mb-10" min-height="350px" 
      flat width="60%" color="grey lighten-3">
      <v-card-title>
        <v-toolbar flat width="100%" color="grey lighten-3">
          <v-toolbar-title class="font-weight-bold text-lg-h4 text-md-h5">
            <span class="pink--text">Nossa História</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{on: btn1}">
              <v-btn class="mx-2" v-on="btn1" fab small color="green lighten-1" @click="write = true">
                <v-icon color="white">mdi-check</v-icon>
              </v-btn>
            </template>
            <span> Finalizar escrita </span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{on: btn2}" >
              <v-btn class="mx-2" v-on="btn2" fab large color="blue accent-2" @click="write = false">
                <v-icon color="white">mdi-pencil</v-icon>
              </v-btn>
            </template>
            <span> Escreva a sua história </span>
          </v-tooltip>
        </v-toolbar>
      </v-card-title>

      <v-card-text>
        <v-container fluid >
          <v-card color="white">
            <v-textarea v-model="story" class="mt-10" auto-grow clearable clear-icon="mdi-eraser"
              placeholder=" Nos conte a sua história" color="pink" 
              :readonly="write" full-width type="text">
            </v-textarea>
          </v-card>
        </v-container>
      </v-card-text>
    </v-card>
    </v-col>
  </v-container>
</template>

<script>
export default {
  layout: 'navHeader',

  data: () => ({
    write: true,
    story: '',

  })

}
</script>

<style>

</style>