<template>
  <div>
    <v-toolbar v-if="windowWidth > 940" color="#fff2f9" prominent fixed>
      <h1 class="pink--text mt-8">Marry.me</h1>
      <v-icon class="mt-11" color="black lighten-5">mdi-ring</v-icon>
      <v-spacer></v-spacer>
      <MenuOptions class="mt-9 mr-15" />
      <v-spacer></v-spacer>
      <ExitButton />
    </v-toolbar>

    <v-toolbar v-else color="#fff2f9" prominent fixed>
      <v-btn class="mt-10" fab small color="back" @click.stop="setDrawer">
        <v-icon color="black">mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <h2 class="pink--text mt-10">Marry.me</h2>
      <v-spacer></v-spacer>
      <ExitButton />
    </v-toolbar>
  </div>
</template>

<script>
import ExitButton from "~/components/menu/exitButton.vue";
import MenuOptions from '~/components/menu/navigationItems.vue';
import { mapState, mapMutations } from 'vuex'

export default {

  components: {
    ExitButton,
    MenuOptions
  },

  data: () => ({
    windowWidth: window.innerWidth,
  }),

  mounted(){
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },

  computed: {
    ...mapState('navigation', ['drawerState']),
  },

  methods: {
    ...mapMutations('navigation', ['SET_DRAWER']),
    setDrawer(){
      this.SET_DRAWER(!this.drawerState)
    }
  }

}
</script>

<style>

</style>