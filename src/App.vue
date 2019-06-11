<template>
  <v-app class="entire-app">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      
    >
      <v-list dense>
        <v-list-tile @click="scrollTo('#home')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Main</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="scrollTo('#introduction')">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Who Am I</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="scrollTo('#projects')">
          <v-list-tile-action>
            <v-icon>list</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Projects</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat dark fixed color="transparent">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" :style="{color: computedColor}"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-if="$route.name != 'ProjectDetail'">
        <v-btn :style="{color: computedColor}" flat @click="scrollTo('#home')">Main</v-btn>
        <v-btn :style="{color: computedColor}" flat @click="scrollTo('#introduction')">Who Am I</v-btn>
        <v-btn :style="{color: computedColor}" flat @click="scrollTo('#projects')">PROJECTS</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-layout v-show="false" v-scroll="onScroll" column justify-center align-center></v-layout>

    <v-content>
      <router-view :offsetTop="offsetTop" :viewportHeight="viewportHeight"></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer:false,
      viewportHeight: 0,
      offsetTop: 0,
      options: {
        duration: 700,
        offset: 0,
        easing: "easeInOutQuad"
      }
    };
  },
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.documentElement.scrollTop;
    },
    scrollTo(target) {
      this.drawer = false;
      // if (target == "#home") {
      //   this.$vuetify.goTo(0, this.options);
      // } else if (target == "#introduction") {
      //   this.$vuetify.goTo(this.viewportHeight, this.options);
      // } else if (target == "#projects") {
      //   this.$vuetify.goTo(this.viewportHeight * 2, this.options);
      // }
      this.$vuetify.goTo(target, this.options);
    }
  },
  created: function() {
    this.viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
  },
  computed: {
    computedColor() {
      if (this.offsetTop >= 2 * this.viewportHeight - 4) {
        return "white";
      }
      if (this.offsetTop >= this.viewportHeight - 4) {
        return "black";
      }
    }
  }
};
</script>

<style>
</style>

