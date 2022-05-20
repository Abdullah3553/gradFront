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
          class="mx-1" nuxt
        >
          <nuxt-link v-if="!link.blank" style="text-decoration: none; color: inherit;" :to="{name:link.to}" >{{link.name}}</nuxt-link>
          <a v-else style="text-decoration: none; color: inherit;" :href="link.to" >{{link.name}}</a>
        </v-btn>
        <v-btn
          class="mx-1"
          color="success darken-1"
          icon
          nuxt
        >
          <nuxt-link style="text-decoration: none; color: inherit;" :to="{name:'home'}" ><v-icon >mdi-lock</v-icon></nuxt-link>

        </v-btn>
        <v-btn
          v-for="link in links2"
          :key="link"
          text
          class="mx-1" nuxt
        >
          <nuxt-link v-if="!link.blank" style="text-decoration: none; color: inherit;" :to="{name:link.to}" >{{link.name}}</nuxt-link>
          <a v-else style="text-decoration: none; color: inherit;" :href="link.to" target="_blank" >{{link.name}}</a>

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
        {
          name:'Register',
          blank:false,
          to:'register'
        },
        {
          name:'Login',
          blank:false,
          to:'login'
        },
      ],
      links2: [
        {
          name:'Github',
          blank:true,
          to:'https://github.com/Abdullah3553/gradBack'
        },
        {
          name:'About',
          blank:false,
          to:'about'
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>
