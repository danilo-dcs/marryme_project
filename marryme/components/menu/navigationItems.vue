<template>
  <div>
    <v-tabs v-model="tab" background-color="transparent" class="mb-5" color="blue">
      <v-tab v-for="(option,i) in options" :key="i" class="mx-4" :to="option.link">
        {{option.text}}   
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {

  data: () => ({
    tab: 1,

    options: [
      {text: 'Evento', color: '#5D8777', link: 'event'},
      {text: 'Convidados', color: '#59302D', link: 'guests'},
      {text: 'Presentes', color: '#F27BAC' , link: 'gifts'},
      {text: 'Sobre Nós', color: 'success' , link: 'aboutUs'},      
    ],

  })

}
</script>

<style>

#navigation {
  background-color: #fff7fb;
}

</style>