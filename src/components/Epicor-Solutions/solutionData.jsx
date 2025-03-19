import kinetic from "../../assets/solutions/epicor/epicor-kinetic.jpg";

const featureIcon = (
  <img
    className="h-8 w-8"
    src="https://img.icons8.com/pastel-glyph/100/FFFFFF/intelligent-person.png"
    alt="intelligent-person"
  />
);

const solutionData = [
  {
    slug: "epicor-kinetic-planning",
    heroSection: {
      title:
        "Epicor Kinetic Planning & Scheduling Software to manage resources and meet customer demand.",
      subContent:
        "Plan and schedule the equipment, staff, and materials necessary to meet shipping deadlines with Kinetic accurate, flexible planning and scheduling tools.",
      buttonText: "Demo →",
      image: kinetic,
      listItems: [
        "Whether your business operation is providing services, manufacturing products, distribution, or a combination of all of these, precise and flexible planning and scheduling software is imperative to efficient and profitable operation.",
        "Respond quickly to changes in customer demand with minimal business interruption, mitigate potential problems, and seize opportunities to improve operations.",
        "Epicor offers a comprehensive solution for forecasting, material requirements planning (MRP), scheduling, and advanced planning and scheduling (APS) to meet the needs of today’s agile businesses.",
        "For companies with complex processes that require project management and resource management capabilities, Epicor Planning and Scheduling Software offers a comprehensive solution for unparalleled operational visibility.",
      ],
    },
    featuresSection: {
      title: "Epicor Kinetic Planning and Scheduling software includes",
      features: [
        { icon: featureIcon, name: "Forecasting" },
        { icon: featureIcon, name: "Master Production Scheduling" },
        { icon: featureIcon, name: "Smart Demand Planning" },
        { icon: featureIcon, name: "Material Requirements Planning" },
        {
          icon: featureIcon,
          name: "Scheduling and Resource Management",
        },
        {
          icon: featureIcon,
          name: "Infinite, Finite, and Constraint-Based Scheduling",
        },
      ],
    },
    containerSection: {
      content:
        "Epicor Smart Demand Planner provides cloud-based statistical forecasting that automatically selects the right forecast model for each item – accounting for trend,seasonality, and promotion or event-driven demand.",
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

export default solutionData;
