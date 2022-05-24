<template>
  <div id="LoginPage " >
    <v-container class="mid-screen " :style="'width:'+containerWidth " >
      <v-stepper v-model="loginStepper.current">
        <v-stepper-header>
          <v-stepper-step
            :complete="loginStepper.current > 1"
            step="1"
          >
            Username Check
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            :complete="loginStepper.current > 2"
            step="2"
          >
           Authentication
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content class="pa-4" step="1">
            <h3 class="text-left">Write Your Username : </h3>
            <v-form
              ref="form"
              v-model="loginForm.valid"
              lazy-validation
            >
              <v-text-field
                v-model="loginForm.data.username"
                :rules="loginForm.rules.username"
                label="Username"
                required
              ></v-text-field>
            </v-form>
            <v-divider dark></v-divider>
            <v-row id="loginFormActions" justify="end" class=" ma-0">
              <v-col class="pa-0 pt-4" cols="12">
                <v-btn min-width="100%" outlined color="primary" @click="userNameCheck">Check user</v-btn>
              </v-col>
            </v-row>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-tabs
              v-model="tab.value"
              align-with-title
            >
              <v-tabs-slider color="primary"></v-tabs-slider>

              <v-tab
                v-for="item in tab.items"
                :key="item.method+'tabHead'"
              >
                {{ item.method.replace('_', ' ') }}
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab.value">
              <v-tab-item
                v-for="item in tab.items"
                :key="item.method+'tabCont'"
              >
                <v-card flat>
                  <PasswordMethod v-if="item.method==='password'" v-on:passwordSubmitted="addAuthenticator($event, item.id)"/>
                  <OtpMethod :username="loginForm.data.username" v-if="item.method==='otp'" v-on:OtpSubmitted="addAuthenticator($event, item.id)"/>
                  <FaceRecognitionMethod :username="loginForm.data.username" v-if="item.method==='face_recognition'" v-on:imagesSubmitted="addAuthenticator($event, item.id)"/>
                  <FingerprintMethod :username="loginForm.data.username" v-if="item.method ==='fingerprint_recognition'" v-on:fingerSubmitted="addAuthenticator($event, item.id)"/>
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
                <v-btn min-width="100%" outlined color="primary" @click="performLogin">Login</v-btn>
              </v-col>
            </v-row>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </div>
</template>

<script>
import PasswordMethod from "../components/aurhenticationMethods/passwordMethod";
import OtpMethod from "../components/aurhenticationMethods/otpMethod";
import FaceRecognitionMethod from "../components/aurhenticationMethods/faceRecognitionMethod";
import FingerprintMethod from "../components/aurhenticationMethods/fingerprintMethod";
export default {
  name: "login",
  components: {FingerprintMethod, FaceRecognitionMethod, OtpMethod, PasswordMethod},
  data(){
    return{
      tab:{
        value:-1,
        items: [],
      },
      loginStepper: {
        current:1,
        steps:2,
      },
      loginForm:{
        valid:true,
        data:{
          username:''
        },
        rules:{
          username:[
            v => !!v || 'Username is required',
          ]
        }
      },
      authenticators:[]
    }
  },
  methods:{
    userNameCheck: async function (){

      let userCheck
      try{
        userCheck =  await this.$axios.$get(`user/find/authentication_methods/${this.loginForm.data.username}`)
      }catch (err) {
        console.log(err)
        this.$swal.fire({
          title:"Error",
          icon:"error",
          text:err.response.data.message
        })
        return
      }
      this.tab.items = userCheck.authentication_methods
      this.loginStepper.current++
    },
    click: function (){
      const x = document.getElementById('loginFormActions').clientWidth
      console.log()
    },
    addAuthenticator: function(authenticator, authentication_methodId){
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
    },
    performLogin: async function (){
      try{
        const response = await this.$axios.$post('user/login',{
          username:this.loginForm.data.username,
          authenticators:this.authenticators
        })
        this.$swal.fire({
          title:"Logged In Successfully",
          text:`Refresh Token : ${response.refreshToken} Access Token : ${response.accessToken}`,
          icon:"success"
        })
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
      return this.$data.loginStepper.steps > 3 ? '70%' : '50%'
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
