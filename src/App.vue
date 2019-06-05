<template>
  <v-app class="entire-app">
    <v-toolbar flat dark fixed color="transparent">
      <v-toolbar-side-icon :style="{color: computedColor}"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :style="{color: computedColor}" flat @click="scrollTo('#home')">Main</v-btn>
        <v-btn :style="{color: computedColor}" flat @click="scrollTo('#introduction')">Who Am I</v-btn>
        <v-btn :style="{color: computedColor}" flat @click="scrollTo('#projects')">PROJECTS</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container id="home" fluid class="pa-0 pink" style="height:100%;height:100vh;">
        <v-layout
          :style="{opacity: 1-(offsetTop/viewportHeight)}"
          row
          wrap
          style="height:100%; position:relative"
          justify-center
        >
          <v-flex class="white--text perspective-text" xs12 md4>
            <div class="perspective-item">
              <p></p>
              <p>Business</p>
            </div>
            <div class="perspective-item">
              <p>Business</p>
              <p>Majored</p>
            </div>
            <div class="perspective-item">
              <p>Majored</p>
              <p>Happy</p>
            </div>
            <div class="perspective-item">
              <p>Happy</p>
              <p>Coder</p>
            </div>
            <div class="perspective-item">
              <p>coder</p>
              <p></p>
            </div>
          </v-flex>
          <div class="scroll-icon">
            <svg
              width="24px"
              height="26px"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              style="fill-rule: evenodd; clip-rule: evenodd; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 1.5;"
            >
              <path
                id="wheel"
                d="M123.359,89.775l0,52.843"
                style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 25px;"
              ></path>
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 25px;"
              ></path>
            </svg>
            <div style="text-align:center">
              <svg
                preserveAspectRatio="xMidYMin"
                fill="white"
                version="1.1"
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 129 129"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                enable-background="new 0 0 129 129"
              >
                <g>
                  <path
                    d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div v-if="$vuetify.breakpoint.mdAndUp" class="copyright">© 2019 TaewooKim</div>
        </v-layout>
        <v-layout v-scroll="onScroll" column justify-center align-center></v-layout>
      </v-container>

      <v-container id="introduction" class="white fluid pa-0" style="height:100%;height:100vh;">
        <v-layout class="py-3 px-4" style="height:100%" align-center justify-center>
          <v-flex xs12 md10 class="introduction">
            <v-layout row wrap>
              <v-flex class="introduction-1 mb-1" xs12 md3>Introduction</v-flex>
              <v-flex class="introduction-2" xs12 md9>
                <p
                  class="mb-3"
                >안녕하세요, 김태우입니다. 저는 세상을 긍정적인 방향으로 변화시키는 데 기여할 수 있는 부분을 찾아 다양한 분야에 도전하고 있습니다.</p>
              </v-flex>
              <v-flex class="introduction-1 mb-1" xs12 md3>Knowledge</v-flex>
              <v-flex class="introduction-2" xs12 md9>
                <p class="mb-1 subhead">Business Related</p>
                <p class="mb-2 pl-4">- Entrepreneurship, Consumer Behavior, Marketing, Finance</p>
                <p class="mb-1 subhead">Web, App Development</p>
                <p class="mb-2 pl-4">- HTML, CSS, Javascript(vue.js, node.js), Firebase, Flutter</p>
                <p class="mb-1 subhead">Data Analysis</p>
                <p class="mb-3 pl-4">- Python(Pandas, Crawling), Data Visualization</p>
              </v-flex>
              <v-flex class="introduction-1 mb-1" xs12 md3>Interested</v-flex>
              <v-flex class="introduction-2" xs12 md9>
                <p class>Latest Technologies / Content Market / Consumer Behavior / UX, UI</p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container
        fluid
        id="projects"
        class="pa-0"
        style="background-color:#3f51b5;min-height:100%;min-height:100vh;"
      >
        <v-layout
          style="height:100%;position:relative"
          class="white--text py-5 px-4"
          align-center
          justify-center
        >
          <v-flex xs12 md10>
            <v-layout>
              <v-flex class="mt-3 mb-4 xs12 projects-intro">
                <p class="mb-0">
                  PROJECTS
                  <small>&</small>
                </p>
                <p>EXPERIENCE</p>
              </v-flex>
            </v-layout>
            <v-layout row wrap style="position:relative;">
              <v-flex class="mb-3" xs12 md3>
                <div class="project-title">Project 1</div>
                <div>
                  <v-chip small text-color="white" color="#f44336">
                    <v-icon small>label</v-icon>BIZ
                  </v-chip>
                  <v-chip small text-color="white" color="#673ab7">
                    <v-icon small>label</v-icon>DEV
                  </v-chip>
                  <v-chip small text-color="white" color="#03a9f4">
                    <v-icon small>label</v-icon>DATA
                  </v-chip>
                </div>
              </v-flex>
              <v-flex xs12 md9 class="project-body">
                <div class="project-body"></div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ScrollOut from "scroll-out";
export default {
  name: "App",
  components: {},
  data() {
    return {
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
      this.$vuetify.goTo(target, this.options);
    }
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
  },
  created: function() {
    this.viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
  },
  mounted() {
    this.so = ScrollOut({
      threshold: 0.2,
      scope: this.$el,
      once: true
    });
  },
  destroyed() {
    this.so.teardown();
  }
};
</script>

<style>
body {
  overflow: hidden;
}
.perspective-text {
  font-family: Arial;
  font-size: 50px;
  font-weight: 900;
  letter-spacing: -2px;
  text-transform: uppercase;
  /* cursor: pointer; */
  user-select: none;
  /* margin-left: -30px; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -50%);
}
.perspective-item {
  height: 50px;
  overflow: hidden;
  position: relative;
}
.perspective-item p {
  margin: 0;
  height: 50px;
  line-height: 50px;
  animation: pers-text ease 7s infinite;
  /* transition: all 0.6s ease-in-out; */
}
.perspective-item:nth-child(odd) {
  transform: skew(60deg, -30deg) scaleY(0.667);
}
.perspective-item:nth-child(even) {
  transform: skew(0deg, -30deg) scaleY(1.333);
}
/* .perspective-text:hover p {
  transform: translate(0, -50px);
} */
.perspective-item:nth-child(1) {
  left: 29px;
}
.perspective-item:nth-child(2) {
  left: 58px;
}
.perspective-item:nth-child(3) {
  left: 86px;
}
.perspective-item:nth-child(4) {
  left: 115px;
}
.perspective-item:nth-child(5) {
  left: 144px;
}
.scroll-icon {
  position: absolute;
  left: 50%;
  top: 90%;
  /* bottom: 4%; */
  margin-left: -12px;
}
.scroll-icon svg #wheel {
  animation: scroll ease 1.5s infinite;
}
.copyright {
  color: white;
  position: absolute;
  bottom: 5%;
  right: 3%;
}
.introduction {
}
.introduction-1 {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  color: #424242;
}
.introduction-2 {
  font-family: "Noto Serif KR", serif;
  font-size: 16px;
  color: #616161;
}
.subhead {
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  margin-left: 10px;
}
.projects-intro {
  font-size: 35px;
  line-height: 35px;
  letter-spacing: 1px;
}
.project-title {
}
.project-body {
  background-color: white;
  width: 100px;
  height: 100px;
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(65px);
  }
}
@keyframes pers-text {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
}
</style>

