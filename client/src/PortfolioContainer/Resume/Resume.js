import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets  = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    // { label: "Projects", logoSrc: "projects.svg" },
    { label: "Experience", logoSrc : "interests.svg" } ,
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 40 },
    { skill: "CSS", ratingPercentage: 25 },
    { skill: "React", ratingPercentage: 50 },
    { skill: "JavaScript ES6", ratingPercentage: 60 },
    { skill: "React Native", ratingPercentage: 30 },
    { skill: "Webpack", ratingPercentage: 40 },
    { skill: "TypeScript", ratingPercentage: 25 },
    { skill: "Jira", ratingPercentage: 50 },
    { skill: "Postman", ratingPercentage: 60 },
    { skill: "Jasmine", ratingPercentage: 30 },
    { skill: "Karma", ratingPercentage: 40 },
    { skill: "jQuery", ratingPercentage: 25 },
    { skill: "Scss", ratingPercentage: 50 },
    { skill: "Bootstrap", ratingPercentage: 60 },
    { skill: "GitHub", ratingPercentage: 30 },

  ];

  const projectsDetails = [
    
    // {
    //   title: "Personal Portfolio Website",
    //   duration: { fromDate: "2020", toDate: "2021" },
    //   description:
    //     "A Personal Portfolio website to showcase all my details and projects at one place.",
    //   subHeading: "Technologies Used: React JS, Bootsrap",
    // },
    // {
    //   title: "Mobile E-shop ",
    //   duration: { fromDate: "2020", toDate: "2021" },
    //   description:
    //     "An ecommerce application designed to sell products online wth payment system integration",
    //   subHeading:
    //     "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
    // },
    // {
    //   title: "Ecommerce Website ",
    //   duration: { fromDate: "2020", toDate: "2021" },
    //   description:
    //     "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
    //   subHeading:
    //     "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    // },

  ];

  const resumeDetails = [
    <div className="resume-screen-container programming-education-container" key="education">
      <ResumeHeading
        heading={"Ternopil National Pedagogical University"}
        subHeading={"Master's Degree in History"}
        fromDate={"2016"}
        toDate={"2018"}
      />

      <ResumeHeading
        heading={"Ternopil National Pedagogical University"}
        subHeading={"Bachelor's Degree in History"}
        fromDate={"2012"}
        toDate={"2016"}
      />
      
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container programming-work-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Recruitment Agency for Overseas Jobs"}
   
          fromDate={"2018"}
          toDate={"2022"}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div> */}
        <div className="experience-description">
          <span className="resume-description-text">
            - Finding candidates with a relevant specialty and experience for vacancies
          </span>
          <br />
          <span className="resume-description-text">
            - Conducting interviews and further information support for the candidates
          </span>
          <br />
         
        </div>

        
      </div>

      
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          {/* <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div> */}
        </div>
      ))}
    </div>,

    /* PROJECTS */
    // <div className="resume-screen-container" key="projects">
    //   {projectsDetails.map((projectsDetails, index) => (
    //     <ResumeHeading
    //       key={index}
    //       heading={projectsDetails.title}
    //       subHeading={projectsDetails.subHeading}
    //       description={projectsDetails.description}
    //       fromDate={projectsDetails.duration.fromDate}
    //       toDate={projectsDetails.duration.toDate}
    //     />
    //   ))}
    // </div>,
 /* Interests */
 <div className="resume-screen-container programming-expirience-container" key="interests">
  <br/>
 {/* <ResumeHeading
   heading="Teaching"
   description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
 />
 <ResumeHeading
   heading="Music"
   description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
 />
 <ResumeHeading
   heading="Competitive Gaming"
   description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
 /> */}
 <ResumeHeading 
 heading="Fundamentals of Software Testing from Forte Group, 2021"
   description="Experience in test cases creation, execution, making bug reports"
 />
    <ResumeHeading
 heading="IT Fundamentals for Ukrainian Switchers from EPAM, 2022"
   description="Received the basics of computer science"
   
 />
    <ResumeHeading
 heading="The Frontend Developer Career Path on Scrimba, 2022"
   description="Knowledge of Essential CSS, HTML and JS concepts"
   
 />
    <ResumeHeading
 heading="The Complete JavaScript Course: From Zero to Expert by Jonas Schmedtmann, 2022"
   description="Learned modern ES6 by building real-world projects.Gain understanding how to architect code using flowcharts and common patterns"
   
 />
    <ResumeHeading
   heading="EPAM Global Project Education Competition, 2022"
   description="Worked in a team environment on application development using React and React Native. Learned how to join the front-end and the back-end by creating APIs. Worked with postman"
   
 />
    <ResumeHeading
 heading="Front End for Switchers from EPAM, 2022"
   description="Received skills in using pre- and post-processors Experience working with web servers Hands-on knowledge in creating responsive websites. Understanding of programming paradigm fundamentals (OOP and FP). Experience with manipulating the DOM tree. Practice using different frameworks for creating applications"
 />

<ResumeHeading
 heading="TypeScript for Switchers from EPAM, 2022"
   description="Learned how to work with TS while developing library functionality"
 />
</div>,
   
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 560;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
