<template>
  <div class="ePaid project">
    <b-container fluid class="verticalCenter">
      <b-row>
        <b-col>
          <h6 class="top-question">Internship at TD Lab - Winter 2019</h6>
        </b-col>
      </b-row>
      <b-row>
        <b-col align="center">
          <img
            class='full-width-mobile'
            srcset="
              @/assets/epaid-info/pic-middle-grouped.png,
              @/assets/epaid-info/pic-middle-grouped@2x.png 2x,
              @/assets/epaid-info/pic-middle-grouped@3x.png 3x
            "
          />
        </b-col>
      </b-row>
      <b-row class="top-space-epaid">
        <b-col align="left">
          <b-row>
            <b-col id="Internship" name="Internship">
              <h2>UI/UX Designer</h2>
              <p>
                TD Lab, located in Kitchener-Waterloo, Ontario, has given me a
                hands-on learning experience that has introduced me to design,
                business, and technology. During my internship at TD, I designed
                apps to help Generation Z manage their finances to prepare for
                future student loans, payments and mortgages. A week in the life
                of a designer at TD consisted of user research, customer journey
                mapping, wireframing, prototyping, and user-testing.
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="logo" align="center">
              <img
                class='full-width-mobile'
                srcset="
                  @/assets/epaid-info/e-paid-group.png,
                  @/assets/epaid-info/e-paid-group@2x.png 2x,
                  @/assets/epaid-info/e-paid-group@3x.png 3x
                "
              />
            </b-col>
          </b-row>
          <b-row col="12">
            <b-col class="top-pics" align="center">
              <img
                class="left-pic"
                srcset="
                  @/assets/epaid-info/paid-screen.png,
                  @/assets/epaid-info/paid-screen@1x.png 1x,
                  @/assets/epaid-info/paid-screen@3x.png 3x
                "
                style="vertical-align: bottom;"
              />
              <img
                class="middle-pic"
                srcset="
                  @/assets/epaid-info/create-task.png,
                  @/assets/epaid-info/create-task@1x.png 1x,
                  @/assets/epaid-info/create-task@3x.png 3x
                "
                style="vertical-align: bottom;"
              />
              <img
                class="right-pic"
                srcset="
                  @/assets/epaid-info/create-task-unfinshed.png,
                  @/assets/epaid-info/create-task-unfinshed@1x.png 1x,
                  @/assets/epaid-info/create-task-unfinshed@3x.png 3x
                "
                style="vertical-align: bottom;"
              />
            </b-col>
          </b-row>
          <!-- Sidebar for project pages -->
          <div class="sidemenu">
            <ul>
              <router-link :to="{ name: 'ePaid', hash: '#Internship' }">
                <li>Internship</li>
              </router-link>
              <router-link :to="{ name: 'ePaid', hash: '#Summary' }">
                <li>E-Paid Summary</li>
              </router-link>
              <router-link :to="{ name: 'ePaid', hash: '#MyRole' }">
                <li>My Role</li>
              </router-link>
              <router-link :to="{ name: 'ePaid', hash: '#UserInterview' }">
                <li>User Interview</li>
              </router-link>
              <router-link :to="{ name: 'ePaid', hash: '#Who' }">
                <li>Who is this for?</li>
              </router-link>
              <router-link :to="{ name: 'ePaid', hash: '#Solution' }">
                <li>Solution</li>
              </router-link>
              <router-link :to="{ name: 'ePaid', hash: '#Challenges' }">
                <li>Challenges</li>
              </router-link>
              <router-link :to="{ name: 'ePaid', hash: '#Outcome' }">
                <li>Outcome</li>
              </router-link>
            </ul>
          </div>
          <!-- SUMMARY -->
          <b-row id="Summary" name="Summary" class="summary">
            <b-col class="sidebar" md="3">
              <h4>Skills</h4>
              <ul>
                <li>User Interviews</li>
                <li>Personas</li>
                <li>Project Management</li>
                <li>UI/UX Design</li>
              </ul>
              <h4>Type/Company</h4>
              <ul>
                <li>
                  Winner, Mid-Term
                  <br />Hack at TD Lab
                </li>
              </ul>
              <h4>When</h4>
              <ul>
                <li>March 19-24, 2019</li>
              </ul>
            </b-col>
            <b-col class="desc">
              <h3>Help freelancers get paid faster.</h3>
              <p>
                In January 2019,
                <b>
                  I started a role as a UI/UX design Intern at TD Lab in
                  Kitchener, Ontario.
                </b>
                TD Lab aims to develop solutions that create exceptional user
                experience for employees and customers. During TD Lab’s Mid-Term
                Hack, the problem was to help freelancers and people with side
                hustles get paid faster. As part of the problem, we were
                required to incorporate Interac’s API.
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h1>
                “How might I help freelancers manage their work and organize
                who's paid them?”
              </h1>
            </b-col>
          </b-row>
          <!-- MY ROLE -->
          <b-row id="MyRole" name="My Role">
            <b-col>
              <h2>My Role</h2>
              <p>
                The E-Paid team consisted of one
                <b>UX/UI designer (me!)</b> and one software developer co-op
                student. The co-op roles (UI/UX designers, and software
                developers) were immersed in user experience problems and were
                required to come up with solutions to problems that Generation Z
                is currently facing.
                <b>
                  We were required to solve this problem in 5 days
                  (Monday-Friday) </b
                >. Day 1 and 2 consisted of gathering as much information as
                possible. In order to do this, we conducted interviews, built
                personas, and conducted user research. Day 3 and 4 focused on
                crafting the UI/UX of the app, as well as developing it. Day 5
                was our presentation day.
              </p>
            </b-col>
          </b-row>
          <!-- USER INTERVIEW -->
          <b-row id="UserInterview" name="User Interview">
            <b-col>
              <h2>User Interview</h2>
              <p>
                During day 1 of the Mid-Term Hack, I researched as much
                possible. To understand the user, I decided to conduct an
                interview on one of the full-time employees at TD Lab. Meet Leo.
                He is a web design freelancer. We asked him:
              </p>
              <h3>As a freelancer, what is your main struggle?</h3>
              <p>
                “My main struggle as a freelancer is keeping track of all my
                clients! I’m constantly switching between apps to check my
                contact book, calender, and texts messages. It becomes
                overwhelming and can cause me to seem unprofessional.”
              </p>
              <h3>
                How did you determine your value as a freelance web designer?
              </h3>
              <p>
                “Determining my value was one of the most difficult problems
                that I encountered. Initally, I would charge for the entire
                project, not per hour. This caused me to make $5 per hour if I
                wasn’t able to realize the complexity of the project.”
              </p>
              <h3>How do you organize your scheduling?</h3>
              <p>
                “I use the calender app on my phone. It’s not my favourite tool
                since I can’t be notified when I’ve been paid without manually
                entering it, but it works for now.”
              </p>
            </b-col>
          </b-row>
          <!-- WHO IS THIS FOR? -->
          <b-row id="Who" name="Who is this for?">
            <b-col>
              <h2>Who is E-Paid for? Meet Jenny</h2>
              <p>
                Jenny is an example user that would want to use E-Paid. For the
                purpose of designing, I created Jenny. This persona helped me to
                solve specific problems while also allowing me to fully immerse
                myself into her shoes.
              </p>
              <b-row class="user large-screen vert-center">
                <b-col align="center" class="user-pic">
                  <img
                    srcset="
                      @/assets/epaid-info/Strength.png,
                      @/assets/epaid-info/Strength@2x.png 2x,
                      @/assets/epaid-info/Strength@3x.png 3x
                    "
                  />
                </b-col>
                <b-col class="user-bio">
                  <b-row>
                    <b-col class="age" align="left">
                      <h5>Age: 18</h5>
                    </b-col>
                    <b-col class="location">
                      <h5>Location: Vancouver</h5>
                    </b-col>
                    <b-col class="career">
                      <h5>Career: Student</h5>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <p>
                        I will be starting my first year of university at the
                        University of British Columbia, and I couldn’t be more
                        excited! Since I will be paying for most of my expenses,
                        I want to continue tutoring elementary school students
                        in order to help me with my finances. Since I do not
                        usually come in face to face contact with the parents of
                        the students I tutor, I need a simplified way to send
                        them invoices to promptly pay me for my services. After
                        all, Vancouver does have some of the highest rent prices
                        in Canada!
                      </p>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col class="user-list">
                  <b-row>
                    <b-col>
                      <h5>Goals</h5>
                      <ul>
                        <li>Make money on her own terms.</li>
                        <li>Work less than 10 hours per week.</li>
                        <li>
                          Collect payment on the spot without having to remind
                          customer.
                        </li>
                        <li>Tutor elementary school students all sciences.</li>
                      </ul>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <h5>Frustrations</h5>
                      <ul>
                        <li>Does not want to chase customers for money.</li>
                        <li>Needs easy scheduling system.</li>
                        <li>Automatically send invoices to customers.</li>
                        <li>Remind her of her tutoring appointments.</li>
                        <li>Does not know how much to charge her clients.</li>
                      </ul>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>

              <b-row class="user small-screen vert-center">
                <b-col align="center" class="user-pic">
                  <img
                    srcset="
                      @/assets/epaid-info/Strength.png,
                      @/assets/epaid-info/Strength@2x.png 2x,
                      @/assets/epaid-info/Strength@3x.png 3x
                    "
                  />
                </b-col>
                <b-col>
                  <b-row>
                    <b-col class="user-bio">
                      <b-row>
                        <b-col align="left">
                          <h5>Age: 18</h5>
                          <h5>Location: Vancouver</h5>
                          <h5>Career: Student</h5>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col>
                          <p>
                            I will be starting my first year of university at
                            the University of British Columbia, and I couldn’t
                            be more excited! Since I will be paying for most of
                            my expenses, I want to continue tutoring elementary
                            school students in order to help me with my
                            finances. Since I do not usually come in face to
                            face contact with the parents of the students I
                            tutor, I need a simplified way to send them invoices
                            to promptly pay me for my services. After all,
                            Vancouver does have some of the highest rent prices
                            in Canada!
                          </p>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col class="user-list">
                      <b-row>
                        <b-col>
                          <h5>Goals</h5>
                          <ul>
                            <li>Make money on her own terms.</li>
                            <li>Work less than 10 hours per week.</li>
                            <li>
                              Collect payment on the spot without having to
                              remind customer.
                            </li>
                            <li>
                              Tutor elementary school students all sciences.
                            </li>
                          </ul>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col>
                          <h5>Frustrations</h5>
                          <ul>
                            <li>Does not want to chase customers for money.</li>
                            <li>Needs easy scheduling system.</li>
                            <li>Automatically send invoices to customers.</li>
                            <li>Remind her of her tutoring appointments.</li>
                            <li>
                              Does not know how much to charge her clients.
                            </li>
                          </ul>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <!-- SOLUTION -->
          <b-row id="Solution" name="Solution">
            <b-col>
              <h2>Solution</h2>
              <h3>Create an Account</h3>
              <p>
                I created an app that allows users to keep track of clients,
                schedule, recommend prices to charge, and release invoices to
                the clients, prompting them to e-transfer the user. The only
                infomation we require from Jenny is her email, name, and
                password.
                <b>
                  I require her e-mail to allow automatic invoicing and
                  receiving e-transfers, therefore removing the burdern of
                  asking her clients to pay her.
                </b>
              </p>
              <b-row class="triple">
                <b-col class="project-pic-triple">
                  <img
                    align="right"
                    srcset="
                      @/assets/epaid-info/e-paid-onboard1.png,
                      @/assets/epaid-info/e-paid-onboard1@1x.png 1x,
                      @/assets/epaid-info/e-paid-onboard1@3x.png 3x
                    "
                  />
                </b-col>
                <b-col class="project-pic-triple triple-center">
                  <img
                    align="center"
                    srcset="
                      @/assets/epaid-info/e-paid-onboard2.png,
                      @/assets/epaid-info/e-paid-onboard2@1x.png 1x,
                      @/assets/epaid-info/e-paid-onboard2@3x.png 3x
                    "
                  />
                </b-col>
                <b-col class="project-pic-triple">
                  <img
                    align="left"
                    srcset="
                      @/assets/epaid-info/e-paid-onboard3.png,
                      @/assets/epaid-info/e-paid-onboard3@1x.png 1x,
                      @/assets/epaid-info/e-paid-onboard3@3x.png 3x
                    "
                  />
                </b-col>
              </b-row>
              <h3>Home Page</h3>
              <p>
                On the home page, Jenny’s tasks can be sorted into drafts,
                unpaid, and paid. This allows for easy organization of clients.
                The draft sections includes tasks that have not been completed
                yet. This section resembles an ‘upcoming’ section.
                <b>
                  It’s called drafts because I understand that being a
                  freelancer is very unstable and schedule changes can happen
                  frequently. Having a drafts section gives Jenny flexibility
                  and control over her tasks.
                </b>
              </p>
              <b-row class="extra-bottom-space2">
                <b-col>
                  <img
                    class="project-pic"
                    srcset="
                      @/assets/epaid-info/e-paid-draft.png,
                      @/assets/epaid-info/e-paid-draft@1x.png 1x,
                      @/assets/epaid-info/e-paid-draft@3x.png 3x
                    "
                  />
                </b-col>
              </b-row>
              <h3>Creating a Task</h3>
              <p>
                First, Jenny will choose the task that she will be doing for her
                client. The top choices are the most common tasks executed by
                new freelancers. If she does not see her service on the list,
                she can type her own.
              </p>
              <b-row class="double">
                <b-col class="left-3">
                  <img
                    class="project-pic"
                    align="right"
                    srcset="
                      @/assets/epaid-info/e-paid-create-task.png,
                      @/assets/epaid-info/e-paid-create-task@1x.png 1x,
                      @/assets/epaid-info/e-paid-create-task@3x.png 3x
                    "
                  />
                </b-col>
                <b-col class="right-pic">
                  <img
                    class="project-pic mobile-bottom-space"
                    align="left"
                    srcset="
                      @/assets/epaid-info/Epaid-create-task.png,
                      @/assets/epaid-info/Epaid-create-task@1x.png 1x,
                      @/assets/epaid-info/Epaid-create-task@3x.png 3x
                    "
                  />
                </b-col>
              </b-row>
              <p>
                Next, Jenny will decide a date, a start time, and end time of
                the task.
                <b>
                  Since Jenny is new to the freelance world, and may not know
                  how much to charge her client, we have provided her with the
                  average rate that other freelancers in her area are charging.
                </b>
                Jenny may choose to use our suggestion as a guideline or charge
                what she pleases to her client. An invoice will be automatically
                sent to the clients provided e-mail as soon as the end time of
                the task has occurred. This prevents Jenny from facing
                confrontation or directly asking for payment as she builds her
                confidence as a freelancer.
                <b>
                  For stubborn clients Jenny can select to send them a reminder
                  of their unpaid invoice every 3 days until it gets paid.
                </b>
              </p>

              <b-row class="pic-right extra-bottom-space">
                <b-col class="content" lg="4" align="left">
                  <h5>Completing Task</h5>
                  <p>
                    Once the task’s end time has occured, the task moves from
                    drafts to unpaid. When the task gets paid by the client via
                    Interac e-transfer, it automatically moves to paid.
                  </p>
                </b-col>
                <b-col>
                  <img
                    class="project-pic-right mobile-bottom-space"
                    src="@/assets/epaid-info/e-paid-unpaid.png"
                  />
                </b-col>
              </b-row>

              <h3>More Details</h3>
              <p>
                The task can be edited or duplicated to avoid having to manually
                rewrite the task.
                <b>
                  We’re also able to remind Jenny when her invoice will be sent.
                  If the client requires that the invoice must be sent out
                  before the end time of the task has occured, she can send it
                  when she pleases.
                </b>
                In the event that Jenny receives cash as payment, she can check
                off that she has been paid already. If the client prefers to
                e-transfer her face-to-face, I have provided Jenny with a custom
                QR code that the client can scan to prompt the e-transfer
                payment flow.
              </p>
              <b-row>
                <b-col>
                  <img
                    class="project-pic mobile-bottom-space"
                    src="@/assets/epaid-info/e-paid-more-details.png"
                  />
                </b-col>
              </b-row>
              <b-row class="pic-right">
                <b-col class="content" lg="6" align="left">
                  <h5>Payment Received</h5>
                  <p>
                    Once Jenny receives payment via Interac e-transfer, or cash,
                    the task moves automatically to the paid section.
                  </p>
                </b-col>
                <b-col>
                  <img
                    class="project-pic-right"
                    src="@/assets/epaid-info/e-paid-done.png"
                  />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <!-- CHALLENGES -->
          <b-row id="Challenges" name="Challenges">
            <b-col>
              <h2>Challenges</h2>
              <p>
                For the first 2 days of the Mid-Term Hack, I entirely focused on
                providing a solution to every issue a freelancer might
                encounter. For example, I wanted our platform to cover patents,
                tax issues, accounting, invoicing, and payment collections.
                <b>
                  I realized that tackling all these problems would dilute our
                  original problem statement, and leave us with an app that
                  wasn’t clear and concise to the user.
                </b>
                To solve this problem, we stripped down our unrealistic approach
                and focused on the true problem presented, which is to allow a
                platform for freelancers to get paid faster by incorporating the
                Interac API.
              </p>
            </b-col>
          </b-row>
          <!-- OUTCOME -->
          <b-row id="Outcome" name="Outcome">
            <b-col>
              <h2>Outcome</h2>
              <p>
                On Friday of the Mid-Term Hack week, it was time to present our
                app. We presented to TD employees consisting of a project
                manager, 3 UX/UI designers, 3 software developers, 3 business
                analysts and the other co-ops students.
                <b>We came in first place for TD Lab’s Mid-Term Hack!</b>
              </p>
            </b-col>
          </b-row>
          <!-- NEXT PROJECT -->
          <b-row>
            <b-col class="next" align="right">
              <a href="./#/Fiti">
                <img
                  class="arrow"
                  srcset="
                    @/assets/homepage/next.png,
                    @/assets/homepage/next@2x.png 2x,
                    @/assets/homepage/next@3x.png 3x
                  "
                />
                <h6>Fiti</h6>
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  //SIDEBAR FOR PROJECTS
});
</script>

<style lang="scss">
@import "@/assets/variables.scss";

@media (max-width: $screen-sm) {
  .full-width-mobile {
    width:100%;
  }
}

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
.top-space-epaid {
  margin-top: 2px;
}
</style>
