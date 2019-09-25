<template>
  <div class="ePaid">
    <b-container fluid class="verticalCenter">
      <b-row>
        <b-col align="left">
          <b-row>
            <b-col class="py-3" align="center">
              <img
                srcset="@/assets/epaid-info/Group2.png, @/assets/epaid-info/Group2@2x.png 2x, @/assets/epaid-info/Group2@3x.png 3x"
              />
            </b-col>
          </b-row>
          <b-row col="12">
            <b-col class="top-pics">
              <img src="@/assets/iPhone.png" style="width:28%; vertical-align: bottom;" />
              <img
                src="@/assets/iPhone.png"
                class="px-3"
                style="width:44%; vertical-align: bottom;"
              />
              <img src="@/assets/iPhone.png" style="width:28%; vertical-align: bottom;" />
            </b-col>
          </b-row>
          <!-- SUMMARY -->
          <b-row>
            <b-col>
              <h4>Skills</h4>
              <ul>
                <li>User Interviews</li>
                <li>Personas</li>
                <li>Project Management</li>
                <li>UI/UX Design</li>
              </ul>
              <h4>Type/Company</h4>
              <ul>
                <li>Winner, Mid-Term Hack at TD Lab</li>
              </ul>
            </b-col>
            <b-col>
              <h3>Help freelancers get paid faster.</h3>
              <p>
                In January 2019, I started a role as a UI/UX design Intern at TD
                Lab in Kitchener, Ontario. TD Lab aims to develop solutions that
                create exceptional user experience for employees and customers.
                During TD Lab’s Mid-Term Hack, the problem is to help
                freelancers and people with side hustles get paid faster. As
                part of the problem, we were required to incorperate Interac’s
                API.
              </p>
            </b-col>
          </b-row>
          <!-- MY ROLE -->
          <b-row>
            <b-col>
              <h2>My Role</h2>
              <p>
                The e-Paid team consisted of one UX/UI designer (me!) and one
                software developer co-op student. The co-op roles (UI/UX
                designers, and software developers) were immersed in user
                experience problems and were required to come up with solutions
                to problems that Generation Z is currently facing. We were
                required to solve this problem in 5 days (Monday-Friday). Day 1
                and 2 consisted of gathering as much information as possible. In
                order to do this, we conducted interviews, built personas, and
                conducted user research. Day 3 and 4 focused on crafting the
                UI/UX of the app, as well as developing it. Day 5 was our
                presentation day.
              </p>
              <h2>
                “How might I help young people manage their freelance work and
                organize who’s paid them?”
              </h2>
            </b-col>
          </b-row>
          <!-- USER INTERVIEW -->
          <b-row>
            <b-col>
              <h2>User Interview</h2>
              <p>
                During day 1 of the Mid-Term Hack, I researched as much
                possible. To understand the user, I decided to conduct an
                interview on one of the full-time employees at TD Lab. Meet
                *****. He is a web design freelancer. We asked him:
              </p>
              <p>As a freelancer, what is your main struggle?</p>
              <p>
                “An app like Fiti would make my life a lot easier. I’m
                constantly on YouTube, looking for workout videos that are safe
                for me to do. Finally, something like Fiti makes getting
                physical activity so much easier and fun.”
              </p>
              <p>How did you determine your value as a freelance web designer?</p>
              <p>
                “I felt that picking a workout was super easy. I really liked
                how there was categories to help. I really appreciated the 15
                minute category. This makes it easy to do short workouts through
                out my day.”
              </p>
              <p>How do you organize your scheduling?</p>
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
              <b-row>
                <b-col>
                  <img src="@/assets/iPhone.png" />
                </b-col>
                <b-col>
                  <b-row>
                    <b-col>
                      <p>Age: 18</p>
                    </b-col>
                    <b-col>
                      <p>Location: Vancouver</p>
                    </b-col>
                    <b-col>
                      <p>Career: Student</p>
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
                      <p>Goals</p>
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
                      <p>Frustrations</p>
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
              <p>Create an Account</p>
              <p>
                I created an app that allows users to keep track of clients,
                schedule, recommend prices to charge, and release invoices to
                the clients, prompting them to e-transfer the user. The only
                infomation we require from Jenny is her email, name, and
                password. I require her e-mail to allow automatic invoicing and
                receiving e-transfers.
              </p>
              <b-row>
                <b-col>
                  <img src="@/assets/iPhone.png" height="325px" />
                </b-col>
                <b-col>
                  <img src="@/assets/iPhone.png" height="325px" />
                </b-col>
                <b-col>
                  <img src="@/assets/iPhone.png" height="325px" />
                </b-col>
              </b-row>
              <p>Home Page</p>
              <p>
                On the home page, Jenny’s tasks can be sorted into drafts,
                unpaid, and paid. This allows for easy organization of clients.
                The draft sections includes tasks that have not been completed
                yet. This section resembles an ‘upcoming’ section. It’s called
                drafts because I understand that being a freelancer is very
                unstable and schedule changes can happen frequently. Having a
                drafts section gives Jenny flexibility and control over her
                tasks.
              </p>
              <b-row>
                <b-col>
                  <img src="@/assets/iPhone.png" height="325px" />
                </b-col>
              </b-row>
              <p>Creating a Task</p>
              <p>
                First, Jenny will choose the task that she will be doing for her
                client. The top choices are the most common tasks executed by
                new freelancers. If she does not see her service on the list,
                she can type her own.
              </p>
              <b-row>
                <b-col>
                  <img src="@/assets/iPhone.png" height="325px" />
                </b-col>
                <b-col>
                  <img src="@/assets/iPhone.png" height="325px" />
                </b-col>
              </b-row>
              <p>
                Next, Jenny will decide a date, a start time, and end time of
                the task. Since Jenny is new to the freelance world, and may not
                know how much to charge her client, we have provided her with
                the average rate that other freelancers in her area are
                charging. Jenny may choose to use our suggestion as a guideline
                or charge what she pleases to her client. An invoice will be
                automatically sent to the clients provided e-mail as soon as the
                end time of the task has occurred. This prevents Jenny from
                facing confrontation or directly asking for payment as she
                builds her confidence as a freelancer. For stubborn clients
                Jenny can select to send them a reminder of their unpaid invoice
                every 3 days until it gets paid.
              </p>
              <!-- INSERT TEXT ON LEFT, PIC ON RIGHT -->
              <h1>MISSING TEXT AND PIC</h1>
              <p>More Details</p>
              <p>
                The task can be edited or duplicated to avoid having to manually
                rewrite the task. We’re also able to remind Jenny when her
                invoice will be sent. If the client requires that the invoice
                must be sent out before the end time of the task has occured,
                she can send it when she pleases. In the event that Jenny
                receives cash as payment, she can check off that she has been
                paid already. If the client prefers to e-transfer her
                face-to-face, I have provided Jenny with a custom QR code that
                the client can scan to prompt the e-transfer payment flow.
              </p>
              <b-row>
                <b-col>
                  <img src="@/assets/iPhone.png" height="325px" />
                </b-col>
              </b-row>
              <!-- INSERT TEXT ON LEFT, PIC ON RIGHT -->
              <h1>MISSING TEXT AND PIC</h1>
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
                tax issues, accounting, invoicing, and payment collections. I
                realized that tackling all these problems would dilute our
                original problem statement, and leave us with an app that wasn’t
                clear and concise to the user. To solve this problem, we
                stripped down our unrealistic approach and focused on the true
                problem presented, which is to allow a platform for freelancers
                to get paid faster by incorperating the Interac API.
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
                analysts and the other co-ops students. We came in first place
                for TD Lab’s Mid-Term Hack!
              </p>
            </b-col>
          </b-row>
          <!-- NEXT PROJECT -->
          <b-row align="right">
            <b-col>
              <a href="./Fiti">
                <img
                  srcset="@/assets/homepage/next.png, @/assets/homepage/next@2x.png 2x, @/assets/homepage/next@3x.png 3x"
                />
                <h2>Fiti</h2>
              </a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
@import "@/assets/variables.scss";

.top-pics {
  width: 60%;
  .img {
    vertical-align: bottom;
  }
}

.contained {
  .b-row {
    color: red;
    background-color: red;
  }
}

//Apply bottom margin to all columns in mobile
@media all and (max-width: 767px) {
  [class^="col-sm-"] {
    margin-bottom: 20px;
  }
}
</style>
