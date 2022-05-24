<template>
<div id="FaceRecognitionMethodComponent">
<v-container>
  <v-row>
    <v-col>
      <v-form v-model="form.valid">
      <v-btn :disabled="cam.open" @click="onStart" outlined color="primary">Open camera</v-btn>
          <v-btn :disabled="!cam.open" @click="onStop" color="secondary">Close camera</v-btn>
          <v-btn color="warning" :disabled="!cam.open"
                 @click="onCapture">Capture Photo <v-icon>mdi-camera</v-icon> </v-btn>
          <v-btn color="error" :disabled="!cam.open"
                 @click="cam.img=[]">Delete All Captured Photos<v-icon>mdi-delete</v-icon> </v-btn>
          <v-container v-show="cam.open">
            <v-row>
              <v-col>
                <vue-web-cam :playsinline="false" :selectFirstDevice="true" ref="webcam" height="185" @error="onError"/>
              </v-col>
            </v-row>
          </v-container>
        <v-text-field v-model="form.data.priority"
                      type="number" :rules="form.rules.priority"
                      label="Priority" required placeholder="Write the priority">
        </v-text-field>
      </v-form>
      <v-divider dark class="mt-3"></v-divider>
        <v-row id="loginFormActions" justify="end" class=" ma-0">
          <v-col class="pa-0 pt-4" cols="12">
            <v-btn min-width="100%" color="primary" @click="submitForm">
              Submit Images<v-icon class="mx-1">mdi-camera-wireless</v-icon></v-btn>
          </v-col>
        </v-row>
    </v-col>
  </v-row>
<!--  <v-btn @click="click">tstr</v-btn>-->
</v-container>
</div>
</template>

<script>
export default {
  name: "FaceRecognitionMethod",
  components: {},
  props:{
    username:{
      required:true,
      type:String
    }
  },
  data(){
    return{
      cam:{
        img: [],
        open:false
      },
      form:{
        valid:false,
        rules:{
          priority: [
            v => !!v || 'Priority is required',
            v => Number(v)>0 || 'Priority must be a positive number',
          ]
        },
        data:{
          priority:'',
          signature:''
        }
      }
    }
  },
  methods:{
     submitForm: async function (){
      if(this.cam.img.length>2  && this.cam.img.length<=5 && this.form.valid){
        const formData = new FormData();
        for(let i=0;i<this.cam.img.length;i++){
          const file = this.DataURIToBlob(this.cam.img[i])
          formData.append('images', file, `image${i}.jpg`)
        }
        const response = await this.$axios.$post(`methods/face/login?username=${this.username}&flag=true`,formData)
        this.form.data.signature = response.path
        this.$emit('imagesSubmitted', this.form.data)
      }
    },
    onCapture() {
      if(this.cam.img.length >=5){
        this.$swal.fire({
          title:"You cannot add more than 5 images",
          showConfirmButton:false,
          icon:'error',
          toast:true,
          timer:2500,
          position:'top-right'
        })
        return
      }
      this.$swal.fire({
        showConfirmButton:false,
        icon:'success',
        title:'Saved',
        toast:true,
        timer:1000,
        position:'top'
      })
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
    DataURIToBlob(dataURI) { // this function will transfer the image from base64 to normal blob ( image object )
  const splitDataURI = dataURI.split(',')
  const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
  const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

  const ia = new Uint8Array(byteString.length)
  for (let i = 0; i < byteString.length; i++)
    ia[i] = byteString.charCodeAt(i)

  return new Blob([ia], { type: mimeString })
  },
  },
}
</script>

<style scoped>

</style>
