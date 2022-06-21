<template>
<div id="RegisterPage">
  <v-container class="mid-screen " :style="'width:'+containerWidth " >
    <v-stepper v-model="registerStepper.current">
      <v-stepper-header>
        <v-stepper-step
          :complete="registerStepper.current > 1"
          step="1"
        >
          Personal Data
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :complete="registerStepper.current > 2"
          step="2"
        >
          Authentication
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content class="pa-4" step="1">
          <h3 class="mx-2 text-left">Enter the personal Info</h3>
          <v-form
            ref="form"
            v-model="registerForm.valid"
            lazy-validation
          >
            <v-container>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="registerForm.data.username"
                    :rules="registerForm.rules.username"
                    label="Username"
                    required
                  ></v-text-field>

                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="registerForm.data.birthDate"
                    :rules="registerForm.rules.birthDate"
                    label="Birth Date"
                    type="date"
                    required
                  ></v-text-field>

                </v-col>

              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="registerForm.data.email"
                    :rules="registerForm.rules.email"
                    label="email"
                    type="email"
                    required
                  ></v-text-field>
                </v-col>

              </v-row>
              <v-divider class="my-4"></v-divider>
              <h4 class="mx-2 text-left">Address</h4>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    v-model="registerForm.data.address.country"
                    label="Country"
                    type="text"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="registerForm.data.address.city"
                    label="City"
                    type="text"
                  ></v-text-field>

                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="registerForm.data.address.street"
                    label="Street"
                    type="text"
                  ></v-text-field>

                </v-col>

              </v-row>
            </v-container>





          </v-form>
          <v-divider dark></v-divider>
          <v-row id="loginFormActions" justify="end" class=" ma-0">
            <v-col class="pa-0 pt-4" cols="12">
              <v-btn min-width="100%" outlined color="primary" @click="nextStep">Next Step</v-btn>
            </v-col>
          </v-row>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-tabs
            v-model="tab.value"
            centered
          >
            <v-tabs-slider color="primary"></v-tabs-slider>

            <v-tab
              v-for="item in tab.items"
              :key="item.method+'RegTabHead'"
            >
              {{ item.method.replace('_', ' ') }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab.value">
            <v-tab-item
              v-for="item in tab.items"
              :key="item.method+'RegTabCont'"
            >
              <v-card flat>
                <PasswordMethod :register="true" v-if="item.method==='password'" v-on:passwordSubmitted="addAuthenticator($event, item.id)"/>
                <OtpMethod :register="true" :username="registerForm.data.username" v-if="item.method==='otp'" v-on:OtpSubmitted="addAuthenticator($event, item.id)"/>
                <FaceRecognitionMethod :register="true" :username="registerForm.data.username" v-if="item.method==='face_recognition'" v-on:imagesSubmitted="addAuthenticator($event, item.id)"/>
                <FingerprintMethod :register="true" :username="registerForm.data.username" v-if="item.method ==='fingerprint_recognition'" v-on:fingerSubmitted="addAuthenticator($event, item.id)"/>
                <QrMethod :register="true" :username="registerForm.data.username" v-if="item.method ==='qr'" v-on:qrSubmitted="addAuthenticator($event, item.id)" />
              </v-card>
            </v-tab-item>
          </v-tabs-items>

          <!--            <v-divider dark></v-divider>-->
          <!--            <v-row id="loginFormActions" justify="end" class=" ma-0">-->
          <!--              <v-col class="pa-0 pt-4" cols="12">-->
          <!--                <v-btn min-width="100%" outlined color="primary" @click="userNameCheck">Login</v-btn>-->
          <!--              </v-col>-->
          <!--            </v-row>-->
          <v-divider dark></v-divider>
          <v-row id="loginFormActions" justify="end" class=" ma-0">
            <v-col class="pa-0 pt-4" cols="12">
              <v-btn min-width="100%" outlined color="primary" @click="performRegister">Register</v-btn>
            </v-col>
          </v-row>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>

</div>
</template>

<script>
import FingerprintMethod from "../components/aurhenticationMethods/fingerprintMethod";
import FaceRecognitionMethod from "../components/aurhenticationMethods/faceRecognitionMethod";
import OtpMethod from "../components/aurhenticationMethods/otpMethod";
import PasswordMethod from "../components/aurhenticationMethods/passwordMethod";
import QrMethod from "../components/aurhenticationMethods/qrMethod";

export default {
  name: "register",
  components: {QrMethod, FingerprintMethod, FaceRecognitionMethod, OtpMethod, PasswordMethod},
  data(){
    return{
      tab:{
        value:-1,
        items: [],
      },
      registerStepper: {
        current:1,
        steps:2,
      },
      registerForm:{
        valid:true,
        data:{
          username:'',
          email:'',
          birthDate:'',
          address:{
            country:'',
            street:'',
            city:''
          }
        },
        rules:{
          username:[
            v => !!v || 'Username is required',
          ],
          email:[
            v => !!v || 'Email is required',
            v => {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return pattern.test(v) || 'Invalid e-mail.'
            }
          ],
          birthDate:[
            v => !!v || 'Birth Date is required',
          ]
        }
      },
      authenticators:[]
    }
  },
  methods:{
    nextStep: async function (){
      if(this.registerForm.valid){
        try{
          await this.$axios.$post('/user/register/check',{
            username:this.registerForm.data.username,
            email:this.registerForm.data.email
          })
          this.$swal.fire({
            title:"username and email Available",
            icon:'success',
            toast:true,
            position:'top-end',
            showConfirmButton:false,
            timer:1500
          })
          const methods = await this.$axios.get('authentication-method/find/all/guest')
          this.tab.items = methods.data
          this.registerStepper.current++
        }catch (err){
          this.$swal.fire({
            title:"Personal Info error",
            icon:'error',
            text:err.response.data.message
          })
        }
      }
    },
    click: function (){
      const x = document.getElementById('loginFormActions').clientWidth
      console.log()
    },
    addAuthenticator: function(authenticator, authentication_methodId){
      if(authenticator.selected){ // if the user chosen this method
        authenticator = {
          priority:authenticator.priority,
          signature:authenticator.signature
        }
        const idx = this.authenticators.findIndex(ele=>Number(ele.authentication_methodId)===Number(authentication_methodId))
        if(idx!==-1) this.authenticators[idx] = {...authenticator, authentication_methodId}
        else this.authenticators.push({...authenticator, authentication_methodId})
        this.$swal.fire({
          toast:true,
          title :"Method Submitted",
          icon:"success",
          showConfirmButton:false,
          position:'top-right',
          timer:1500
        })
      }
    },
    performRegister: async function (){
      try{
        const response = await this.$axios.$post('user/register',{
          username:this.registerForm.data.username,
          email:this.registerForm.data.email,
          birth_date:this.registerForm.data.birthDate,
          city:this.registerForm.data.address.city.length>0?this.registerForm.data.address.city:undefined,
          country:this.registerForm.data.address.country.length>0?this.registerForm.data.address.country:undefined,
          street:this.registerForm.data.address.street.length>0?this.registerForm.data.address.street:undefined,
          authenticators:this.authenticators
        })
        this.$swal.fire({
          title:"Registered In Successfully",
          text:`check the console for more details `,
          icon:"success"
        })
        console.log('refresh token : ', response.refreshToken)
        console.log('access token : ', response.accessToken)
      }catch (err){
        this.$swal.fire({
          title:"Error in login" ,
          text: err.response.data.message,
          icon:"error"
        })
      }


    }
  },
  computed:{
    containerWidth:function (){
      return this.$data.registerStepper.steps > 3 ? '70%' : '50%'
    }
  }
}
</script>

<style scoped>
.mid-screen{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,   -50%);
  text-align: center !important;
  padding: 1rem;

}
</style>
