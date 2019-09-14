<template>
  <div id="app">
    
    <b-navbar toggleable="md" class="d-fixed">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand to="/">D</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items, collapsed on mobile -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="tab" href="#projects" right>projects</b-nav-item>
          <b-nav-item class="tab" right>resume</b-nav-item>
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
</template>

<style lang="scss">
$primary: #814CF3;

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-left: 12%;
  margin-right: 12%;
  margin-top: 2.5em;
}

.tab {
  margin-left: 0.75em;
  font-size: 1.25em;
}
</style>

<script lang="ts">
import Vue from 'vue'
// @ is an alias to /src

export default Vue.extend({
  name: 'home'
})
</script>