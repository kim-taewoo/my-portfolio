<template>
  <div>
    <!-- Main section -->
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
        <div style="position:absolute; bottom: 90px; right: 5%;">
          <ul style="list-style-type:none;">
            <li class="mb-3">
              <a href="https://github.com/kim-taewoo?tab=repositories">
                <img width="24" height="24" :src="require('@/assets/icons/github-logo.png')" alt>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100009269043820&ref=bookmarks">
                <img width="24" height="24" :src="require('@/assets/icons/facebook-logo.png')" alt>
              </a>
            </li>
          </ul>
        </div>
      </v-layout>
    </v-container>

    <!-- Introduction section -->
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

    <!-- Projects section -->
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
              <v-divider class="white"></v-divider>
            </v-flex>
          </v-layout>
          <v-layout justify-center row wrap style="position:relative;">
            <v-flex xs12 md9 class="project-wrap px-2">
              <v-card data-scroll class="mb-5" v-for="(project, index) in projects" :key="index">
                <v-img :src="require(`@/assets/pictures/${project.thumbnail}`)" aspect-ratio="2.2"></v-img>

                <v-card-title primary-title>
                  <div>
                    <h3 class="mb-0">{{project.title}}</h3>
                    <div class="grey--text text--darken-3">{{project.date}}</div>
                    <div class="my-2">{{project.text}}</div>
                    <div v-if="project.link">
                      <a :href="project.link">관련 자료 링크</a>
                    </div>
                  </div>
                </v-card-title>
                <div class="mx-2 pb-2">
                  <v-chip
                    v-for="(label, index) in project.labels"
                    :key="index"
                    small
                    text-color="white"
                    :color="label.color"
                  >
                    <v-icon small>label</v-icon>
                    {{label.text}}
                  </v-chip>
                  <!-- <v-chip small text-color="white" color="#673ab7">
                  <v-icon small>label</v-icon>DEV
                </v-chip>
                <v-chip small text-color="white" color="#03a9f4">
                  <v-icon small>label</v-icon>DATA
                  </v-chip>-->
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ScrollOut from "scroll-out";
export default {
  props: ["offsetTop", "viewportHeight"],
  name: "App",
  components: {},
  data() {
    return {
      projects: [
        {
          title: "LG Chemical Data visualization",
          date: "2019. 06.",
          thumbnail: "equity_multiplier.png",
          text:
            "LG Chemical 과 경쟁사들을 다양한 항목에 대해 서로 비교하는 시각화를 수행했습니다.",
          link:
            "https://github.com/kim-taewoo/python-data-analysis/tree/master/lgchemical",
          labels: [
            {
              text: "DATA",
              color: "#03a9f4"
            }
          ]
        },
        {
          title: "HBS Field Trip",
          date: "2019. 05.",
          text:
            "하버드 경영대학원 재학생들과 서울에서 만나, 그들이 진행중인 프로젝트에 의견을 보태고, 이후 이야기를 나누는 시간을 가졌습니다.",
          thumbnail: "harvard2.jpg",
          labels: [
            {
              text: "BIZ",
              color: "#f44336"
            }
          ]
        },
        {
          title: "Amore Data Visualization",
          date: "2019. 05.",
          thumbnail: "visual.png",
          text:
            "데이터시각화 수업 과제로 아모레의 화장품 데이터를 시각화했고, 최고점수를 받았습니다. ",
          labels: [
            {
              text: "DATA",
              color: "#03a9f4"
            }
          ]
        },

        {
          title: "Global Camp to CES, Las Vegas",
          date: "2019. 01.",
          thumbnail: "ces1.jpg",
          text:
            "삼성전자의 협력 속에 진행된 글로벌캠프에 선발되어, 라스베가스에서 열린 CES 에 참석하고 실리콘밸리의 Facebook, Google 과 삼성에 방문했습니다. 4개월 넘게 진행된 프로젝트 동안 삼성이 밀레니얼에게 어떻게 다가가야 하는지 연구하고 성공적으로 발표했습니다. 모든 과정을 영상으로 남기는 프로젝트도 담당해 촬영과 기획을 맡았습니다.",
          labels: [
            {
              text: "BIZ",
              color: "#f44336"
            }
          ]
        },
        {
          title: "창업비즈니스아이디어 대회 수상",
          date: "2018. 12.",
          thumbnail: "dotrait1.png",
          text:
            "팀을 이뤄 교내 창업비즈니스아이디어 대회에 참가했고, 직접 웹으로 프로토타입을 만들어 아이디어를 발표했습니다. 학생 투표단과 심사위원들을 통해 여러 피드백을 받았고, 전체 3위에 해당하는 상을 받았습니다.",
          link: "https://new-dotrait.firebaseapp.com/",
          labels: [
            {
              text: "BIZ",
              color: "#f44336"
            },
            {
              text: "DEV",
              color: "#673ab7"
            }
          ]
        },
        {
          title: "'멋쟁이사자처럼' 홈페이지 기획, 지휘 (동아리 최종프로젝트)",
          date: "2018. 11.",
          thumbnail: "likelion1.png",
          text:
            "한 학기동안 가르친 내용을 바탕으로 동아리원 전체가 참가하는 프로젝트를 기획했고, 성공적으로 결과물을 내놓을 수 있었습니다.",
          link: "https://skku.likelion.org",
          labels: [
            {
              text: "DEV",
              color: "#673ab7"
            }
          ]
        },
        {
          title: "'멋쟁이사자처럼' 교육자료 제작 및 수업진행",
          date: "2018. 11.",
          thumbnail: "likelion2.png",
          text:
            "한 학기동안 웹개발 동아리의 교육을 담당했고, 수업 내용을 모두 마크다운 문서로 정리하고 웹으로 배포함으로써, 동아리원들의 예습과 복습을 용이하게 했습니다.",
          link: "https://skkulikelion2018.netlify.com/",
          labels: [
            {
              text: "DEV",
              color: "#673ab7"
            }
          ]
        },
        {
          title: "행동재무학 - 종목게시판 게시글과 주가",
          date: "2017. 12.",
          thumbnail: "ant1.png",
          link:
            "https://github.com/kim-taewoo/python-data-analysis/tree/master/BehaviorFinance",
          text:
            "네이버 종목게시판을 크롤링하고, 그 게시판의 활발함 (게시글의 업데이트 개수) 과 주가 간의 상관관계를 분석, 시각화했습니다. 데이터에서 유의미한 결과를 산출해내어, 해당 수업에서 팀 1등을 하고 추가 연구를 제안받았습니다.",
          labels: [
            {
              text: "DATA",
              color: "#03a9f4"
            }
          ]
        }
      ]
    };
  },

  mounted() {
    this.so = ScrollOut({
      threshold: 0.2,
      scope: this.$el
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
  width: 100%;
  min-height: 33%;
  min-height: 33vh;
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

[data-scroll] {
  transition: all 0.8s;
}
[data-scroll="in"] {
  opacity: 1;
  /* -webkit-transform: translateX(0); */
  transform: translateY(0) rotate3d(0, 0, 0, 0);
}
[data-scroll="out"] {
  opacity: 0;
  /* -webkit-transform: translateX(-200px); */
  transform: translateY(100px) rotate3d(2, -1, 0.2, -72deg);
}
</style>
