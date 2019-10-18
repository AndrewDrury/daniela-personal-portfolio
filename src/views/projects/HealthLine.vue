<template>
  <div class="HealthLine project">
    <b-container fluid class="verticalCenter">
      <b-row class="top-space">
        <b-col align="left">
          <b-row>
            <b-col class="logo" align="center">
              <img
                srcset="
                  @/assets/HealthLine-info/Group6.png,
                  @/assets/HealthLine-info/Group6@2x.png 2x,
                  @/assets/HealthLine-info/Group6@3x.png 3x
                "
              />
            </b-col>
          </b-row>
          <b-row col="12">
            <b-col class="top-pics" align="center">
              <img
                class="left-pic"
                srcset="
                  @/assets/HealthLine-info/Group14.png,
                  @/assets/HealthLine-info/Group14@2x.png 2x,
                  @/assets/HealthLine-info/Group14@3x.png 3x
                "
                style="vertical-align: bottom;"
              />
              <img
                class="middle-pic"
                srcset="
                  @/assets/HealthLine-info/Group10.png,
                  @/assets/HealthLine-info/Group10@2x.png 2x,
                  @/assets/HealthLine-info/Group10@3x.png 3x
                "
                style="vertical-align: bottom;"
              />
              <img
                class="right-pic"
                srcset="
                  @/assets/HealthLine-info/Group5.png,
                  @/assets/HealthLine-info/Group5@2x.png 2x,
                  @/assets/HealthLine-info/Group5@3x.png 3x
                "
                style="vertical-align: bottom;"
              />
            </b-col>
          </b-row>
          <!-- SUMMARY -->
          <b-row id="summary" name="Summary" class="summary">
            <b-col class="sidebar" md="3">
              <h4>Skills</h4>
              <ul>
                <li>Project Management</li>
                <li>UI/UX Design</li>
                <li>Prototyping</li>
                <li>Research</li>
              </ul>
              <h4>Type/Company</h4>
              <ul>
                <li>RU Hack 2019</li>
              </ul>
              <h4>When</h4>
              <ul>
                <li>May 17-19, 2019</li>
              </ul>
            </b-col>
            <b-col class="desc">
              <h3>Receive a diagnosis of your symptoms.</h3>
              <p>
                HealthLine was an app that was created for RU Hacks May 2019.
                HealthLine allows users to receive a diagnosis of their symptoms
                through through computer vision, machine learning, and SMS
                texting. The themes for the hackathon were interconnectivity,
                world issues, communication and worldwide information exchange.
                We managed to incorporate all these themes into our app.
              </p>
            </b-col>
          </b-row>
          <!-- MY ROLE -->
          <b-row id="myRole" name="My Role">
            <b-col>
              <h1>
                “How might I help diagnose those with limited access to
                healthcare and/or internet?”
              </h1>
              <h2>My Role</h2>
              <p>
                <b>I was the lead UI/UX designer of HealthLine.</b> I worked
                alongside 3 software developers over the span of 36 hours to
                design, develop, and present HealthLine. Due to the tough time
                constraint, we held a 1 hour ideation session. We wanted to
                tackle all themes of the hackathon and felt that HealthLine was
                the best way to go forward.
              </p>
            </b-col>
          </b-row>
          <!-- WHO IS THIS FOR? -->
          <b-row id="who" name="Who?">
            <b-col>
              <h2>Who is HeathLine For? Meet Manuela</h2>
              <p>
                I used Manuela as an example user that would want to use
                HealthLine. For the purpose of designing, I created Manuela This
                persona helped me to solve specific problems while also allowing
                me to fully immerse myself into her shoes.
              </p>
              <b-row class="user vert-center">
                <b-col align="center" class="user-pic">
                  <img
                    srcset="
                      @/assets/HealthLine-info/Strength.png,
                      @/assets/HealthLine-info/Strength@2x.png 2x,
                      @/assets/HealthLine-info/Strength@3x.png 3x
                    "
                  />
                </b-col>
                <b-col class="user-bio">
                  <b-row>
                    <b-col class="age" align="left">
                      <h5>Age: 29</h5>
                    </b-col>
                    <b-col class="location">
                      <h5>Location: Paraguay</h5>
                    </b-col>
                    <b-col class="career">
                      <h5>Career: Chef</h5>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <p>
                        I moved to Paraguay from Rio De Janeiro 5 years ago when
                        I was offered a job as Chef for one of Paraguay’s best
                        restaurants. Since then, I’ve learned how to speak
                        Spanish, I’ve made plenty of friends, and I’ve found my
                        husband, Antonio. I want to start a family, yet worry as
                        I feel quite alone. I’m unable to afford internet so my
                        connection to my family in Brazil is limited. Doctors
                        are very understaffed, with only 11.1 doctors per 10,000
                        people. Therefore, I have to wait long periods of time
                        if I’m sick and I’m unable to do my own research on any
                        issues I may have.
                      </p>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col class="user-list">
                  <b-row>
                    <b-col>
                      <h5>Goals</h5>
                      <ul>
                        <li>
                          Start a family with her husband in the next year.
                        </li>
                        <li>Introduce veganism to her community.</li>
                        <li>Visit Machu Picchu in 3 months.</li>
                      </ul>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <h5>Frustrations</h5>
                      <ul>
                        <li>
                          Paraguay has the fifth most expensive internet in the
                          world.
                        </li>
                        <li>
                          Requires her best health to achieve all her goals.
                        </li>
                        <li>
                          Experiences frequent headaches but is unable to find
                          remedies.
                        </li>
                      </ul>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <!-- WHY IS THIS IMPORTANT -->
          <b-row id="why" name="Why?">
            <b-col>
              <h2>Why is this important?</h2>
              <p>
                In Canada, wifi is one of the most accessible services to the
                public. When left with a question about a symptom, we are one
                Google search away from finding the cause. In many places around
                the globe, healthcare and internet are not as accessible. We
                provide quick solutions and answers to symptoms the user may
                have, without requiring internet or a doctor’s office.
              </p>
            </b-col>
          </b-row>
          <!-- SOLUTION -->
          <b-row id="solution" name="Solution">
            <b-col>
              <h2>Solution</h2>
              <h3>Onboarding</h3>
              <p>
                We only require Manuela’s full name, phone number, and a
                password.
                <b>
                  HealthLine requires her phone number since she will be
                  diagnosed through SMS. Also, since she has limited internet
                  access, using an email address would be inefficient since she
                  could not access her email easily.
                </b>
              </p>
              <b-row class="triple">
                <b-col class="project-pic-triple">
                  <img
                    align="right"
                    srcset="
                      @/assets/HealthLine-info/Group7.png,
                      @/assets/HealthLine-info/Group7@2x.png 2x,
                      @/assets/HealthLine-info/Group7@3x.png 3x
                    "
                  />
                </b-col>
                <b-col class="project-pic-triple triple-center">
                  <img
                    align="center"
                    srcset="
                      @/assets/HealthLine-info/Group8.png,
                      @/assets/HealthLine-info/Group8@2x.png 2x,
                      @/assets/HealthLine-info/Group8@3x.png 3x
                    "
                  />
                </b-col>
                <b-col class="project-pic-triple">
                  <img
                    align="left"
                    srcset="
                      @/assets/HealthLine-info/Group9.png,
                      @/assets/HealthLine-info/Group9@2x.png 2x,
                      @/assets/HealthLine-info/Group9@3x.png 3x
                    "
                  />
                </b-col>
              </b-row>
              <h3>Diagnosing Symptoms</h3>
              <p>
                Manuela will select 1 or more of her symptoms, or type them, and
                send them to our service. She will receive a text of her
                diagnosis, treatment, and next steps. For every inquiry she
                sends, it will be automatically saved under her medical history
                in the app.
              </p>
              <b-row class="double">
                <b-col class="left-3">
                  <img
                    class="project-pic"
                    align="right"
                    srcset="
                      @/assets/HealthLine-info/Group10.png,
                      @/assets/HealthLine-info/Group10@2x.png 2x,
                      @/assets/HealthLine-info/Group10@3x.png 3x
                    "
                  />
                </b-col>
                <b-col class="right-pic">
                  <img
                    class="project-pic mobile-bottom-space"
                    align="left"
                    srcset="
                      @/assets/HealthLine-info/Group11.png,
                      @/assets/HealthLine-info/Group11@2x.png 2x,
                      @/assets/HealthLine-info/Group11@3x.png 3x
                    "
                  />
                </b-col>
              </b-row>
              <h3>Medical History</h3>
              <p>
                On her medical history, she’s able to easily print her history
                to keep as a physical copy for herself. HeathLine allows
                healthcare to be accessible and universal to any user that may
                be in crisis and require health advice.
              </p>
              <b-row class="double">
                <b-col class="left-3">
                  <img
                    class="project-pic"
                    align="right"
                    srcset="
                      @/assets/HealthLine-info/Group12.png,
                      @/assets/HealthLine-info/Group12@2x.png 2x,
                      @/assets/HealthLine-info/Group12@3x.png 3x
                    "
                  />
                </b-col>
                <b-col class="right-pic">
                  <img
                    class="project-pic mobile-bottom-space"
                    align="left"
                    srcset="
                      @/assets/HealthLine-info/Group13.png,
                      @/assets/HealthLine-info/Group13@2x.png 2x,
                      @/assets/HealthLine-info/Group13@3x.png 3x
                    "
                  />
                </b-col>
              </b-row>
              <b-row class="pic-right extra-bottom-space">
                <b-col class="content" lg="4" align="left">
                  <h5>Topical Diagnosis Using Computer Vision</h5>
                  <p>
                    In cases of rashes or external changes on the body,
                    <b>
                      Manuela is able to put her camera over the body part and
                      immedietely receive a diagnosis, treatment, and next steps
                      via SMS.
                    </b>
                    This is an especially important feature for parents.
                    <b>
                      Children are prone to skin rashes and can recieve quick
                      treatment.
                    </b>
                  </p>
                </b-col>
                <b-col>
                  <img
                    class="project-pic-right mobile-bottom-space"
                    srcset="
                      @/assets/HealthLine-info/Group14.png,
                      @/assets/HealthLine-info/Group14@2x.png 2x,
                      @/assets/HealthLine-info/Group14@3x.png 3x
                    "
                  />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <!-- NEXT STEPS -->
          <b-row id="nextSteps" name="Next Steps">
            <b-col>
              <h2>Next Steps</h2>
              <p>
                As I designed HealthLine, I began to empathize with the user
                heavily. I realized that not every user would be able to afford
                western medicine, therefore causing the treatment feature to be
                useless.
                <b>
                  In order to combat this problem, I am exploring many types of
                  medicine options in hopes that at least one treatment plan
                  will be accessible for the user. Treatment options include
                  Chinese medicine, natural treatments, and other holistic
                  approaches.
                </b>
                In addition, as part of the onboarding, I believe it’s essential
                to know any allergies the user has in order to provide them more
                personalized treatment options.
              </p>
            </b-col>
          </b-row>
          <!-- NEXT PROJECT -->
          <b-row>
            <b-col class="next" align="left">
              <a href="./#/Fiti">
                <img
                  class="arrow"
                  srcset="
                    @/assets/homepage/prev.png,
                    @/assets/homepage/prev@2x.png 2x,
                    @/assets/homepage/prev@3x.png 3x
                  "
                />
                <h6>Fiti</h6>
              </a>
            </b-col>
            <b-col class="next" align="right">
              <a href="./#/about">
                <img
                  class="arrow"
                  srcset="
                    @/assets/homepage/next.png,
                    @/assets/homepage/next@2x.png 2x,
                    @/assets/homepage/next@3x.png 3x
                  "
                />
                <h6>About Me</h6>
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
