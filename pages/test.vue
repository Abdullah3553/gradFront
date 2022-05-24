<template>
<div>
  <v-btn @click="func2">message</v-btn>
  <v-btn @click="click">test test tes</v-btn>
  <h1>Message is : {{message}}</h1>
</div>
</template>

<script>
export default {
  name: "test",
  components: {},
  data(){
    return{
      message:'',
      clicked: false
    }
  },
  methods:{
    click(){
      this.clicked = true
    },
    func2(){
      this.message = this.func()
    },
    func(){
      return new Promise((resolve, reject)=>{
        if(this.clicked)resolve('Message here')
      })
    }
  }
}
</script>

<style scoped>

</style>
