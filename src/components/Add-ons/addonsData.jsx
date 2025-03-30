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
          icon: featureIcon,
          description:
            "Manage assets from procurement to disposal for maximum ROI.",
        },
        {
          icon: featureIcon,
          description:
            "Leverage AI-powered analytics for proactive management.",
        },
        {
          icon: featureIcon,
          description:
            "Identify and reduce risks through real-time tracking and insights.",
        },
        {
          icon: featureIcon,
          description:
            "Ensure audit readiness with accurate, automated documentation.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Asset Management System ",
      benefits: [
        {
          icon: featureIcon,
          title: "Preemptive Downtime Control",
          description:
            "Detect early warning signs to prevent disruptions and enhance continuity.",
        },
        {
          icon: featureIcon,
          title: "Structured Maintenance Scheduling",
          description:
            "Maximize asset longevity with planned, proactive service routines.",
        },
        {
          icon: featureIcon,
          title: "Comprehensive Performance Evaluation",
          description:
            "Gain insights into asset utilization and identify improvement opportunities.",
        },
        {
          icon: featureIcon,
          title: "Automated Notifications",
          description:
            "Stay updated with alerts that reduce reaction time and operational lag.",
        },
        {
          icon: featureIcon,
          title: "Standards and Regulations Adherence",
          description:
            "Align with industry mandates via reliable, audit-friendly records.",
        },
        {
          icon: featureIcon,
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
            "42% improvement in operational efficiency via unified asset workflows.",
        },
        {
          number: 58,
          label: "Compliance Hurdles",
          content:
            "58% reduction in compliance hurdles through transparent, real-time tracking.",
        },
        {
          number: 82,
          label: "Cost Savings",
          content:
            "82% cost savings achieved through preventive strategies and lifecycle insight.",
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
          icon: featureIcon,
          description:
            "Deliver a consistent, engaging customer experience across web, mobile, in-store, and third-party platforms.",
        },
        {
          icon: featureIcon,
          description:
            "Rapidly respond to consumer trends and demands with modular, scalable platforms.",
        },
        {
          icon: featureIcon,
          description:
            "Use behavioral analytics to personalize experiences and predict future buying patterns.",
        },
        {
          icon: featureIcon,
          description:
            "Streamline backend operations through AI-driven tools for efficiency and agility.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Digital Retail & Platform",
      benefits: [
        {
          icon: featureIcon,
          title: "Strategic Channel Convergence",
          description:
            "Unify digital and physical retail experiences to build stronger brand trust and customer loyalty.",
        },
        {
          icon: featureIcon,
          title: "Reduced Operational Costs",
          description:
            "Lower marketing and logistics costs through intelligent automation and smart workflows.",
        },
        {
          icon: featureIcon,
          title: "Data-Driven Adaptation",
          description:
            "Stay ahead with actionable insights that support quicker, smarter business decisions.",
        },
        {
          icon: featureIcon,
          title: "Process Streamlining",
          description:
            "Eliminate bottlenecks and manual tasks to free up teams for strategic innovation.",
        },
        {
          icon: featureIcon,
          title: "Resource Utilization Efficiency",
          description:
            "Optimize internal resources to balance quality, speed, and performance.",
        },
        {
          icon: featureIcon,
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
            "45% improvement in lead conversion via personalized recommendations.",
        },
        {
          number: 60,
          label: "Delivery Speed",
          content:
            "60% faster delivery times with integrated sales channel analytics.",
        },
        {
          number: 75,
          label: "Revenue Growth",
          content:
            "75% revenue increase driven by omnichannel alignment and smart forecasting.",
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
          icon: featureIcon,
          description:
            "Centralize critical distribution functions for faster, error-free execution.",
        },
        {
          icon: featureIcon,
          description:
            "Leverage data to anticipate demand, avoid shortages, and maximize resource efficiency.",
        },
        {
          icon: featureIcon,
          description:
            "Unify external partner coordination for seamless order-to-delivery workflows.",
        },
        {
          icon: featureIcon,
          description:
            "Automate routine tasks and expand operational capacity without increasing overhead.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Distribution Management System",
      benefits: [
        {
          icon: featureIcon,
          title: "Process Automation and Error Reduction",
          description:
            "Automate repetitive tasks to minimize mistakes and enhance delivery accuracy.",
        },
        {
          icon: featureIcon,
          title: "Live Operational Oversight",
          description:
            "Monitor every distribution stage in real-time for agile response and efficiency.",
        },
        {
          icon: featureIcon,
          title: "Elevated Customer Satisfaction",
          description:
            "Deliver faster and more reliably, strengthening client trust and loyalty.",
        },
        {
          icon: featureIcon,
          title: "Cost-Effective Route Optimization",
          description:
            "Cut transportation costs and improve sustainability through smart routing.",
        },
        {
          icon: featureIcon,
          title: "Data-Driven Decision-Making",
          description:
            "Make proactive changes using real-time analytics to stay ahead of market shifts.",
        },
        {
          icon: featureIcon,
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
            "45% growth in average order value with intelligent distribution strategies.",
        },
        {
          number: 70,
          label: "Productivity Increase",
          content:
            "70% increase in productivity after automating distribution workflows.",
        },
        {
          number: 95,
          label: "On-Time Delivery",
          content:
            "95% on-time delivery rate achieved via predictive logistics and smart routing.",
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
          icon: featureIcon,
          description:
            "Streamline task assignment, tracking, and closure within one platform.",
        },
        {
          icon: featureIcon,
          description:
            "Optimize team performance through smart planning and dynamic rescheduling.",
        },
        {
          icon: featureIcon,
          description:
            "Access live updates on progress, delays, and technician availability.",
        },
        {
          icon: featureIcon,
          description:
            "Equip field personnel with tools and data to resolve issues faster and more accurately.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Field Service Management",
      benefits: [
        {
          icon: featureIcon,
          title: "Error Reduction & Efficiency Gains",
          description:
            "Eliminate manual entry and optimize task flow with intelligent automation.",
        },
        {
          icon: featureIcon,
          title: "Visibility & Control in Real Time",
          description:
            "Get instant access to field activity, technician location, and task status.",
        },
        {
          icon: featureIcon,
          title: "Elevated Customer Experience",
          description:
            "Deliver fast, informed service and real-time updates to exceed expectations.",
        },
        {
          icon: featureIcon,
          title: "Productivity Boost",
          description:
            "Enable technicians with all required data to close jobs faster and smarter.",
        },
        {
          icon: featureIcon,
          title: "Revenue Expansion",
          description:
            "Complete more tasks in less time and improve customer retention for revenue growth.",
        },
        {
          icon: featureIcon,
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
            "45% decrease in operational costs through automation and reduced errors.",
        },
        {
          number: 60,
          label: "Customer Satisfaction",
          content:
            "60% improvement in customer satisfaction with faster service and communication.",
        },
        {
          number: 75,
          label: "Response Time",
          content:
            "75% quicker service response times using real-time tracking and smart scheduling.",
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
          icon: featureIcon,
          description:
            "Oversee multiple properties, leases, and maintenance activities from a single dashboard.",
        },
        {
          icon: featureIcon,
          description:
            "Reduce manual work with workflows for rent collection, repairs, and renewals.",
        },
        {
          icon: featureIcon,
          description:
            "Generate insights from real-time reports and historical data for better forecasting.",
        },
        {
          icon: featureIcon,
          description:
            "Simplify document tracking and ensure legal requirements are always met.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Real Estate Management",
      benefits: [
        {
          icon: featureIcon,
          title: "Maximized Rental Potential",
          description:
            "Optimize pricing strategies and increase occupancy for consistent cash flow.",
        },
        {
          icon: featureIcon,
          title: "Proactive Maintenance Oversight",
          description:
            "Avoid costly breakdowns with preventive service scheduling and asset monitoring.",
        },
        {
          icon: featureIcon,
          title: "Reduced Legal Vulnerabilities",
          description:
            "Stay compliant with leasing laws and property regulations across locations.",
        },
        {
          icon: featureIcon,
          title: "Cost Control & Efficiency",
          description:
            "Track expenses in detail and identify savings across your property lifecycle.",
        },
        {
          icon: featureIcon,
          title: "Transparent Financial Tracking",
          description:
            "Maintain real-time visibility into revenue, operating costs, and ROI.",
        },
        {
          icon: featureIcon,
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
            "85% faster property inspections through mobile-enabled, data-rich evaluations.",
        },
        {
          number: 88,
          label: "Maintenance Efficiency",
          content:
            "88% increase in efficiency of maintenance workflows, reducing response time.",
        },
        {
          number: 90,
          label: "Data Accuracy",
          content:
            "90% improvement in accuracy and accessibility of critical property data.",
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
          icon: featureIcon,
          description:
            "Eliminate manual tasks to speed up lead handling, follow-ups, and order processing.",
        },
        {
          icon: featureIcon,
          description:
            "Leverage real-time analytics and historical trends to fine-tune strategies.",
        },
        {
          icon: featureIcon,
          description:
            "Maintain full visibility into the sales funnel and deal progress.",
        },
        {
          icon: featureIcon,
          description:
            "Keep reps connected and informed, no matter where they are.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Sales Force Automation",
      benefits: [
        {
          icon: featureIcon,
          title: "Enhanced Customer Engagement",
          description:
            "Deliver personalized, consistent communication that nurtures loyalty and trust.",
        },
        {
          icon: featureIcon,
          title: "Simplified Sales Processes",
          description:
            "Eliminate manual steps for faster deal closure and reduced cycle times.",
        },
        {
          icon: featureIcon,
          title: "Informed Team Oversight",
          description:
            "Gain visibility into sales activities to better coach, support, and scale teams.",
        },
        {
          icon: featureIcon,
          title: "Data-Driven Decision-Making",
          description:
            "Use real-time analytics to identify trends, measure performance, and pivot strategies.",
        },
        {
          icon: featureIcon,
          title: "Accurate Forecasting & Lead Management",
          description:
            "Predict pipeline outcomes and allocate efforts toward high-value opportunities.",
        },
        {
          icon: featureIcon,
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
            "45% increase in win rates through intelligent automation and streamlined lead flow.",
        },
        {
          number: 60,
          label: "Lead Conversion Boost",
          content:
            "60% jump in lead conversion rates with smarter engagement and insights.",
        },
        {
          number: 70,
          label: "Productivity Gain",
          content:
            "70% productivity boost driven by mobile access and workflow automation.",
        },
      ],
    },
    ctaSection: {
      description:
        "Transform your sales function with Raapyd’s Sales Force Automation simplify processes, empower your team, and unlock consistent revenue growth with smarter, faster selling. Future-proof your sales strategy and stay ahead in every deal, every time.",
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
          icon: featureIcon,
          description:
            "Customize billing frequencies and tiers to align with customer needs.",
        },
        {
          icon: featureIcon,
          description:
            "Manage upgrades, downgrades, renewals, and cancellations with full transparency.",
        },
        {
          icon: featureIcon,
          description:
            "Ensure compliance and accuracy in financial reporting for all billing scenarios.",
        },
        {
          icon: featureIcon,
          description:
            "Provide users control over their subscriptions, reducing churn and support demand.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Subscription Billing & Management",
      benefits: [
        {
          icon: featureIcon,
          title: "Improved Cash Flow Automation",
          description:
            "Automate recurring revenue and enhance forecasting accuracy with stable inflows.",
        },
        {
          icon: featureIcon,
          title: "Enhanced Self-Service Options",
          description:
            "Empower users to manage subscriptions, reducing overhead and boosting satisfaction.",
        },
        {
          icon: featureIcon,
          title: "Customer Retention & Growth",
          description:
            "Identify churn risks and proactively engage customers with timely solutions.",
        },
        {
          icon: featureIcon,
          title: "Cost Reductions & Efficiency",
          description:
            "Cut operational costs by replacing manual workflows with intelligent automation.",
        },
        {
          icon: featureIcon,
          title: "Data-Driven Decision Making",
          description:
            "Use advanced analytics to refine pricing, forecast revenue, and improve CX.",
        },
        {
          icon: featureIcon,
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
            "45% increase in productivity from reduced manual billing tasks.",
        },
        {
          number: 70,
          label: "Customer Satisfaction",
          content:
            "70% boost in customer satisfaction through smoother billing and transparency.",
        },
        {
          number: 80,
          label: "Financial Cycle Cost Reduction",
          content:
            "80% decrease in financial cycle costs using automated recognition and collection.",
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
          icon: featureIcon,
          description: "Manage the entire vendor lifecycle from one platform.",
        },
        {
          icon: featureIcon,
          description:
            "Monitor contracts and regulations to prevent disruptions.",
        },
        {
          icon: featureIcon,
          description:
            "Drive profitability by eliminating overspending and inefficiencies.",
        },
        {
          icon: featureIcon,
          description:
            "Use KPIs to evaluate vendors and ensure high service standards.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Vendor Management Solution",
      benefits: [
        {
          icon: featureIcon,
          title: "Robust Partnerships",
          description:
            "Build trust with top-performing vendors aligned to your business goals.",
        },
        {
          icon: featureIcon,
          title: "Cost Reduction",
          description:
            "Minimize excess spending through smarter procurement and vendor selection.",
        },
        {
          icon: featureIcon,
          title: "Operational Improvements",
          description:
            "Reduce onboarding time, eliminate bottlenecks, and improve service delivery.",
        },
        {
          icon: featureIcon,
          title: "Risk Prevention",
          description:
            "Avoid service interruptions with proactive monitoring and regulatory alignment.",
        },
        {
          icon: featureIcon,
          title: "Stronger Collaboration",
          description:
            "Foster productive, transparent communication and continuous improvement.",
        },
        {
          icon: featureIcon,
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
            "80% improvement in revenue control due to vendor process transparency.",
        },
        {
          number: 85,
          label: "Vendor Oversight",
          content:
            "85% smoother tracking of vendor activities and contractual obligations.",
        },
        {
          number: 90,
          label: "Onboarding Speed",
          content:
            "90% faster and more intuitive onboarding with centralized vendor management tools.",
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
          icon: featureIcon,
          description:
            "Automate document delivery via email, fax, or mail directly from core business systems.",
        },
        {
          icon: featureIcon,
          description:
            "Gain real-time visibility into document statuses to ensure reliable communication.",
        },
        {
          icon: featureIcon,
          description:
            "Trigger document dispatch based on defined rules, approvals, or system events.",
        },
        {
          icon: featureIcon,
          description:
            "Encrypt files and maintain audit trails to meet strict regulatory standards.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Document Delivery Automation",
      benefits: [
        {
          icon: featureIcon,
          title: "Accelerated Approval Workflows",
          description:
            "Expedite document-driven decisions and minimize process delays.",
        },
        {
          icon: featureIcon,
          title: "Cost Savings & Resource Efficiency",
          description:
            "Replace paper-based routines with automated digital processes.",
        },
        {
          icon: featureIcon,
          title: "Regulatory Confidence",
          description:
            "Protect sensitive data with encryption, access controls, and full audit trails.",
        },
        {
          icon: featureIcon,
          title: "Improved Customer Experience",
          description:
            "Deliver timely, accurate communications that build trust and responsiveness.",
        },
        {
          icon: featureIcon,
          title: "Operational Visibility",
          description:
            "Track performance metrics and identify bottlenecks in real time.",
        },
        {
          icon: featureIcon,
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
            "45% fewer manual tasks due to automated validation and routing.",
        },
        {
          number: 60,
          label: "Faster Delivery",
          content:
            "60% faster document delivery, freeing teams to focus on strategic work.",
        },
        {
          number: 75,
          label: "Cost Reduction",
          content:
            "75% reduction in print, postage, and manual processing costs.",
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
          icon: featureIcon,
          description:
            "Eliminate manual steps in filings, renewals, and audits.",
        },
        {
          icon: featureIcon,
          description:
            "Store and retrieve compliance documents securely in one place.",
        },
        {
          icon: featureIcon,
          description:
            "Proactively identify vulnerabilities and enforce safeguards.",
        },
        {
          icon: featureIcon,
          description:
            "Ensure global consistency with local adaptability across business units.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Compliance Management Software",
      benefits: [
        {
          icon: featureIcon,
          title: "Sustained Operational Integrity",
          description:
            "Avoid disruptions and legal setbacks by maintaining compliance continuity.",
        },
        {
          icon: featureIcon,
          title: "Optimized Cost Control",
          description:
            "Minimize penalties, streamline audits, and reduce overhead.",
        },
        {
          icon: featureIcon,
          title: "Enhanced Organizational Accountability",
          description:
            "Ensure every team understands and owns their compliance roles and timelines.",
        },
        {
          icon: featureIcon,
          title: "Future-Proof Governance",
          description:
            "Adapt quickly to evolving regulations with flexible, scalable compliance infrastructure.",
        },
        {
          icon: featureIcon,
          title: "Improved Audit Readiness",
          description:
            "Generate real-time reports, maintain audit trails, and respond swiftly to regulatory reviews.",
        },
        {
          icon: featureIcon,
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
            "40% reduction in manual effort via automated compliance task execution.",
        },
        {
          number: 70,
          label: "Deadline Performance",
          content:
            "70% improvement in meeting deadlines thanks to proactive alerts.",
        },
        {
          number: 80,
          label: "Risk Cost Reduction",
          content:
            "80% drop in compliance-related risk costs with early detection and response.",
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
          icon: featureIcon,
          description:
            "Create and launch business processes using a visual interface.",
        },
        {
          icon: featureIcon,
          description: "Turn manual steps into rule-based automation.",
        },
        {
          icon: featureIcon,
          description:
            "Connect to databases, CRMs, and other business systems without development effort.",
        },
        {
          icon: featureIcon,
          description:
            "From simple tasks to enterprise-wide workflows, scale without complexity.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of No-Code Work Platform",
      benefits: [
        {
          icon: featureIcon,
          title: "Reduced Operational Costs",
          description:
            "Eliminate the need for developers and reduce software dependency with self-serve tools.",
        },
        {
          icon: featureIcon,
          title: "Accelerated Time-to-Market",
          description:
            "Quickly build and modify workflows to respond to changing business needs.",
        },
        {
          icon: featureIcon,
          title: "Enhanced Cross-Department Alignment",
          description:
            "Empower all teams to work from unified, consistent workflows.",
        },
        {
          icon: featureIcon,
          title: "Improved Business Resilience",
          description:
            "Quickly adapt workflows to organizational shifts or external disruptions.",
        },
        {
          icon: featureIcon,
          title: "Frictionless Collaboration",
          description:
            "Enable shared visibility, ownership, and input across departments.",
        },
        {
          icon: featureIcon,
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
            "50% faster setup time compared to traditional development methods.",
        },
        {
          number: 70,
          label: "Operational Agility",
          content:
            "70% increase in operational agility from quick, self-serve workflow changes.",
        },
        {
          number: 80,
          label: "Employee Engagement",
          content:
            "80% rise in employee engagement due to intuitive, user-friendly design.",
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
          icon: featureIcon,
          description:
            "Digitally manage requisitions, quotations, orders, and payments.",
        },
        {
          icon: featureIcon,
          description:
            "Onboard, evaluate, and collaborate with suppliers through structured workflows.",
        },
        {
          icon: featureIcon,
          description:
            "Track procurement progress, vendor performance, and financial approvals at every stage.",
        },
        {
          icon: featureIcon,
          description:
            "Ensure tax compliance, audit readiness, and error-free processing.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Procurement Software",
      benefits: [
        {
          icon: featureIcon,
          title: "Streamlined Operations",
          description:
            "Manage all procurement workflows from one platform for increased efficiency.",
        },
        {
          icon: featureIcon,
          title: "Significant Cost Savings",
          description:
            "Control spending, eliminate financial leaks, and negotiate better vendor terms.",
        },
        {
          icon: featureIcon,
          title: "Reduced Risk & Liability",
          description:
            "Maintain detailed records, enforce compliance, and prevent legal issues.",
        },
        {
          icon: featureIcon,
          title: "Better Vendor Collaboration",
          description:
            "Foster transparent communication and efficient coordination with suppliers.",
        },
        {
          icon: featureIcon,
          title: "Enhanced Accuracy & Speed",
          description:
            "Automate approvals, tax calculations, and payment processing for smoother transactions.",
        },
        {
          icon: featureIcon,
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
            "60% less manual input through vendor portals and process automation.",
        },
        {
          number: 70,
          label: "Faster Cycles",
          content:
            "70% faster turnaround on requests, approvals, and payment cycles.",
        },
        {
          number: 80,
          label: "Real-Time Visibility",
          content:
            "80% improvement in visibility and response time via real-time tracking and alerts.",
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
          icon: featureIcon,
          description:
            "Manage every stage from kickoff to completion in one platform.",
        },
        {
          icon: featureIcon,
          description: "Monitor milestones, time, and costs in real time.",
        },
        {
          icon: featureIcon,
          description:
            "Centralize communication, updates, and approvals across teams.",
        },
        {
          icon: featureIcon,
          description:
            "Use insights to predict project outcomes, manage resources, and maximize ROI.",
        },
      ],
    },
    benefitsSection: {
      title: "Key Benefits of Project Management Software",
      benefits: [
        {
          icon: featureIcon,
          title: "Improved Resource Management",
          description:
            "Distribute workloads effectively and monitor capacity across departments.",
        },
        {
          icon: featureIcon,
          title: "Real-Time Budget Control",
          description:
            "Track costs as they occur and prevent overspending before it happens.",
        },
        {
          icon: featureIcon,
          title: "Reduced Risks & Delays",
          description:
            "Spot timeline or task issues early and resolve them proactively.",
        },
        {
          icon: featureIcon,
          title: "Enhanced Team Accountability",
          description:
            "Keep everyone aligned with shared visibility and transparent reporting.",
        },
        {
          icon: featureIcon,
          title: "Better Forecasting & Profitability Tracking",
          description:
            "Estimate margins and cost-to-completion with AI-driven projections.",
        },
        {
          icon: featureIcon,
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
          content:
            "65% faster project planning using templates and automation.",
        },
        {
          number: 70,
          label: "On-Time Delivery",
          content:
            "70% improvement in on-time delivery from real-time tracking and alerts.",
        },
        {
          number: 80,
          label: "Reduced Manual Effort",
          content:
            "80% less manual effort through workflow automation and centralized task management.",
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
