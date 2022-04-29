<template>
  <div id="app ">
    <kinesis-container class="container py-0">


      <!-- background-circles-props -->
      <kinesis-container class="row">
        <kinesis-container class="col">

          <kinesis-container class="container ">

            <kinesis-element class="a" :strength="10" axis="y" tag="img" src="/img/headerBackground/back.png">
            </kinesis-element>
            <kinesis-element class="a" :strength="50" axis="y" tag="img" src="/img/headerBackground/sun.png">
            </kinesis-element>

            <kinesis-element class="a" :strength="35" axis="y" tag="img" src="/img/headerBackground/1.png">
            </kinesis-element>
            <kinesis-element class="a" :strength="30" axis="y" tag="img" src="/img/headerBackground/2.png">
            </kinesis-element>

            <kinesis-element class="a" :strength="25" axis="y" tag="img" src="/img/headerBackground/3.png">
            </kinesis-element>

            <kinesis-element class="a" :strength="20" axis="y" tag="img" src="/img/headerBackground/4.png">
            </kinesis-element>
            <slot class="b"></slot>


          </kinesis-container>


        </kinesis-container>

      </kinesis-container>

    </kinesis-container>

  </div>
</template>

<script>

export default {
  name: "headerBackground",
  components: {},
  methods:{

  }
}
</script>

<style>
#app {
  text-align: center;
}

.container {
  padding: 15rem 0;
}
.a{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: auto;
}
.b{
  position: absolute ;
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>
