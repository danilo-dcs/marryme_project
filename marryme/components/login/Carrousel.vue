<template>
    <v-carousel class="carrousel" cycle height="500" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(img, i) in imgSrc" :key="i" :src="img"
            reverse-transition="fade-transition" transition="fade-transition"
        >
        </v-carousel-item>
    </v-carousel>
</template>

<script>

var img0 = require('../../assets/img/background1.jpg');
var img1 = require('../../assets/img/background2.jpg');
var img2 = require('../../assets/img/background3.jpg');

export default {

    data: () => ({
        
        imgSrc: [
            img0, img1, img2
        ]
    
    }) 
};
</script>

<style>

.carrousel{
    width: 100%;
}

</style>