import ams from "../../assets/Addons/asset-management_hero-min.jpg";
import drp from "../../assets/Addons/digital-retail_hero-min.jpg";
import dms from "../../assets/Addons/distribution-management_hero-min.jpg";
import fms from "../../assets/Addons/field-service_hero-min.jpg";
import rems from "../../assets/Addons/real-estate_hero-min.jpg";
import sfa from "../../assets/Addons/salesforce_hero-min.jpg";
import sbm from "../../assets/Addons/subscritpion_hero-min.jpg";
import vms from "../../assets/Addons/vendor_hero-min.jpg";
import dda from "../../assets/Addons/document_hero-min.jpg";
import cms from "../../assets/Addons/compilance_hero-min.jpg";
import ncwp from "../../assets/Addons/no-code_hero-min.jpg";
import ps from "../../assets/Addons/procurement_hero-min.jpg";
import pms from "../../assets/Addons/project-management_hero-min.jpg";

const featureIcon = (
  <img
    className="h-8 w-8"
    src="https://img.icons8.com/pastel-glyph/100/FFFFFF/intelligent-person.png"
    alt="intelligent-person"
  />
);

const addonsData = [
  {
    slug: "asset-management-system",
    heroSection: {
      title: "Asset Management System",
      subContent:
        "Empower your enterprise with a comprehensive asset management system that enhances operational efficiency, improves resource utilization, and ensures long-term financial stability.",
      image: ams,
    },
    overviewSection: {
      title: "What is Asset Management?",
      subContent:
        "Asset management is a structured approach to managing an organization's physical and digital resources throughout their lifecycle. It ensures assets are efficiently acquired, utilized, maintained, and retired.",
      features: [
        {
          name: "Holistic Asset Tracking",
          color: "#0D47A1",
          description:
            "Use our holistic asset tracking for centralized visibility over asset location, condition, and status for smarter decisions.",
        },
        {
          name: "Smart Maintenance Scheduling",
          color: "#0D47A1",
          description:
            "Use predictive analytics to automate upkeep and prevent costly breakdowns.",
        },
        {
          name: "User-Based Access Controls",
          color: "#0D47A1",
          description:
            "Protect sensitive data with role-specific access permissions.",
        },
        {
          name: "On-the-Go Accessibility",
          color: "#0D47A1",
          description:
            "Enable teams to manage assets remotely, driving agility and responsiveness.",
        },
      ],
    },
    insightsSection: {
      title: "Features",
      description:
        "Revolutionize Asset Management with End-to-End Visibility and Control",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/FACC15/external-return-on-investment-business-and-teamwork-flatart-icons-solid-flatarticons.png"
              alt="external-return-on-investment-business-and-teamwork-flatart-icons-solid-flatarticons"
            />
          ),
          description:
            "Manage assets from procurement to disposal for maximum ROI.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/FACC15/external-Ai-Chip-artificial-and-intelligence-vectorslab-glyph-vectorslab.png"
              alt="external-Ai-Chip-artificial-and-intelligence-vectorslab-glyph-vectorslab"
            />
          ),
          description:
            "Leverage AI-powered analytics for proactive management.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/30/FACC15/order-on-the-way.png"
              alt="order-on-the-way"
            />
          ),
          description:
            "Identify and reduce risks through real-time tracking and insights.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-others-nixx-design/67/FACC15/external-documentation-icon-web-design-solid-others-nixx-design.png"
              alt="external-documentation-icon-web-design-solid-others-nixx-design"
            />
          ),
          description:
            "Ensure audit readiness with accurate, automated documentation.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Asset Management System ",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/down3.png"
              alt="down3"
            />
          ),
          title: "Preventive Downtime Control",
          description:
            "Detect early warning signs to prevent disruptions and enhance continuity.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/work.png"
              alt="work"
            />
          ),
          title: "Structured Maintenance Scheduling",
          description:
            "Maximize asset longevity with planned, proactive service routines.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/dashboard.png"
              alt="dashboard"
            />
          ),
          title: "Comprehensive Performance Evaluation",
          description:
            "Gain insights into asset utilization and identify improvement opportunities.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/appointment-reminders--v1.png"
              alt="appointment-reminders--v1"
            />
          ),
          title: "Automated Notifications",
          description:
            "Stay updated with alerts that reduce reaction time and operational lag.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-others-pike-picture/64/0a1f36/external-regulations-policies-data-process-others-pike-picture-2.png"
              alt="external-regulations-policies-data-process-others-pike-picture-2"
            />
          ),
          title: "Standards and Regulations Adherence",
          description:
            "Align with industry mandates via reliable, audit-friendly records.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/0a1f36/external-lifecycle-traditional-marketing-flatart-icons-outline-flatarticons.png"
              alt="external-lifecycle-traditional-marketing-flatart-icons-outline-flatarticons"
            />
          ),
          title: "Lifecycle Maximization",
          description:
            "Extend asset usefulness through strategic upgrades and timely replacements.",
        },
      ],
    },
    percentageSection: {
      title: "Analytics that Ignite Growth",
      stats: [
        {
          number: 42,
          label: "Operational Efficiency",
          content:
            "Improvement in operational efficiency via unified asset workflows.",
        },
        {
          number: 58,
          label: "Compliance Hurdles",
          content:
            "eduction in compliance hurdles through transparent, real-time tracking.",
        },
        {
          number: 82,
          label: "Cost Savings",
          content:
            "Cost savings achieved through preventive strategies and lifecycle insight.",
        },
      ],
    },
    ctaSection: {
      description:
        "Transform your enterprise with our Asset Management solutions and elevate operational performance, minimize risks, and drive data-led decisions for long-term resilience.Let’s build a smarter, more agile future one asset at a time.",
    },
  },
  {
    slug: "digital-retail-platform",
    heroSection: {
      title: "Digital Retail & Platform",
      subContent:
        "Empower your business with next-generation digital retail platforms that drive engagement, boost sales, and deliver seamless experiences across all channels—from web to mobile and beyond.",
      image: drp,
    },
    overviewSection: {
      title: "What is Digital Retail?",
      subContent:
        "Digital retail solutions encompass advanced technologies and strategic frameworks designed to enhance the customer journey across all digital touchpoints. They enable businesses to optimize every stage—from product discovery to post-purchase—by integrating innovation, data, and automation.",
      features: [
        {
          name: "Operations Management",
          color: "#0D47A1",
          description:
            "Optimize end-to-end commerce operations to improve delivery speed and minimize overhead.",
        },
        {
          name: "Customer Insights",
          color: "#0D47A1",
          description:
            "Decode real-time data to create hyper-personalized shopping experiences that resonate.",
        },
        {
          name: "Product Optimization",
          color: "#0D47A1",
          description:
            "Adapt your catalog and pricing with actionable intelligence to meet shifting demand.",
        },
        {
          name: "Solutions Technology",
          color: "#0D47A1",
          description:
            "Leverage future-ready tech infrastructure for seamless integrations and rapid scalability.",
        },
      ],
    },
    insightsSection: {
      title: "Features",
      description: "Reimagine Retail with Scalable Digital Commerce Solutions",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/FACC15/external-user-experience-digital-marketing-smashingstocks-mixed-smashing-stocks.png"
              alt="external-user-experience-digital-marketing-smashingstocks-mixed-smashing-stocks"
            />
          ),
          description:
            "Deliver a consistent, engaging customer experience across web, mobile, in-store, and third-party platforms.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/FACC15/external-trending-influencer-marketing-wanicon-lineal-wanicon.png"
              alt="external-trending-influencer-marketing-wanicon-lineal-wanicon"
            />
          ),
          description:
            "Rapidly respond to consumer trends and demands with modular, scalable platforms.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FACC15/shopping-cart-loaded--v1.png"
              alt="shopping-cart-loaded--v1"
            />
          ),
          description:
            "Use behavioral analytics to personalize experiences and predict future buying patterns.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/FACC15/external-AI-artificial-intelligence-solidglyph-m-oki-orlando.png"
              alt="external-AI-artificial-intelligence-solidglyph-m-oki-orlando"
            />
          ),
          description:
            "Streamline backend operations through AI-driven tools for efficiency and agility.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Digital Retail & Platform",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/centralized-network.png"
              alt="centralized-network"
            />
          ),
          title: "Strategic Channel Convergence",
          description:
            "Unify digital and physical retail experiences to build stronger brand trust and customer loyalty.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/bearish.png"
              alt="bearish"
            />
          ),
          title: "Reduced Operational Costs",
          description:
            "Lower marketing and logistics costs through intelligent automation and smart workflows.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-soleicons-line-amoghdesign/64/external-adaptation-soleicons-line-vol-2-soleicons-line-amoghdesign.png"
              alt="external-adaptation-soleicons-line-vol-2-soleicons-line-amoghdesign"
            />
          ),
          title: "Data-Driven Adaptation",
          description:
            "Stay ahead with actionable insights that support quicker, smarter business decisions.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/process.png"
              alt="process"
            />
          ),
          title: "Process Streamlining",
          description:
            "Eliminate bottlenecks and manual tasks to free up teams for strategic innovation.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/external-resource-digital-globalization-parzival-1997-detailed-outline-parzival-1997.png"
              alt="external-resource-digital-globalization-parzival-1997-detailed-outline-parzival-1997"
            />
          ),
          title: "Resource Utilization Efficiency",
          description:
            "Optimize internal resources to balance quality, speed, and performance.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/light-automation.png"
              alt="light-automation"
            />
          ),
          title: "Automated Innovations",
          description:
            "Introduce smart technologies to enhance customer satisfaction and boost team productivity.",
        },
      ],
    },
    percentageSection: {
      title: "Analytics that Drive Retail Success",
      stats: [
        {
          number: 45,
          label: "Lead Conversion",
          content:
            "Improvement in lead conversion via personalized recommendations.",
        },
        {
          number: 60,
          label: "Delivery Speed",
          content:
            "Faster delivery times with integrated sales channel analytics.",
        },
        {
          number: 75,
          label: "Revenue Growth",
          content:
            "Increase in revenue driven by omnichannel alignment and smart forecasting.",
        },
      ],
    },
    ctaSection: {
      description:
        "Transform your retail enterprise with our’s digital solutions and drive meaningful results across every customer interaction. Let’s craft a smarter, connected, and profitable future in retail starting today.",
    },
  },
  {
    slug: "distribution-management-system",
    heroSection: {
      title: "Distribution Management System",
      subContent:
        "Empower your supply chain with a cutting-edge distribution management system that enhances control, streamlines workflows, and drives growth through predictive analytics and end-to-end transparency.",
      image: dms,
    },
    overviewSection: {
      title: "What is a Distribution Management System?",
      subContent:
        "A Distribution Management System (DMS) is a comprehensive platform that integrates automation, real-time tracking, and intelligent analytics to optimize how goods flow across the supply chain. It enhances operational precision, shortens delivery cycles, and scales with market needs.",
      features: [
        {
          name: "Real-Time Control",
          color: "#0D47A1",
          description:
            "Get live visibility over inventory and orders to make faster, smarter decisions.",
        },
        {
          name: "Predictive Demand",
          color: "#0D47A1",
          description:
            "Use machine learning to forecast needs and optimize stock and logistics.",
        },
        {
          name: "Seamless Order Fulfillment",
          color: "#0D47A1",
          description:
            "Ensure accurate deliveries through automated, centralized order processing.",
        },
        {
          name: "Efficient Route Planning",
          color: "#0D47A1",
          description:
            "Reduce delivery costs and time with AI-driven route optimization.",
        },
      ],
    },
    insightsSection: {
      title: "Features",
      description:
        "Maximize Distribution Efficiency with Real-Time Intelligence and Automation",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pulsar-line/48/FACC15/pickup-point.png"
              alt="pickup-point"
            />
          ),
          description:
            "Centralize critical distribution functions for faster, error-free execution.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/FACC15/data-backup.png"
              alt="data-backup"
            />
          ),
          description:
            "Leverage data to anticipate demand, avoid shortages, and maximize resource efficiency.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-others-pike-picture/50/FACC15/external-order-buyer-customer-journey-others-pike-picture-2.png"
              alt="external-order-buyer-customer-journey-others-pike-picture-2"
            />
          ),
          description:
            "Unify external partner coordination for seamless order-to-delivery workflows.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pastel-glyph/64/FACC15/atm-approve.png"
              alt="atm-approve"
            />
          ),
          description:
            "Automate routine tasks and expand operational capacity without increasing overhead.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Distribution Management System",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/0a1f36/error--v1.png"
              alt="error--v1"
            />
          ),
          title: "Process Automation and Error Reduction",
          description:
            "Automate repetitive tasks to minimize mistakes and enhance delivery accuracy.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/0a1f36/external-operation-digital-transformation-parzival-1997-detailed-outline-parzival-1997.png"
              alt="external-operation-digital-transformation-parzival-1997-detailed-outline-parzival-1997"
            />
          ),
          title: "Live Operational Oversight",
          description:
            "Monitor every distribution stage in real-time for agile response and efficiency.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/0a1f36/external-customer-satisfaction-data-science-smashingstocks-mixed-smashing-stocks.png"
              alt="external-customer-satisfaction-data-science-smashingstocks-mixed-smashing-stocks"
            />
          ),
          title: "Elevated Customer Satisfaction",
          description:
            "Deliver faster and more reliably, strengthening client trust and loyalty.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/cost.png"
              alt="cost"
            />
          ),
          title: "Cost-Effective Route Optimization",
          description:
            "Cut transportation costs and improve sustainability through smart routing.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/big-data.png"
              alt="big-data"
            />
          ),
          title: "Data-Driven Decision-Making",
          description:
            "Make proactive changes using real-time analytics to stay ahead of market shifts.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-jumpicon-line-ayub-irawan/32/0a1f36/external-agility-success-jumpicon-(line)-jumpicon-line-ayub-irawan.png"
              alt="external-agility-success-jumpicon-(line)-jumpicon-line-ayub-irawan"
            />
          ),
          title: "Agility and Expansion",
          description:
            "Quickly scale distribution capacity and respond to changing customer demands.",
        },
      ],
    },
    percentageSection: {
      title: "Analytics That Optimize Delivery",
      stats: [
        {
          number: 45,
          label: "Order Value Growth",
          content:
            "Growth in average order value with intelligent distribution strategies.",
        },
        {
          number: 70,
          label: "Productivity Increase",
          content:
            "Increase in productivity after automating distribution workflows.",
        },
        {
          number: 95,
          label: "On-Time Delivery",
          content:
            "Predictive logistics and smart routing made on-time delivery rate possible",
        },
      ],
    },
    ctaSection: {
      description:
        "Transform your distribution landscape with our’s intelligent DMS solutions where speed, transparency, and control meet innovation and scale. Streamline your operations, boost profitability, and exceed customer expectations today.",
    },
  },
  {
    slug: "field-service-management",
    heroSection: {
      title: "Field Service Management",
      subContent:
        "Boost service efficiency, empower mobile teams, and deliver exceptional customer experiences with an all-in-one field service management solution—designed for real-time control, faster resolution, and scalable success.",
      image: fms,
    },
    overviewSection: {
      title: "What is Field Service Management?",
      subContent:
        "Field Service Management (FSM) is a centralized system that enables organizations to efficiently manage off-site operations—from scheduling and dispatch to task tracking and communication. It empowers mobile workforces and enhances customer satisfaction through automation and visibility.",
      features: [
        {
          name: "Efficient Scheduling",
          color: "#0D47A1",
          description:
            "Assign technicians with the right skills and tools to the right job—at the right time.",
        },
        {
          name: "Live Tracking",
          color: "#0D47A1",
          description:
            "Monitor task status and technician location in real-time for improved responsiveness.",
        },
        {
          name: "Mobile Connectivity",
          color: "#0D47A1",
          description:
            "Empower teams with on-the-go access to job details, updates, and customer history.",
        },
        {
          name: "Comprehensive Work Orders",
          color: "#0D47A1",
          description:
            "Manage full task lifecycles with digital work order creation, updates, and closure.",
        },
      ],
    },
    insightsSection: {
      title: "Features",
      description:
        "Transform Field Operations with Intelligent Service Management",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/facc15/management.png"
              alt="management"
            />
          ),
          description:
            "Streamline task assignment, tracking, and closure within one platform.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/facc15/team-goal.png"
              alt="team-goal"
            />
          ),
          description:
            "Optimize team performance through smart planning and dynamic rescheduling.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/facc15/youtube-live.png"
              alt="youtube-live"
            />
          ),
          description:
            "Access live updates on progress, delays, and technician availability.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/facc15/external-data-tools-data-engineering-solid-solidglyph-m-oki-orlando.png"
              alt="external-data-tools-data-engineering-solid-solidglyph-m-oki-orlando"
            />
          ),
          description:
            "Equip field personnel with tools and data to resolve issues faster and more accurately.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Field Service Management",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/30/0a1f36/error--v1.png"
              alt="error--v1"
            />
          ),
          title: "Error Reduction & Efficiency Gains",
          description:
            "Eliminate manual entry and optimize task flow with intelligent automation.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/invisible.png"
              alt="invisible"
            />
          ),
          title: "Visibility & Control in Real Time",
          description:
            "Get instant access to field activity, technician location, and task status.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/0a1f36/external-customer-experience-digital-marketing-outline-outline-black-m-oki-orlando-2.png"
              alt="external-customer-experience-digital-marketing-outline-outline-black-m-oki-orlando-2"
            />
          ),
          title: "Elevated Customer Experience",
          description:
            "Deliver fast, informed service and real-time updates to exceed expectations.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/0a1f36/external-productivity-work-from-home-tulpahn-detailed-outline-tulpahn.png"
              alt="external-productivity-work-from-home-tulpahn-detailed-outline-tulpahn"
            />
          ),
          title: "Productivity Boost",
          description:
            "Enable technicians with all required data to close jobs faster and smarter.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/30/0a1f36/get-revenue.png"
              alt="get-revenue"
            />
          ),
          title: "Revenue Expansion",
          description:
            "Complete more tasks in less time and improve customer retention for revenue growth.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/data-backup.png"
              alt="data-backup"
            />
          ),
          title: "Data-Driven Improvements",
          description:
            "Leverage analytics to refine workflows, measure performance, and scale operations.",
        },
      ],
    },
    percentageSection: {
      title: "Field Metrics That Matter",
      stats: [
        {
          number: 45,
          label: "Cost Reduction",
          content:
            "Decrease in operational costs through automation and reduced errors.",
        },
        {
          number: 60,
          label: "Customer Satisfaction",
          content:
            "Improvement in customer satisfaction with faster service and communication.",
        },
        {
          number: 75,
          label: "Response Time",
          content:
            "Quicker service response times using real-time tracking and smart scheduling.",
        },
      ],
    },
    ctaSection: {
      description:
        "Transform your field operations with our’s FSM solution seamlessly connect your teams, simplify service workflows, and deliver lasting value through smarter, data-backed decisions. Empower your workforce and drive customer satisfaction right from the field.",
    },
  },
  {
    slug: "real-estate-management-systems",
    heroSection: {
      title: "Real Estate Management & Systems",
      subContent:
        "Manage leases, portfolios, tenants, and financials all in one place. Our real estate management solution empowers property managers and investors to operate efficiently, stay compliant, and drive value from every asset.",
      image: rems,
    },
    overviewSection: {
      title: "What is Real Estate Management Software?",
      subContent:
        "Real Estate Management Software is a centralized platform designed to automate property-related tasks, streamline communication, and enhance financial visibility. It empowers organizations to scale operations, improve tenant experiences, and optimize asset performance.",
      features: [
        {
          name: "Property Listing Tools",
          color: "#0D47A1",
          description:
            "Boost visibility and reach with integrated online listing syndication.",
        },
        {
          name: "Lease Administration",
          color: "#0D47A1",
          description:
            "Manage lease cycles, automate renewals, and ensure timely rent collection.",
        },
        {
          name: "Tenant Assessment",
          color: "#0D47A1",
          description:
            "Screen applicants efficiently with credit, rental history, and background checks.",
        },
        {
          name: "Maintenance Coordination",
          color: "#0D47A1",
          description:
            "Automate service requests and track maintenance in real time to protect asset value.",
        },
      ],
    },
    insightsSection: {
      title: "Features",
      description:
        "Modernize Property Operations with Smart Real Estate Management Solutions",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/FACC15/control-panel--v2.png"
              alt="control-panel--v2"
            />
          ),
          description:
            "Oversee multiple properties, leases, and maintenance activities from a single dashboard.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FACC15/workflow.png"
              alt="workflow"
            />
          ),
          description:
            "Reduce manual work with workflows for rent collection, repairs, and renewals.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pastel-glyph/64/FACC15/customer-insights-manager.png"
              alt="customer-insights-manager"
            />
          ),
          description:
            "Generate insights from real-time reports and historical data for better forecasting.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FACC15/order-shipped.png"
              alt="order-shipped"
            />
          ),
          description:
            "Simplify document tracking and ensure legal requirements are always met.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Real Estate Management",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/0a136/external-optimize-customer-relationship-and-employee-benefits-flatart-icons-outline-flatarticons.png"
              alt="external-optimize-customer-relationship-and-employee-benefits-flatart-icons-outline-flatarticons"
            />
          ),
          title: "Maximized Rental Potential",
          description:
            "Optimize pricing strategies and increase occupancy for consistent cash flow.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/work.png"
              alt="work"
            />
          ),
          title: "Proactive Maintenance Oversight",
          description:
            "Avoid costly breakdowns with preventive service scheduling and asset monitoring.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/scales--v1.png"
              alt="scales--v1"
            />
          ),
          title: "Reduced Legal Vulnerabilities",
          description:
            "Stay compliant with leasing laws and property regulations across locations.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-ddara-fill-ddara/64/0a1f36/external-cost-control-business-management-ddara-fill-ddara.png"
              alt="external-cost-control-business-management-ddara-fill-ddara"
            />
          ),
          title: "Cost Control & Efficiency",
          description:
            "Track expenses in detail and identify savings across your property lifecycle.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/order-shipped.png"
              alt="order-shipped"
            />
          ),
          title: "Transparent Financial Tracking",
          description:
            "Maintain real-time visibility into revenue, operating costs, and ROI.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/medium-risk.png"
              alt="medium-risk"
            />
          ),
          title: "Risk Mitigation",
          description:
            "Detect and address issues early to preserve property value and reduce liability.",
        },
      ],
    },
    percentageSection: {
      title: "Smart Metrics for Smarter Properties",
      stats: [
        {
          number: 85,
          label: "Inspection Speed",
          content:
            "Faster property inspections through mobile-enabled, data-rich evaluations.",
        },
        {
          number: 88,
          label: "Maintenance Efficiency",
          content:
            "Increase in efficiency of maintenance workflows, reducing response time.",
        },
        {
          number: 90,
          label: "Data Accuracy",
          content:
            "Improvement in accuracy and accessibility of critical property data.",
        },
      ],
    },
    ctaSection: {
      description:
        "Transform your property operations with our’s intelligent real estate management solution streamline tasks, maximize returns, and stay one step ahead in today’s dynamic real estate landscape. Let data and automation elevate your portfolio performance and strategic decisions.",
    },
  },
  {
    slug: "sales-force-automation",
    heroSection: {
      title: "Sales Force Automation",
      subContent:
        "Unleash sales team potential with AI-powered automation that simplifies workflows, enhances customer engagement, and boosts conversion rates—giving you the competitive edge in today’s fast-paced sales environment.",
      image: sfa,
    },
    overviewSection: {
      title: "What is Sales Force Automation?",
      subContent:
        "Sales Force Automation (SFA) is a suite of digital tools that streamline every phase of the sales cycle—from lead generation to deal closure. By automating repetitive tasks and centralizing key customer data, SFA improves team efficiency, customer experience, and revenue growth.",
      features: [
        {
          name: "Lead & Opportunity Monitoring",
          color: "#0D47A1",
          description:
            "Track every touchpoint from prospect to closure with full visibility into sales performance.",
        },
        {
          name: "Predictive Analytics",
          color: "#0D47A1",
          description:
            "Forecast trends and guide decision-making using powerful data models and reports.",
        },
        {
          name: "Unified Contact Repository",
          color: "#0D47A1",
          description:
            "Maintain an always-updated database for seamless communication and relationship tracking.",
        },
        {
          name: "Automated Sales Tasks",
          color: "#0D47A1",
          description:
            "Automate quotes, order processing, and follow-ups to free up time and reduce errors.",
        },
      ],
    },
    insightsSection: {
      title: "Features",
      description: "Accelerate Revenue with Smart Sales Force Automation",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/30/FACC15/atm-approve.png"
              alt="atm-approve"
            />
          ),
          description:
            "Eliminate manual tasks to speed up lead handling, follow-ups, and order processing.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/FACC15/external-strategies-digital-marketing-solid-solidglyph-m-oki-orlando.png"
              alt="external-strategies-digital-marketing-solid-solidglyph-m-oki-orlando"
            />
          ),
          description:
            "Leverage real-time analytics and historical trends to fine-tune strategies.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FACC15/invisible.png"
              alt="invisible"
            />
          ),
          description:
            "Maintain full visibility into the sales funnel and deal progress.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FACC15/external-connected-networking-tanah-basah-basic-outline-tanah-basah.png"
              alt="external-connected-networking-tanah-basah-basic-outline-tanah-basah"
            />
          ),
          description:
            "Keep representatives connected and informed, no matter where they are.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Sales Force Automation",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/0a1f36/external-customer-engagement-network-and-communication-smashingstocks-glyph-smashing-stocks.png"
              alt="external-customer-engagement-network-and-communication-smashingstocks-glyph-smashing-stocks"
            />
          ),
          title: "Enhanced Customer Engagement",
          description:
            "Deliver personalized, consistent communication that nurtures loyalty and trust.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/0a1f36/sales-performance.png"
              alt="sales-performance"
            />
          ),
          title: "Simplified Sales Processes",
          description:
            "Eliminate manual steps for faster deal closure and reduced cycle times.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/0a1f36/commercial-development-management.png"
              alt="commercial-development-management"
            />
          ),
          title: "Informed Team Oversight",
          description:
            "Gain visibility into sales activities to better coach, support, and scale teams.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/0a1f36/external-data-driven-data-science-outline-outline-black-m-oki-orlando.png"
              alt="external-data-driven-data-science-outline-outline-black-m-oki-orlando"
            />
          ),
          title: "Data-Driven Decision-Making",
          description:
            "Use real-time analytics to identify trends, measure performance, and pivot strategies.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/0a1f36/external-forecasting-digital-marketing-smashingstocks-mixed-smashing-stocks.png"
              alt="external-forecasting-digital-marketing-smashingstocks-mixed-smashing-stocks"
            />
          ),
          title: "Accurate Forecasting & Lead Management",
          description:
            "Predict pipeline outcomes and allocate efforts toward high-value opportunities.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-goofy-line-kerismaker/96/0a1f36/external-Opportunities-business-goofy-line-kerismaker.png"
              alt="external-Opportunities-business-goofy-line-kerismaker"
            />
          ),
          title: "Opportunities for Cross-Selling & Up-Selling",
          description:
            "Maximize deal value by aligning customer needs with tailored product recommendations.",
        },
      ],
    },
    percentageSection: {
      title: "Revenue-Driving Sales Metrics",
      stats: [
        {
          number: 45,
          label: "Win Rate Increase",
          content:
            "Increase in win rates through intelligent automation and streamlined lead flow.",
        },
        {
          number: 60,
          label: "Lead Conversion Boost",
          content:
            "Jump in lead conversion rates with smarter engagement and insights.",
        },
        {
          number: 70,
          label: "Productivity Gain",
          content:
            "Productivity boost driven by mobile access and workflow automation.",
        },
      ],
    },
    ctaSection: {
      description:
        "Transform your sales function with our Sales Force Automation simplify processes, empower your team, and unlock consistent revenue growth with smarter, faster selling. Future-proof your sales strategy and stay ahead in every deal, every time.",
    },
  },
  {
    slug: "subscription-billing-management",
    heroSection: {
      title: "Subscription Billing & Management",
      subContent:
        "Drive predictable income and long-term customer relationships with an intelligent subscription billing platform—automating recurring payments, lifecycle changes, and financial reporting at scale.",
      image: sbm,
    },
    overviewSection: {
      title: "What is Subscription Billing Management?",
      subContent:
        "Subscription Billing Management enables businesses to monetize recurring services through automated billing, invoicing, and customer lifecycle oversight. This model supports scalable growth and steady revenue while improving financial accuracy and user satisfaction.",
      features: [
        {
          name: "Adaptable Billing Structures",
          color: "#0D47A1",
          description:
            "Offer flexible subscription plans—monthly, quarterly, annually—based on user preferences.",
        },
        {
          name: "Automated Invoicing",
          color: "#0D47A1",
          description:
            "Eliminate manual errors and accelerate payments with automated invoice delivery.",
        },
        {
          name: "Recurring Payment Management",
          color: "#0D47A1",
          description:
            "Manage renewals, failed payments, and method updates with minimal friction.",
        },
        {
          name: "Subscription Lifecycle Control",
          color: "#0D47A1",
          description:
            "Administer changes across all stages of the subscription journey from one interface.",
        },
      ],
    },
    insightsSection: {
      title: "Features",
      description:
        "Simplify Billing, Maximize Revenue with Subscription Management",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FACC15/gender-neutral-user.png"
              alt="gender-neutral-user"
            />
          ),
          description:
            "Customize billing frequencies and tiers to align with customer needs.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/FACC15/admin-settings-male.png"
              alt="admin-settings-male"
            />
          ),
          description:
            "Manage upgrades, downgrades, renewals, and cancellations with full transparency.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FACC15/general-ledger.png"
              alt="general-ledger"
            />
          ),
          description:
            "Ensure compliance and accuracy in financial reporting for all billing scenarios.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pulsar-line/48/FACC15/group.png"
              alt="group"
            />
          ),
          description:
            "Provide users control over their subscriptions, reducing churn and support demand.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Subscription Billing & Management",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/0a1f36/external-cash-flow-money-kmg-design-glyph-kmg-design-3.png"
              alt="external-cash-flow-money-kmg-design-glyph-kmg-design-3"
            />
          ),
          title: "Improved Cash Flow Automation",
          description:
            "Automate recurring revenue and enhance forecasting accuracy with stable inflows.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/dotty/80/0a1f36/service.png"
              alt="service"
            />
          ),
          title: "Enhanced Self-Service Options",
          description:
            "Empower users to manage subscriptions, reducing overhead and boosting satisfaction.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/0a1f36/external-retention-banking-and-finance-smashingstocks-glyph-smashing-stocks.png"
              alt="external-retention-banking-and-finance-smashingstocks-glyph-smashing-stocks"
            />
          ),
          title: "Customer Retention & Growth",
          description:
            "Identify churn risks and proactively engage customers with timely solutions.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/bearish.png"
              alt="bearish"
            />
          ),
          title: "Cost Reductions & Efficiency",
          description:
            "Cut operational costs by replacing manual workflows with intelligent automation.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/30/0a1f36/data-migration.png"
              alt="data-migration"
            />
          ),
          title: "Data-Driven Decision Making",
          description:
            "Use advanced analytics to refine pricing, forecast revenue, and improve CX.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/0a1f36/external-financial-finance-smashingstocks-glyph-smashing-stocks-3.png"
              alt="external-financial-finance-smashingstocks-glyph-smashing-stocks-3"
            />
          ),
          title: "Financial Accuracy & Compliance",
          description:
            "Handle revenue recognition and audit trails with confidence and precision.",
        },
      ],
    },
    percentageSection: {
      title: "Metrics That Power Predictability",
      stats: [
        {
          number: 45,
          label: "Productivity Increase",
          content:
            "Increase in productivity from reduced manual billing tasks.",
        },
        {
          number: 70,
          label: "Customer Satisfaction",
          content:
            "Boost in customer satisfaction through smoother billing and transparency.",
        },
        {
          number: 80,
          label: "Financial Cycle Cost Reduction",
          content:
            "Decrease in financial cycle costs using automated recognition and collection.",
        },
      ],
    },
    ctaSection: {
      description:
        "Take control of your billing lifecycle with a comprehensive subscription management platform designed to scale with your business, improve customer satisfaction, and optimize financial outcomes. Automate, retain, and grow all from one powerful solution.",
    },
  },
  {
    slug: "vendor-management-solution",
    heroSection: {
      title: "Vendor Management Solution",
      subContent:
        "Centralize vendor oversight, reduce procurement risk, and enhance collaboration with a unified solution designed to streamline onboarding, compliance, and contract management at scale.",
      image: vms,
    },
    overviewSection: {
      title: "What is Vendor Management Software?",
      subContent:
        "Vendor Management Software enables organizations to strategically manage supplier relationships through structured workflows. From selection and evaluation to performance tracking and cost control, it ensures transparency, compliance, and long-term value creation.",
      features: [
        {
          name: "Streamlined Onboarding",
          color: "#0D47A1",
          description:
            "Quickly integrate vendors into your system with centralized documentation and workflows.",
        },
        {
          name: "Secure Contract Oversight",
          color: "#0D47A1",
          description:
            "Digitally manage vendor contracts to reduce manual errors and ensure legal compliance.",
        },
        {
          name: "Performance Metrics & Monitoring",
          color: "#0D47A1",
          description:
            "Track vendor KPIs to ensure reliability and accountability across the supply chain.",
        },
        {
          name: "Actionable Insights",
          color: "#0D47A1",
          description:
            "Access real-time data and reports for smarter decision-making and vendor evaluations.",
        },
      ],
    },
    insightsSection: {
      title: "Features",
      description:
        "Optimize Supplier Relationships with Intelligent Vendor Management",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/FACC15/request-service.png"
              alt="request-service"
            />
          ),
          description: "Manage the entire vendor lifecycle from one platform.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/99/FACC15/external-monitoring-business-smashingstocks-hand-drawn-black-smashing-stocks.png"
              alt="external-monitoring-business-smashingstocks-hand-drawn-black-smashing-stocks"
            />
          ),
          description:
            "Monitor contracts and regulations to prevent disruptions.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FACC15/economic-improvement.png"
              alt="economic-improvement"
            />
          ),
          description:
            "Drive profitability by eliminating overspending and inefficiencies.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/FACC15/external-kpi-product-management-solid-solidglyph-m-oki-orlando.png"
              alt="external-kpi-product-management-solid-solidglyph-m-oki-orlando"
            />
          ),
          description:
            "Use KPIs to evaluate vendors and ensure high service standards.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Vendor Management Solution",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-only-li-kalash/48/0a1f36/external-business-business-management-only-li-kalash-3.png"
              alt="external-business-business-management-only-li-kalash-3"
            />
          ),
          title: "Robust Partnerships",
          description:
            "Build trust with top-performing vendors aligned to your business goals.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/carbon-copy/100/0a1f36/bearish.png"
              alt="bearish"
            />
          ),
          title: "Cost Reduction",
          description:
            "Minimize excess spending through smarter procurement and vendor selection.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-wichaiwi/64/0a1f36/external-operational-business-risks-outline-wichaiwi.png"
              alt="external-operational-business-risks-outline-wichaiwi"
            />
          ),
          title: "Operational Improvements",
          description:
            "Reduce onboarding time, eliminate bottlenecks, and improve service delivery.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/medium-risk.png"
              alt="medium-risk"
            />
          ),
          title: "Risk Prevention",
          description:
            "Avoid service interruptions with proactive monitoring and regulatory alignment.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/30/0a1f36/collaboration.png"
              alt="collaboration"
            />
          ),
          title: "Stronger Collaboration",
          description:
            "Foster productive, transparent communication and continuous improvement.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/carbon-copy/100/0a1f36/economic-improvement.png"
              alt="economic-improvement"
            />
          ),
          title: "Profit Boost",
          description:
            "Streamlined vendor processes contribute directly to stronger financial outcomes.",
        },
      ],
    },
    percentageSection: {
      title: "Operational Gains Through Vendor Automation",
      stats: [
        {
          number: 80,
          label: "Revenue Control",
          content:
            "Improvement in revenue control due to vendor process transparency.",
        },
        {
          number: 85,
          label: "Vendor Oversight",
          content:
            "Smoother tracking of vendor activities and contractual obligations.",
        },
        {
          number: 90,
          label: "Onboarding Speed",
          content:
            "Faster and more intuitive onboarding with centralized vendor management tools.",
        },
      ],
    },
    ctaSection: {
      description:
        "Revolutionize vendor operations with an end-to-end management solution enhance visibility, reduce risk, and strengthen supplier performance for long-term success. Take control of your vendor ecosystem and power smarter, faster decisions.",
    },
  },
  {
    slug: "document-delivery-automation",
    heroSection: {
      title: "Document Delivery Automation Services",
      subContent:
        "Replace manual bottlenecks with intelligent, secure document automation—streamline workflows, reduce delivery time, and ensure compliant communication across channels and geographies.",
      image: dda,
    },
    overviewSection: {
      title: "What is Document Delivery Automation?",
      subContent:
        "Document Delivery Automation consolidates the distribution of critical documents—like invoices, contracts, and reports—through a centralized, multi-channel system. Integrated with ERP and CRM platforms, it enhances speed, accuracy, and visibility while minimizing errors and compliance risks.",
      features: [
        {
          name: "Consolidated Document Library",
          color: "#0D47A1",
          description:
            "Store and retrieve files from a centralized system to eliminate duplication and reduce delays.",
        },
        {
          name: "Automated Routing & Triggers",
          color: "#0D47A1",
          description:
            "Route documents based on workflows or system inputs to eliminate manual errors.",
        },
        {
          name: "Tailored Workflow Steps",
          color: "#0D47A1",
          description:
            "Customize delivery paths, approvals, and escalations for your business needs.",
        },
        {
          name: "Real-Time Tracking & Alerts",
          color: "#0D47A1",
          description:
            "Monitor document progress at each stage and intervene when needed.",
        },
      ],
    },
    insightsSection: {
      title: "Features",
      description:
        "Automate Document Delivery for Speed, Accuracy, and Compliance",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pastel-glyph/64/FACC15/atm-approve.png"
              alt="atm-approve"
            />
          ),
          description:
            "Automate document delivery via email, fax, or mail directly from core business systems.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FACC15/invisible.png"
              alt="invisible"
            />
          ),
          description:
            "Gain real-time visibility into document statuses to ensure reliable communication.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/FACC15/add-rule.png"
              alt="add-rule"
            />
          ),
          description:
            "Trigger document dispatch based on defined rules, approvals, or system events.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FACC15/expeditedssl.png"
              alt="expeditedssl"
            />
          ),
          description:
            "Encrypt files and maintain audit trails to meet strict regulatory standards.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Document Delivery Automation",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/30/0a1f36/good-quality--v1.png"
              alt="good-quality--v1"
            />
          ),
          title: "Accelerated Approval Workflows",
          description:
            "Expedite document-driven decisions and minimize process delays.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-ddara-lineal-ddara/64/0a1f36/external-cost-control-business-management-ddara-lineal-ddara.png"
              alt="external-cost-control-business-management-ddara-lineal-ddara"
            />
          ),
          title: "Cost Savings & Resource Efficiency",
          description:
            "Replace paper-based routines with automated digital processes.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-others-pike-picture/50/0a1f36/external-regulations-policies-data-process-others-pike-picture-2.png"
              alt="external-regulations-policies-data-process-others-pike-picture-2"
            />
          ),
          title: "Regulatory Confidence",
          description:
            "Protect sensitive data with encryption, access controls, and full audit trails.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/0a1f36/external-experience-shopstreaming-parzival-1997-detailed-outline-parzival-1997.png"
              alt="external-experience-shopstreaming-parzival-1997-detailed-outline-parzival-1997"
            />
          ),
          title: "Improved Customer Experience",
          description:
            "Deliver timely, accurate communications that build trust and responsiveness.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/invisible.png"
              alt="invisible"
            />
          ),
          title: "Operational Visibility",
          description:
            "Track performance metrics and identify bottlenecks in real time.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/0a1f36/external-scalable-data-science-and-cyber-security-flatart-icons-solid-flatarticons.png"
              alt="external-scalable-data-science-and-cyber-security-flatart-icons-solid-flatarticons"
            />
          ),
          title: "Scalable Communication",
          description:
            "Handle high-volume delivery needs across global regions and channels.",
        },
      ],
    },
    percentageSection: {
      title: "Performance Gains with Automation",
      stats: [
        {
          number: 45,
          label: "Manual Task Reduction",
          content:
            "Fewer manual tasks due to automated validation and routing.",
        },
        {
          number: 60,
          label: "Faster Delivery",
          content:
            "Faster document delivery, freeing teams to focus on strategic work.",
        },
        {
          number: 75,
          label: "Cost Reduction",
          content: "Reduction in print, postage, and manual processing costs.",
        },
      ],
    },
    ctaSection: {
      description:
        "Digitize your document workflows with an intelligent automation platform reduce costs, improve speed, and gain full visibility across every step of your communication process. Ensure secure, accurate delivery—every time, across every channel.",
    },
  },
  {
    slug: "compliance-management-software",
    heroSection: {
      title: "Compliance Management Software",
      subContent:
        "Simplify complex compliance processes, reduce risk, and ensure continuous regulatory alignment with a centralized platform designed to automate tasks, track obligations, and future-proof governance.",
      image: cms,
    },
    overviewSection: {
      title: "What is Compliance Management?",
      subContent:
        "Compliance Management refers to the systematic oversight of legal, regulatory, and internal obligations across industries. Through automation, monitoring, and centralized reporting, businesses can avoid fines, reduce risk exposure, and ensure consistent adherence to changing laws and standards.",
      features: [
        {
          name: "Customized Governance Calendar",
          color: "#0D47A1",
          description:
            "Stay ahead of compliance events with automated alerts and scheduling tools.",
        },
        {
          name: "Task Tracking & Automation",
          color: "#0D47A1",
          description:
            "Assign roles, monitor progress, and reduce follow-up delays with automated workflows.",
        },
        {
          name: "Comprehensive Risk Assessment",
          color: "#0D47A1",
          description:
            "Detect gaps, analyze threats, and create targeted remediation plans.",
        },
        {
          name: "Multi-Location Coordination",
          color: "#0D47A1",
          description:
            "Maintain unified compliance standards across regions, branches, or jurisdictions.",
        },
      ],
    },
    insightsSection: {
      title: "Features",
      description:
        "Stay Ahead of Regulations with Smarter Compliance Management",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-juicy-fish/60/FACC15/external-business-digital-nomad-outline-outline-juicy-fish-2.png"
              alt="external-business-digital-nomad-outline-outline-juicy-fish-2"
            />
          ),
          description:
            "Eliminate manual steps in filings, renewals, and audits.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/sf-black/64/FACC15/accessibility2.png"
              alt="accessibility2"
            />
          ),
          description:
            "Store and retrieve compliance documents securely in one place.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FACC15/external-antivirus-software-scanning-is-been-scheduled-for-later-security-bold-tal-revivo.png"
              alt="external-antivirus-software-scanning-is-been-scheduled-for-later-security-bold-tal-revivo"
            />
          ),
          description:
            "Proactively identify vulnerabilities and enforce safeguards.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/FACC15/external-consistency-database-solid-solidglyph-m-oki-orlando.png"
              alt="external-consistency-database-solid-solidglyph-m-oki-orlando"
            />
          ),
          description:
            "Ensure global consistency with local adaptability across business units.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Compliance Management Software",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/0a1f36/test-passed--v1.png"
              alt="test-passed--v1"
            />
          ),
          title: "Sustained Operational Integrity",
          description:
            "Avoid disruptions and legal setbacks by maintaining compliance continuity.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-ddara-fill-ddara/64/0a1f36/external-cost-control-business-management-ddara-fill-ddara.png"
              alt="external-cost-control-business-management-ddara-fill-ddara"
            />
          ),
          title: "Optimized Cost Control",
          description:
            "Minimize penalties, streamline audits, and reduce overhead.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/0a1f36/external-Accountability-core-values-smashingstocks-mixed-smashing-stocks.png"
              alt="external-Accountability-core-values-smashingstocks-mixed-smashing-stocks"
            />
          ),
          title: "Enhanced Organizational Accountability",
          description:
            "Ensure every team understands and owns their compliance roles and timelines.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/future.png"
              alt="future"
            />
          ),
          title: "Future-Proof Governance",
          description:
            "Adapt quickly to evolving regulations with flexible, scalable compliance infrastructure.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/assignment-turned-in.png"
              alt="assignment-turned-in"
            />
          ),
          title: "Improved Audit Readiness",
          description:
            "Generate real-time reports, maintain audit trails, and respond swiftly to regulatory reviews.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-glyph-wichaiwi/64/0a1f36/external-transparency-general-data-protection-regulation-gdpr-glyph-wichaiwi.png"
              alt="external-transparency-general-data-protection-regulation-gdpr-glyph-wichaiwi"
            />
          ),
          title: "Increased Transparency",
          description:
            "Provide leadership with a clear view of compliance health and performance metrics.",
        },
      ],
    },
    percentageSection: {
      title: "Compliance Metrics That Matter",
      stats: [
        {
          number: 40,
          label: "Manual Effort Reduction",
          content:
            "Reduction in manual effort via automated compliance task execution.",
        },
        {
          number: 70,
          label: "Deadline Performance",
          content:
            "Improvement in meeting deadlines thanks to proactive alerts.",
        },
        {
          number: 80,
          label: "Risk Cost Reduction",
          content:
            "Drop in compliance-related risk costs with early detection and response.",
        },
      ],
    },
    ctaSection: {
      description:
        "Strengthen your regulatory posture with an integrated compliance management solution automate obligations, reduce risks, and gain visibility across every business function. Protect your operations and stay confidently compliant today and tomorrow.",
    },
  },
  {
    slug: "no-code-work-platform",
    heroSection: {
      title: "No-Code Work Platform",
      subContent:
        "Unlock agility and innovation by allowing non-technical teams to create, automate, and manage workflows—without writing a single line of code. Build faster, scale smarter, and adapt seamlessly to change.",
      image: ncwp,
    },
    overviewSection: {
      title: "What is a No-Code Work Platform?",
      subContent:
        "A No-Code Work Platform empowers users of all skill levels to build and automate business workflows through a visual interface—eliminating the need for custom development. With drag-and-drop tools, pre-built templates, and seamless integrations, teams can digitize operations at scale with ease.",
      features: [
        {
          name: "Visual UI Builder",
          color: "#0D47A1",
          description:
            "Design and deploy workflows using drag-and-drop tools—no technical background required.",
        },
        {
          name: "Immediate Onboarding",
          color: "#0D47A1",
          description:
            "Get started quickly with intuitive tutorials and a simple user interface.",
        },
        {
          name: "Effortless Automation",
          color: "#0D47A1",
          description:
            "Convert repetitive tasks into smart automations for increased accuracy and speed.",
        },
        {
          name: "Flexible Configuration",
          color: "#0D47A1",
          description:
            "Apply conditional logic and dynamic fields to tailor workflows for any department.",
        },
      ],
    },
    insightsSection: {
      title: "Features",
      description: "Empower Teams to Build with a No-Code Work Platform",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/wired/64/FACC15/plus.png"
              alt="plus"
            />
          ),
          description:
            "Create and launch business processes using a visual interface.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/FACC15/settings-3--v1.png"
              alt="settings-3--v1"
            />
          ),
          description: "Turn manual steps into rule-based automation.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FACC15/share-2.png"
              alt="share-2"
            />
          ),
          description:
            "Connect to databases, CRMs, and other business systems without development effort.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/FACC15/external-scale-selection-cursors-those-icons-lineal-those-icons.png"
              alt="external-scale-selection-cursors-those-icons-lineal-those-icons"
            />
          ),
          description:
            "From simple tasks to enterprise-wide workflows, scale without complexity.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of No-Code Work Platform",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/0a1f36/cheap-2.png"
              alt="cheap-2"
            />
          ),
          title: "Reduced Operational Costs",
          description:
            "Eliminate the need for developers and reduce software dependency with self-serve tools.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/workflow.png"
              alt="workflow"
            />
          ),
          title: "Accelerated Time-to-Market",
          description:
            "Quickly build and modify workflows to respond to changing business needs.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/conference-background-selected.png"
              alt="conference-background-selected"
            />
          ),
          title: "Enhanced Cross-Department Alignment",
          description:
            "Empower all teams to work from unified, consistent workflows.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/0a1f36/external-busness-due-diligence-icongeek26-glyph-icongeek26.png"
              alt="external-busness-due-diligence-icongeek26-glyph-icongeek26"
            />
          ),
          title: "Improved Business Resilience",
          description:
            "Quickly adapt workflows to organizational shifts or external disruptions.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/glyph-neue/64/0a1f36/collaboration.png"
              alt="collaboration"
            />
          ),
          title: "Frictionless Collaboration",
          description:
            "Enable shared visibility, ownership, and input across departments.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/30/0a1f36/innovation.png"
              alt="innovation"
            />
          ),
          title: "Scalable Innovation",
          description:
            "Expand usage across teams and functions without losing performance or control.",
        },
      ],
    },
    percentageSection: {
      title: "No-Code Platform Impact Metrics",
      stats: [
        {
          number: 50,
          label: "Faster Setup Time",
          content:
            "Reduced tme for setting up compared to traditional development methods.",
        },
        {
          number: 70,
          label: "Operational Agility",
          content:
            "Increase in operational agility from quick, self-serve workflow changes.",
        },
        {
          number: 80,
          label: "Employee Engagement",
          content:
            "Rise in employee engagement due to intuitive, user-friendly design.",
        },
      ],
    },
    ctaSection: {
      description:
        "Reimagine business processes with a no-code platform that democratizes innovation giving every team the tools to build, automate, and scale with confidence. Digitize smarter, move faster, and future-proof your operations with no-code agility.",
    },
  },
  {
    slug: "procurement-software",
    heroSection: {
      title: "Procurement Software",
      subContent:
        "Digitize procurement end-to-end—from requisition to payment—on one unified platform. Boost transparency, reduce manual effort, and drive cost efficiency while building strong supplier partnerships.",
      image: ps,
    },
    overviewSection: {
      title: "What is Procurement Software?",
      subContent:
        "Procurement software is an integrated solution designed to manage every phase of the purchase lifecycle. From vendor onboarding to invoice clearance, it reduces operational complexity through automation, ensures compliance, and accelerates purchasing workflows across the organization.",
      features: [
        {
          name: "Modular Source-to-Pay Flow",
          color: "#0D47A1",
          description:
            "Manage requisitions, approvals, delivery notes, and payments in a unified sequence.",
        },
        {
          name: "Smart Quotation & Order Management",
          color: "#0D47A1",
          description:
            "Automate quote comparisons, approval routing, and purchase order creation.",
        },
        {
          name: "Vendor Onboarding & Evaluation",
          color: "#0D47A1",
          description:
            "Enable seamless supplier registration and performance monitoring with secure access.",
        },
        {
          name: "Real-Time Quality Checks & GRN",
          color: "#0D47A1",
          description:
            "Instantly validate deliveries, log discrepancies, and generate goods receipt notes.",
        },
      ],
    },
    insightsSection: {
      title: "Features",
      description: "Simplify and Streamline Your Source-to-Pay Process",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/wired/64/FACC15/admin-settings-male.png"
              alt="admin-settings-male"
            />
          ),
          description:
            "Digitally manage requisitions, quotations, orders, and payments.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/FACC15/external-evaluate-market-research-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
              alt="external-evaluate-market-research-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto"
            />
          ),
          description:
            "Onboard, evaluate, and collaborate with suppliers through structured workflows.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pastel-glyph/64/FACC15/track-order.png"
              alt="track-order"
            />
          ),
          description:
            "Track procurement progress, vendor performance, and financial approvals at every stage.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pastel-glyph/64/FACC15/track-order.png"
              alt="track-order"
            />
          ),
          description:
            "Ensure tax compliance, audit readiness, and error-free processing.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Procurement Software",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-juicy-fish/60/0a1f36/external-operations-devops-outline-outline-juicy-fish.png"
              alt="external-operations-devops-outline-outline-juicy-fish"
            />
          ),
          title: "Streamlined Operations",
          description:
            "Manage all procurement workflows from one platform for increased efficiency.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/0a1f36/get-cash--v1.png"
              alt="get-cash--v1"
            />
          ),
          title: "Significant Cost Savings",
          description:
            "Control spending, eliminate financial leaks, and negotiate better vendor terms.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/medium-risk.png"
              alt="medium-risk"
            />
          ),
          title: "Reduced Risk & Liability",
          description:
            "Maintain detailed records, enforce compliance, and prevent legal issues.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/30/0a1f36/collaboration.png"
              alt="collaboration"
            />
          ),
          title: "Better Vendor Collaboration",
          description:
            "Foster transparent communication and efficient coordination with suppliers.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/accuracy.png"
              alt="accuracy"
            />
          ),
          title: "Enhanced Accuracy & Speed",
          description:
            "Automate approvals, tax calculations, and payment processing for smoother transactions.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/assignment-turned-in.png"
              alt="assignment-turned-in"
            />
          ),
          title: "Audit-Ready Procurement",
          description:
            "Secure digital trails for every transaction support accountability and governance.",
        },
      ],
    },
    percentageSection: {
      title: "Procurement Transformation Metrics",
      stats: [
        {
          number: 60,
          label: "Manual Input Reduction",
          content:
            "Less manual input through vendor portals and process automation.",
        },
        {
          number: 70,
          label: "Faster Cycles",
          content:
            "Faster turnaround on requests, approvals, and payment cycles.",
        },
        {
          number: 80,
          label: "Real-Time Visibility",
          content:
            "Improvement in visibility and response time via real-time tracking and alerts.",
        },
      ],
    },
    ctaSection: {
      description:
        "Elevate procurement with an intelligent solution that automates sourcing, purchasing, and payments giving you full control, cost visibility, and supplier confidence. Digitize your procurement lifecycle and unlock smarter purchasing start today.",
    },
  },
  {
    slug: "project-management-software",
    heroSection: {
      title: "Project Management Software",
      subContent:
        "Streamline project execution with a collaborative platform that aligns teams, tracks progress in real time, and keeps every task, timeline, and budget on track—no matter the project size.",
      image: pms,
    },
    overviewSection: {
      title: "What is Project Management Software?",
      subContent:
        "Project Management Software is a digital system that supports the complete project lifecycle—from planning and task assignment to budgeting and delivery. By automating key workflows and consolidating data, it empowers teams to collaborate effectively and deliver results on time and within budget.",
      features: [
        {
          name: "End-to-End Project Planning",
          color: "#0D47A1",
          description:
            "Define, assign, and organize project tasks clearly from day one.",
        },
        {
          name: "Real-Time Monitoring",
          color: "#0D47A1",
          description:
            "View live updates on progress and spending to take corrective action early.",
        },
        {
          name: "Automated Reminders & Timesheets",
          color: "#0D47A1",
          description:
            "Set alerts and track time logs effortlessly for greater accountability.",
        },
        {
          name: "Customizable Templates & Gantt Views",
          color: "#0D47A1",
          description:
            "Visualize your projects with intuitive layouts and reusable formats.",
        },
      ],
    },
    insightsSection: {
      title: "Features",
      description:
        "Manage Projects Smarter with Centralized Planning and Execution",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/FACC15/admin-settings-male.png"
              alt="admin-settings-male"
            />
          ),
          description:
            "Manage every stage from kickoff to completion in one platform.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/FACC15/external-Monitoring-business-management-nawicon-detailed-outline-nawicon.png"
              alt="external-Monitoring-business-management-nawicon-detailed-outline-nawicon"
            />
          ),
          description: "Monitor milestones, time, and costs in real time.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FACC15/centralized-network.png"
              alt="centralized-network"
            />
          ),
          description:
            "Centralize communication, updates, and approvals across teams.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pulsar-line/48/FACC15/customer-insights-manager.png"
              alt="customer-insights-manager"
            />
          ),
          description:
            "Use insights to predict project outcomes, manage resources, and maximize ROI.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Project Management Software",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/0a1f36/external-resource-management-seo-and-marketing-vectorslab-glyph-vectorslab.png"
              alt="external-resource-management-seo-and-marketing-vectorslab-glyph-vectorslab"
            />
          ),
          title: "Improved Resource Management",
          description:
            "Distribute workloads effectively and monitor capacity across departments.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/30/0a1f36/estimate.png"
              alt="estimate"
            />
          ),
          title: "Real-Time Budget Control",
          description:
            "Track costs as they occur and prevent overspending before it happens.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/medium-risk.png"
              alt="medium-risk"
            />
          ),
          title: "Reduced Risks & Delays",
          description:
            "Spot timeline or task issues early and resolve them proactively.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/30/0a1f36/commercial-development-management.png"
              alt="commercial-development-management"
            />
          ),
          title: "Enhanced Team Accountability",
          description:
            "Keep everyone aligned with shared visibility and transparent reporting.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/30/0a1f36/order-on-the-way.png"
              alt="order-on-the-way"
            />
          ),
          title: "Better Forecasting & Profitability Tracking",
          description:
            "Estimate margins and cost-to-completion with AI-driven projections.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/0a1f36/batch-assign.png"
              alt="batch-assign"
            />
          ),
          title: "Unified Collaboration",
          description:
            "Centralize updates, files, and feedback with integrated communication tools.",
        },
      ],
    },
    percentageSection: {
      title: "Project Success Metrics",
      stats: [
        {
          number: 65,
          label: "Faster Planning",
          content: "Faster project planning using templates and automation.",
        },
        {
          number: 70,
          label: "On-Time Delivery",
          content:
            "Improvement in on-time delivery from real-time tracking and alerts.",
        },
        {
          number: 80,
          label: "Reduced Manual Effort",
          content:
            "Less manual effort through workflow automation and centralized task management.",
        },
      ],
    },
    ctaSection: {
      description:
        "Level up your project delivery with an all-in-one platform that connects people, processes, and performance so you can deliver on time, every time. Plan smarter, act faster, and achieve more with powerful project management software.",
    },
  },
];

export default addonsData;
