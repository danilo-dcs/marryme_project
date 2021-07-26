<template>
  <v-container fluid fill-height>
    <v-col cols="12" md="12" sm="8">
      <v-card class="mx-auto mt-15 mb-10" min-height="350px" 
      flat width="60%" color="#fcf9f7" >
      <v-card-title>
        <v-toolbar flat width="100%" color="#fcf9f7">
          <v-toolbar-title class="font-weight-bold text-lg-h4 text-md-h5">
            <span class="pink--text">Nossa História</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{on: btn2}" >
              <v-btn class="mx-2" v-on="btn2" fab large :color=" readonly? 'blue lighten-1' : 'green lighten-1'" 
                @click="readonly = !readonly">
                <v-icon color="white"> {{ readonly ? 'mdi-pencil' : 'mdi-check'}} </v-icon>
              </v-btn>
            </template>
            <span> {{readonly?'Escreva a sua história':'Finalizar história'}} </span>
          </v-tooltip>
        </v-toolbar>
      </v-card-title>

      <v-card-text>
        <v-container fluid >
          <v-card color="white">
            <v-textarea v-model="story" class="mt-10" auto-grow
              placeholder=" Nos conte a sua história" color="pink" 
              :readonly="readonly" full-width type="text">
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
    readonly: true,
    story: '',

  })

}
</script>

<style>


</style>