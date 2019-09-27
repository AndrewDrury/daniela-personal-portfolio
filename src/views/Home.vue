<template>
  <div class="home">
    <b-container fluid class="verticalCenter">
      <b-row>
        <b-col>
          <b-row class="top-space">
            <b-col class="text-left">
              <h1 style="font-size:2.5em; font-weight:500;">Hi! I’m Daniela Ornelas.</h1>
            </b-col>
          </b-row>
          <b-row class="my-5">
            <b-col md="8" class="text-left">
              <h4 class="purple" style="font-size:1.75em">
                I’m an empathetic
                <b class="purple">UX designer</b> who uses psychology and design
                to understand people and improve their interactions with
                technology. Living and learning in Toronto, Canada.
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
                    transform="rotate(270deg)"
                    srcset="@/assets/homepage/next.png, @/assets/homepage/next@2x.png 2x, @/assets/homepage/next@3x.png 3x"
                  />
                </h2>
              </a>
              <b-row class="projectRow my-3">
                <b-col md="5" align="left">
                  <a href="./ePaid">
                    <img class="screenshot" src="@/assets/iPhone.png" />
                  </a>
                </b-col>
                <b-col md="7" align="left">
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
                    <b-col class="skill">User Interviews</b-col>
                    <b-col class="skill">Personas</b-col>
                    <b-col class="skill">Project Management</b-col>
                    <b-col class="skill">UI/UX Design</b-col>
                  </b-row>
                </b-col>
              </b-row>
              <!-- <b-row class="projectRow my-3">
                <b-col md="5" class="pic-right" align="right">
                  <a href="./Fiti">
                    <img
                      class="screenshot"
                      srcset="@/assets/homepage/dark.png, @/assets/homepage/dark@2x.png 2x, @/assets/homepage/dark@3x.png 3x"
                    />
                  </a>
                </b-col>
                <b-col md="7" align="left">
                  <h3>Fiti</h3>
                  <h4>Passion Project</h4>
                  <h5>A fitness app for people with paraplegia.</h5>
                  <p>
                    Fiti provides accessible, affordable, and interesting
                    workouts that are easy to incorperate in all lifestyles.
                  </p>
                  <a href="./Fiti">
                    Read More
                    <img
                      srcset="@/assets/homepage/next.png, @/assets/homepage/next@2x.png 2x, @/assets/homepage/next@3x.png 3x"
                    />
                  </a>
                  <h6>Skills</h6>
                  <b-row align="left">
                    <b-col>Research</b-col>
                    <b-col>Personas</b-col>
                    <b-col>UI/UX Design</b-col>
                    <b-col>Product Design</b-col>
                  </b-row>
                </b-col>
              </b-row>-->
              <b-row class="projectRow my-3">
                <b-col>
                  <b-row md="5" class="pic-right">
                    <b-col align="right">
                      <a href="./Fiti">
                        <img
                          class="screenshot"
                          srcset="@/assets/homepage/dark.png, @/assets/homepage/dark@2x.png 2x, @/assets/homepage/dark@3x.png 3x"
                        />
                      </a>
                    </b-col>
                  </b-row>
                  <b-row md="7" align="left">
                    <b-col>
                      <h3 class="project-title">Fiti</h3>
                      <h4 class="category">Passion Project</h4>
                      <h5 class="tag-line">A fitness app for people with paraplegia.</h5>
                      <p class="description">
                        Fiti provides accessible, affordable, and interesting
                        workouts that are easy to incorperate in all lifestyles.
                      </p>
                      <a class="read-more" href="./Fiti">
                        Read More
                        <img
                          srcset="@/assets/homepage/next.png, @/assets/homepage/next@2x.png 2x, @/assets/homepage/next@3x.png 3x"
                        />
                      </a>
                      <h6 class="skill-title">Skills</h6>
                      <b-row align="left">
                        <b-col class="skill">Research</b-col>
                        <b-col class="skill">Personas</b-col>
                        <b-col class="skill">UI/UX Design</b-col>
                        <b-col class="skill">Product Design</b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="projectRow my-3">
                <b-col md="5" align="left">
                  <a href="./HealthLine">
                    <img
                      class="screenshot"
                      srcset="@/assets/HealthLine-info/Group10.png, @/assets/HealthLine-info/Group10@2x.png 2x, @/assets/HealthLine-info/Group10@3x.png 3x"
                    />
                  </a>
                </b-col>
                <b-col md="7" align="left">
                  <h3 class="project-title">HealthLine</h3>
                  <h4 class="category">RU Hacks</h4>
                  <h5 class="tag-line">Receive a diagnosis of your symptoms.</h5>
                  <p class="description">
                    A diagnosis is made through computer vision and machine
                    learning, and SMS.
                  </p>
                  <a class="read-more" href="./HealthLine">
                    Read More
                    <img
                      srcset="@/assets/homepage/next.png, @/assets/homepage/next@2x.png 2x, @/assets/homepage/next@3x.png 3x"
                    />
                  </a>
                  <h6 class="skill-title">Skills</h6>
                  <b-row align="left">
                    <b-col class="skill">Project Management</b-col>
                    <b-col class="skill">Ideation</b-col>
                    <b-col class="skill">Research</b-col>
                    <b-col class="skill">UI/UX Design</b-col>
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

.pic-right {
  float: right;
  margin-right: 40px;
  margin-bottom: 20px;
  display: inline;
}

.top-space {
  margin-top: 2em;
  @media (min-width: $screen-sm) {
    margin-top: 11em;
  }
}

.purple {
  color: $primary;
}
.screenshot {
  width: 100%;
  @media (min-width: $screen-sm) {
    width: 70%;
  }
}
#Projects {
  .project-header {
    font-weight: 500;
    color: $primary;
    font-size: 34px;
  }
  .projectRow {
    display: flex;
    justify-content: center;
    align-items: center;

    .project-title {
      font-size: 30px;
      font-weight: 500;
    }
    .category {
      color: $blackOpac65;
      font-size: 19px;
      font-weight: 500;
    }
    .tag-line {
      font-size: 25px;
      font-weight: 500;
    }
    .skill-title {
      font-weight: 500;
      font-size: 19px;
      color: $gray;
    }
    .read-more {
      color: $purple;
      font-size: 24px;
      font-weight: 500;
    }
    .description {
      font-size: 25px;
    }
    .skill {
      width: 100%;
      align: left;
      display: inline-block;
      font-size: 17px;
      font-weight: 500;
      color: $gray;
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
