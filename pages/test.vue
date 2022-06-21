<template>
<div>
  <v-row justify="center" class="mt-2">
    <v-menu offset-y origin="center center"
            transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item link>
          <v-list-item-title>lol</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>lol</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>lol</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</div>
</template>

<script>

export default {
  name: "test",
  components: {},
  data(){
    return{
      clicked: false
    }
  },
  methods:{
    click(){
      this.clicked = true
    },
  }
}
</script>

<style scoped>

</style>
