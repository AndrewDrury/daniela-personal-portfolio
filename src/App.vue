<template>
  <div id="app" class="app">
    <!-- Navbar -->
    <b-navbar toggleable="md" class="fixed-top" id="navbar">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">
        <img src="@/assets/homepage/logo@3x.png" style="width: 50px" />
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
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

    <!-- HOME -->
    <div class="home">
      <b-container fluid class="verticalCenter">
        <b-row>
          <b-col>
            <b-row class="top-space">
              <b-col class="text-left">
                <h1 class="name-greeting">Hi! I’m Daniela Ornelas.</h1>
              </b-col>
            </b-row>
            <b-row class="desc">
              <b-col md="11" class="text-left">
                <h4 class="introduction" style="margin-bottom: 60px">
                  I’m a curious
                  <b class="bolded" style="font-size: 30px">UX designer.</b> I
                  ask all the questions, so that the user doesn’t have to.
                  Living and learning in Toronto, Canada.
                  <img
                    srcset="@/assets/homepage/maple-leaf/Shape.png, @/assets/homepage/maple-leaf/Shape@2x.png 2x, @/assets/homepage/maple-leaf/Shape@3x.png 3x"
                  />
                </h4>
              </b-col>
            </b-row>
            <b-row id="Projects" name="Projects">
              <b-col>
                <a>
                  <h2 class="project-header mb-5" href="#Projects">
                    My Projects
                    <img
                      class="arrow-down pb-2"
                      srcset="@/assets/homepage/next.png, @/assets/homepage/next@2x.png 2x, @/assets/homepage/next@3x.png 3x"
                    />
                  </h2>
                </a>
                <b-row class="projectRow">
                  <b-col lg="5" align="left">
                    <a href="./ePaid">
                      <img class="screenshot-epaid" src="@/assets/homepage/ePaidMain.png" />
                    </a>
                  </b-col>
                  <b-col lg="7" align="left">
                    <h3 class="project-title">e-Paid</h3>
                    <h4 class="category">TD Lab</h4>
                    <h5 class="tag-line">Help freelancers get paid faster.</h5>
                    <p class="description">
                      Uses Interac’s e-transfer API to help our user with easy
                      invoicing.
                    </p>
                    <a class="read-more" href="./ePaid">
                      Read More
                      <img
                        srcset="@/assets/homepage/next.png, @/assets/homepage/next@2x.png 2x, @/assets/homepage/next@3x.png 3x"
                      />
                    </a>
                    <h6 class="skill-title">Skills</h6>
                    <b-row align="left">
                      <b-col>
                        <div class="skill">User Interviews</div>
                        <div class="skill">Personas</div>
                        <div class="skill">Project Management</div>
                        <div class="skill">UI/UX Design</div>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>

                <b-row class="projectRow">
                  <b-col class="desktop" lg="7" align="left">
                    <h3 class="project-title">Fiti</h3>
                    <h4 class="category">Passion Project</h4>
                    <h5 class="tag-line">A fitness app for people with paraplegia.</h5>
                    <p class="description">
                      Fiti provides accessible, affordable, and interesting
                      workouts that are easy to incorperate in all lifestyles.
                    </p>
                    <a class="read-more" href="./Fiti">
                      <!-- <a
                      class="read-more"
                      href="../Fiti-info.pdf"
                      target="_blank"
                      >-->
                      Read More
                      <img
                        srcset="@/assets/homepage/next.png, @/assets/homepage/next@2x.png 2x, @/assets/homepage/next@3x.png 3x"
                      />
                    </a>
                    <h6 class="skill-title">Skills</h6>
                    <b-row align="left">
                      <b-col>
                        <div class="skill">Research</div>
                        <div class="skill">Personas</div>
                        <div class="skill">UI/UX Design</div>
                        <div class="skill">Product Design</div>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col lg="5" align="right">
                    <a href="./Fiti">
                      <!-- <a href="../Fiti-info.pdf" target="_blank"> -->
                      <img
                        class="screenshot"
                        srcset="@/assets/homepage/dark.png, @/assets/homepage/dark@2x.png 2x, @/assets/homepage/dark@3x.png 3x"
                      />
                    </a>
                  </b-col>
                  <b-col class="mobile" align="left">
                    <h3 class="project-title">Fiti</h3>
                    <h4 class="category">Passion Project</h4>
                    <h5 class="tag-line">A fitness app for people with paraplegia.</h5>
                    <p class="description">
                      Fiti provides accessible, affordable, and interesting
                      workouts that are easy to incorperate in all lifestyles.
                    </p>
                    <a class="read-more" href="./Fiti">
                      <!-- <a
                      class="read-more"
                      href="../Fiti-info.pdf"
                      target="_blank"
                      >-->
                      Read More
                      <img
                        srcset="@/assets/homepage/next.png, @/assets/homepage/next@2x.png 2x, @/assets/homepage/next@3x.png 3x"
                      />
                    </a>
                    <h6 class="skill-title">Skills</h6>
                    <b-row align="left">
                      <b-col>
                        <div class="skill">Research</div>
                        <div class="skill">Personas</div>
                        <div class="skill">UI/UX Design</div>
                        <div class="skill">Product Design</div>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>

                <b-row class="projectRow my-3">
                  <b-col lg="5" align="left">
                    <a href="./HealthLine">
                      <!-- <a href="../HealthLine-info.pdf" target="_blank"> -->
                      <img
                        class="screenshot"
                        srcset="@/assets/HealthLine-info/Group10.png, @/assets/HealthLine-info/Group10@2x.png 2x, @/assets/HealthLine-info/Group10@3x.png 3x"
                      />
                    </a>
                  </b-col>
                  <b-col lg="7" align="left">
                    <h3 class="project-title">HealthLine</h3>
                    <h4 class="category">RU Hacks</h4>
                    <h5 class="tag-line">Receive a diagnosis of your symptoms.</h5>
                    <p class="description">
                      A diagnosis is made through computer vision and machine
                      learning, and SMS.
                    </p>
                    <a class="read-more" href="./HealthLine">
                      <!-- <a
                      class="read-more"
                      href="../HealthLine-info.pdf"
                      target="_blank"
                      >-->
                      Read More
                      <img
                        srcset="@/assets/homepage/next.png, @/assets/homepage/next@2x.png 2x, @/assets/homepage/next@3x.png 3x"
                      />
                    </a>
                    <h6 class="skill-title">Skills</h6>
                    <b-row align="left">
                      <b-col>
                        <div class="skill">Project Management</div>
                        <div class="skill">Ideation</div>
                        <div class="skill">Research</div>
                        <div class="skill">UI/UX Design</div>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
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

.home {
  margin-left: 9.86%;
  margin-right: 9.86%;

  @media (min-width: $screen-md) {
    margin-top: 141px;
  }

  @media (max-width: $screen-md) {
    margin-left: 5%;
    margin-right: 5%;
  }

  //Apply bottom margin to all columns in mobile
  @media all and (max-width: 767px) {
    [class^="col-sm-"] {
      margin-bottom: 20px;
    }
  }

  .desc {
    margin-top: 54px;
    @media (max-width: $screen-sm) {
      margin-top: 24px;
    }
  }

  .content-left {
    @media (max-width: $screen-sm) {
      width: 100%;
    }
  }

  .top-space {
    margin-top: 120px;
    @media (max-width: $screen-sm) {
      margin-top: 100px;
    }
  }

  .name-greeting {
    font-size: 40px !important;
    font-weight: 500 !important;
  }

  .introduction {
    font-size: 28;
    color: $primary;
    font-weight: 400;
    margin-bottom: 360px;
    @media (max-width: $screen-md) {
      margin-bottom: 30px;
    }
    .bolded {
      font-family: AvenirBold, sans-serif;
      color: $primary;
    }
  }

  #Projects {
    padding-top: 8em;
    @media (max-width: $screen-sm) {
      padding-top: 4em;
    }

    .project-header {
      font-weight: 500;
      color: $primary;
      font-size: 34px;
    }
    .arrow-down {
      transform: rotate(90deg);
    }
    .projectRow {
      display: flex;
      justify-content: center;
      align-items: center;

      padding-bottom: 50px;

      @media (max-width: $screen-md) {
        padding-bottom: 80px;
      }

      .project-title {
        font-size: 30px;
        font-weight: 500;
      }
      .category {
        color: $blackOpac65;
        font-size: 19px;
        font-weight: 500;
        padding-bottom: 15px;
      }
      .tag-line {
        font-size: 25px;
        font-weight: 500;
        padding-bottom: 5px;
      }
      .skill-title {
        font-weight: 500;
        font-size: 19px;
        color: $gray;
        margin-top: 64px;
        @media (max-width: $screen-md) {
          margin-top: 34px;
        }
      }
      .read-more {
        color: $primary;
        font-size: 24px;
        font-weight: 500;
      }
      .description {
        font-size: 25px;
      }
      .skill {
        padding-right: 32px;
        align: left;
        display: inline-block;
        font-size: 17px;
        font-weight: 500;
        color: $gray;
        @media (max-width: $screen-sm) {
          width: 100%;
        }
      }
    }
  }

  .desktop {
    display: inline;
    @media (max-width: $screen-sm) {
      display: none;
    }
  }

  .mobile {
    display: none;
    @media (max-width: $screen-sm) {
      display: inline;
    }
  }
}

.tab {
  margin-left: 0.75em;
  font-size: 1.25em;
}

//HOME
.home {
  margin-left: 9.86%;
  margin-right: 9.86%;

  @media (min-width: $screen-md) {
    margin-top: 141px;
  }

  @media (max-width: $screen-md) {
    margin-left: 5%;
    margin-right: 5%;
  }

  //Apply bottom margin to all columns in mobile
  @media all and (max-width: 767px) {
    [class^="col-sm-"] {
      margin-bottom: 20px;
    }
  }

  .desc {
    margin-top: 54px;
    @media (max-width: $screen-sm) {
      margin-top: 24px;
    }
  }

  .content-left {
    @media (max-width: $screen-sm) {
      width: 100%;
    }
  }

  .top-space {
    margin-top: 120px;
    @media (max-width: $screen-sm) {
      margin-top: 100px;
    }
  }

  .name-greeting {
    font-size: 40px !important;
    font-weight: 500 !important;
  }

  .introduction {
    font-size: 28;
    color: $primary;
    font-weight: 400;
    margin-bottom: 360px;
    @media (max-width: $screen-md) {
      margin-bottom: 30px;
    }
    .bolded {
      font-family: AvenirBold, sans-serif;
      color: $primary;
    }
  }

  #Projects {
    padding-top: 8em;
    @media (max-width: $screen-sm) {
      padding-top: 4em;
    }

    .project-header {
      font-weight: 500;
      color: $primary;
      font-size: 34px;
    }
    .arrow-down {
      transform: rotate(90deg);
    }
    .projectRow {
      display: flex;
      justify-content: center;
      align-items: center;

      padding-bottom: 50px;

      @media (max-width: $screen-md) {
        padding-bottom: 80px;
      }

      .project-title {
        font-size: 30px;
        font-weight: 500;
      }
      .category {
        color: $blackOpac65;
        font-size: 19px;
        font-weight: 500;
        padding-bottom: 15px;
      }
      .tag-line {
        font-size: 25px;
        font-weight: 500;
        padding-bottom: 5px;
      }
      .skill-title {
        font-weight: 500;
        font-size: 19px;
        color: $gray;
        margin-top: 64px;
        @media (max-width: $screen-md) {
          margin-top: 34px;
        }
      }
      .read-more {
        color: $primary;
        font-size: 24px;
        font-weight: 500;
      }
      .description {
        font-size: 25px;
      }
      .skill {
        padding-right: 32px;
        align: left;
        display: inline-block;
        font-size: 17px;
        font-weight: 500;
        color: $gray;
        @media (max-width: $screen-sm) {
          width: 100%;
        }
      }
    }
  }

  .desktop {
    display: inline;
    @media (max-width: $screen-sm) {
      display: none;
    }
  }

  .mobile {
    display: none;
    @media (max-width: $screen-sm) {
      display: inline;
    }
  }
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
  name: "empty"
});
</script>
