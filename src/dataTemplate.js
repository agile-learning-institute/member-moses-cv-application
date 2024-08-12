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
        degree: "Bachelors in Land Surveying",
        schoolName: "Makerere University",
        location: "Kampala, Uganda",
        startDate: "08/2015",
        endDate: "12/2019",
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
          "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
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
          "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
        startDate: "04/2016",
        endDate: "02/2019",
        isCollapsed: true,
        id: uuid(),
      },
    ],
  },
};

export default dataTemplate;
