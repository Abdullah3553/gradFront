<template>
<div id="QrMethod">
<v-container>
  <v-row>
    <v-col>
      <v-switch
        v-show="register"
        v-model="selected"
        label="Select QR"
        class="mx-3"
      ></v-switch>
      <v-form v-model="form.valid" :disabled="!selected">
        <div id="Cam" v-show="!register" >
          <v-btn :disabled="cam.open || !selected" @click="onStart" outlined color="primary">Open camera</v-btn>
          <v-btn :disabled="!cam.open || !selected" @click="onStop" color="secondary">Close camera</v-btn>
          <v-btn color="warning" :disabled="!cam.open || !selected"
                 @click="onCapture">Capture Photo <v-icon>mdi-camera</v-icon> </v-btn>
          <v-container v-show="cam.open">
            <v-row>
              <v-col>
                <vue-web-cam  :disabled="!selected"
                              :playsinline="false" :selectFirstDevice="true"
                              ref="webcam" height="185" @error="onError"
                              v-on:started="camStarted"
                />
              </v-col>
            </v-row>
          </v-container>
        </div>
        <v-container>
          <v-row v-show="qrImage.src && selected">
            <v-col class="pa-0">
              <img alt="QR Image" :src="qrImage.src" style="max-height:146px;max-width: 146px "/>
              <v-btn color="error" outlined
                     v-show="register" :disabled="!selected" text
              >You must save/print this QR to use it in login later</v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-text-field v-model="form.data.priority"
                      type="number" :rules="form.rules.priority"
                      label="Priority" required placeholder="Write the priority">
        </v-text-field>
      </v-form>
      <v-divider dark class="mt-3"></v-divider>
        <v-row  id="loginFormActions" justify="end" class=" ma-0">
          <v-col class="pa-0 pt-2 mx-auto" cols="5">
            <v-btn  :disabled="!selected" min-width="100%" color="primary" @click="submitForm">
              Submit QR<v-icon class="mx-1">mdi-camera-wireless</v-icon></v-btn>
          </v-col>
          <v-col v-show="register" class="pa-0 pt-2 mx-auto" cols="5">
            <v-btn :disabled="!selected" color="warning"
                   v-on:click="qrRequest" min-width="100%"> Generate My QR</v-btn>
          </v-col>
          <v-col v-show="!register" class="pa-0 pt-2 mx-auto" cols="5">
            <v-file-input class="pa-0 ma-0" :disabled="!selected" color="success"
                          :multiple="false" min-width="100%" @change="convertFile"
                          placeholder="Upload QR" v-model="form.file.chosenFile"
                          accept="image/png, image/jpeg, image/gif"></v-file-input>
          </v-col>
        </v-row>
    </v-col>
  </v-row>
<!--  <v-btn @click="click">tstr</v-btn>-->
<!--  <v-img v-if="qrImage" :src="qrImage.src"/>-->
</v-container>
</div>
</template>

<script>
import { Encoder, QRByte, QRKanji, ErrorCorrectionLevel } from '@nuintun/qrcode'
import { Decoder } from '@nuintun/qrcode';
export default {
  name: "QrMethod",
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
      qrImage:{
        src:''
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
        },
        file:{
          chosenFile:null,
        }
      }
    }
  },
  methods:{
    click(){
    },
    convertFile(){
      if(this.form.file.chosenFile){// there is a chosen file
        if(this.form.file.chosenFile.type === 'image/gif' || // type checking
          this.form.file.chosenFile.type === 'image/jpg'  ||
          this.form.file.chosenFile.type === 'image/jpeg' ||
          this.form.file.chosenFile.type === 'image/png'
        ){
          this.qrImage.src = URL.createObjectURL(this.form.file.chosenFile)
        }
      }

    },
    qrRequest: async function (){
      const response = await this.$axios.$get(`methods/qr/createId/${this.username}`)
      const qrcode = new Encoder();
      qrcode.write(new QRByte(response));
      qrcode.make();
      this.qrImage.src = qrcode.toDataURL()
    },
     submitForm: async function (){
      if(this.form.valid && this.qrImage.src){
        const qrDecoder = new Decoder();
        const decodedQr = await qrDecoder.scan(this.qrImage.src)
        this.form.data.signature = decodedQr.data
        this.$emit('qrSubmitted', {...this.form.data, selected:this.selected})
      }
    },
    onCapture() {
       this.$swal.fire({
         title:"Show Your QR code to the camera",
         text:'Wait until the timer finishes',
         icon:'info',
         toast:true,
         showConfirmButton:false,
         timer:5000,
         position:"top"
       }).then(()=>{
         const img = this.$refs.webcam.capture()
         const qrcode = new Decoder()
         qrcode
           .scan(img)
           .then(result => {
             const qrcode = new Encoder();
             qrcode.write(new QRByte(result.data));
             qrcode.make();
             this.qrImage.src = qrcode.toDataURL()
           })
           .catch(error => {
             this.$swal.fire({
               title:"No QR code found",
               text:'try to get closer to the camera',
               icon:"error"
             })
             console.log(error)
           });
       })

    },
    camStarted(){
      if(this.register || this.cam.open === false){
        this.$refs.webcam.stop()
        this.cam.open = false
      }

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
      console.log("Cam Error Event", error);
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
