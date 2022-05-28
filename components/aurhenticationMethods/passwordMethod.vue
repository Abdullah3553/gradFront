<template>
<div id="PasswordMethodComponent">
<v-container>
  <v-row>
    <v-col>
      <v-switch
          v-show="register"
          v-model="selected"
          label="Select Password"
          class="mx-3"
      ></v-switch>
      <v-form v-model="form.valid" :disabled="!selected">
        <v-col cols="12">
          <v-text-field v-model="form.data.signature"
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
        <v-row id="loginFormActions" justify="end" class=" ma-0" >
          <v-col class="pa-0 pt-4" cols="12">
            <v-btn min-width="100%" color="primary" @click="submitForm" :disabled="!selected">
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
  name: "passwordMethod",
  props:{
    register:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      selected:true,
      form:{
        valid:false,
        rules:{
          password:[
            v => !!v || 'Password is required',
            v => v.length > 7 || 'Password must be at least 8 digits',
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
      if(this.form.valid){
        this.$emit('passwordSubmitted', {...this.form.data, selected:this.selected})
      }else{
        this.$swal.fire({
          title:'Missing information',
          text:"Please Fill all required information",
          icon:'error'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
