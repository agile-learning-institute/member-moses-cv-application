import { v4 as uuid } from "uuid";

const dataTemplate = {
  personalInfo: {
    fullName: "Olara Moses",
    email: "oh-yes-he-cares@gmail.com",
    phoneNumber: "+256 777 777 777",
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
        schoolName: "Self Learning University",
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
        companyName: "Ultra Mine Inc.",
        positionTitle: "Software Developer",
        location: "USA",
        description:
          "Developed and maintained web applications using JavaScript, React, and Node.js | Collaborated with cross-functional teams to define, design, and ship new features | Implemented RESTful APIs and integrated third-party services | Conducted code reviews and provided mentorship to junior developers",
        startDate: "06/2015",
        endDate: "present",
        isCollapsed: true,
        id: uuid(),
      },
      {
        companyName: "King James Technologies",
        positionTitle: "CEO",
        location: "Kampala, Uganda",
        description:
          "Founded and managed a software development company | Led a team of developers to build web and mobile applications | Developed business strategies and managed client relationships | Conducted market research and identified new business opportunities",
        startDate: "04/2016",
        endDate: "02/2019",
        isCollapsed: true,
        id: uuid(),
      },
    ],
  },
};

export default dataTemplate;
