<template>
  <div id="landingPage">
    <v-container>
      <v-row>
        <v-col>
          <v-parallax src="images/background.jpg" style="border-radius: 10px">
            <v-container>
              <v-row>
                <v-col>
                  <div class="text-center backdrop mx-auto">
                    <h1 class="pt-10"><a href="#" class="header-link" @click="slideTo(references.system)">Authentication System</a></h1>
                    <p>A Hybrid-methods Electronic Authentication System </p>
                      <a v-for="(button, index) in header_buttons" class="header-link" href="#"
                         @click="slideTo(button.slide_target)">{{button.text}}
                        <span class="nohover" v-if="index<header_buttons.length-1">● </span>
                      </a>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </v-col>
      </v-row>
      <v-row :ref="references.system">
      <v-col>
        <v-img src="images/system.jpg"  style="border-radius: 10px" >
          <v-container>
            <v-row>
              <v-col style="padding-top: 11rem">
                <div class="text-center backdrop mx-auto pa-10">

                  <h1 class="pt-5">
                    <v-icon left large color="yellow">mdi-star</v-icon>Our System</h1>
                  <p class="text-break">The main points the system stands for are focusing on developing
                    a hybrid-method based authentication system that is so flexible in terms of installed
                    authentication methods and STRONG using chain-based methodology.</p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-col>
      </v-row>
      <v-row :ref="references.face">
        <v-col>
          <v-img src="images/methods/face.jpg" style="border-radius: 10px">
            <v-container>
              <v-row>
                <v-col style="padding-top: 11rem" @mouseenter="expand.face = true" @mouseleave="expand.face=false">
                  <div class="text-center backdrop mx-auto" >
                    <h1 class="pt-16">
                      <v-icon large color="primary">mdi-face-recognition</v-icon>
                      Face Recognition</h1>
                  </div>
                  <v-expand-transition >
                    <v-sheet class="center-sheet mx-auto mt-2 text-break" v-show="expand.face" rounded="100px" max-width="45%">
                      <v-container>
                        <p>Face Recognition is one of the most common and strong methods. It provides an accurate results and
                        offers a high level of reliability. One of its down sides is it requires a lot of processing power to
                        achieve a good-security results. We will use the camera to scan the faces.</p>

                      </v-container>
                    </v-sheet>
                  </v-expand-transition>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
      <v-row :ref="references.finger">
        <v-col>
          <v-img src="images/methods/finger.jpg" style="border-radius: 10px">
            <v-container>
              <v-row>
                <v-col style="padding-top: 11rem" @mouseenter="expand.finger = true" @mouseleave="expand.finger=false">
                  <div class="text-center backdrop mx-auto" >
                    <h1 class="pt-16">
                      <v-icon large color="red">mdi-fingerprint</v-icon>
                      Fingerprint Recognition</h1>
                  </div>
                  <v-expand-transition >
                    <v-sheet class="center-sheet mx-auto mt-2 text-break" v-show="expand.finger" rounded="100px" max-width="45%">
                      <v-container>
                        <p>Fingerprint provides a HIGH level of security. An External sensor is "Embedded"
                        into the system to deliver fingerprint scanning to the system. The sensor driver is written in C.
                         Fingerprint is not always available to use. </p>

                      </v-container>
                    </v-sheet>
                  </v-expand-transition>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
      <v-row :ref="references.password">
        <v-col>
          <v-img src="images/methods/password.jpg" style="border-radius: 10px">
            <v-container>
              <v-row>
                <v-col style="padding-top: 11rem" @mouseenter="expand.password = true" @mouseleave="expand.password=false">
                  <div class="text-center backdrop mx-auto">
                    <h1 class="pt-16">
                      <v-icon large color="success">mdi-form-textbox-password</v-icon>
                      Password</h1>
                  </div>
                  <v-expand-transition >
                    <v-sheet class="center-sheet mx-auto mt-2 text-break" v-show="expand.password" rounded="100px" max-width="45%">
                      <v-container>
                        <p>Password is the most used method. It maximizes the availability and ease of use. Passwords could be
                        predictable sometimes. Especially, when we use an easy pattern in our password like the phone number or
                        birth date. </p>

                      </v-container>
                    </v-sheet>
                  </v-expand-transition>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
      <v-row :ref="references.otp">
        <v-col>
          <v-img src="images/methods/otp.jpg" style="border-radius: 10px">
            <v-container>
              <v-row>
                <v-col style="padding-top: 11rem" @mouseenter="expand.otp = true" @mouseleave="expand.otp=false">
                  <div class="text-center backdrop mx-auto">
                    <h1 class="pt-16">
                      <v-icon large>mdi-lock-clock</v-icon>
                      (O)ne (T)ime (P)assword</h1>
                  </div>
                  <v-expand-transition >
                    <v-sheet class="center-sheet mx-auto mt-2 text-break" v-show="expand.otp" rounded="100px" max-width="45%">
                      <v-container>
                        <p>OTP is becoming an essential part of any authentication process in any system. Because it provides
                        an online-continues authentication between the authentication server and the client. The weakness in
                        in OTPs is waiting time for the OTP to be received by the user so it has a low availability </p>
                      </v-container>
                    </v-sheet>
                  </v-expand-transition>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
      <v-row :ref="references.qr">
        <v-col>
          <v-img src="images/methods/qr.jpg" style="border-radius: 10px">
            <v-container>
              <v-row>
                <v-col style="padding-top: 11rem" @mouseenter="expand.qr = true" @mouseleave="expand.qr=false">
                  <div class="text-center backdrop mx-auto">
                    <h1 class="pt-16">
                      <v-icon large color="orange">mdi-qrcode-scan</v-icon>
                      QR Code</h1>
                  </div>
                  <v-expand-transition >
                    <v-sheet class="center-sheet mx-auto mt-2 text-break" v-show="expand.qr" rounded="100px" max-width="45%">
                      <v-container>
                        <p>QR Code scanning is simply a better version of OTP. It increases the availability level of the methods.
                        It is still One-Time use. The down side here that the quantity of information that could be embedded in the
                        qr code is limited the the network strength and the client processing power.</p>

                      </v-container>
                    </v-sheet>
                  </v-expand-transition>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-btn @click="click" >here hid </v-btn>
  </div>
</template>

<script>
export default {
  name: "index.vue",
  layout:'landing',
  data(){
    const ref={
      top:0,
      system:'system',
      face:'face',
      finger:'finger',
      password:'password',
      otp:'otp',
      qr:'qr'
    }
    return{
      header_buttons:[
        {text:"Face Recognition", slide_target:ref.face},
        {text:"Fingerprint Recognition", slide_target:ref.finger},
        {text:"Password", slide_target:ref.password},
        {text:"OTP", slide_target:ref.otp},
        {text:"QR", slide_target:ref.qr},
      ],
      expand:{
        face:false,
        finger:false,
        otp:false,
        password:false,
        qr:false,
      },
      references:ref

    }
  },
  methods:{
    slideTo: function (target){
      if(target === 0)
      this.$vuetify.goTo(0,{
        duration:1000
      })
      else
        this.$vuetify.goTo(this.$refs[target],{
          duration:1000
        })
    },
    click: function (){

    }
  },
  computed:{
  },
  mounted() {
    this.$root.$on('slideEvent', ($event) => {
      console.log($event)
      this.slideTo($event)
    })
  }

}
</script>

<style scoped>
.backdrop {
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  max-width: 50%;
  min-height: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.center-sheet{
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-align: center;
}

.header-link {
  color: #ffffff;
  text-decoration: none;
}

.header-link:hover {
  color: #0abd5d;
  text-decoration: none;
}
.nohover{
  text-decoration: none;
  color: #e3e3e3;
}
</style>
