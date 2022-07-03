<template>
<div id="FingerprintMethodComponent">
<v-container>
  <v-row>
    <v-col>
      <v-switch
        v-show="register"
        v-model="selected"
        label="Select Fingerprint Recognition"
        class="mx-3"
      ></v-switch>
      <v-form v-model="form.valid" :disabled="!selected">
        <v-col cols="12">
          <v-btn v-show="!register"  :disabled="!selected" color="Primary" outlined @click="scanFingerprint">Scan Fingerprint</v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn v-show="register" :disabled="!selected" color="Primary" outlined @click="enrollFingerprint">Enroll Fingerprint</v-btn>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="form.data.priority"
                        type="number" :rules="form.rules.priority"
                        label="Priority" required placeholder="Write the priority">
          </v-text-field>
        </v-col>
      </v-form>
      <v-divider dark></v-divider>
        <v-row id="loginFormActions" justify="end" class=" ma-0">
          <v-col class="pa-0 pt-4" cols="12">
            <v-btn :disabled="!selected" min-width="100%" color="primary" @click="submitForm">
              Submit Fingerprint<v-icon class="mx-1">mdi-fingerprint</v-icon></v-btn>
          </v-col>
        </v-row>
    </v-col>
  </v-row>
</v-container>
</div>
</template>

<script>
export default {
  name: "FingerprintMethod",
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
        valid:true,
        rules:{
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
      if(this.form.valid && this.form.data.signature){
        this.$emit('fingerSubmitted', {...this.form.data, selected:this.selected})
      }else{
        this.$swal.fire({
          title:'Missing information',
          text:"Please Fill all required information",
          icon:'error'
        })
      }
    },
    scanFingerprint: async function(){
      const res = await this.$axios.$get(`methods/fingerprint/scan/${this.username}`)
      this.form.data.signature = res.data
      if(res.valid){
        this.$swal.fire({
          title:"Scanned!",
          icon:'success',
          position:'top-right',
          toast:true,
          showConfirmButton:false,
          timer:1500
        })
      }else{
        this.$swal.fire({
          title:"Error in finger scanning",
          icon:'error',
          position:'top-right',
          toast:true,
          showConfirmButton:false,
          timer:2500
        })
      }
    },
    enrollFingerprint: async function(){
      try{
        const res = await this.$axios.$get(`methods/fingerprint/enroll/${this.username}`)
        console.log(res)
        this.form.data.signature = res.data
        this.$swal.fire({
          title:"Scanned!",
          icon:'success',
          position:'top-right',
          toast:true,
          showConfirmButton:false,
          timer:1500
        })
      }catch (err){
        this.$swal.fire({
          title:"Error in fingerprint enrollment",
          icon:'error',
          text:'check the console for more details'
        })
        console.log(err.response)
      }
    },
  }
}
</script>

<style scoped>

</style>
