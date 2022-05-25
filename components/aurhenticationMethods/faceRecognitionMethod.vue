<template>
<div id="FaceRecognitionMethodComponent">
<v-container>
  <v-row>
    <v-col>
      <v-switch
        v-show="register"
        v-model="selected"
        label="Select Face Recognition"
        class="mx-3"
      ></v-switch>
      <v-form v-model="form.valid" :disabled="!selected">
      <v-btn :disabled="cam.open || !selected" @click="onStart" outlined color="primary">Open camera</v-btn>
          <v-btn :disabled="!cam.open || !selected" @click="onStop" color="secondary">Close camera</v-btn>
          <v-btn color="warning" :disabled="!cam.open || !selected"
                 @click="onCapture">Capture Photo <v-icon>mdi-camera</v-icon> </v-btn>
          <v-btn color="error" :disabled="!cam.open || !selected"
                 @click="cam.img=[]">Delete All Captured Photos<v-icon>mdi-delete</v-icon> </v-btn>
          <v-container v-show="cam.open">
            <v-row>
              <v-col>
                <vue-web-cam :disabled="!selected" :playsinline="false" :selectFirstDevice="true" ref="webcam" height="185" @error="onError"/>
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
            <v-btn v-show="!register" :disabled="!selected" min-width="100%" color="primary" @click="submitForm">
              Submit Images<v-icon class="mx-1">mdi-camera-wireless</v-icon></v-btn>
            <v-btn v-show="register" :disabled="!selected" min-width="100%" color="primary" @click="submitFormRegister">
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
    },
    register:{
      type:Boolean,
      default:false
    },
  },
  data(){
    return{
      selected:true,
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
        try{
          const response = await this.$axios.$post(`methods/face/login?username=${this.username}&flag=f`,formData)
          this.form.data.signature = response.path
          this.$emit('imagesSubmitted', {...this.form.data, selected:this.selected})
        }catch (err){
          this.$swal.fire({
            title:'Error while uploading imag',
            text:err.response.message,
            icon:'error'
          })
        }

      }
    },
    submitFormRegister: async function(){
      if(this.cam.img.length===1 && this.form.valid){
          const formData = new FormData();
          for(let i=0;i<this.cam.img.length;i++){
            const file = this.DataURIToBlob(this.cam.img[i])
            formData.append('image', file, `image${i}.jpg`)
          }
          try{
            const response = await this.$axios.$post(`methods/face/register?username=${this.username}&flag=f`,formData)
            this.form.data.signature = response.path
            this.$emit('imagesSubmitted', {...this.form.data, selected:this.selected})
          }catch (err){
            this.$swal.fire({
              title:'Error while uploading imag',
              text:err.response.message,
              icon:'error'
            })
          }
        }
    },
    onCapture() {
       let maxLength = 5
       if(this.register){
         maxLength = 1
       }
      if(this.cam.img.length >=maxLength){
        this.$swal.fire({
          title:`You cannot add more than ${maxLength} images`,
          icon:'error',
        })
        return
      }
      this.$swal.fire({
        showConfirmButton:false,
        icon:'success',
        title:'Saved',
        toast:true,
        timer:1000,
        position:'top-right'
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
