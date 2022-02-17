import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: [
      {
        id: 1,
        type: "Work Location",
        CompanyLogo: "abrigo-logo.svg",
        BackgroundImage: "abrigo-background.jpg",
        CompanyName: "Abrigo",
        StartDate: "May 8, 2020",
        EndDate: "Current",
        RoleTitle: "Software Engineer II",
        JobDescription:
          'Helped to develop "Online Portal" a tool that integrates with banks systems across the US and allows end-users to submit business and personal loans entirely online. Designed implementation plan for new features from Specs created by Product Managers. I also Implemented and tested a multitude of new features and fixed bugs across multiple products utilizing a variety of tools and Programing languages.',
        TechnologyUsed: [
          "Typescript",
          "Vue",
          "JavaScript",
          "AngularJS",
          "C Sharp",
          "Microsoft SQL",
          "Git",
          "Atlassian Suite",
        ],
      },
      {
        id: 2,
        type: "Work Location",
        CompanyLogo: "newport-news-shipbuilding-logo.svg",
        BackgroundImage: "nns-background.jpg",
        CompanyName: "Newport News Shipbuilding",
        StartDate: "August 5, 2019",
        EndDate: "February 26, 2020",
        RoleTitle: "Business Technology Programmer",
        JobDescription:
          "Contributed to all phases of Database Application Development. Developed new features and reports for a multitude of internal databases. Lead and designed an internal development tool to log, backup, and compact legacy DB files due to file size limitations. Co-lead the development of a codebase that helped enhance the standardization of code used in over 200 distinct databases. Provided direct support to customers that experienced issues with Database Applications.",
        TechnologyUsed: ["Visual Basic", "Git", "Access", "SQL"],
      },
    ],
    projects: [
      {
        id: 1,
        name: "COVID-19 Dashboard",
        description:
          "This application allows the user to visualize COVID-19 case data for each of the states in the USA. It allows the user to compare all of the state's trends in new deaths, new cases or number of active cases. The user can also select a certain state and it will provide more in depth data for that state.All of the data fetching and processing is done server-side. The front end creates HTTP requests to get the number of cases / new cases / new deaths for all of the states so that they can be colored appropriately. It also get in-depth information for any given state",
        toolsUsed: [
          "Java",
          "Spring Boot",
          "Leaflet",
          "JavaScript",
          "HTML",
          "CSS",
        ],
        image: "covid-image.png",
        imageBanner: "covid-banner.png",
        gitHubLink: "https://github.com/anthony-ruiz/COVID-Dashboard",
      },
      {
        id: 2,
        name: "Political Fairness Congressional District Generator",
        description:
          "Designed and developed a system that automatically generates congressional districts via region growing algorithm in order to maximize political fairness. Utilized Java, JavaScript, Hibernate, Spring Boot, and Amazon Web Services.",
        toolsUsed: [
          "Java",
          "Spring Boot",
          "Leaflet",
          "JavaScript",
          "HTML",
          "CSS",
        ],
        image: "redistricting-image.png",
        imageBanner: "redistricting-banner.png",
        gitHubLink: "https://github.com/anthony-ruiz/Redistricting-simulator",
      },
      {
        id: 3,
        name: "Fitness Tracking Android Application",
        description:
          "Allows a user to create a workout and track their different workouts. The User has the ability to choose from a list of exercises and input the weight used and reps performed on each of their sets. It was developed using a MVVM design pattern. It utilizes LiteSQL and Room as the persistence layer, taking advantage of two-way data binding to update and store the data.",
        toolsUsed: ["Kotlin", "Room", "SQLite"],
        image: "fitness-tracker-image.png",
        imageBanner: "fitness-banner.png",
        gitHubLink: "https://github.com/anthony-ruiz/my-workout-tracker",
      },
    ],
    userProfile: {
      name: "Anthony Ruiz-Alatorre",
      profilePicture: "profile-picture.jpg",
      bio: "Hi, I am Anthony Ruiz-Alatorre. I am a full-stack Software Engineer with a background in developing systems aimed at increasing productivity and growth. Currently I am working at Abrigo working to provide Comunity Banks a system for their customers to complete loan applications entirely online. Previously I worked at Newport News Shipbuilding and was involved in all phases of Database Application Development, providing tools that allowed the workforce become more efficient.",
      linkedIn: "https://www.linkedin.com/in/anthonyruizalatorre",
      github: "https://github.com/anthony-ruiz",
      email: "anthonyruizalatorre@outlook.com",
    },
  },
  getters: {
    getWorkLocationById: (state) => (id) => {
      return state.locations.find((location) => location.id === id);
    },
    getProjectById: (state) => (id) => {
      return state.projects.find((project) => project.id === id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
