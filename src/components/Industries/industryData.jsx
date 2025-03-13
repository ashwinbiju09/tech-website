import FAHero from "../../assets/industries-2/retail/fashion-and-apparel/hero.jpg";
import FAService from "../../assets/industries-2/retail/fashion-and-apparel/services.jpg";

import FBHero from "../../assets/industries-2/consumer-products/food-and-beverage/hero.jpg";
import FBService from "../../assets/industries-2/consumer-products/food-and-beverage/services.jpg";

const industryData = [
  {
    slug: "fashion-and-apparel",
    heroSection: {
      title: "Fashion and Apparel",
      subContent:
        "Reach global markets with the latest trends with innovative cloud solutions that can transform your fashion and apparel business.",
      image: FAHero,
    },
    overviewSection: {
      title: "Evolve through new fashion and apparel industry changes",
      description:
        "Fashion retail is being transformed by in-store, online resources, and mobile technology, which enable customization, personalization, analytics, and speedier product discovery. Fashion retailers are increasingly turning to technology to stay competitive and address lower profit margins.",
    },
    servicesSection: {
      title: "Transform Fashion and Apparel Experience",
      image: FAService,
      services: [
        {
          title: "Vertical Integration",
          description:
            "Flexible ERP systems like S/4HANA Fashion can smoothly adapt to the changing market demands.",
        },
        {
          title: "Omnichannel Retail",
          description:
            "Seamless integration across in-store and digital platforms to enhance customer experience.",
        },
        {
          title: "Supply Chain Optimization",
          description:
            "Advanced analytics and AI-driven forecasting for efficient inventory management.",
        },
        {
          title: "Digital Product Lifecycle",
          description:
            "End-to-end product lifecycle management with digital twins and cloud integration.",
        },
        {
          title: "Smart Manufacturing",
          description:
            "Leverage IoT and AI to enhance production efficiency and reduce costs.",
        },
        {
          title: "Personalized Shopping Experiences",
          description:
            "Utilizing AI-driven recommendations and augmented reality to improve customer engagement.",
        },
      ],
    },
    insightsSection: {
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
    containerSection: {
      description:
        "Elevate your fashion and apparel retail experience with Accely’s in-depth insights and advanced solutions. Integrate seamlessly, gain data-driven insights, and optimize pricing plans to innovate and expand your business.",
    },
  },
  {
    slug: "food-and-beverage",
    heroSection: {
      title: "Food and Beverage",
      subContent:
        "Replenish the food and beverage processes through information technology solutions.",
      image: FBHero,
    },
    overviewSection: {
      title: "Meeting the Needs of End Consumers",
      description:
        "Leading food and beverage companies throughout the world are keen on streamlining operations so they can react swiftly and nimbly to shifting market possibilities and business needs. We assist clients with managing expenses and developing fresh business skills by using innovative approaches to address supply chain, technological, and consumer challenges in order to guarantee ongoing product innovation and stronger customer relationships. ",
    },
    servicesSection: {
      title: "Innovating the Food and Beverage Industry",
      image: FBService,
      services: [
        {
          title: "Automated Quality Control",
          description:
            "Implement AI-driven quality assurance to ensure food safety and compliance.",
        },
        {
          title: "Supply Chain Resilience",
          description:
            "Real-time tracking and predictive analytics to optimize food distribution.",
        },
        {
          title: "Consumer Data Insights",
          description:
            "AI-powered data analysis for understanding consumer behavior and preferences.",
        },
        {
          title: "Automated Quality Control",
          description:
            "Implement AI-driven quality assurance to ensure food safety and compliance.",
        },
        {
          title: "Supply Chain Resilience",
          description:
            "Real-time tracking and predictive analytics to optimize food distribution.",
        },
        {
          title: "Consumer Data Insights",
          description:
            "AI-powered data analysis for understanding consumer behavior and preferences.",
        },
      ],
    },
    insightsSection: {
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
    containerSection: {
      description:
        "Make innovative changes in your food and beverage operations with Accely’s resourceful insights and transforming solutions. Improve growth through data-driven insights, smooth integration, and effective pricing tactics.",
    },
  },
];

export default industryData;
