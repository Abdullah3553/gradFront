<template>
<div id="FaceRecognitionMethodComponent">
<v-container>
  <v-row>
    <v-col>
      <v-form lazy-validation v-model="form.valid">
        <v-col cols="12">
          <v-btn :disabled="cam.open" @click="onStart" outlined color="primary">Open camera</v-btn>
          <v-btn :disabled="!cam.open" @click="onStop" color="secondary">Close camera</v-btn>
          <v-btn color="warning" :disabled="!cam.open"
                 @click="onCapture">Capture Photo <v-icon>mdi-camera</v-icon> </v-btn>
          <v-btn color="error" :disabled="!cam.open"
                 @click="cam.img=[]">Delete All Captured Photos<v-icon>mdi-delete</v-icon> </v-btn>
          <v-container v-show="cam.open">
            <v-row>
              <v-col>
                <vue-web-cam :playsinline="false" :selectFirstDevice="true" ref="webcam" height="230" @error="onError"/>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-form>
      <v-divider dark></v-divider>
        <v-row id="loginFormActions" justify="end" class=" ma-0">
          <v-col class="pa-0 pt-4" cols="12">
            <v-btn min-width="100%" color="primary" @click="submitForm">
              Submit Password<v-icon class="mx-1">mdi-page-next</v-icon></v-btn>
          </v-col>
        </v-row>
    </v-col>
  </v-row>
</v-container>
</div>
</template>

<script>
export default {
  name: "FaceRecognitionMethod",
  components: {},
  data(){
    return{
      cam:{
        img: [],
        open:false
      },
      form:{
        valid:true,
        rules:{
          password:[
            v => !!v || 'Password is required',
            v => v.length > 8 || 'Password must be at least 8 digits',
          ],
          priority: [
            v => !!v || 'Priority is required',
            v => Number(v)>0 || 'Priority must be a positive number',
          ]
        },
        data:{
          password:'',
          priority:''
        }
      }
    }
  },
  methods:{
    submitForm: function (){
      if(this.form.valid){
        this.$emit('passwordSubmitted', this.form.data)
      }
    },
    onCapture() {
      console.log(this.cam.img)
      if(this.cam.img.length >=5){
        this.$swal.fire({
          title:"You cannot add more than 5 images",
          showConfirmButton:false,
          icon:'error',
          toast:true,
          timer:1500,
          position:'top-right'
        })
        return
      }
      this.cam.img.push(this.$refs.webcam.capture());
    },
    onStop() {
      this.$refs.webcam.stop();
      this.cam.open = false
    },
    onStart() {
      this.$refs.webcam.start();
      this.cam.open = true
    },
    onError(error) {
      console.log("On Error Event", error);
    },
  },
}
</script>

<style scoped>

</style>
