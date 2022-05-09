<template>
  <v-app id="app" v-on:refPass="ref = $event">

    <TopNav />

    <v-main class="dark darken-3">

      <Nuxt />

    </v-main>
  </v-app>

</template>

<script>
export default {
  name: "landing.vue",
  components: {},
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>
