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
        RoleTitle: "Business Technology Programmer (Software Developer)",
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
  },
  getters: {
    getWorkLocationById: (state) => (id) => {
      return state.locations.find((location) => location.id === id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
