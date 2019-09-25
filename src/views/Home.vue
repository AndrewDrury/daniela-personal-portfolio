<template>
  <div class="home">
    <b-container fluid class="verticalCenter">
      <b-row>
        <b-col>
          <b-row class="top-space">
            <b-col align="left">
              <h1 style="font-size:2.5em; font-weight:500;">
                <b>Hi! I’m Daniela Ornelas.</b>
              </h1>
            </b-col>
          </b-row>
          <b-row class="my-5">
            <b-col class="col-8" align="left">
              <h4 class="purple" style="font-size:1.75em">
                I’m an empathetic
                <b class="purple">UX designer</b> who uses psychology and design
                to understand people and improve their interactions with
                technology. Living and learning in Toronto, Canada.
              </h4>
            </b-col>
          </b-row>
          <b-row id="Projects" name="Projects" style="margin-top: 8em">
            <b-col>
              <a>
                <h2 class="mb-5" href="#Projects">
                  <b class="purple">My Projects</b>
                </h2>
              </a>
              <b-row class="projectRow my-3">
                <b-col sm="4" class="mr-3" align="left">
                  <a href="./ePaid">
                    <img class="screenshot" src="@/assets/iPhone.png" />
                  </a>
                </b-col>
                <b-col class="listing" sm="7" align="left">
                  <h3>e-Paid</h3>
                  <h4>TD Lab</h4>
                  <h5>Help freelancers get paid faster.</h5>
                  <p>
                    Uses Interac’s e-transfer API to help our user with easy
                    invoicing.
                  </p>
                  <a href="./ePaid">Read More</a>
                  <h6>Skills</h6>
                  <b-row align="left">
                    <b-col class="skill">User Interviews</b-col>
                    <b-col class="skill">Personas</b-col>
                    <b-col class="skill">Project Management</b-col>
                    <b-col class="skill">UI/UX Design</b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="projectRow my-3">
                <b-col sm="4" class="pic-right" align="right">
                  <a href="./Fiti">
                    <img
                      class="screenshot"
                      srcset="@/assets/homepage/dark.png, @/assets/homepage/dark@2x.png 2x, @/assets/homepage/dark@3x.png 3x"
                    />
                  </a>
                </b-col>
                <b-col class="listing listing-left" sm="7" align="left">
                  <h3>Fiti</h3>
                  <h4>Passion Project</h4>
                  <h5>A fitness app for people with paraplegia.</h5>
                  <p>
                    Fiti provides accessible, affordable, and interesting
                    workouts that are easy to incorperate in all lifestyles.
                  </p>
                  <a href="./Fiti">Read More</a>
                  <h6>Skills</h6>
                  <b-row align="left">
                    <b-col>Research</b-col>
                    <b-col>Personas</b-col>
                    <b-col>UI/UX Design</b-col>
                    <b-col>Product Design</b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="my-3">
                <b-col class="vertically-center">
                  <b-row sm="4" class="pic-right">
                    <b-col align="right">
                      <a href="./Fiti">
                        <img
                          class="screenshot"
                          srcset="@/assets/homepage/dark.png, @/assets/homepage/dark@2x.png 2x, @/assets/homepage/dark@3x.png 3x"
                        />
                      </a>
                    </b-col>
                  </b-row>
                  <b-row sm="7" align="left">
                    <b-col>
                      <h3>Fiti</h3>
                      <h4>Passion Project</h4>
                      <h5>A fitness app for people with paraplegia.</h5>
                      <p>
                        Fiti provides accessible, affordable, and interesting
                        workouts that are easy to incorperate in all lifestyles.
                      </p>
                      <a href="./Fiti">Read More</a>
                      <h6>Skills</h6>
                      <b-row>
                        <b-col>Research</b-col>
                        <b-col>Personas</b-col>
                        <b-col>UI/UX Design</b-col>
                        <b-col>Product Design</b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="projectRow my-3">
                <b-col sm="4" class="mr-3" align="left">
                  <a href="./HealthLine">
                    <img
                      class="screenshot"
                      srcset="@/assets/HealthLine-info/Group4.png, @/assets/HealthLine-info/Group4@2x.png 2x, @/assets/HealthLine-info/Group4@3x.png 3x"
                    />
                  </a>
                </b-col>
                <b-col class="listing" sm="7" align="left">
                  <h3>HealthLine</h3>
                  <h4>RU Hacks</h4>
                  <h5>Receive a diagnosis of your symptoms.</h5>
                  <p>
                    A diagnosis is made through computer vision
                    and machine learning, and SMS.
                  </p>
                  <a href="./HealthLine">Read More</a>
                  <h6>Skills</h6>
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

.pic-right {
  float: right;
  margin-right: 40px;
  margin-bottom: 20px;
  display: inline;
}
.vertically-center {
  // display: inline-block;
  // vertical-align: middle;
  // line-height: normal;
}

.top-space {
  @media (min-width: $screen-sm) {
    margin-top: 11em;
  }
}

.purple {
  color: $primary;
}
.screenshot {
  width: 100%;
}
#Projects {
  .projectRow {
    display: flex;
    justify-content: center;
    align-items: center;

    .h3 {
    }
    .h4 {
    }
    .h5 {
    }
    .h6 {
    }
    .a {
    }
    .p {
    }
    .listing {
      .b-row {
        .b-col {
          width: 100%;
          align: left;
          display: inline-block;
        }
      }
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
