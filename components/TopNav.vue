<template>
  <v-app-bar
    app
    color="dark"
    flat
    clipped-left
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
          color="success darken-1"
          icon
        >
          <v-icon>mdi-lock</v-icon>
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

</template>

<script>
export default {
  name: "TopNav",
  data(){
    return{
      links1: [
        'Register',
        'Login',

      ],
      links2: [
        'Github',
        'About',
      ],
    }
  },
}
</script>

<style scoped>

</style>
