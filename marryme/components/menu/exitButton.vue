<template>
    <v-tooltip bottom >
        <template v-slot:activator="{on, tooltip}" >
                <v-btn v-bind="tooltip" v-on="on" fab color="3A2D32" class="mt-10" to="login" > 
                    <v-icon>mdi-location-exit</v-icon>
                </v-btn>
        </template>
        <span>Sair</span>
    </v-tooltip>
</template>

<script>
export default {

}
</script>

<style>

</style>