<template>
  <div class="about">
    <b-container fluid class="verticalCenter">
      <b-row>
        <b-col>
          <b-row>
            <b-col>
              <h2 class="top-question">"So, tell me about yourself?"</h2>
            </b-col>
          </b-row>
          <b-row class="bio">
            <b-col>
              <img
                srcset="
                  @/assets/aboutme-info/Strength.png,
                  @/assets/aboutme-info/Strength@2x.png 2x,
                  @/assets/aboutme-info/Strength@3x.png 3x
                "
              />
            </b-col>
            <b-col align="left">
              <p class="paragraph">
                My name's Daniela Ornelas. I'm an aspiring UX designer and a
                third-year Psychology student at York University, currently
                residing in Toronto, Canada. UX design combines all my passions:
                design, psychology, communication (I love talking to people!),
                and learning.
              </p>
              <p class="paragraph">
                When I’m not designing, I’m either listening to music, doing
                Muay Thai, reading Medium posts, looking for the best Italian
                food I can find in Toronto, or spending my time with friends and
                family.
              </p>
            </b-col>
          </b-row>
          <b-row class="work-section vert-center" style="padding:55px">
            <b-col align="left" md="8">
              <h3 class="work-title" style="padding-bottom: 30px">
                Internship at TD Lab
              </h3>
              <p class="work-description">
                TD Lab, located in Kitchener-Waterloo, Ontario, has given me a
                hands-on learning experience that has introduced me to design,
                business, and technology. During my internship at TD, I designed
                apps to help Generation Z manage their finances to prepare for
                future student loans, payments and mortgages.
              </p>
            </b-col>
            <b-col md="4" align="center">
              <img src="@/assets/aboutme-info/TDLab.png" />
            </b-col>
          </b-row>
          <b-row>
            <b-col align="left">
              <h4 class="status">
                I’m currently seeking UX/UI design, product design, and project
                management internship opportunities for Summer 2020.
              </h4>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

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
  }
}

.bio {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 147px;
}

.vert-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.paragraph {
  font-size: 26;
  line-height: 34px;
}
.work-title {
  font-size: 25px;
  font-weight: 500;
  color: $primary;
}
.work-description {
  font-size: 25px;
  line-height: 32px;
}
.work-section {
  background-color: rgba(129, 76, 243, 0.15);
}
.status {
  font-size: 29px;
  font-weight: 500;
  padding-top: 97px;
  padding-bottom: 93px;
}
</style>
