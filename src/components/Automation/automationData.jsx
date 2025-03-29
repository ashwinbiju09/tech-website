import Hero_AI from "../../assets/automation/ai-agent/Hero.jpg";
import Info_AI from "../../assets/automation/ai-agent/info.jpg";

const featureIcon = (
  <img
    className="h-8 w-8"
    src="https://img.icons8.com/pastel-glyph/100/FFFFFF/intelligent-person.png"
    alt="intelligent-person"
  />
);

const automationData = [
  {
    slug: "ai-agents",
    heroSection: {
      image: Hero_AI,
      title: "Smart. Team player. Can-do attitude.",
      description:
        "The perfect AI agent starts here. Easily build and manage safe, secure AI agents to automate any process, anywhere.",
    },
    infoSection: {
      image: Info_AI,
      title: "AI agents you can trust ? You got it.",
      description:
        "Real-world operations demand AI agents that operate responsibly. Close the trust gap with built-in AI governance and complete traceability of everything your AI does.",
    },
    featuresSection: {
      title: "Features of AI Agents ",
      description:
        "Streamline operations, boost decision-making, and drive personalized growth with SAP S/4HANA transformation.",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/stamp/32/FFFFFF/cloud.png"
              alt="cloud"
            />
          ),
          title: "Cloud Readiness",
          description:
            "The platform enables scalable, flexible cloud deployment, adapting efficiently to evolving business requirements.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/FFFFFF/external-forecasting-digital-marketing-smashingstocks-mixed-smashing-stocks.png"
              alt="external-forecasting-digital-marketing-smashingstocks-mixed-smashing-stocks"
            />
          ),
          title: "Enhanced Forecasting",
          description:
            "Advanced analytics ensure precise demand forecasting, optimizing inventory, production planning, and overall efficiency.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/workflow.png"
              alt="workflow"
            />
          ),
          title: "Integrated Workflows",
          description:
            "Processes integrate seamlessly, fostering smooth operations and enhancing collaboration across all departments involved.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/material-outlined/24/FFFFFF/user--v1.png"
              alt="user--v1"
            />
          ),
          title: "Intuitive User Interface",
          description:
            "A user-friendly interface simplifies tasks, improves user experience, and minimizes extensive training needs.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/FFFFFF/external-data-processing-data-engineering-outline-outline-black-m-oki-orlando.png"
              alt="external-data-processing-data-engineering-outline-outline-black-m-oki-orlando"
            />
          ),
          title: "Data Processing and Automation",
          description:
            "Routine tasks are automated, boosting efficiency, minimizing errors, and enhancing overall operational reliability.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/FFFFFF/external-data-management-networking-smashingstocks-detailed-outline-smashing-stocks-2.png"
              alt="external-data-management-networking-smashingstocks-detailed-outline-smashing-stocks-2"
            />
          ),
          title: "Data Management and Decision-Making",
          description:
            "Real-time data processing empowers strategic planning, supporting well-informed and timely decisions consistently.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/down3.png"
              alt="down3"
            />
          ),
          title: "Improve lead times and decision-making",
          description:
            "Enjoy day-to-day control and long-range planning with powerful forecasting.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pulsar-line/48/FFFFFF/requirement.png"
              alt="requirement"
            />
          ),
          title: "Enhance demand planning",
          description:
            "Leverage AI-driven insights to make better forecasting decisions.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/move-by-trolley.png"
              alt="move-by-trolley"
            />
          ),
          title: "Reduce inventory costs",
          description:
            "Optimize inventory levels to avoid overstocking and shortages.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/hatch/64/FFFFFF/electricity.png"
              alt="electricity"
            />
          ),
          title: "Boost operational efficiency",
          description:
            "Streamline workflows and reduce inefficiencies in scheduling.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-design-circle/66/FFFFFF/external-Satisfaction-customer-service-outline-design-circle.png"
              alt="external-Satisfaction-customer-service-outline-design-circle"
            />
          ),
          title: "Increase customer satisfaction",
          description:
            "Deliver on-time with optimized production planning and scheduling.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/change.png"
              alt="change"
            />
          ),
          title: "Adapt to changing market demands",
          description:
            "Quickly adjust to fluctuations in customer needs and industry trends.",
        },
      ],
    },
    ctaSection: {
      description:
        "Transform your enterprise with Accely’s SAP S/4HANA solutions and enhance operational efficiency, optimize processes, and drive sustainable growth through innovative, data-driven decision-making for future success.",
    },
  },
];

export default automationData;
