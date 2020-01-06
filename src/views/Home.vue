<template>
  <div class="home" id="home" name="home">
    <b-container fluid class="verticalCenter">
      <b-row>
        <b-col>
          <b-row class="top-space">
            <b-col class="text-left">
              <b class='name' style='opacity:100'>Daniela Ornelas&nbsp;</b>
              <b class='name-greeting'>is a product designer and a psychology student.</b>
            </b-col>
          </b-row>
          <b-row class="desc">
            <b-col md="11" class="text-left">
              <h4 class="introduction" style="margin-bottom: 60px">
                Experienced in FinTech and creating awesome financial solutions for students by using interaction &amp; visual design, and product-thinking.<br/>
                Living and learning in Toronto, Canada.
                <img
                  srcset="
                    @/assets/homepage/maple-leaf.png,
                    @/assets/homepage/maple-leaf@2x.png 2x,
                    @/assets/homepage/maple-leaf@3x.png 3x
                  "
                  style='color:black'
                />
              </h4>
            </b-col>
          </b-row>
          <b-row id="Projects" name="Projects">
            <b-col>
              <div style='margin-bottom: 60px'>
                <router-link class ='view-work' :to="{ name: 'home', hash: '#Projects' }">
                  <h2 class="project-header" href="#Projects">
                    View my work!
                  </h2>
                  <img
                      class="arrow-down"
                      srcset="
                        @/assets/homepage/next.png,
                        @/assets/homepage/next@2x.png 2x,
                        @/assets/homepage/next@3x.png 3x
                      "
                    />
                </router-link>
              </div>
              <b-row class="projectRow">
                <b-col lg="5" align="left">
                  <a href="./#/ePaid">
                    <img
                      class="screenshot-epaid"
                      src="@/assets/homepage/ePaidMain.png"
                    />
                  </a>
                </b-col>
                <b-col lg="7" align="left">
                  <h3 class="project-title">TD Lab</h3>
                  <h4 class="category">UI/UX Designer Intern - Winter/Spring 2019</h4>
                  <!-- <h5 class="tag-line">Help freelancers get paid faster.</h5> -->
                  <p class="description">
                    Worked in dynamic teams to design and develop financial banking solutions for Generation Z.
                  </p>
                  <!-- <router-link class="read-more" to="/ePaid">
                      <h6>Read More</h6>
                      <img
                        srcset="
                          @/assets/homepage/next.png,
                          @/assets/homepage/next@2x.png 2x,
                          @/assets/homepage/next@3x.png 3x
                        "
                      />
                  </router-link>-->
                  <a class="read-more" href="./#/ePaid">
                    <h6>See more</h6>
                    <img
                      srcset="
                        @/assets/homepage/next.png,
                        @/assets/homepage/next@2x.png 2x,
                        @/assets/homepage/next@3x.png 3x
                      "
                    />
                  </a>
                  <!-- <h6 class="skill-title">Skills</h6>
                  <b-row align="left">
                    <b-col>
                      <div class="skill">User Interviews</div>
                      <div class="skill">Personas</div>
                      <div class="skill">Project Management</div>
                      <div class="skill">UI/UX Design</div>
                    </b-col>
                  </b-row> -->
                </b-col>
              </b-row>

              <b-row class="projectRow">
                <b-col class="desktop" lg="7" align="left">
                  <h3 class="project-title">Healthline</h3>
                  <h4 class="category">Design Challenge - Summer 2019</h4>
                  <!-- <h5 class="tag-line">
                    Receive a diagnosis of your symptoms.
                  </h5> -->
                  <p class="description">
                    A diagnosis is made through computer vision and machine
                    learning, and SMS.
                  </p>
                  <a class="read-more" href="./#/HealthLine">
                   <!-- <a
                    class="read-more"
                    href="../HealthLine-info.pdf"
                    target="_blank"
                    >-->
                    <h6>See More</h6>
                    <img
                      srcset="
                        @/assets/homepage/next.png,
                        @/assets/homepage/next@2x.png 2x,
                        @/assets/homepage/next@3x.png 3x
                      "
                    />
                  </a>
                  <!-- <h6 class="skill-title">Skills</h6>
                  <b-row align="left">
                    <b-col>
                      <div class="skill">Project Management</div>
                      <div class="skill">Ideation</div>
                      <div class="skill">Research</div>
                      <div class="skill">UI/UX Design</div>
                    </b-col>
                  </b-row> -->
                </b-col>
                <b-col lg="5" align="right">
                  <a href="./#/HealthLine">
                    <!-- <a href="../Fiti-info.pdf" target="_blank"> -->
                    <img
                      class="screenshot"
                      srcset="
                        @/assets/HealthLine-info/Group10.png,
                        @/assets/HealthLine-info/Group10@2x.png 2x,
                        @/assets/HealthLine-info/Group10@3x.png 3x
                      "
                    />
                  </a>
                </b-col>
                <b-col class="mobile" align="left">
                  <h3 class="project-title">Healthline</h3>
                  <h4 class="category">Design Challenge - Summer 2019</h4>
                  <!-- <h5 class="tag-line">
                    Receive a diagnosis of your symptoms.
                  </h5> -->
                  <p class="description">
                    A diagnosis is made through computer vision and machine
                    learning, and SMS.
                  </p>
                  <a class="read-more" href="./#/HealthLine">
                    <h6>See More</h6>
                    <img
                      srcset="
                        @/assets/homepage/next.png,
                        @/assets/homepage/next@2x.png 2x,
                        @/assets/homepage/next@3x.png 3x
                      "
                    />
                  </a>
                  <!-- <h6 class="skill-title">Skills</h6>
                  <b-row align="left">
                    <b-col>
                      <div class="skill">Project Management</div>
                      <div class="skill">Ideation</div>
                      <div class="skill">Research</div>
                      <div class="skill">UI/UX Design</div>
                    </b-col>
                  </b-row> -->
                </b-col>
              </b-row>

              <b-row class="projectRow my-3">
                <b-col lg="5" align="left">
                  <a href="./#/Fiti">
                    <img
                      class="screenshot"
                      srcset="
                        @/assets/homepage/dark.png,
                        @/assets/homepage/dark@2x.png 2x,
                        @/assets/homepage/dark@3x.png 3x
                      "
                    />
                    
                  </a>
                </b-col>
                <b-col lg="7" align="left">
                  <h3 class="project-title">Fiti</h3>
                  <h4 class="category">Passion Project - Summer 2019</h4>
                  <!-- <h5 class="tag-line">A fitness app for people with paraplegia.</h5> -->
                  <p class="description">
                    Fiti provides accessible, affordable, and interesting
                    workouts that are easy to incorperate in all lifestyles.
                  </p>
                  <a class="read-more" href="./#/Fiti">
                    <h6>See more</h6>
                    <img
                      srcset="
                        @/assets/homepage/next.png,
                        @/assets/homepage/next@2x.png 2x,
                        @/assets/homepage/next@3x.png 3x
                      "
                    />
                  </a>
                  <!-- <h6 class="skill-title">Skills</h6>
                  <b-row align="left">
                    <b-col>
                      <div class="skill">Research</div>
                      <div class="skill">Personas</div>
                      <div class="skill">UI/UX Design</div>
                      <div class="skill">Product Design</div>
                    </b-col>
                  </b-row> -->
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "../assets/variables.scss";
.home {
  //Apply bottom margin to all columns in mobile
  @media all and (max-width: 767px) {
    [class^="col-sm-"] {
      margin-bottom: 20px;
    }
  }

  .home {
    @media (min-width: $screen-md) {
      margin-top: 141px;
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
    margin-top: 275px;
    @media (max-width: $screen-sm) {
      margin-top: 100px;
    }
  }

  .name-greeting {
    font-size: 32px !important;
    font-weight: 400 !important;
    color: $primary !important;
    letter-spacing: 0.19px !important;
    line-height: 37px !important;
    opacity: 0.5 !important;
  }

  .name {
      font-size: 35px !important;
      font-weight: 500 !important;
      letter-spacing: 0.21px !important;
      line-height: 37px !important;
      color: $primary !important;
    }

  .introduction {
    font-size: 28;
    font-weight: 400;
    margin-bottom: 360px;
    @media (max-width: $screen-md) {
      margin-bottom: 30px;
    }
    .bolded {
      font-family: AvenirBold, sans-serif;
    }
  }

  #Projects {
    padding-top: 8em;
    @media (max-width: $screen-sm) {
      padding-top: 4em;
    }

    .view-work {
      .project-header {
        font-weight: 500;
        color: $primary;
        font-size: 19px;
        line-height: 25px;
        letter-spacing: 0.16px;
        margin-bottom: 15px;
        -webkit-transition: 0.5s all ease;
        -moz-transition: 0.5s all ease;
        transition: 0.5s all ease;
      }
      .arrow-down {
        transform: rotate(90deg);
        width: 19px;
        height: 32px;
        -webkit-transition: 0.5s all ease;
        -moz-transition: 0.5s all ease;
        transition: 0.5s all ease;
      }
    }
    .view-work:hover {
        margin-top: -1px;
        text-decoration: none;
      .project-header {
        font-size: 21px !important;
      }
      .arrow-down {
        width: 21px;
        height: 35px;
        margin-bottom: -3px;
      }
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
        h6 {
          float: left;
          color: $primary;
          font-size: 24px;
          font-weight: 500;
          -webkit-transition: 0.5s all ease;
          -moz-transition: 0.5s all ease;
          transition: 0.5s all ease;
        }
        img {
          position: relative;
          left: 6px;
          -webkit-transition: 0.5s all ease;
          -moz-transition: 0.5s all ease;
          transition: 0.5s all ease;
        }
      }
      .description {
        font-size: 25px;
        letter-spacing: 0.13px;
        line-height: 33px;
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

.projectRow {
  .read-more:hover {
    margin-top: -2px;
    text-decoration: none;
    h6 {
      font-size: 26px !important;
    }
    img {
      width: 14px;
      height: 22px;
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
