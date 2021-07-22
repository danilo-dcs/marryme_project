<template>
    <v-app class="app">
        <v-head class="head">
            <v-toolbar color="#D30C7B" prominent fixed app class="mb-0 m-0">  
                <h1 class="white--text  mt-8"> Marry.me </h1>
                <v-icon class="mt-11" color="FFE3DC">mdi-ring</v-icon>
                <v-spacer></v-spacer>
                <span class="font mt-8 mr-10">"O melhor site para organizar o seu casamento"</span>
                <v-spacer></v-spacer>
                <v-btn color="3A2D32" class="mt-10" to="home" >Entrar <v-icon>mdi-arrow-right</v-icon></v-btn>
            </v-toolbar>
        </v-head>
        <v-main class="main">
            <v-container fluid fill-height>
                <Nuxt />
            </v-container>
        </v-main>
        <v-footer :absolute="!fixed" color="#A2AD91" app>
            <span class="footer">Copyright &copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>

var logoPath = require('~/assets/img/logoname2.png')

export default {

    data: () => ({
        img: logoPath,
    })
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

.footer{
    text-align: center;
    align-content: center;
    justify-content: center;
}

</style>