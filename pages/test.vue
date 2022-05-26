<template>
<div>
  <v-btn @click="func2">message</v-btn>
  <v-btn @click="click">test test tes</v-btn>
</div>
</template>

<script>
import { Encoder, QRByte, QRKanji, ErrorCorrectionLevel } from '@nuintun/qrcode'
import { Decoder } from '@nuintun/qrcode';
export default {
  name: "test",
  components: {},
  mounted(){
    const qrcode = new Decoder();
    qrcode
      .scan('data:image/gif;base64,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')
      .then(result => {
        console.log(result.data);
      })
      .catch(error => {
        console.error(error);
      });
    this.image = qrcode
  },
  data(){
    return{
      image:'',
      clicked: false
    }
  },
  methods:{
    click(){
      this.clicked = true
    },
  }
}
</script>

<style scoped>

</style>
