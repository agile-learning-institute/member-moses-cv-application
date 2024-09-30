import { v4 as uuid } from "uuid";

const dataTemplate = {
  personalInfo: {
    fullName: "Olara Moses",
    email: "wodpachua@gmail.com",
    phoneNumber: "+256 781 637 392",
    address: "Kampala, Uganda",
  },

  sections: {
    educations: [
      {
        degree: "Agile Software Engineering",
        schoolName: "Agile Learning Institute",
        location: "Remote",
        startDate: "02/2024",
        endDate: "Present",
        isCollapsed: true,
        isHidden: false,
        id: uuid(),
      },
      {
        degree: "Bachelors of Science Software Engineering",
        schoolName: "Uganda Technology & Management University",
        location: "Kampala, Uganda",
        startDate: "01/2024",
        endDate: "08/2026",
        isCollapsed: true,
        isHidden: false,
        id: uuid(),
      },
    ],

    experiences: [
      {
        companyName: "OpenMRS.",
        positionTitle: "Volunteer Software Developer",
        location: "USA",
        description:
          "Code contributions | Involved in Global Events planning | OpenMRS Academy",
        startDate: "06/2023",
        endDate: "present",
        isCollapsed: true,
        id: uuid(),
      },
      {
        companyName: "Dynamic Land Projects",
        positionTitle: "Land Surveyor",
        location: "Kampala, Uganda",
        description:
          "Land surveys | Data processing | Topographical Mapping | GIS mapping | Title Processing | Boundary Openings | Subdivision Surveys",
        startDate: "04/2016",
        endDate: "02/2019",
        isCollapsed: true,
        id: uuid(),
      },
    ],
  },
};

export default dataTemplate;
