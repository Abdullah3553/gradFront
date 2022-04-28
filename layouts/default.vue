<template>
  <div>
    <!-- Navbar -->
    <div class="container position-sticky z-index-sticky top-0">
      <div class="row">
        <div class="col-12">
          <nav
            class="navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
            <div class="container-fluid px-0">
              <i class="mdi mdi-shield-account mdi-24px mx-2" style="color: #08d041"></i>
              <a class="navbar-brand font-weight-bolder " href="#"
                 rel="tooltip" title="Graduation Project" data-placement="bottom">
                Authentication System
              </a>
              <div class="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
                <ul class="navbar-nav navbar-nav-hover ms-auto">
                  <li class="nav-item ">
                    <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuPages">
                      <i class="mdi mdi-home opacity-6 me-2 text-md"></i>
                      Home
                    </a>
                  </li>

                  <li class="nav-item dropdown dropdown-hover mx-2">
                    <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuIdeas"
                       data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="mdi mdi-lightbulb-on-outline opacity-6 me-2 text-md"></i>
                      Ideas
                      <img src="~/static/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-auto ms-md-2">
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
                      aria-labelledby="dropdownMenuIdeas">
                      <div class="d-none d-lg-block">

                        <li class="nav-item list-group-item border-0 p-0">
                          <a class="dropdown-item py-2 ps-3 border-radius-md" href="#">
                            <div class="w-100 d-flex align-items-center justify-content-between">
                              <div>
                                <h6
                                  class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                  <i class="mdi mdi-crown-circle me-2"></i>
                                  Core Idea</h6>
                                <span class="text-sm">The Main Idea of the system</span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li class="nav-item list-group-item border-0 p-0">
                          <a class="dropdown-item py-2 ps-3 border-radius-md" href="#">
                            <div class="w-100 d-flex align-items-center justify-content-between">
                              <div>
                                <h6
                                  class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                  <i class="mdi mdi-account-group me-2"></i>
                                  Our Team</h6>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li class="nav-item list-group-item border-0 p-0">
                          <a class="dropdown-item py-2 ps-3 border-radius-md" href="#">
                            <div class="w-100 d-flex align-items-center justify-content-between">
                              <div>
                                <h6
                                  class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                  <i class="mdi mdi-star me-2"></i>
                                  Supervisor</h6>
                                <span class="text-sm">The project Supervisor</span>
                              </div>
                            </div>
                          </a>
                        </li>

                        <li class="nav-item list-group-item border-0 p-0">
                          <a class="dropdown-item py-2 ps-3 border-radius-md" href="#">
                            <div class="w-100 d-flex align-items-center justify-content-between">
                              <div>
                                <h6
                                  class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                  <i class="mdi mdi-help-network me-2"></i>
                                  Supporters</h6>
                                <span class="text-sm">The project Supporters</span>
                              </div>
                            </div>
                          </a>
                        </li>

                      </div>

                    </ul>
                  </li>

                  <li class="nav-item dropdown dropdown-hover mx-2">
                    <a class="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuAccount"
                       data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="mdi mdi-account opacity-6 me-2 text-md"></i>
                      Account
                      <img src="/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-auto ms-md-2">
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive mt-0 mt-lg-3 p-3 border-radius-lg"
                      aria-labelledby="dropdownMenuAccount">
                      <div class="d-none d-lg-block">
                        <ul class="list-group">
                          <li class="nav-item list-group-item border-0 p-0">
                            <a class="dropdown-item py-2 ps-3 border-radius-md"
                               href="#">
                              <h6
                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                <i class="mdi mdi-login me-1 opacity-8"></i>
                                Login</h6>
                              <span class="text-sm">Login into the website</span>
                            </a>
                          </li>
                          <li class="nav-item list-group-item border-0 p-0">
                            <a class="dropdown-item py-2 ps-3 border-radius-md"
                               href="#">
                              <h6
                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                <i class="mdi mdi-new-box me-1 opacity-8"></i>
                                Register</h6>
                              <span class="text-sm">Create a new account</span>
                            </a>
                          </li>
                          <li class="nav-item list-group-item border-0 p-0">
                            <a class="dropdown-item py-2 ps-3 border-radius-md"
                               href="#">
                              <h6
                                class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                                <i class="mdi mdi-lock-reset me-1 opacity-8"></i>
                                Reset</h6>
                              <span class="text-sm">Reset the account</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                    </ul>
                  </li>
                  <li class="nav-item dropdown dropdown-hover mx-2">
                    <a class="nav-link nav-link-icon me-2" href="#"
                       data-bs-toggle="dropdown" aria-expanded="false" id="githubDropdown">
                      <i class="mdi mdi-github"></i>
                      <p class="d-inline text-sm z-index-1 font-weight-bold" >Github</p>
                      <img src="~/static/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-auto ms-md-2">
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive mt-0 mt-lg-3 p-3 border-radius-lg"
                      aria-labelledby="githubDropdown">
                      <div class="d-none d-lg-block">
                        <ul class="list-group">
                          <li class="nav-item list-group-item border-0 p-0">
                            <a class="dropdown-item py-2 ps-3 border-radius-md"
                               href="https://github.com/Abdullah3553/gradBack"
                               target="_blank">
                              <h6
                                class="dropdown-header text-dark font-weight-bolder d-flex align-items-center p-0">
                                <i class="mdi mdi-server me-1 opacity-8"></i>
                                Back-end Repository</h6>
                              <span class="text-sm">The Authentication System Source Code</span>
                            </a>
                          </li>
                          <li class="nav-item list-group-item border-0 p-0">
                            <a class="dropdown-item py-2 ps-3 border-radius-md"
                               href="https://github.com/Abdullah3553/gradFront"
                               target="_blank">
                              <h6
                                class="dropdown-header text-dark font-weight-bolder d-flex align-items-center p-0">
                                <i class="mdi mdi-application me-1 opacity-8"></i>
                                Front-end Repository</h6>
                              <span class="text-sm">The Interface Source Code</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="row d-lg-none">
                        <div class="col-md-12 g-0">
                          <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Getting Started</h6>
                            <span class="text-sm">All about overview, quick start, license and contents</span>
                          </a>

                          <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Foundation</h6>
                            <span class="text-sm">See our colors, icons and typography</span>
                          </a>

                          <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Components</h6>
                            <span class="text-sm">Explore our collection of fully designed components</span>
                          </a>

                          <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Plugins</h6>
                            <span class="text-sm">Check how you can integrate our plugins</span>
                          </a>

                          <a class="dropdown-item py-2 ps-3 border-radius-md" href="./pages/about-us.html">
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">
                              Utility Classes</h6>
                            <span class="text-sm">For those who want flexibility, use our utility classes</span>
                          </a>
                        </div>
                      </div>

                    </ul>

                  </li>
                  <li class="nav-item my-auto ms-3 ms-lg-0">

                    <a href="#"
                       class="btn btn-sm  bg-gradient-info  mb-0 me-1 mt-2 mt-md-0">Register Now</a>

                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <!-- End Navbar -->
        </div>
      </div>
    </div>
    <Nuxt />
  </div>



</template>

<script>
export default {
  name: "default.vue"
}
</script>

<style scoped>

</style>
