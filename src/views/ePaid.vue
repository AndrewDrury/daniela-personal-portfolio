<template>
  <div class="ePaid">
    <b-container fluid class="verticalCenter">
      <b-row class="top-space">
        <b-col align="left">
          <b-row>
            <b-col class="logo" align="center">
              <img
                srcset="
                  @/assets/epaid-info/Group2.png,
                  @/assets/epaid-info/Group2@2x.png 2x,
                  @/assets/epaid-info/Group2@3x.png 3x
                "
              />
            </b-col>
          </b-row>
          <b-row col="12">
            <b-col class="top-pics" align="center">
              <img
                class="left-pic"
                src="@/assets/iPhone.png"
                style="vertical-align: bottom;"
              />
              <img
                class="middle-pic"
                src="@/assets/iPhone.png"
                style="vertical-align: bottom;"
              />
              <img
                class="right-pic"
                src="@/assets/iPhone.png"
                style="vertical-align: bottom;"
              />
            </b-col>
          </b-row>
          <!-- SUMMARY -->
          <b-row class="summary">
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
                Hack, the problem is to help freelancers and people with side
                hustles get paid faster. As part of the problem, we were
                required to incorperate Interac’s API.
              </p>
            </b-col>
          </b-row>
          <!-- MY ROLE -->
          <b-row>
            <b-col>
              <h1>
                “How might I help young people manage their freelance work and
                organize who’s paid them?”
              </h1>
              <h2>My Role</h2>
              <p>
                The e-Paid team consisted of one
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
          <b-row>
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
                “An app like Fiti would make my life a lot easier. I’m
                constantly on YouTube, looking for workout videos that are safe
                for me to do. Finally, something like Fiti makes getting
                physical activity so much easier and fun.”
              </p>
              <h3>
                How did you determine your value as a freelance web designer?
              </h3>
              <p>
                “I felt that picking a workout was super easy. I really liked
                how there was categories to help. I really appreciated the 15
                minute category. This makes it easy to do short workouts through
                out my day.”
              </p>
              <h3>How do you organize your scheduling?</h3>
              <p>
                “On the profile page, ‘My Activity”. This was suprising because
                it felt super comforting knowing that you’re able to track my
                progress to reaching my goal.”
              </p>
            </b-col>
          </b-row>
          <!-- WHO IS THIS FOR? -->
          <b-row>
            <b-col>
              <h2>Who is e-Paid for? Meet Jenny</h2>
              <p>
                Jenny is an example user that would want to use e-Paid. For the
                purpose of designing, I created Jenny. This persona helped me to
                solve specific problems while also allowing me to fully immerse
                myself into her shoes.
              </p>
              <b-row class="user vert-center">
                <b-col class="user-pic">
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
                    <b-col md="3">
                      <h5>Age: 18</h5>
                    </b-col>
                    <b-col col="5">
                      <h5>Location: Vancouver</h5>
                    </b-col>
                    <b-col col="4">
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
                <b-col>
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
            </b-col>
          </b-row>
          <!-- SOLUTION -->
          <b-row>
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
                  receiving e-transfers.
                </b>
              </p>
              <b-row class="triple">
                <b-col>
                  <img
                    class="project-pic"
                    align="right"
                    src="@/assets/iPhone.png"
                  />
                </b-col>
                <b-col>
                  <img
                    class="project-pic"
                    align="center"
                    src="@/assets/iPhone.png"
                  />
                </b-col>
                <b-col>
                  <img
                    class="project-pic"
                    align="left"
                    src="@/assets/iPhone.png"
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
                  <img class="project-pic" src="@/assets/iPhone.png" />
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
                <b-col class="mr-3">
                  <img
                    class="project-pic"
                    align="right"
                    src="@/assets/iPhone.png"
                  />
                </b-col>
                <b-col class="ml-3">
                  <img
                    class="project-pic"
                    align="left"
                    src="@/assets/iPhone.png"
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
                  <img class="project-pic-right" src="@/assets/iPhone.png" />
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
                  <img class="project-pic" src="@/assets/iPhone.png" />
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
                  <img class="project-pic-right" src="@/assets/iPhone.png" />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <!-- CHALLENGES -->
          <b-row>
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
                platform for freelancers to get paid faster by incorperating the
                Interac API.
              </p>
            </b-col>
          </b-row>
          <!-- OUTCOME -->
          <b-row>
            <b-col>
              <h2>Outcome</h2>
              <p>
                On Friday of the Mid-Term Hack week, it was time to present our
                app. We presented to TD employees consisting of a project
                manager, 3 UX/UI designers, 3 software developers, 3 business
                analysts and the other co-ops students.
                <b>
                  We came in first place for TD Lab’s Mid-Term Hack!
                </b>
              </p>
            </b-col>
          </b-row>
          <!-- NEXT PROJECT -->
          <b-row align="right">
            <b-col class="next">
              <a href="./Fiti">
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

<style lang="scss">
@import "../assets/variables.scss";
.ePaid {
  .top-space {
    margin-top: 110px;
    @media (max-width: $screen-sm) {
      margin-top: 80px;
    }
  }

  .top-pics {
    .img {
      vertical-align: bottom;
    }
    .left-pic,
    .right-pic {
      width: 172px;
      @media (max-width: $screen-md) {
        width: 30%;
      }
    }
    .middle-pic {
      width: 203px;
      margin-right: 21px;
      margin-left: 21px;
      @media (max-width: $screen-md) {
        width: 35%;
        margin-right: 10px;
        margin-left: 10px;
      }
    }
    margin-bottom: 81px;
  }

  h1 {
    color: $primary;
    font-size: 29px !important;
    font-weight: 500 !important;
    letter-spacing: 0.23px !important;
    line-height: 39px !important;
    margin-top: 81px !important;
    text-align: center;
  }

  h2 {
    color: $primary;
    font-size: 24px !important;
    font-weight: 500 !important;
    line-height: 31px !important;
    letter-spacing: 0.18px !important;
    margin-top: 81px !important;
    margin-bottom: 30px !important;
  }

  h3 {
    font-size: 20px !important;
    line-height: 26px !important;
    font-weight: 500 !important;
    letter-spacing: 0.15px !important;
  }

  .next {
    .arrow {
      width: 20px;
      height: 34px;
      margin-bottom: 5px;
    }
    h6 {
      color: $primary;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 0.18px;
      line-height: 31px;
    }
    margin-top: 70px;
    margin-bottom: 125px;
  }

  b {
    color: $primary;
    font-weight: 500 !important;
  }

  p {
    font-weight: 400 !important;
  }

  .logo {
    margin-top: 45px;
    margin-bottom: 52px;
    @media (max-width: $screen-md) {
      margin-top: 10px;
      margin-bottom: 30px;
    }
  }

  .summary {
    padding-right: 140px;
    padding-left: 140px;
    @media (max-width: $screen-md) {
      padding-right: 0px;
      padding-left: 0px;
    }

    .sidebar {
      h4 {
        font-size: 16px;
        line-height: 21px;
        color: $primary;
        margin-bottom: 3px;
      }
      ul {
        li {
          font-size: 16px;
          line-height: 21px;
          color: rgba(129, 76, 243, 0.75);
          font-weight: 500;
        }
      }
    }
    .desc {
      margin-top: 0px;
    }
  }

  .user {
    background-color: rgba(129, 76, 243, 0.15);
    padding: 32px;
    padding-top: 54px;
    margin-top: 70px;
    @media (max-width: $screen-md) {
      padding: 5%;
      padding-top: 40px;
      padding-bottom: 40px;
    }

    .user-pic {
      width: 242px;
    }

    h5 {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.09px;
      line-height: 21px;
    }
    p,
    li {
      font-size: 16px;
      letter-spacing: 0.09px;
      line-height: 21px;
    }
  }

  .triple {
    padding-right: 7%;
    padding-left: 7%;
    margin-bottom: 69px;
  }

  .pic-right {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: 50px;

    @media (max-width: $screen-md) {
      padding-bottom: 80px;
    }

    h5 {
      font-size: 20px !important;
      line-height: 26px !important;
      font-weight: 500 !important;
      letter-spacing: 0.15px !important;
    }

    .content {
      @media (min-width: $screen-md) {
        margin-right: 179px;
      }
    }

    .project-pic-right {
      width: 239px;
      display: block;
      align: "center";
      margin-top: 67px;

      @media (max-width: $screen-md) {
        margin-left: auto;
        margin-right: auto;
        width: 260px;
        padding-bottom: 10px;
      }
    }
  }

  .extra-bottom-space {
    margin-bottom: 99px;
  }

  .extra-bottom-space2 {
    margin-bottom: 78px;
  }

  //Apply bottom margin to all columns in mobile
  @media all and (max-width: 767px) {
    [class^="col-sm-"] {
      margin-bottom: 20px;
    }
  }
}
</style>
