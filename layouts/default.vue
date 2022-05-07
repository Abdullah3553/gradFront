<template>
  <v-app id="app">
    <v-app-bar
      app
      color="dark"
      flat
    >
      <v-container>
        <v-row align="center" align-content="center" justify="center">
          <v-btn
            v-for="link in links1"
            :key="link"
            text
          >
            {{ link }}
          </v-btn>
          <v-btn
            class="mx-1"
            color="primary darken-1"
            icon
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
          <v-btn
            v-for="link in links2"
            :key="link"
            text
          >
            {{ link }}
          </v-btn>
        </v-row>

      </v-container>
    </v-app-bar>

    <v-main class="dark darken-3">
      <Nuxt/>
    </v-main>
  </v-app>

</template>

<script>
export default {
  name: "default.vue",
  components: {},
  data() {
    return {
      links1: [
        'Register',
        'Login',

      ],
      links2: [
        'Github',
        'About',
      ]
    }
  },
}
</script>

<style scoped>

</style>
