<template>
  <div id="app">
    <div id="main">
      <!-- Header -->
      <b-navbar toggleable="md" class="d-fixed">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">D</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items, collapsed on mobile -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="tab" href="#projects" right>projects</b-nav-item>
            <b-nav-item class="tab" href="./DanielaOrnelasResume.pdf" target="_blank" right>resume</b-nav-item>
            <b-nav-item class="tab" to="/about" right>about</b-nav-item>
            <b-nav-item class="tab" right>let's chat!</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

      <!-- Dynamic Content -->
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>

    <!-- Footer -->
    <section id="footer">
      <div class="container">
        <b-row class="text-center">
          <b-col>
            <h3>Let's Talk Design!</h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul class="list-unstyled list-inline social text-center">
              <li class="list-inline-item">
                <a href="javascript:void();">
                  <i class="fa fa-medium"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void();" target="_blank">
                  <i class="fa fa-envelope"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void();">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p class="h6">&copy Daniela Ornelas</p>
          </b-col>
        </b-row>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
$primary: #814cf3;

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  #main {
    margin-left: 12%;
    margin-right: 12%;
    margin-top: 2.5em;
  }
}

.tab {
  margin-left: 0.75em;
  font-size: 1.25em;
}

/* Footer */
section {
  padding: 60px 0;
}
#footer {
  background: rgba(129, 76, 243, 0.15) !important;
}
#footer ul.social li a i {
  margin-right: 15px;
  margin-left: 15px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
  color: $primary;
}
#footer ul.social li:hover a i {
  font-size: 30px;
  margin-top: -10px;
  color: white;
}
#footer h3 {
  color: $primary;
}
</style>

<script lang="ts">
import Vue from "vue";
// @ is an alias to /src

export default Vue.extend({
  name: "home"
});
</script>
