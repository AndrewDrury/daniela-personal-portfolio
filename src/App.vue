<template>
  <div id="app" class="app">
    <!-- Navbar -->
    <b-navbar toggleable="md" class="fixed-top" id="navbar">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">
        <img src="@/assets/homepage/logo@3x.png" style="width: 50px" />
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto top-nav">
          <!-- TESTING DROPDOWN -->
          <!-- <li class="dropdown tab" right>
            <b-nav-item href="./#Projects" class="dropdown-toggle" data-toggle="dropdown">projects</b-nav-item>

            <ul class="dropdown-menu">
              <b-nav-item to="/ePaid">ePaid</b-nav-item>
              <b-nav-item to="/Fiti">Fiti</b-nav-item>
              <b-nav-item to="/HealthLine">HealthLine</b-nav-item>
            </ul>
          </li>-->
          <!-- END TEST -->

          <b-nav-item class="tab" href="./#Projects" right>projects</b-nav-item>
          <b-nav-item
            class="tab"
            href="https://www.dropbox.com/sh/vcb40o2liwopshn/AABSz1u5-BVe4v6mtpg0E1JEa?dl=0&preview=Resume.pdf"
            target="_blank"
            right
          >resume</b-nav-item>
          <b-nav-item class="tab" to="/about" right>about</b-nav-item>
          <!-- <b-nav-item class="tab" to="/ePaid" right>ePaid</b-nav-item> -->
          <b-nav-item class="tab" href="mailto:ddanielaornelas@gmail.com" right>let's chat!</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div id="main">
      <!-- Dynamic Content -->
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>

    <!-- Sidebar for project pages -->
    <!-- <aside id="nav">
      <nav>
        <a href="#1" class="active">Punkt 1</a>
        <a href="#2">Punkt 2</a>
        <a href="#3">Punkt 3</a>
        <a href="#4">Punkt 4</a>
      </nav>
    </aside>-->

    <!-- Footer -->
    <section id="footer">
      <div class="container">
        <b-row class="text-center" style="margin-bottom:24px">
          <b-col>
            <h3>Let's Talk Design!</h3>
          </b-col>
        </b-row>
        <b-row style="margin-bottom: 10px">
          <b-col class="col-xs-12 col-sm-12 col-md-12">
            <ul class="list-unstyled list-inline social text-center">
              <li class="list-inline-item">
                <a href="https://medium.com/@danielaornelas_40338" target="_blank">
                  <!-- <i class="fa fa-medium"></i> -->
                  <img
                    srcset="@/assets/homepage/medium/Shape.png, @/assets/homepage/medium/Shape@2x.png 2x, @/assets/homepage/medium/Shape@3x.png 3x"
                    style="width:1.25em"
                  />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="mailto:ddanielaornelas@gmail.com" target="_blank">
                  <!-- <i class="fa fa-envelope"></i> -->
                  <img
                    srcset="@/assets/homepage/envelope.png, @/assets/homepage/envelope@2x.png 2x, @/assets/homepage/envelope@3x.png 3x"
                    style="width:1.25em"
                  />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://ca.linkedin.com/in/danielaornelas334" target="_blank">
                  <!-- <i class="fa fa-linkedin"></i> -->
                  <img
                    srcset="@/assets/homepage/linkedin-logo.png, @/assets/homepage/linkedin-logo@2x.png 2x, @/assets/homepage/linkedin-logo@3x.png 3x"
                    style="width:1em"
                  />
                </a>
              </li>
            </ul>
          </b-col>
        </b-row>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import "/assets/variables.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // background-color: rgb(100, 100, 100);

  #main {
    margin-left: 9.86%;
    margin-right: 9.86%;

    @media (max-width: $screen-md) {
      margin-left: 5%;
      margin-right: 5%;
    }
  }
}

// TESTING DROPDOWN
.dropdown {
  font-size: 1.25em;
  color: black;
}
//TESTING TOGGLE
.btn {
  outline: none !important;
}
.btn.btn-primary {
  background-color: $purple;
  border-color: $purple;
  outline: none;
  &:hover {
    background-color: darken($purple, 10%);
    border-color: darken($purple, 10%);
  }
  &:active,
  &:focus {
    background-color: lighten($purple, 5%);
    border-color: lighten($purple, 5%);
  }
}
.btn.btn-default {
  &:hover {
    background-color: darken($purple, 10%);
    border-color: darken($purple, 10%);
    color: #fff;
  }
  &:active,
  &:focus {
    background-color: lighten($purple, 5%);
    border-color: lighten($purple, 5%);
    color: #fff;
  }
}

.tab {
  margin-left: 0.75em;
  font-size: 1.25em;
}

// Navbar
#navbar {
  background-color: white;
  @media (min-width: $screen-md) {
    height: 130px;
  }

  /* change the link color */
  .navbar-nav .nav-link {
    color: black;
  }
  /* change the color of active or hovered links */
  .nav-item.active .nav-link {
    color: $primary;
  }

  .nav-item:hover .nav-link {
    color: rgb(166, 127, 250);
  }
}

// Footer
section {
  padding: 30px 0;
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
#footer ul.social li a img {
  margin-right: 15px;
  margin-left: 15px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
  color: $primary;
}
#footer ul.social li:hover a img {
  font-size: 30px;
  margin-top: -10px;
  color: white;
}
#footer h3 {
  color: $primary;
  font-size: 24px;
  font-weight: 500;
}
// #footer .copyright {
//   color: $primary;
//   font-size: 22px;
// }

// SIDEBAR FOR PROJECTS
#nav {
  width: 25%;
  position: fixed;
  left: 20px;
  z-index: 1;
}

// Sidebar
// #nav nav {
//   position: fixed;
//   width: 25%;
// }

#nav a {
  border-bottom: 1px solid #666;
  color: #333;
  display: block;
  padding: 10px;
  text-align: center;
  text-decoration: none;
}

#nav a:hover,
#nav a.active {
  background: #666;
  color: #fff;
}

.fixed-top {
  margin-left: 9.86%;
  margin-right: 9.86%;

  @media (max-width: $screen-md) {
    margin-left: 0%;
    margin-right: 0%;
  }
}

//Dropdown hover
@media (min-width: 768px) {
  .top-nav li:hover > ul.dropdown-menu {
    display: block;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
// @ is an alias to /src

//SIDEBAR FOR PROJECTS
// $("#nav nav a").on("click", function(event) {
//   $(this)
//     .parent()
//     .find("a")
//     .removeClass("active");
//   $(this).addClass("active");
// });

// $(window).on("scroll", function() {
//   $(".target").each(function() {
//     if ($(window).scrollTop() >= $(this).offset().top) {
//       var id = $(this).attr("id");
//       $("#nav nav a").removeClass("active");
//       $("#nav nav a[href=#" + id + "]").addClass("active");
//     }
//   });
// });

export default Vue.extend({
  name: "home"
});
</script>
