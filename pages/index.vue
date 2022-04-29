<template>
  <div id="landing-page">
    <header class="header-2 text-center">
      <HeaderBackground class="page-header">
        <kinesis-element class="container py-5 w-75 m-auto back-card" strength="0">
          <div class="row">
            <div class="col-lg-7 text-center mx-auto">
              <h1 class="text-white pt-3 mt-n5">Authentication System</h1>
              <p class="lead text-white text-bold mt-3">Hybrid Authentication System Built with TypeScript
                <br/>
              </p>
              <a href="#" class="header-link">Face Recognition </a>
              ●
              <a href="#" class="header-link">Fingerprint </a>
              ●
              <a href="#" class="header-link">Password</a>
              ●
              <a href="#" class="header-link">OTP</a>
              ●
              <a href="#" class="header-link">QR</a>
            </div>
          </div>
        </kinesis-element>

      </HeaderBackground>

    </header>

    <div class="container my-0 py-0" >
      <div class="row my-0">
        <div class="col my-0">

          <div class="card" style="border-radius: 0; background-color: #180c1a">
            <div class="card-background">
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>

<script>
import HeaderBackground from "../components/headerBackground";
export default {
  components: {HeaderBackground}
}
</script>

<style>
.header-link {
  color: #ffffff;
  text-decoration: none;
}
.header-link:hover {
  color: #c6124e;
  text-decoration: none;
}
.back-card{
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.75rem;
}
</style>
