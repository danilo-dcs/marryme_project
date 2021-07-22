<template>
    <div class="container">
    
    <div class="inner">
        <Carrousel class="mt-4" />
    </div>
    </div>
</template>

<script>

import Carrousel from '~/components/login/Carrousel.vue'

export default {
    layout: 'navbarIntro',
    components: {
        Carrousel
    }
}
</script>

<style>

.container{
    background-color: #fffcff;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}


.inner{
    position:absolute;
    left:0;
    right:0;
}

</style>