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
    benefitsSection: {
      title: "Key Benefits",
      benefits: [
        {
          icon: featureIcon,
          title: "Improve lead times and decision-making",
          description:
            "Enjoy day-to-day control and long-range planning with powerful forecasting.",
        },
        {
          icon: featureIcon,
          title: "Enhance demand planning",
          description:
            "Leverage AI-driven insights to make better forecasting decisions.",
        },
        {
          icon: featureIcon,
          title: "Reduce inventory costs",
          description:
            "Optimize inventory levels to avoid overstocking and shortages.",
        },
        {
          icon: featureIcon,
          title: "Boost operational efficiency",
          description:
            "Streamline workflows and reduce inefficiencies in scheduling.",
        },
        {
          icon: featureIcon,
          title: "Increase customer satisfaction",
          description:
            "Deliver on-time with optimized production planning and scheduling.",
        },
        {
          icon: featureIcon,
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
