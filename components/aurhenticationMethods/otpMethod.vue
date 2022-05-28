<template>
<div id="OtpMethodComponent">
<v-container>
  <v-row>
    <v-col>
      <v-switch
        v-show="register"
        v-model="selected"
        label="Select OTP"
        class="mx-3"
      ></v-switch>
      <v-form v-model="form.valid" :disabled="!selected">
        <v-col cols="12">
          <v-text-field v-model="form.data.signature"
                        v-show="!register"
                        type="text" :rules="form.rules.otp"
                        label="OTP" required placeholder="Enter The OTP sent to your mail">
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="form.data.priority"
                        type="number" :rules="form.rules.priority"
                        label="Priority" required placeholder="Write the priority">
          </v-text-field>
        </v-col>
      </v-form>
      <v-divider dark></v-divider>
        <v-row id="loginFormActions" justify="end" class='mt-3 mr-2 mb-1'>
            <v-btn :disabled="!selected" class="mx-1" color="primary" @click="submitForm">
              Submit OTP<v-icon class="mx-1">mdi-page-next</v-icon></v-btn>
            <v-btn v-show="!register" :disabled="form.requested" class="mx-1" :min-width="form.requested?'1%':'10%'"
                   :color="form.requested?'success':'warning'" @click="requestOtp">
              {{form.requested?'':'Send OTP'}}<v-icon class="mx-1">mdi-email-send</v-icon></v-btn>
        </v-row>
    </v-col>
  </v-row>
</v-container>
</div>
</template>

<script>
export default {
  name: "OtpMethod",
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
      form:{
        valid:false,
        requested:false,
        rules:{
          otp:[
            v => !!v || 'OTP is required',
            v => v.length > 5 || 'OTP must be at least 6 digits',
            v => !!Number(v) || 'OTP must be contain numerical digits only',
          ],
          priority: [
            v => !!v || 'Priority is required',
            v => Number(v)>0 || 'Priority must be a positive number',
          ]
        },
        data:{
          signature:'',
          priority:''
        }
      }
    }
  },
  methods:{
    submitForm: function (){
      if(this.register){
        this.form.data.signature = 'empty otp'
        if(this.form.data.priority){
          this.$emit('OtpSubmitted',{...this.form.data, selected:this.selected})
          return
        }
      }
      if(this.form.valid){
        this.$emit('OtpSubmitted',{...this.form.data, selected:this.selected})
      }
    },
    requestOtp: async function (){
      try{
        const response = await this.$axios.$get(`methods/otp/generate/${this.username}`)
        this.$swal.fire({
          title:"OTP Sent",
          icon:'success',
          toast:true,
          timer:1500,
          showConfirmButton:false,
          position:'top-right'
        })
        this.form.requested = true
      }catch (err){
        this.$swal.fire({
          title:"OTP Failed",
          text:err.response.data.message,
          icon:'error',
        })
        this.form.requested = false

      }
    }
  }
}
</script>

<style scoped>

</style>
