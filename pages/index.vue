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
                    <h1 class="pt-10">Authentication System</h1>
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
    </v-container>
    <v-container>
      <v-row :ref="ref.system">
      <v-col>
        <v-parallax src="images/background.jpg" style="border-radius: 10px">
          <v-container>
            <v-row>
              <v-col>
                <div class="text-center backdrop mx-auto">

                  <h1 class="pt-5">
                    <v-icon left large color="yellow">mdi-star</v-icon>Our System</h1>
                  <p class="text-break">The main points the system stands for are focusing on developing
                    a hybrid-method based authentication system that is so flexible in terms of installed
                    authentication methods and STRONG using chain-based methodology.</p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </v-col>
    </v-row>
    </v-container>
    <v-container>
      <v-row :ref="ref.face">
        <v-col>
          <v-parallax src="images/background.jpg" style="border-radius: 10px">
            <v-container>
              <v-row>
                <v-col>
                  <div class="text-center backdrop mx-auto" >
                    <h1 class="pt-16">Face Recognition</h1>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row :ref="ref.finger">
        <v-col>
          <v-parallax src="images/background.jpg" style="border-radius: 10px">
            <v-container>
              <v-row>
                <v-col>
                  <div class="text-center backdrop mx-auto">
                    <h1 class="pt-16">Fingerprint Recognition</h1>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row :ref="ref.password">
        <v-col>
          <v-parallax src="images/background.jpg" style="border-radius: 10px">
            <v-container>
              <v-row>
                <v-col>
                  <div class="text-center backdrop mx-auto">
                    <h1 class="pt-16">Password</h1>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row :ref="ref.otp">
        <v-col>
          <v-parallax src="images/methods/password.jpg" style="border-radius: 10px">
            <v-container>
              <v-row>
                <v-col>
                  <div class="text-center backdrop mx-auto">
                    <h1 class="pt-16">(O)ne (T)ime (P)assword</h1>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row :ref="ref.qr">
        <v-col>
          <v-parallax src="images/background.jpg" style="border-radius: 10px">
            <v-container>
              <v-row>
                <v-col>
                  <div class="text-center backdrop mx-auto">
                    <h1 class="pt-16">QR Code</h1>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </v-col>
      </v-row>
    </v-container>
    <v-btn @click="click" >here hid </v-btn>
  </div>
</template>

<script>
export default {
  name: "index.vue",
  data(){
    const ref={
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
      ref

    }
  },
  methods:{
    slideTo: function (target){
      this.$vuetify.goTo(this.$refs[`${target}`],{
        duration:1000

      })
    }
  },
  computed:{
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
