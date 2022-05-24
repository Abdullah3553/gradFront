<template>
<div id="FingerprintMethodComponent">
<v-container>
  <v-row>
    <v-col>
      <v-form lazy-validation v-model="form.valid">
        <v-col cols="12">
          <v-btn color="Primary" outlined @click="scanFingerprint">Scan Fingerprint</v-btn>
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
            <v-btn min-width="100%" color="primary" @click="submitForm">
              Submit Fingerprint<v-icon class="mx-1">mdi-page-next</v-icon></v-btn>
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
    }
  },
  data(){
    return{
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
        this.$emit('fingerSubmitted', this.form.data)
      }
    },
    scanFingerprint: async function(){
      const res = await this.$axios.$get(`methods/fingerprint/scan`)
      console.log(res)
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
  }
}
</script>

<style scoped>

</style>
