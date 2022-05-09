<template>
  <v-app id="app" v-on:refPass="ref = $event">

    <TopNav />
    <v-navigation-drawer
      v-model="drawer"
      mini-variant
      app
      clipped
    >
      <v-list dense >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="$root.$emit('slideEvent',item.target)"
        >
          <v-list-item-icon>
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-main class="dark darken-3">

      <Nuxt />

    </v-main>
    <v-btn
      v-show="fab"
      v-scroll="fabCounter"
      dark
      fixed
      bottom
      right
      color="error"
      @click="slideTop"
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
    const ref={
      top:0,
      system:'system',
      face:'face',
      finger:'finger',
      password:'password',
      otp:'otp',
      qr:'qr'
    }
    return {
      fab:false,
      drawer: true,
      items: [
        { title: 'Header', icon: 'mdi-home-city', target: ref.top , color:'white'},
        { title: 'Our System', icon: 'mdi-star', target: ref.system , color:'yellow'},
        { title: 'Face Recognition', icon: 'mdi-face-recognition' , target: ref.face, color:'primary'},
        { title: 'Fingerprint Recognition', icon: 'mdi-fingerprint', target: ref.finger, color:'error' },
        { title: 'Password', icon: 'mdi-form-textbox-password' , target: ref.password , color:'success'},
        { title: 'OTP', icon: 'mdi-lock-clock' , target: ref.otp , color:'white'},
        { title: 'QR', icon: 'mdi-qrcode-scan', target: ref.qr, color:'orange'},
      ],
      mini: true,
      ref
    }
  },
  methods:{
    fabCounter: function (event){
      this.fab = event.target.scrollingElement.scrollTop >400;
    },
    slideTop: function (){
      this.$vuetify.goTo(0,{
        duration:1000
      })
    },
  }
}
</script>

<style scoped>

</style>
