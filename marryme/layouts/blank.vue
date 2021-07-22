<template>
    <v-app >
        <v-main>
            <v-container fluid fill-height>
                <Nuxt />
            </v-container>
        </v-main>
        <v-footer :absolute="!fixed" app>
            <span>Copyright &copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>