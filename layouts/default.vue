<template>
  <v-app id="app">

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
    <v-navigation-drawer
      v-model="drawer"
      mini-variant
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main class="dark darken-3">

      <Nuxt/>

    </v-main>
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
      fab:false,
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      mini: true,
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
