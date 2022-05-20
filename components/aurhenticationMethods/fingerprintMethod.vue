<template>
<div id="FingerprintMethodComponent">
<v-container>
  <v-row>
    <v-col>
      <v-form lazy-validation v-model="form.valid">
        <v-col cols="12">
          <v-text-field v-model="form.data.password"
                        type="password" :rules="form.rules.password"
                        label="Password" required placeholder="Enter Your password">
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
        <v-row id="loginFormActions" justify="end" class=" ma-0">
          <v-col class="pa-0 pt-4" cols="12">
            <v-btn min-width="100%" color="primary" @click="submitForm">
              Submit Password<v-icon class="mx-1">mdi-page-next</v-icon></v-btn>
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
  data(){
    return{
      form:{
        valid:true,
        rules:{
          password:[
            v => !!v || 'Password is required',
            v => v.length > 8 || 'Password must be at least 8 digits',
          ],
          priority: [
            v => !!v || 'Priority is required',
            v => Number(v)>0 || 'Priority must be a positive number',
          ]
        },
        data:{
          password:'',
          priority:''
        }
      }
    }
  },
  methods:{
    submitForm: function (){
      if(this.form.valid){
        this.$emit('fingerprintSubmitted', this.form.data)
      }
    }
  }
}
</script>

<style scoped>

</style>
