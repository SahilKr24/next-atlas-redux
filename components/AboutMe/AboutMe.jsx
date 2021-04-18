import Paper from "../Paper";

const AboutMeContent = () => {
  return (
    <Paper>
      <div
        style={{
          margin: 45,
          paddingTop: 45,
          paddingBottom: 45,
        }}
      >
        <div style={{ fontFamily: "Roboto" }}>
          <b>Name:</b> Sahil Kumar
          <br />
          <b>Roll:</b> 1806510
          <br />
          <b>GitHub Profile:</b>
          <a href="https://github.com/SahilKr24"> github/SahilKr24</a>
          <br />
          <b>Skills:</b> HTML, CSS, JavaScript, NodeJs, Express, ReactJs,
          NextJs, jsp, REST, Flutter, Flask, Firebase, AWS, Docker, Serverless
          Applications
          <p>
            <b>Projects:</b>
          </p>
          <p>
            <ol>
              <li>
                <b>
                  IOT Lab Website
                  <a target="_blank" href="https://iotkiit.in">
                    &nbsp;&nbsp;(<u>iotkiit.in</u>)
                  </a>
                </b>
                <br />A Next.js + Tailwaind website with Strapi as headless CMS
                deployed using Docker and AWS with CI/CD pipeline via github
                actions.
              </li>
              <br />
              <li>
                <b>
                  ChaiBar Website
                  <a target="_blank" href="https://chaibarbbsr.com">
                    &nbsp;&nbsp;(<u>chaibarbbsr.com</u>)
                  </a>
                </b>
                <br />A Portfolio website for the client written in plain HTML
                and CSS with a touch of JS hosted on hostinger.
              </li>
              <br />
              <li>
                <b>
                  Kuebikobot
                  <a
                    target="_blank"
                    href="https://github.com/SahilKr24/kuebikobot"
                  >
                    &nbsp;&nbsp;(<u>GitHub</u>)
                  </a>
                </b>
                <br />A dockerized telegram bot that deploys to heroku or aws
                beanstalk and downloads links and torrents and uploads to google
                drive and returns public share link, supporting asynchronous
                downloads.
              </li>
              <br />
              <li>
                <b>
                  meet-api
                  <a
                    target="_blank"
                    href="https://github.com/SahilKr24/meet-api"
                  >
                    &nbsp;&nbsp;(<u>GitHub</u>)
                  </a>
                </b>
                <br />
                This API makes use of google calender api to generate google
                meet links. Also has a user-friendly auth system with create
                event form embedded.
              </li>
              <br />
              <li>Checkout my GitHub for more projects.</li>
            </ol>
          </p>
        </div>
      </div>
    </Paper>
  );
};

export default AboutMeContent;
