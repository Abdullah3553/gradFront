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
          :key="link.name"
          text
          class="mx-1" nuxt
        >
          <nuxt-link v-if="!link.blank" style="text-decoration: none; color: inherit;" :to="{name:link.to}" >{{link.name}}</nuxt-link>
          <a v-else style="text-decoration: none; color: inherit;" :href="link.to" >{{link.name}}</a>
        </v-btn>
        <v-btn
          class="mx-1"
          color="success darken-1" icon nuxt
        >
          <a style="text-decoration: none; color: inherit;" href="/" ><v-icon >mdi-lock</v-icon></a>

        </v-btn>
        <div   v-for="link in links2"
               :key="link.name">
          <v-btn
          v-if="!link.menu.valid"
          text
          class="mx-1" nuxt
          >
          <nuxt-link v-if="!link.blank" style="text-decoration: none; color: inherit;" :to="{name:link.to}" >{{link.name}}</nuxt-link>
          <a v-else style="text-decoration: none; color: inherit;" :href="link.to" target="_blank" >{{link.name}}</a>

          </v-btn>
          <v-row justify="space-around" v-else>
            <v-menu offset-y origin="center center"
                    transition="slide-y-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  text
                  v-bind="attrs"
                  v-on="on"
                  class="px-8"
                >
                  {{link.name}}
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="sublink in link.menu.items" :key="sublink.to" link>
                  <v-list-item-title>
                    <a style="text-decoration: none; color: inherit;" :href="sublink.to" target="_blank" >{{sublink.name}}</a>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

          </v-row>
        </div>
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
          menu:{
            valid:true,
            items:[
              {
                name:'Front-End',
                to:'https://github.com/Abdullah3553/gradFront',
              },
              {
                name:'Back-End',
                to:'https://github.com/Abdullah3553/gradBack',
              },
            ]
          },
        },
        {
          name:'About',
          blank:false,
          menu:{
            valid:false,
            items:[]
          },
          to:'about'
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>
