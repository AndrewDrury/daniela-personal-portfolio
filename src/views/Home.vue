<template>
  <div class="home">
    <b-container fluid class="verticalCenter">
      <b-row>
        <b-col>
          <b-row style="margin-top: 11em">
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
                <b-col sm="4" class="mx-3" align="left">
                  <a href="/ePaid">
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
                  <a href="/ePaid">Read More</a>
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
                <b-col sm="4" class="pic-right img-fluid float-right mx-3" align="right">
                  <a href="/Fiti">
                    <img
                      class="screenshot"
                      srcset="@/assets/homepage/dark.png, @/assets/homepage/dark@2x.png 2x, @/assets/homepage/dark@3x.png 3x"
                    />
                  </a>
                </b-col>
                <b-col class="listing listing-left float-left pull-left" sm="7" align="left">
                  <h3>Fiti</h3>
                  <h4>Passion Project</h4>
                  <h5>A fitness app for people with paraplegia.</h5>
                  <p>
                    Fiti provides accessible, affordable, and interesting
                    workouts that are easy to incorperate in all lifestyles.
                  </p>
                  <a href="/Fiti">Read More</a>
                  <h6>Skills</h6>
                  <b-row align="left">
                    <b-col>Research</b-col>
                    <b-col>Personas</b-col>
                    <b-col>UI/UX Design</b-col>
                    <b-col>Product Design</b-col>
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

    .listing {
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

      .b-row {
        .b-col {
          width: 100%;
          align: left;
          display: inline-block;
        }
      }
    }

    .listing-left {
      float: left !important;
      //display: inline;
      margin-left: 0px;
    }

    .pic-right {
      float: right !important;
      //display: inline;
      margin-right: 0px;
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
