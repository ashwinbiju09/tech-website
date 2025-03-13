import fieldService from "../../assets/solutions/addons/field-service.jpg";

const featureIcon = (
  <img
    className="h-8 w-8"
    src="https://img.icons8.com/pastel-glyph/100/FFFFFF/intelligent-person.png"
    alt="intelligent-person"
  />
);

const addonsData = [
  {
    slug: "field-service-management",
    heroSection: {
      title: "Field Service Management",
      subContent:
        "Simplify your processes, automate tasks, and break down barriers between departments. Make it easier for customers and employees, and increase your company’s revenue.",
      image: fieldService,
    },
    overviewSection: {
      title: "What is Field Service Management?",
      subContent:
        "Field service management (FSM) or Field Service Management software helps organizations manage their remote workers, assets, and processes. It involves planning, dispatching, monitoring, and managing field personnel, technicians, and equipment.",
      features: [
        {
          name: "Streamline contracts and payment",
          color: "#0D47A1",
          description:
            "Access consolidated information about all current and previous contracts, as well as invoice and payment details.",
        },
        {
          name: "Raise service requests",
          color: "#0D47A1",
          description:
            "Customers or tenants can easily raise any facility issues or service requests through a portal, and they can expect faster resolution.",
        },
        {
          name: "Easy-to-use interface",
          color: "#0D47A1",
          description:
            "The property management platform offers a user-friendly web portal and mobile app for customers and tenants.",
        },
        {
          name: "Engage with tenants",
          color: "#0D47A1",
          description:
            "Enhance community connectivity by enabling seamless communication between facility owners and tenants.",
        },
      ],
    },
    insightsSection: {
      description:
        "Streamline operations, boost decision-making, and drive personalized growth with SAP S/4HANA transformation.",
      benefits: [
        {
          icon: featureIcon,
          description: "Easily assign tasks and monitor real-time progress.",
        },
        {
          icon: featureIcon,
          description: "Quickly store and access important documents.",
        },
        {
          icon: featureIcon,
          description: "Easily create, manage, and complete work orders.",
        },
        {
          icon: featureIcon,
          description: "Efficiently track inventory and manage supplies.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of SAP S/4HANA Implementation",
      description:
        "Streamline operations, boost decision-making, and drive personalized growth with SAP S/4HANA transformation.",
      benefits: [
        {
          icon: featureIcon,
          title: "Cloud Readiness",
          description:
            "The platform enables scalable, flexible cloud deployment, adapting efficiently to evolving business requirements.",
        },
        {
          icon: featureIcon,
          title: "Enhanced Forecasting",
          description:
            "Advanced analytics ensure precise demand forecasting, optimizing inventory, production planning, and overall efficiency.",
        },
        {
          icon: featureIcon,
          title: "Integrated Workflows",
          description:
            "Processes integrate seamlessly, fostering smooth operations and enhancing collaboration across all departments involved.",
        },
        {
          icon: featureIcon,
          title: "Intuitive User Interface",
          description:
            "A user-friendly interface simplifies tasks, improves user experience, and minimizes extensive training needs.",
        },
        {
          icon: featureIcon,
          title: "Data Processing and Automation",
          description:
            "Routine tasks are automated, boosting efficiency, minimizing errors, and enhancing overall operational reliability.",
        },
        {
          icon: featureIcon,
          title: "Data Management and Decision-Making",
          description:
            "Real-time data processing empowers strategic planning, supporting well-informed and timely decisions consistently.",
        },
      ],
    },
    percentageSection: {
      title: "Making a Difference with SAP S/4HANA",
      stats: [
        {
          number: 85,
          label: "Retention Rate",
          content:
            "85% of users return within a month of their first interaction.",
        },
        {
          number: 92,
          label: "Satisfaction Score",
          content: "92% of users rated our platform as highly satisfactory.",
        },
        {
          number: 75,
          label: "Conversion Rate",
          content: "75% of visitors take meaningful actions on the site.",
        },
      ],
    },
  },
];

export default addonsData;
