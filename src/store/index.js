import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locations: [
      {
        id: 1,
        type: "Work Location",
        CompanyLogo: "newport-news-shipbuilding-logo.svg",
        BackgroundImage: "nns-background.jpg",
        CompanyName: "Newport News Shipbuilding",
        StartDate: "2019-08-05",
        EndDate: "2020-02-26",
        RoleTitle: "Business Technology Programmer",
        JobDescription:
          "Contributed to all phases of Database Application Development. Developed new features and reports for a multitude of internal databases. Lead and designed an internal development tool to log, backup, and compact legacy DB files due to file size limitations. Co-lead the development of a codebase that helped enhance the standardization of code used in over 200 distinct databases. Provided direct support to customers that experienced issues with Database Applications.",
        TechnologyUsed: ["visual-basic", "git", "access", "sql"],
      },
      {
        id: 2,
        type: "Work Location",
        CompanyLogo: "abrigo-logo.svg",
        BackgroundImage: "abrigo-background.jpg",
        CompanyName: "Abrigo",
        StartDate: "2019-08-05",
        EndDate: "Current",
        RoleTitle: "Software Engineer II",
        JobDescription:
          "Contributed to all phases of Database Application Development. Developed new features and reports for a multitude of internal databases. Lead and designed an internal development tool to log, backup, and compact legacy DB files due to file size limitations. Co-lead the development of a codebase that helped enhance the standardization of code used in over 200 distinct databases. Provided direct support to customers that experienced issues with Database Applications.",
        TechnologyUsed: [
          "typescript",
          "vue",
          "javascript",
          "angularjs",
          "c-sharp",
          "microsoft-sql",
          "git",
          "atlassian",
        ],
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
      },
      {
        id: 2,
        name: "Fitness Tracking Android Application",
        description:
          "Allows a user to create a workout and track their different workouts. The User has the ability to choose from a list of exercises and input the weight used and reps performed on each of their sets. It was developed using a MVVM design pattern. It utilizes LiteSQL and Room as the persistence layer, taking advantage of two-way data binding to update and store the data.",
        toolsUsed: ["Kotlin", "Room", "LiteSQL"],
        image: "fitness-tracker-image.png",
      },
      {
        id: 3,
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
      },
    ],
  },
  getters: {
    getWorkLocationById: (state) => (id) => {
      return state.locations.find((location) => location.id === id);
    },
    getProjectById: (state) => (id) => {
      return state.Projects.find((project) => project.id === id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
