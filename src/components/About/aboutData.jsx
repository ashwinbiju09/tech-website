import Hero from "../../assets/about.jpg";
import WAW from "../../assets/values/who-we-are.jpg";
import Mission from "../../assets/values/mission.jpg";
import Expertise from "../../assets/values/expertise.jpg";

const featureIcon = (
  <img
    className="h-8 w-8"
    src="https://img.icons8.com/pastel-glyph/100/0a1f36/intelligent-person.png"
    alt="intelligent-person"
  />
);

const aboutData = [
  {
    heroSection: {
      image: Hero,
      title: "Why Leading Businesses Trust Our Intelligent ERP Solutions",
      subContent:
        "Discover how our unique combination of core ERP expertise, enhanced capabilities, and AI automation delivers transformative results.",
    },
    introSection: [
      {
        title: "Who We Are ?",
        description:
          "We are a forward-thinking technology partner specializing in intelligent ERP solutions that transform traditional business operations into streamlined, data-driven powerhouses. With deep expertise in both established ERP platforms and cutting-edge AI technologies, we bridge the gap between where your business is today and where it needs to be tomorrow.",
        image: WAW,
      },
      {
        title: "Our Mission",
        description:
          "We are committed to helping businesses break free from the limitations of standard ERP systems. Our mission is to eliminate manual tasks, modernize outdated systems, and create robust growth engines that drive sustainable success in an increasingly competitive landscape.",
        image: Mission,
      },
      {
        title: "Our Expertise",
        description:
          "Our team combines specialized knowledge in SAP, Epicor, and proprietary AI automation solutions, delivering comprehensive expertise that few can match. This wide range of capabilities enables us to design and implement customized solutions addressing your unique business challenges.",
        image: Expertise,
      },
    ],
    differentiatorsSection: [
      {
        icon: featureIcon,
        title: "AI-First Methodology",
        description:
          "Eighty-six percent of CEOs believe that AI is a critical business advantage. We integrate AI into the core of our solutions to embed intelligence throughout your operations, turning data into actionable insights and automating repetitive tasks.",
      },
      {
        icon: featureIcon,
        title: "Truly Customized Solutions",
        description:
          "Rejecting the one-size-fits-all approach, we tailor our solutions to your unique industry requirements, business processes, and growth objectives to ensure maximum impact and return on investment.",
      },
      {
        icon: featureIcon,
        title: "Seamless Integration Ecosystem",
        description:
          "Our solutions are built for connectivity. We integrate your core ERP with essential business systems, cloud services, and specialized applications, creating a unified ecosystem that eliminates silos and enables real-time data flow across your organization.",
      },
      {
        icon: featureIcon,
        title: "End-to-End Implementation Excellence",
        description:
          "From initial assessment to go-live and beyond, we manage every aspect of your implementation with careful attention to detail. Our proven methodology minimizes disruption while maximizing adoption, ensuring your team confidently embraces new systems and processes.",
      },
      {
        icon: featureIcon,
        title: "Continuous Innovation Partnership",
        description:
          "Technology and market conditions evolve rapidly. We establish ongoing partnerships focused on continuous improvement, helping you regularly reassess, optimize, and expand your capabilities to maintain a competitive edge.",
      },
    ],
    processSection: {
      process: [
        {
          icon: featureIcon,
          title: "Discovery & Assessment",
          description:
            "We start by thoroughly understanding your business, challenges, and objectives. Our team conducts stakeholder interviews, process mapping, and system assessments to establish a clear baseline and identify opportunities for optimization.",
        },
        {
          icon: featureIcon,
          title: "Strategic Solution Design",
          description:
            "Based on our discoveries, we design a comprehensive solution blueprint tailored to your needs. This blueprint outlines the appropriate ERP foundation, necessary enhanced capabilities, and potential AI automation opportunities aligned with your business goals and ROI expectations.",
        },
        {
          icon: featureIcon,
          title: "Streamlined Implementation",
          description:
            "Our implementation methodology focuses on minimizing disruption while accelerating time-to-value. Utilizing agile practices and regular milestones, we manage data migration, system configuration, integration setup, and comprehensive testing with full transparency throughout the process.",
        },
        {
          icon: featureIcon,
          title: "Comprehensive Training & Change Management",
          description:
            "Effective technology requires proper adoption. Our training programs and change management strategies ensure your team is confident and capable with new systems and processes. We provide role-based training, detailed documentation, and change champions to ensure a smooth transition.",
        },
        {
          icon: featureIcon,
          title: "Ongoing Optimization & Support",
          description:
            "Our partnership continues post go-live through proactive support and continuous improvement. Regular health checks, performance assessments, and strategic planning sessions help ensure your solution evolves with your business.",
        },
      ],
    },
    ctaSection: {
      title: "Ready to Transform Your Business?  ",
      description:
        "Take the first step toward operational excellence and AI-powered growth. Our team is ready to discuss your challenges and demonstrate how our intelligent ERP solutions can address them. ",
    },
    methodSection: [
      {
        title: "Layer 1",
        heading: "Core ERP Foundation",
        description:
          "We begin with a robust ERP system that serves as the backbone of your operations by streamlining processes and centralizing data. Whether implementing new solutions or optimizing existing ones, we ensure your foundation is solid, scalable, and aligned with industry best practices.",
        points: [
          "AI Agent Studio for building custom AI agents",
          "Automator AI for streamlining complex workflows",
          "Intelligent document processing",
          "Process discovery tools to identify inefficiencies",
          "Advanced orchestration and governance capabilities",
        ],
      },
      {
        title: "Layer 2",
        heading: "Enhanced Capabilities",
        description:
          "We address the gaps left by standard ERP implementations through advanced add-ons tailored to your specific needs. These enhancements bridge critical functionality gaps with specialized modules for:",
        points: [
          "Field Service Management",
          "Subscription Billing",
          "Digital Retail Solutions",
          "Manufacturing ERP Solutions",
          "Supply Chain Optimization",
          "And many other specialized functions",
        ],
      },
      {
        title: "Layer 3",
        heading: "AI Automation",
        description:
          "Our advanced AI-driven automation layer optimizes workflows, reduces manual tasks, and unlocks actionable insights for sustainable growth. This layer includes:",
        points: [
          "AI Agent Studio for building custom AI agents",
          "Automator AI for streamlining complex workflows",
          "Intelligent document processing",
          "Process discovery tools to identify inefficiencies",
          "Advanced orchestration and governance capabilities",
        ],
      },
    ],
  },
];

export default aboutData;
