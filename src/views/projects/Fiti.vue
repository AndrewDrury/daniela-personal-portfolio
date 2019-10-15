<template>
  <div class="Fiti project">
    <b-container fluid class="verticalCenter">
      <b-row class="top-space">
        <b-col align="left">
          <b-row>
            <b-col class="logo" align="center">
              <img
                srcset="@/assets/Fiti-info/Group.png, @/assets/Fiti-info/Group@2x.png 2x, @/assets/Fiti-info/Group@3x.png 3x"
              />
            </b-col>
          </b-row>
          <b-row col="12">
            <b-col class="top-pics" align="center">
              <img
                class="left-pic"
                srcset="@/assets/Fiti-info/Left-middle-page.png, @/assets/Fiti-info/Left-middle-page@2x.png 2x, @/assets/Fiti-info/Left-middle-page@3x.png 3x"
                style="vertical-align: bottom;"
              />
              <img
                class="middle-pic"
                srcset="@/assets/Fiti-info/middle-home.png, @/assets/Fiti-info/middle-home@2x.png 2x, @/assets/Fiti-info/middle-home@3x.png 3x"
                style="vertical-align: bottom;"
              />
              <img
                class="right-pic"
                srcset="@/assets/Fiti-info/workout-time-screen-chosen.png, @/assets/Fiti-info/workout-time-screen-chosen@2x.png 2x, @/assets/Fiti-info/workout-time-screen-chosen@3x.png 3x"
                style="vertical-align: bottom;"
              />
            </b-col>
          </b-row>
          <!-- SUMMARY -->
          <b-row id="summary" name="Summary" class="summary">
            <b-col class="sidebar" md="3">
              <h4>Skills</h4>
              <ul>
                <li>User Research</li>
                <li>Personas</li>
                <li>Storytelling</li>
                <li>User Testing</li>
                <li>UI/UX Design</li>
              </ul>
              <h4>Type/Company</h4>
              <ul>
                <li>Passion Project</li>
              </ul>
              <h4>When</h4>
              <ul>
                <li>May-June 2019</li>
              </ul>
            </b-col>
            <b-col class="desc">
              <h3>A fitness app for people with paraplegia.</h3>
              <p>
                Paraplegia causes paralysis and muscle loss in the lower body,
                often leading to a sedentary lifestyle, increasing your risk of
                obesity and other chronic conditions such as heart disease. Fiti
                provides accessible, affordable, and interesting workouts that
                are easy to incorperate in all lifestyles.
              </p>
            </b-col>
          </b-row>
          <!-- MY ROLE -->
          <b-row id="myRole" name="My Role">
            <b-col>
              <h1>
                “How might I provide in-home accessible workouts for people
                living with Paraplegia?”
              </h1>
              <h2>My Role</h2>
              <p>
                <b>I created and designed Fiti.</b> I began to investigate what
                tools were out there for those who may want to consider at home
                workouts. I was unable to find many apps or technologies that
                would help a person with paraplegia partake in at-home workouts.
                Therefore, I created a new file, and began my research phase of
                the design process.
              </p>
            </b-col>
          </b-row>
          <!-- WHO IS THIS FOR? -->
          <b-row id="who" name="Who?">
            <b-col>
              <h2>Who is Fiti for? Meet Alex</h2>
              <p>
                Alex is an example user that would want to use Fiti. For the
                purpose of designing, I created Alex. This persona helped me to
                solve specific problems while also allowing me to fully immerse
                myself into his shoes.
              </p>
              <b-row class="user vert-center">
                <b-col align="center" class="user-pic">
                  <img
                    srcset="@/assets/Fiti-info/Bio-pic.png, @/assets/Fiti-info/Bio-pic@2x.png 2x, @/assets/Fiti-info/Bio-pic@3x.png 3x"
                  />
                </b-col>
                <b-col class="user-bio">
                  <b-row>
                    <b-col class="age" align="left">
                      <h5>Age: 26</h5>
                    </b-col>
                    <b-col class="location">
                      <h5>Location: Toronto</h5>
                    </b-col>
                    <b-col class="career">
                      <h5>Career: Accountant</h5>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <p>
                        I moved to Toronto in 2014 upon receiving a job offer.
                        The move forced me to become very independent. In 2016,
                        I was in a car accident, which left me with no sensation
                        from my lower spine to my toes. For the past 3 years,
                        it’s been an uphill battle to become comfortable in my
                        skin to become accepting of my new ability. I want to
                        join a sports team, regularly be active, and form new
                        relationships with other people living with Paraplegia.
                      </p>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col class="user-list">
                  <b-row>
                    <b-col>
                      <h5>Goals</h5>
                      <ul>
                        <li>Physical activity 3x per day.</li>
                        <li>Decrease unhealthy eating.</li>
                        <li>Build stronger arms.</li>
                        <li>Participate in a sport in the community.</li>
                      </ul>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <h5>Frustrations</h5>
                      <ul>
                        <li>Limited amount of time to workout.</li>
                        <li>Unable to find accessible gyms nearby.</li>
                        <li>Cannot find a personal trainer with Paraplegia.</li>
                        <li>Fear of getting injured while being physically active.</li>
                      </ul>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <!-- SOLUTION -->
          <b-row id="solution" name="Solution">
            <b-col>
              <h2>Solution</h2>
              <h3>Choosing Workouts</h3>
              <p>
                Alex can pick categories that interest him.
                <b>
                  For people with paraplegia, it’s most important to do strength
                  training, areobic, and flexibility exercises. Therefore, those
                  categories remain at the top.
                </b>
              </p>
              <b-row class="double">
                <b-col class="left-3">
                  <img
                    class="project-pic"
                    align="right"
                    srcset="@/assets/Fiti-info/workout-type-screen.png, @/assets/Fiti-info/workout-type-screen@2x.png 2x, @/assets/Fiti-info/workout-type-screen@3x.png 3x"
                  />
                </b-col>
                <b-col class="right-pic">
                  <img
                    class="project-pic mobile-bottom-space"
                    align="left"
                    srcset="@/assets/Fiti-info/workout-time-screen-chosen.png, @/assets/Fiti-info/workout-time-screen-chosen@2x.png 2x, @/assets/Fiti-info/workout-time-screen-chosen@3x.png 3x"
                  />
                </b-col>
              </b-row>
              <p>
                Once he selects them, he is able to choose workout videos that
                target the most important muscle groups. Alex can also view all
                videos to find workouts that target more specific muscles.
                <b>
                  Videos are organized by major to least major muscle groups to
                  help Alex know which muscle groups to focus on.
                </b>
              </p>
              <b-row class="double">
                <b-col class="left-3">
                  <img
                    class="project-pic"
                    align="right"
                    srcset="@/assets/Fiti-info/Strength-training.png, @/assets/Fiti-info/Strength-training@2x.png 2x, @/assets/Fiti-info/Strength-training@3x.png 3x"
                  />
                </b-col>
                <b-col class="right-pic">
                  <img
                    class="project-pic mobile-bottom-space"
                    align="left"
                    srcset="@/assets/Fiti-info/shoulder-gain-opened.png, @/assets/Fiti-info/shoulder-gain-opened@2x.png 2x, @/assets/Fiti-info/shoulder-gain-opened@3x.png 3x"
                  />
                </b-col>
              </b-row>
              <p>
                Once Alex is on the workout summary page, he’s able to see
                exactly which muscles are being targeted, what equipment he’ll
                need, the duration of the workout, and the intensity of the
                workout.
                <b>
                  One of the most important feautues of the app is being able to
                  download workout videos. This allows Alex to have complete
                  control over when and where he does his workouts.
                </b>
              </p>

              <h3>Community and Profile</h3>
              <p>
                On the community page, Alex can see the trainers he follows on
                social media and the contribution they’re making to their
                community. The community tab will first show what new content
                has been posted since his last sign in, and recommended content
                based on the trainers he follows.
              </p>
              <b-row class="double">
                <b-col class="left-3">
                  <img
                    class="project-pic"
                    align="right"
                    srcset="@/assets/Fiti-info/community.png, @/assets/Fiti-info/community@2x.png 2x, @/assets/Fiti-info/community@3x.png 3x"
                  />
                </b-col>
                <b-col class="right-pic">
                  <img
                    class="project-pic mobile-bottom-space"
                    align="left"
                    srcset="@/assets/Fiti-info/profile.png, @/assets/Fiti-info/profile@2x.png 2x, @/assets/Fiti-info/profile@3x.png 3x"
                  />
                </b-col>
              </b-row>
              <p>
                On the profile page, Alex can share his daily, weekly, or
                monthly activities to his Instagram, Twitter, or Facebook page.
                In addition, he can update his goals and track his progress.
                <b>
                  The profile page is also where Alex can view all the workout
                  videos he has downloaded for fast and easy viewing anytime.
                  Finally, Alex is able to keep track of the workouts he’s
                  completed for quick access.
                </b>
              </p>
            </b-col>
          </b-row>
          <!-- USER TESTING -->
          <b-row id="userTesting" name="User Testing">
            <b-col>
              <h2>User Testing</h2>
              <p>
                I was able to able to perform user testing on an individual
                named John, who lives with paraplegia.
              </p>
              <h3>Why does Fiti work for you?</h3>
              <p>
                “An app like Fiti would make my life a lot easier. I’m
                constantly on YouTube, looking for workout videos that are safe
                for me to do. Finally, something like Fiti makes getting
                physical activity so much easier and fun.”
              </p>
              <h3>Was it easy or difficult to navigate selecting a workout?</h3>
              <p>
                “I felt that picking a workout was super easy. I really liked
                how there are categories to help. I really appreciated the 15
                minute category. This makes it easy to do short workouts
                throughout my day.”
              </p>
              <h3>What, if anything, surprised you about the experience?</h3>
              <p>
                “Being able to track my activity on the profile page. This was
                surprising because it felt super comforting knowing that you’re
                able to track my progress to reach my goal.”
              </p>
            </b-col>
          </b-row>
          <!-- NEXT STEPS -->
          <b-row id="nextSteps" name="Next Steps">
            <b-col>
              <h2>Next Steps</h2>
              <p>
                During user testing, we uncovered that push notifications would
                be helpful for the user to be reminded to complete their
                workout. Also, each user would be able to send encouragement
                messages to other users.
              </p>
            </b-col>
          </b-row>
          <!-- NEXT PROJECT -->
          <b-row align="right">
            <b-col class="next">
              <a href="./#/HealthLine">
                <img
                  class="arrow"
                  srcset="@/assets/homepage/next.png, @/assets/homepage/next@2x.png 2x, @/assets/homepage/next@3x.png 3x"
                />
                <h6>HealthLine</h6>
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss"></style>
