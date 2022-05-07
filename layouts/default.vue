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


    <v-main class="dark darken-3">
      <v-btn
        v-show="fab"
        v-scroll="fabCounter"
        dark
        fixed
        bottom
        right
        color="error"
        @click="goToTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
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
      ],
      fab:false
    }
  },
  methods:{
    fabCounter: function (event){
      this.fab = event.target.scrollingElement.scrollTop >400;
    },
    goToTop: function (){
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style scoped>
.floating{
  position: absolute;
}
</style>
