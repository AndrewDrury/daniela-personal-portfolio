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
          <b-row style="margin-top: 8em">
            <b-col>
              <a id="Projects" name="Projects">
                <h2 class="mb-5" href="#Projects">
                  <b class="purple">My Projects</b>
                </h2>
                <b-row>
                  <b-col class="mx-3" align="left">
                    <a href="/ePaid">
                      <img src="@/assets/iPhone.png" height="500px" />
                    </a>
                  </b-col>
                </b-row>
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
$primary: #814cf3;

.purple {
  color: $primary;
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
