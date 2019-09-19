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
                <b class="purple">UX designer</b> who uses psychology and design to understand people and improve their interactions with technology. Living and learning in Toronto, Canada.
              </h4>
            </b-col>
          </b-row>
          <b-row style="margin-top: 8em">
            <b-col>
              <section id="Projects">
                <h2 class="mb-5" to="#Projects"><b class="purple">My Projects</b></h2>
                <b-row>
                  <b-col sm="4" class="mx-3" align="left">
                    <img class="screenshot" src="@/assets/iPhone.png">
                  </b-col>
                  <b-col class="listing" sm="7" align="left">
                    <h3>e-Paid</h3>
                    <p>TD Lab</p>
                    <h5>Help freelancers get paid faster.</h5>
                    <p>Uses Interac’s e-transfer API to help our user with easy invoicing.</p>
                    <a href="">Read More</a>
                    <p>Skills</p>
                    <b-row align="left">
                      <b-col class="skill">User Interviews</b-col>
                      <b-col class="skill">Personas</b-col>
                      <b-col class="skill">Project Management</b-col>
                      <b-col class="skill">UI/UX Design</b-col>
                    </b-row>
                  </b-col>
                  
                </b-row>
              </section>
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
.screenshot{
    width: 100%;
  }
.skill{
  width: 100%;
  align: left;
  display:inline-block
}

@media (max-width: $screen-sm) {
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
