<template>
    <v-app class="app">
        <v-head class="head" >
            <v-toolbar color="#fff7fb" prominent fixed app class="mb-0 m-0">  
                <h1 class="white--text  mt-8"> Marry.me </h1>
                <v-icon class="mt-11" color="FFE3DC">mdi-ring</v-icon>
                <v-spacer></v-spacer>
                <ExitButton />
            </v-toolbar>
        </v-head>
        <v-main class="main">
            <v-container fluid fill-height>
                <Nuxt />
            </v-container>
        </v-main>
        <v-footer absolute color="#fff7fb" padless app>
            <span>Copyright &copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>

import ExitButton from '~/components/menu/exitButton.vue'

export default {

    components: {
        ExitButton
    },

    data: () => ({
        
    }),
    methods:{

        exit(){
            router.push('index');
        }

    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Loop&display=swap');

.font{
    font-family: 'Zen Loop', cursive;
    font-size: 40px;
}


@media screen and (max-width: 960px) {
    .font {
        display: none !important;
    }
}

.app{
    background-color: #fff7fb;
}

</style>