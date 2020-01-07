<template>
  <div class="about" id="about" name="about">
    <b-container fluid>
      <b-row>
        <b-col>
          <b-row>
            <b-col>
              <h2 class="top-question">"So, tell me about yourself?"</h2>
            </b-col>
          </b-row>
          <b-row class="bio">
            <b-col class="vert-center bio-pic" lg="5" align="left">
              <img
                class="images hide"
                srcset="
                  @/assets/aboutme-info/pic-2.png,
                  @/assets/aboutme-info/pic-2@2x.png 2x,
                  @/assets/aboutme-info/pic-2@3x.png 3x
                "
              />
              <img
                class="images hide"
                srcset="
                  @/assets/aboutme-info/pic-3.png,
                  @/assets/aboutme-info/pic-3@2x.png 2x,
                  @/assets/aboutme-info/pic-3@3x.png 3x
                "
              />
              <img
                class="images hide"
                srcset="
                  @/assets/aboutme-info/pic-4.png,
                  @/assets/aboutme-info/pic-4@2x.png 2x,
                  @/assets/aboutme-info/pic-4@3x.png 3x
                "
              />
              <img
                class="images hide"
                srcset="
                  @/assets/aboutme-info/pic-5.png,
                  @/assets/aboutme-info/pic-5@2x.png 2x,
                  @/assets/aboutme-info/pic-5@3x.png 3x
                "
              />
              <img
                class="images hide"
                srcset="
                  @/assets/aboutme-info/pic-6.png,
                  @/assets/aboutme-info/pic-6@2x.png 2x,
                  @/assets/aboutme-info/pic-6@3x.png 3x
                "
              />
              <img
                class="images hide"
                srcset="
                  @/assets/aboutme-info/pic-7.png,
                  @/assets/aboutme-info/pic-7@2x.png 2x,
                  @/assets/aboutme-info/pic-7@3x.png 3x
                "
              />
              <img
                class="images"
                srcset="
                  @/assets/aboutme-info/pic-1.png,
                  @/assets/aboutme-info/pic-1@2x.png 2x,
                  @/assets/aboutme-info/pic-1@3x.png 3x
                "
              />
            </b-col>
            <b-col class="vert-center no-pad" lg="7" align="left">
              <div>
                <p class="paragraph">
                  I am a third-year Psychology student at York University in
                  Toronto, Canada. I love creating things from scratch, and
                  generating larger-than-life ideas all while keeping the user
                  in mind. With my experience as a UI/UX Designer for TD Lab in
                  Kitchener-Waterloo, Canada, I gained hands-on learning
                  experience that has introduced me to design, business, and
                  technology. During my internship at TD, I designed apps to
                  help Generation Z manage their finances to prepare for future
                  student loans, payments and mortgages.
                </p>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col align="left" style="padding-left: 0px; padding-right: 0px">
              <p class="paragraph">
                Outside of school and work, I enjoy exploring new cities,
                cooking new recipes, reading, contributing to initiatives I care
                about, and refining my skills as a designer.
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col align="left" style="padding-left: 0px; padding-right: 0px">
              <h4 class="status">
                I’m currently seeking UX/UI design, product design, and product
                management internship opportunities for Summer 2020.
              </h4>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
var index = 0;
var triggered = false;
const classHide = "hide";
var images, count;

addEventListener("load", () => {
  // "load" is safe but "DOMContentLoaded" starts earlier
  images = document.querySelectorAll(".images");
  count = images.length;
  index = count - 1;

  nextSlide();
  function nextSlide() {
    images[index++ % count].classList.add(classHide);
    images[index % count].classList.remove(classHide);
    setTimeout(nextSlide, 5000);
  }
});

// addEventListener("pointermove",() => { // "load" is safe but "DOMContentLoaded" starts earlier
//   if(triggered == false) {
//     triggered = true;
//     nextSlide();
//     function nextSlide() {
//         images[(index ++) % count].classList.add(classHide);
//         images[index % count].classList.remove(classHide);
//         setTimeout(nextSlide, 1000);
//     }

//   }
// });

// addEventListener("click",() => { // "load" is safe but "DOMContentLoaded" starts earlier
//   const images = document.querySelectorAll(".images");
//   const classHide = "hide", count = images.length;
//   nextSlide();
//   function nextSlide() {
//       images[(index ++) % count].classList.add(classHide);
//       images[index % count].classList.remove(classHide);
//   }
// });

export default Vue.extend({
  //SIDEBAR FOR PROJECTS
});
</script>

<style lang="scss">
@import "../assets/variables.scss";

.top-question {
  font-weight: 500;
  font-size: 36px;
  color: $primary;
  margin-top: 150px;
  margin-bottom: 80px;

  @media (max-width: $screen-sm) {
    margin-top: 100px;
    margin-bottom: 20px;
  }
}

.bio {
  display: flex;
  justify-content: center;
  align-items: left;
  margin-bottom: 66px;

  @media (max-width: $screen-md) {
    margin-bottom: 40px;
  }

  img {
    max-width: 100%;
  }

  .bio-pic {
    margin-bottom: 40px;
    @media (min-width: $screen-md) {
      padding-right: 82px;
      margin-bottom: 0px;
    }
  }
}

.paragraph {
  font-size: 25px;
  line-height: 34px;
}
.work-title {
  font-size: 25px !important;
  font-weight: 500;
  color: $primary;
  padding-bottom: 30px;
  @media (max-width: $screen-md) {
    padding-bottom: 10px;
  }
}
.work-description {
  font-size: 25px;
  line-height: 32px;
}
.work-section {
  background-color: rgba(129, 76, 243, 0.15);
  padding: 55px;
  @media (max-width: $screen-md) {
    padding: 5%;
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
.status {
  font-size: 29px;
  font-weight: 500;
  padding-top: 51px;
  padding-bottom: 93px;
  @media (max-width: $screen-md) {
    padding-top: 25px;
    padding-bottom: 55px;
  }
}

.no-pad {
  @media (max-width: $screen-md) {
    padding-left: 0px !important;
    padding-right: 0px !important;
    margin-top: 5px;
  }
}
</style>
