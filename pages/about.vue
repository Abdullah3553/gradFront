<template>
<div>
  <v-container>
    <v-row>
      <v-col>
        <v-carousel v-model="model" cycle="cycle"
                    hide-delimiters progress
                    show-arrows-on-hover
                    interval="3000"
        >
          <v-carousel-item >
            <v-sheet color="red" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2 text-break">
                  Hybrid Authentication System
                  <v-icon size="50" class="mx-2" color="yellow">mdi-star</v-icon>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item>
            <v-sheet color="green" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">
                  Slide 2
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item>
            <v-sheet color="blue" height="100%" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">
                  Slide 3
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
export default {
  name: "about",
  data(){
    return {
      model: 0,

    }
  }
}
</script>

<style scoped>

</style>
