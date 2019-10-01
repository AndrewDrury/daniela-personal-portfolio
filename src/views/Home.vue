<template>
  <div class="home">
    <b-container fluid class="verticalCenter">
      <b-row>
        <b-col>
          <b-row class="top-space">
            <b-col class="text-left">
              <h1 class="name-greeting">Hi! I’m Daniela Ornelas.</h1>
            </b-col>
          </b-row>
          <b-row class="my-5">
            <b-col md="9" class="text-left">
              <h4 class="introduction">
                I’m an empathetic
                <b class="bolded" style="font-size: 30px">UX designer</b> who
                uses psychology and design to understand people and improve
                their interactions with technology. Living and learning in
                Toronto, Canada.
                <img
                  srcset="@/assets/homepage/maple-leaf/Shape.png, @/assets/homepage/maple-leaf/Shape@2x.png 2x, @/assets/homepage/maple-leaf/Shape@3x.png 3x"
                />
              </h4>
            </b-col>
          </b-row>
          <b-row id="Projects" name="Projects" style="margin-top: 8em">
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
                <b-col md="5" align="left">
                  <!-- <a href="./ePaid"> -->
                  <img class="screenshot" src="@/assets/homepage/ePaid.png" />
                  <!-- </a> -->
                </b-col>
                <b-col md="7" align="left">
                  <h3 class="project-title">e-Paid</h3>
                  <h4 class="category">TD Lab</h4>
                  <h5 class="tag-line">Help freelancers get paid faster.</h5>
                  <p class="description">
                    Uses Interac’s e-transfer API to help our user with easy
                    invoicing.
                  </p>
                  <!-- <a class="read-more" href="./ePaid">
                    Read More
                    <img
                      srcset="
                        @/assets/homepage/next.png,
                        @/assets/homepage/next@2x.png 2x,
                        @/assets/homepage/next@3x.png 3x
                      "
                    />
                  </a>-->
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
                <b-col class="desktop" md="7" align="left">
                  <h3 class="project-title">Fiti</h3>
                  <h4 class="category">Passion Project</h4>
                  <h5 class="tag-line">A fitness app for people with paraplegia.</h5>
                  <p class="description">
                    Fiti provides accessible, affordable, and interesting
                    workouts that are easy to incorperate in all lifestyles.
                  </p>
                  <!-- <a class="read-more" href="./Fiti">
                        Read More
                        <img
                          srcset="
                            @/assets/homepage/next.png,
                            @/assets/homepage/next@2x.png 2x,
                            @/assets/homepage/next@3x.png 3x
                          "
                        />
                  </a>-->
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
                <b-col md="5" align="right">
                  <!-- <a href="./Fiti"> -->
                  <img
                    class="screenshot"
                    srcset="@/assets/homepage/dark.png, @/assets/homepage/dark@2x.png 2x, @/assets/homepage/dark@3x.png 3x"
                  />
                  <!-- </a> -->
                </b-col>
                <b-col class="mobile" align="left">
                  <h3 class="project-title">Fiti</h3>
                  <h4 class="category">Passion Project</h4>
                  <h5 class="tag-line">A fitness app for people with paraplegia.</h5>
                  <p class="description">
                    Fiti provides accessible, affordable, and interesting
                    workouts that are easy to incorperate in all lifestyles.
                  </p>
                  <!-- <a class="read-more" href="./Fiti">
                        Read More
                        <img
                          srcset="
                            @/assets/homepage/next.png,
                            @/assets/homepage/next@2x.png 2x,
                            @/assets/homepage/next@3x.png 3x
                          "
                        />
                  </a>-->
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
                <b-col md="5" align="left">
                  <!-- <a href="./HealthLine"> -->
                  <img
                    class="screenshot"
                    srcset="@/assets/HealthLine-info/Group10.png, @/assets/HealthLine-info/Group10@2x.png 2x, @/assets/HealthLine-info/Group10@3x.png 3x"
                  />
                  <!-- </a> -->
                </b-col>
                <b-col md="7" align="left">
                  <h3 class="project-title">HealthLine</h3>
                  <h4 class="category">RU Hacks</h4>
                  <h5 class="tag-line">Receive a diagnosis of your symptoms.</h5>
                  <p class="description">
                    A diagnosis is made through computer vision and machine
                    learning, and SMS.
                  </p>
                  <!-- <a class="read-more" href="./HealthLine">
                    Read More
                    <img
                      srcset="
                        @/assets/homepage/next.png,
                        @/assets/homepage/next@2x.png 2x,
                        @/assets/homepage/next@3x.png 3x
                      "
                    />
                  </a>-->
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
</template>

<style lang="scss">
@import "../assets/variables.scss";

//Apply bottom margin to all columns in mobile
@media all and (max-width: 767px) {
  [class^="col-sm-"] {
    margin-bottom: 20px;
  }
}

.content-left {
  @media (max-width: $screen-sm) {
    width: 100%;
  }
}

.pic-right {
  float: right;
  display: inline;

  width: 45%;
  @media (max-width: $screen-sm) {
    width: 100%;
  }

  .b-col {
    // @media (min-width: $screen-md) {
    //   width: 41.67%;
    // }
  }
}

.top-space {
  margin-top: 11em;
  @media (max-width: $screen-sm) {
    margin-top: 11em;
  }
}

.name-greeting {
  font-size: 40px;
  font-weight: 500;
}

.introduction {
  font-size: 28;
  color: $primary;
  font-weight: 400;
  .bolded {
    font-family: AvenirBold, sans-serif;
    color: $primary;
  }
}

.screenshot {
  width: 100%;
  @media (min-width: $screen-sm) {
    width: 70%;
  }
  @media (max-width: $screen-lg) {
    padding-bottom: 60px;
  }
}
#Projects {
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
      //width: 100%;
      padding-right: 32px;
      align: left;
      display: inline-block;
      font-size: 17px;
      font-weight: 500;
      color: $gray;
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
