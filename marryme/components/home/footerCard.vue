<template>
  <v-card flat tile class="blue lighten-1 white--text text-center" width="100%">
    <v-card-text class="white--text pt-0 mt-5">
      <span> 
        <strong>Contato:</strong> (31) 99138-4964 | <strong>Email:</strong> danilocastro@gmail.com |
      </span> 
      <span> <strong>Marry.me</strong> - {{ new Date().getFullYear() }} </span>
      <v-container fluid >
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-container>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style>

</style>