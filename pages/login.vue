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
                <v-btn min-width="100%" outlined color="primary" @click="userNameCheck">Login</v-btn>
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
                :key="item"
              >
                {{ item.replace('_', ' ') }}
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab.value">
              <v-tab-item
                v-for="item in tab.items"
                :key="item"
              >
                <v-card flat>
                  <PasswordMethod v-if="item==='password'" v-on:passwordSubmitted="addAuthenticator($event)"/>
                  <OtpMethod :username="loginForm.data.username" v-if="item==='otp'" v-on:OtpSubmitted="addAuthenticator($event)"/>
                  <FaceRecognitionMethod v-if="item==='face_recognition'" v-on:ImagesSubmitted="addAuthenticator($event)"/>
                </v-card>
              </v-tab-item>
            </v-tabs-items>

<!--            <v-divider dark></v-divider>-->
<!--            <v-row id="loginFormActions" justify="end" class=" ma-0">-->
<!--              <v-col class="pa-0 pt-4" cols="12">-->
<!--                <v-btn min-width="100%" outlined color="primary" @click="userNameCheck">Login</v-btn>-->
<!--              </v-col>-->
<!--            </v-row>-->
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
export default {
  name: "login",
  components: {FaceRecognitionMethod, OtpMethod, PasswordMethod},
  data(){
    return{
      tab:{
        value:-1,
        items: [

        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ',
      },
      loginStepper: {
        current:1,
        steps:4,
        authStepper:{
          current:1,
          steps:4
        }
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
      userCheck.authentication_methods.forEach(obj=> this.tab.items.push(obj.method))
      this.loginStepper.current++
    },
    click: function (){
      const x = document.getElementById('loginFormActions').clientWidth
      console.log()
    },
    addAuthenticator: function(authenticator){
      this.authenticators.push(authenticator)
      this.$swal.fire({
        toast:true,
        title :"Method Submitted",
        icon:"success",
        position:'top-right',
        timer:1500
      })
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
