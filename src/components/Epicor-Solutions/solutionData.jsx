import supplychain from "../../assets/Epicor/supplychain.jpg";
import epm from "../../assets/Epicor/epm.jpg";
import eprodm from "../../assets/Epicor/production.jpg";
import efm from "../../assets/Epicor/financial.jpg";
import eps from "../../assets/Epicor/planning.jpg";
import ehrm from "../../assets/Epicor/hr.jpg";
import esm from "../../assets/Epicor/sales.jpg";
import esam from "../../assets/Epicor/asset.jpg";
import ekc from "../../assets/Epicor/crm.jpg";

const featureIcon = (
  <img
    className="h-8 w-8"
    src="https://img.icons8.com/pastel-glyph/100/intelligent-person.png"
    alt="intelligent-person"
  />
);

const solutionData = [
  {
    slug: "supply-chain",
    heroSection: {
      title: "Transform Global Operations and Drive Competitive Advantage",
      subContent:
        "Epicor Supply Chain Management delivers a comprehensive solution that orchestrates global operations with unprecedented efficiency, providing complete visibility across your entire supply chain ecosystem.",
      buttonText: "Demo →",
      image: supplychain,
      listItems: [
        "Streamline complex supply chain processes to accelerate product delivery while reducing costs, enabling your organization to focus exclusively on strategic, value-generating activities.",
        "Enhance profitability through seamless coordination from raw material procurement through finished product delivery, optimizing every link in your supply chain.",
        "Meet current customer requirements while leveraging advanced analytics to anticipate future market demands with exceptional accuracy.",
        "Epicor  Supply Chain Management offers end-to-end visibility, empowering enterprises to manage complex operations effectively and efficiently.",
      ],
    },
    featuresSection: {
      title: "Core Capabilities That Drive Supply Chain Transformation",
      features: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/checkout.png"
              alt="checkout"
            />
          ),
          name: "Purchase Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/move-by-trolley.png"
              alt="move-by-trolley"
            />
          ),
          name: "Inventory Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/carbon-copy/64/garage-closed.png"
              alt="garage-closed"
            />
          ),
          name: "Warehouse Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/trust--v1.png"
              alt="trust--v1"
            />
          ),
          name: "Supplier Relationship Management",
        },
      ],
    },
    percentageSection: {
      title: "Supply Chain Excellence in Numbers",
      stats: [
        {
          number: 42,
          label: "Reduction in Inventory Costs",
          description:
            "Organizations implementing integrated supply chain management solutions report an average 42% decrease in inventory costs, leading to significant improvements in working capital.",
        },
        {
          number: 68,
          label: "Increase in On-Time Delivery Performance",
          description:
            "Companies with end-to-end supply chain visibility see a 68% increase in on-time delivery performance compared to those using fragmented systems.",
        },
        {
          number: 35,
          label: "Reduction in Procurement Costs",
          description:
            "Enterprises achieve a significant reduction in procurement costs through supplier relationship management and automated purchasing workflows.",
        },
      ],
    },
    containerSection: {
      content:
        "Epicor Supply Chain Management provides a comprehensive approach to optimizing procurement, inventory, warehouse, and supplier processes—empowering businesses with agility, control, and operational excellence.",
    },
    benefitsSection: {
      title: "Benefits of Epicor  Supply Chain Management",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/invisible.png"
              alt="invisible"
            />
          ),
          title: "End-to-End Visibility",
          description:
            "Access a single, comprehensive view of your entire supply chain, enabling effective management of even the most complex global operations.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pastel-glyph/64/facc15/gender-neutral-user.png"
              alt="gender-neutral-user"
            />
          ),
          title: "Enhanced Customer Experience",
          description:
            "Deliver superior service through real-time information access, optimized inventory management, reliable delivery performance, and exceptional post-sale support.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/wired/64/facc15/decision.png"
              alt="decision"
            />
          ),
          title: "Intelligent Decision Support",
          description:
            "Make strategic decisions with confidence by tracking real-time KPIs and emerging business trends, enabling superior procurement decisions and enhanced negotiation outcomes.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/64/facc15/external-regulation-project-management-kmg-design-glyph-kmg-design.png"
              alt="external-regulation-project-management-kmg-design-glyph-kmg-design"
            />
          ),
          title: "Regulatory Compliance",
          description:
            "Maintain perfect alignment with global trade standards and requirements, including RoHS, WEEE, and other critical regulatory frameworks.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-creatype-outline-colourcreatype/64/facc15/external-edi-data-file-extension-line-creatype-outline-colourcreatype.png"
              alt="external-edi-data-file-extension-line-creatype-outline-colourcreatype"
            />
          ),
          title: "Advanced EDI Integration",
          description:
            "Leverage sophisticated electronic data interchange capabilities to enhance transaction velocity and operational visibility throughout your supply chain network.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/material-outlined/64/facc15/collaboration.png"
              alt="collaboration"
            />
          ),
          title: "Supplier Collaboration Portal",
          description:
            "Foster collaborative excellence with suppliers through a centralized, secure communication and transaction platform that streamlines interactions and improves relationship management.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/membrane.png"
              alt="membrane"
            />
          ),
          title: "Optimized Material Utilization",
          description:
            "Enhance sustainability and reduce waste through advanced material management capabilities that optimize utilization across your entire supply chain.",
        },
      ],
    },
  },
  {
    slug: "epicor-project-management",
    heroSection: {
      title: "Transform Project Delivery and Drive Business Excellence",
      subContent:
        "Epicor Project Management offers a complete solution that manages the entire project lifecycle efficiently, providing full visibility from initial estimates through final delivery.",
      buttonText: "Demo →",
      image: epm,
      listItems: [
        "Create detailed project plans with accurate cost forecasting, maintaining strict control over budgeting and execution parameters while allowing confident bidding.",
        "Track billable and non-billable time seamlessly with integrated expense tools that improve accuracy and speed up reimbursement.",
        "Access sophisticated analytics and reporting capabilities that provide real-time project insights, enabling proactive management and strategic decision-making.",
        "Epicor  Project Management ensures end-to-end lifecycle management, from initiation to delivery, for maximum project success.",
      ],
    },
    featuresSection: {
      title: "Core Capabilities That Drive Project Transformation",
      features: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/project.png"
              alt="project"
            />
          ),
          name: "Project Generation",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/billing.png"
              alt="billing"
            />
          ),
          name: "Project Billing",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-wanicon-lineal-wanicon/64/external-resource-business-model-canvas-wanicon-lineal-wanicon.png"
              alt="external-resource-business-model-canvas-wanicon-lineal-wanicon"
            />
          ),
          name: "Resource Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/signing-a-document.png"
              alt="signing-a-document"
            />
          ),
          name: "Contract Management",
        },
      ],
    },
    percentageSection: {
      title: "Project Management by the Numbers",
      stats: [
        {
          number: 89,
          label: "Project Success Rate",
          description:
            "Organizations with standardized project management practices achieve an 89% project success rate, compared to just 34% in those without standardized processes.",
        },
        {
          number: 28,
          label: "Reduction in Project Costs",
          description:
            "Companies report a significant average reduction in project costs through improved resource allocation and minimized workflow inefficiencies enabled by effective project management solutions.",
        },
        {
          number: 77,
          label: "Increase in Stakeholder Satisfaction",
          description:
            "Businesses using integrated project management software see higher stakeholder satisfaction rates compared to those relying on disconnected systems.",
        },
      ],
    },
    containerSection: {
      content:
        "Epicor Project Management helps streamline project execution through integrated tools for planning, tracking, billing, and resource management—enabling greater visibility, control, and profitability across the project lifecycle.",
    },
    benefitsSection: {
      title: "Benefits of Epicor  Project Management",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/64/facc15/external-visibility-internet-marketing-kmg-design-glyph-kmg-design.png"
              alt="external-visibility-internet-marketing-kmg-design-glyph-kmg-design"
            />
          ),
          title: "Unified Project Visibility",
          description:
            "Access a single, comprehensive view of all project elements, enabling effective management of even the most complex initiatives.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/idea-sharing.png"
              alt="idea-sharing"
            />
          ),
          title: "End-to-End Solution Architecture",
          description:
            "Implement a complete project management ecosystem covering planning, resource management, time tracking, billing, and revenue recognition.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/64/facc15/external-workforce-data-analytics-smashingstocks-hand-drawn-black-smashing-stocks.png"
              alt="external-workforce-data-analytics-smashingstocks-hand-drawn-black-smashing-stocks"
            />
          ),
          title: "Mobile Workforce Enablement",
          description:
            "Equip field personnel with mobile time and expense management tools for real-time data capture, improving accuracy and compliance.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-glyph-geotatah/64/facc15/external-collaborative-knowledge-management-glyph-glyph-geotatah.png"
              alt="external-collaborative-knowledge-management-glyph-glyph-geotatah"
            />
          ),
          title: "Collaborative Excellence",
          description:
            "Foster effective stakeholder collaboration through transparent sharing of project progress, ensuring alignment and satisfaction.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pulsar-line/64/facc15/Profitability.png"
              alt="Profitability"
            />
          ),
          title: "Increased Profitability",
          description:
            "Maximize revenue through accurate billing, reduced leakage, and optimized resource utilization.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/64/facc15/external-Decision-Making-business-startup-2-kmg-design-glyph-kmg-design.png"
              alt="external-Decision-Making-business-startup-2-kmg-design-glyph-kmg-design"
            />
          ),
          title: "Enhanced Decision Making",
          description:
            "Leverage real-time data and analytics to make informed decisions that keep projects on track and improve completion rates.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/administrative-tools.png"
              alt="administrative-tools"
            />
          ),
          title: "Reduced Administrative Burden",
          description:
            "Automate routine tasks to allow your team to focus on high-value project activities and strategic initiatives.",
        },
      ],
    },
  },
  {
    slug: "epicor-production-management",
    heroSection: {
      title:
        "Empowering Manufacturers to Deliver High-Quality Products Profitably",
      subContent:
        "Epicor Production Management delivers a comprehensive solution that orchestrates manufacturing operations with exceptional flexibility, providing complete visibility and control across your entire production ecosystem.",
      buttonText: "Demo →",
      image: eprodm,
      listItems: [
        "Implement easy-to-use production capabilities that seamlessly accommodate diverse manufacturing approaches including Make-to-Order (MTO), Configure-to-Order (CTO), Engineer-to-Order (ETO), and Make-to-Stock (MTS).",
        "Streamline processes and minimize waste through sophisticated scheduling, tracking, and reporting features enhanced with advanced batching technology and Kanban functionality.",
        "Access intuitive business intelligence with real-time connectivity from the shop floor to supply chain partners, enabling data-driven decision-making.",
        "Epicor  Production Management ensures operational control and visibility from planning through execution for sustainable profitability.",
      ],
    },
    featuresSection: {
      title: "Core Capabilities That Drive Production Transformation",
      features: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/1A1A1A/manufacturing.png"
              alt="manufacturing"
            />
          ),
          name: "Multi-Mode Manufacturing Support",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/1A1A1A/external-scheduling-project-management-outline-black-m-oki-orlando.png"
              alt="external-scheduling-project-management-outline-black-m-oki-orlando"
            />
          ),
          name: "Advanced Scheduling and Tracking",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/1A1A1A/warranty-card.png"
              alt="warranty-card"
            />
          ),
          name: "Quality Management System",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/1A1A1A/engineering.png"
              alt="engineering"
            />
          ),
          name: "Engineering Change Management",
        },
      ],
    },
    percentageSection: {
      title: "Manufacturing Performance Metrics",
      stats: [
        {
          number: 63,
          label: "Improvement in On-Time Delivery Rates",
          description:
            "Manufacturers implementing integrated production management systems with real-time scheduling capabilities see significant gains in meeting delivery commitments.",
        },
        {
          number: 47,
          label: "Reduction in Production Waste",
          description:
            "Companies adopting lean manufacturing technologies and processes report less material waste and more efficient operations.",
        },
        {
          number: 31,
          label: "Increase in Manufacturing Throughput",
          description:
            "Optimized scheduling and advanced production tracking systems enable higher output with better resource utilization.",
        },
      ],
    },
    containerSection: {
      content:
        "Epicor Production Management empowers manufacturers with full control, operational visibility, and flexible tools for navigating complex processes, meeting customization demands, and driving profitability.",
    },
    benefitsSection: {
      title: "Benefits of Epicor  Production Management",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/facc15/external-agility-digital-transformation-parzival-1997-detailed-outline-parzival-1997.png"
              alt="external-agility-digital-transformation-parzival-1997-detailed-outline-parzival-1997"
            />
          ),
          title: "Manufacturing Agility",
          description:
            "Respond rapidly to diverse manufacturing requirements while improving efficiency and communication throughout each product's lifecycle, enhancing market responsiveness.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-wichaiwi/64/facc15/external-operational-business-risks-outline-wichaiwi.png"
              alt="external-operational-business-risks-outline-wichaiwi"
            />
          ),
          title: "Operational Streamlining",
          description:
            "Simplify complex processes and reduce waste through integrated scheduling, tracking, and reporting features powered by advanced batching technology and Kanban functionality.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/connected-people.png"
              alt="connected-people"
            />
          ),
          title: "Enhanced Cross-Functional Collaboration",
          description:
            "Foster seamless teamwork by sharing comprehensive information from the plant floor about every aspect of each production job, eliminating silos and improving coordination.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/connected-people.png"
              alt="connected-people"
            />
          ),
          title: "Unified Management Platform",
          description:
            "Orchestrate supply chain, job orders, material requirements, manufacturing processes, and master data from a single, integrated environment with mobile accessibility.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-icons-smashing-stocks/64/facc15/external-Precision-military-icon-icons-smashing-stocks-2.png"
              alt="external-Precision-military-icon-icons-smashing-stocks-2"
            />
          ),
          title: "Precision Cost Analysis",
          description:
            "Analyze production costs with unprecedented precision, enabling customer-specific, part-specific, and job-specific analysis that drives profitability enhancement.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/material-rounded/64/facc15/3-wheel-scooter.png"
              alt="3-wheel-scooter"
            />
          ),
          title: "Shop Floor Mobility",
          description:
            "Maintain complete operational control even while away from the facility through comprehensive mobile capabilities that ensure uninterrupted management.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/lifecycle--v1.png"
              alt="lifecycle--v1"
            />
          ),
          title: "Product Lifecycle Excellence",
          description:
            "Orchestrate the entire product lifecycle from conception through retirement with integrated tools that enhance development and management processes.",
        },
      ],
    },
  },
  {
    slug: "epicor-financial-management",
    heroSection: {
      title:
        "Empower Your Organization with Streamlined Financial Management Solutions",
      subContent:
        "The Epicor Financial suite offers a comprehensive, integrated solution for automating and optimizing your organization's financial operations. With this platform, you can reduce costs, improve cash flow, and achieve superior financial visibility across your entire business.",
      buttonText: "Demo →",
      image: efm,
      listItems: [
        "Streamline essential financial processes and automate tasks to improve productivity, reduce manual entry, and enable your team to focus on strategic initiatives.",
        "Ensure perfect alignment with GAAP, IFRS, and other regulatory requirements through sophisticated reporting and governance tools designed for global operations.",
        "Access real-time financial information through intuitive dashboards and reporting tools that provide comprehensive visibility and enable data-driven decision making.",
        "Epicor Kinetic Financial Management helps organizations gain complete financial control while enhancing strategic planning and operational efficiency.",
      ],
    },
    featuresSection: {
      title: "Core Capabilities That Drive Financial Transformation",
      features: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/accounting.png"
              alt="accounting"
            />
          ),
          name: "Comprehensive Accounting Applications",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/external-Global-Business-business-startup-2-kmg-design-detailed-outline-kmg-design.png"
              alt="external-Global-Business-business-startup-2-kmg-design-detailed-outline-kmg-design"
            />
          ),
          name: "Global Business Support",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/check-dollar.png"
              alt="check-dollar"
            />
          ),
          name: "Financial Planning and Analysis",
        },
        {
          icon: (
            <img
              className="h=8 w=8"
              src="https://img.icons8.com/ios/38/investment.png"
              alt="investment"
            />
          ),
          name: "Asset and Revenue Management",
        },
      ],
    },
    percentageSection: {
      title: "Financial Impact & ROI",
      stats: [
        {
          number: 41,
          label: "Reduction in Month-End Close Time",
          description:
            "Organizations implementing integrated financial management systems with automated workflows experience faster closing cycles and improved reporting efficiency.",
        },
        {
          number: 57,
          label: "Improvement in Cash Flow Management",
          description:
            "Companies utilizing advanced financial analytics and forecasting capabilities gain better visibility and control over liquidity and working capital.",
        },
        {
          number: 38,
          label: "Decrease in Compliance-Related Costs",
          description:
            "Streamlined reporting processes and automated regulatory controls help reduce the burden and expense of maintaining compliance.",
        },
      ],
    },
    containerSection: {
      content:
        "Epicor Kinetic Financial Management empowers businesses to streamline financial operations, enhance visibility, and support global compliance—delivering powerful insights and control across every financial function.",
    },
    benefitsSection: {
      title: "Benefits of Epicor Kinetic Financial Management",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/credit-control.png"
              alt="credit-control"
            />
          ),
          title: "Enhanced Financial Visibility",
          description:
            "Access comprehensive financial insights through integrated systems that improve data accuracy and provide real-time performance metrics.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/sf-black-filled/64/facc15/money.png"
              alt="money"
            />
          ),
          title: "Streamlined Cash Management",
          description:
            "Optimize invoicing, payments, and collections processes to improve cash flow and strengthen your organization's financial position.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/facc15/external-businessmen-business-and-management-kiranshastry-solid-kiranshastry-2.png"
              alt="external-businessmen-business-and-management-kiranshastry-solid-kiranshastry-2"
            />
          ),
          title: "Mobile Workforce Enablement",
          description:
            "Empower your team with mobile time and expense management capabilities that support remote and offline work requirements.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/facc15/external-business-intelligence-information-systems-solid-solidglyph-m-oki-orlando.png"
              alt="external-business-intelligence-information-systems-solid-solidglyph-m-oki-orlando"
            />
          ),
          title: "Integrated Business Intelligence",
          description:
            "Leverage enhanced financial reporting with customizable dashboards that transform complex data into actionable insights.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-juicy-fish/60/facc15/external-decision-crisis-management-outline-outline-juicy-fish.png"
              alt="external-decision-crisis-management-outline-outline-juicy-fish"
            />
          ),
          title: "Improved Decision Support",
          description:
            "Make strategic choices with confidence using comprehensive financial data and analytics that highlight opportunities and risks.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/dotty/80/facc15/administrative-tools.png"
              alt="administrative-tools"
            />
          ),
          title: "Reduced Administrative Burden",
          description:
            "Automate routine financial tasks and streamline essential processes to reduce costs and allow your team to focus on strategic priorities.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/facc15/external-operation-digital-transformation-parzival-1997-detailed-outline-parzival-1997.png"
              alt="external-operation-digital-transformation-parzival-1997-detailed-outline-parzival-1997"
            />
          ),
          title: "Seamless Multi-Company Operations",
          description:
            "Manage complex organizational structures with tools designed to support multiple entities, currencies, and accounting standards.",
        },
      ],
    },
  },
  {
    slug: "epicor-planning-scheduling",
    heroSection: {
      title:
        "Streamline Your Business Operations with Accurate and Flexible Planning Tools",
      subContent:
        "Epicor Planning & Scheduling provides a comprehensive solution integrated into the core ERP system, helping businesses better meet customer demand and drive productivity across all operations.",
      buttonText: "Demo →",
      image: eps,
      listItems: [
        "Adapt quickly to changes in customer demand by synching requirements from customer orders and forecasts to plant floors, warehouses, and field operations in real-time.",
        "Maximize productivity through effective allocation and optimized use of production facilities, materials, and personnel across your entire operation.",
        "Implement powerful forecasting tools that improve lead times and decision-making by providing accurate predictions based on historical data and market trends.",
        "Epicor Kinetic Planning & Scheduling enables synchronized and agile business operations through integrated, intelligent planning capabilities.",
      ],
    },
    featuresSection: {
      title: "Core Capabilities That Drive Planning Transformation",
      features: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/creativity.png"
              alt="creativity"
            />
          ),
          name: "Smart Demand Planning",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/material-outlined/24/membrane.png"
              alt="membrane"
            />
          ),
          name: "Material Requirements Planning",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/planning-skill.png"
              alt="planning-skill"
            />
          ),
          name: "Advanced Planning and Scheduling",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/external-resource-project-management-outline-black-m-oki-orlando-2.png"
              alt="external-resource-project-management-outline-black-m-oki-orlando-2"
            />
          ),
          name: "Multi-Site Resource Management",
        },
      ],
    },
    percentageSection: {
      title: "Resource Optimization Results",
      stats: [
        {
          number: 52,
          label: "Improvement in Resource Utilization",
          description:
            "Average improvement in resource utilization reported by manufacturers implementing advanced planning and scheduling solutions.",
        },
        {
          number: 44,
          label: "Reduction in Lead Times",
          description:
            "Reduction in production lead times achieved through constraint-based scheduling and material requirements planning.",
        },
        {
          number: 67,
          label: "Increase in On-Time Delivery Performance",
          description:
            "Integrated demand and production planning systems align workflows and forecasts, enabling more consistent order fulfillment.",
        },
      ],
    },
    containerSection: {
      content:
        "Epicor Planning & Scheduling helps businesses align customer demand with operational resources through advanced forecasting, resource optimization, and synchronized production planning across multi-site operations.",
    },
    benefitsSection: {
      title: "Benefits of Epicor Planning & Scheduling",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/facc15/decision-making.png"
              alt="decision-making"
            />
          ),
          title: "Enhanced Decision Support",
          description:
            "Make strategic choices with confidence using visual planning tools that transform complex data into actionable resource management insights.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/facc15/overtime.png"
              alt="overtime"
            />
          ),
          title: "Improved Schedule Accuracy",
          description:
            "Increase operational predictability through sophisticated, drag-and-drop multi-resource scheduling boards that enhance production planning precision.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/30/facc15/supply-chain.png"
              alt="supply-chain"
            />
          ),
          title: "Supply Chain Synchronization",
          description:
            "Align customer demand with production capabilities by connecting requirements from forecasts and orders directly to operational resources.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/facc15/external-resource-talent-management-flatart-icons-outline-flatarticons.png"
              alt="external-resource-talent-management-flatart-icons-outline-flatarticons"
            />
          ),
          title: "Visual Resource Management",
          description:
            "Optimize resource allocation through intuitive visual tools that provide clear insights into capacity, material availability, and production constraints.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/facc15/project.png"
              alt="project"
            />
          ),
          title: "Project Planning Excellence",
          description:
            "Implement comprehensive project management with detailed estimation, planning, scheduling, costing, and integrated supply chain logistics.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-geotatah/64/facc15/external-coordination-emergency-and-disaster-management-outline-geotatah.png"
              alt="external-coordination-emergency-and-disaster-management-outline-geotatah"
            />
          ),
          title: "Multi-Site Coordination",
          description:
            "Share critical planning information across locations including planning criteria and warehouse data while establishing efficient plant transfer protocols.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/30/facc15/timeline-week.png"
              alt="timeline-week"
            />
          ),
          title: "Adaptive Planning Capabilities",
          description:
            "Respond rapidly to changing market conditions with flexible planning tools that accommodate infinite, finite, and constraint-based scheduling approaches.",
        },
      ],
    },
  },
  {
    slug: "epicor-hr-management",
    heroSection: {
      title:
        "Enhance Productivity and Performance with an Engaging and Flexible HR Solution",
      subContent:
        "Epicor HR software offers a comprehensive solution that engages your people, increases productivity, and drives performance. From recruitment and onboarding to talent management tools, this integrated platform helps businesses reduce costs by digitalizing processes while effectively aligning, recruiting, onboarding, training, and measuring performance.",
      buttonText: "Demo →",
      image: ehrm,
      listItems: [
        "Automate fundamental HR processes and self-service tasks to enable HR professionals to focus on strategic initiatives that drive organizational success.",
        "Gain actionable visibility into the skills your organization needs, current talent availability, and gaps to be filled, ensuring optimal workforce capabilities.",
        "Foster workforce satisfaction and retention by empowering employees to take ownership of their careers through self-managing goals and measuring achievements.",
        "Epicor Kinetic HR Management transforms human capital strategy by streamlining operations, empowering people, and optimizing workforce performance.",
      ],
    },
    featuresSection: {
      title: "Core Capabilities That Drive HR Transformation",
      features: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-geotatah/64/external-talent-the-global-war-for-talent-outline-geotatah-2.png"
              alt="external-talent-the-global-war-for-talent-outline-geotatah-2"
            />
          ),
          name: "Talent Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/human-resources.png"
              alt="human-resources"
            />
          ),
          name: "Recruitment Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/training.png"
              alt="training"
            />
          ),
          name: "Training & Development",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/person-growth.png"
              alt="person-growth"
            />
          ),
          name: "Performance Analytics",
        },
      ],
    },
    percentageSection: {
      title: "Key Transformation Insights",
      stats: [
        {
          number: 73,
          label: "Administrative Efficiency Boost",
          description:
            "Self-service employee portals and automated workflows drastically reduce time spent on routine HR tasks, freeing up resources for strategic initiatives.",
        },
        {
          number: 49,
          label: "Talent Engagement & Growth",
          description:
            "Organizations with integrated talent management and development programs are seeing stronger employee loyalty and long-term workforce stability.",
        },
        {
          number: 62,
          label: "Accelerated Recruitment Cycles",
          description:
            "Streamlined applicant tracking and digital onboarding processes significantly shorten the time required to attract and hire top talent.",
        },
      ],
    },
    containerSection: {
      content:
        "Epicor HR Management empowers businesses to attract, develop, and retain top talent through an integrated platform that supports digital transformation and workforce alignment across all HR functions.",
    },
    benefitsSection: {
      title: "Benefits of Epicor HR Management",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/wired/64/facc15/settings-3.png"
              alt="settings-3"
            />
          ),
          title: "Process Automation",
          description:
            "Streamline repetitive HR tasks and workflows to reduce administrative burden and allow your HR team to focus on strategic priorities.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/facc15/accessibility2.png"
              alt="accessibility2"
            />
          ),
          title: "Global Accessibility",
          description:
            "Access HR functions via any browser from anywhere in the world with no terminal service licenses required, supporting remote and distributed teams.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/facc15/administrative-tools.png"
              alt="administrative-tools"
            />
          ),
          title: "Flexible Configuration",
          description:
            "Customize your HR solution, tools, and processes to align perfectly with your organizational structure and workforce management philosophy.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pastel-glyph/64/facc15/information--v1.png"
              alt="information--v1"
            />
          ),
          title: "Comprehensive Information Management",
          description:
            "Track, manage, and analyze employee information efficiently to enable informed decision-making based on accurate workforce insights.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/facc15/self-service-kiosk.png"
              alt="self-service-kiosk"
            />
          ),
          title: "Streamlined Self-Service",
          description:
            "Engage employees by simplifying and automating self-service HR processes, allowing them to complete tasks quickly at significantly lower costs.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/facc15/external-flexibility-freelance-smashingstocks-mixed-smashing-stocks.png"
              alt="external-flexibility-freelance-smashingstocks-mixed-smashing-stocks"
            />
          ),
          title: "Integration Flexibility",
          description:
            "Connect seamlessly with the payroll and benefit vendors of your choice, maintaining flexibility while ensuring data consistency.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/facc15/ledger.png"
              alt="ledger"
            />
          ),
          title: "Position Control & Budgeting",
          description:
            "Optimize workforce planning through sophisticated position management and budgeting tools that enhance resource allocation.",
        },
      ],
    },
  },
  {
    slug: "epicor-sales-management",
    heroSection: {
      title:
        "Streamline Your Sales Processes for Maximum Efficiency and Effectiveness",
      subContent:
        "Epicor Sales Management software is designed to help sales teams manage their opportunities, automate administrative tasks, and increase productivity. By using this integrated solution, businesses can focus on building lasting, profitable relationships while improving the efficiency and effectiveness of their sales team across the entire customer lifecycle.",
      buttonText: "Demo →",
      image: esm,
      listItems: [
        "Convert more prospects to customers and target high-value opportunities through streamlined sales processes and sophisticated opportunity management.",
        "Manage accounts, shipping, invoicing, and commissions efficiently while streamlining the quote-to-cash cycle to accelerate revenue recognition.",
        "Provide accurate, real-time delivery dates to customers with advanced planning capabilities and secure advanced shipping notices via EDI.",
        "Epicor Kinetic Sales Management improves visibility, enhances responsiveness, and empowers sales teams to maximize revenue outcomes.",
      ],
    },
    featuresSection: {
      title: "Core Capabilities That Drive Sales Transformation",
      features: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/estimate--v1.png"
              alt="estimate--v1"
            />
          ),
          name: "Estimate and Quote Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/purchase-order--v1.png"
              alt="purchase-order--v1"
            />
          ),
          name: "Order Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/price-tag.png"
              alt="price-tag"
            />
          ),
          name: "Configure Price Quote",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/franchise.png"
              alt="franchise"
            />
          ),
          name: "Commerce Connect",
        },
      ],
    },
    percentageSection: {
      title: "Sales Performance Indicators",
      stats: [
        {
          number: 58,
          label: "Increase in Sales Conversion Rates",
          description:
            "Significant increase in sales conversion rates for organizations implementing integrated quote-to-cash automation systems.",
        },
        {
          number: 36,
          label: "Reduction in Sales Cycle Time",
          description:
            "Streamlined opportunity management and proposal tools eliminate bottlenecks, allowing deals to move faster through the pipeline.",
        },
        {
          number: 65,
          label: "Improvement in Forecast Accuracy",
          description:
            "Companies gain greater visibility and reliability in sales projections using pipeline analytics and confidence-level tracking.",
        },
      ],
    },
    containerSection: {
      content:
        "Epicor Sales Management enables your sales team to build stronger relationships, close deals faster, and increase customer satisfaction with a unified solution for quoting, ordering, pricing, and eCommerce integration.",
    },
    benefitsSection: {
      title: "Benefits of Epicor Sales Management",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/facc15/batch-assign--v1.png"
              alt="batch-assign--v1"
            />
          ),
          title: "Enhanced Team Collaboration",
          description:
            "Improve coordination between sales teams, warehouses, shipping, and accounting departments through integrated information sharing.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/facc15/down3.png"
              alt="down3"
            />
          ),
          title: "Reduced Lead Times",
          description:
            "Enhance accuracy at the request for quotation stage and utilize Advanced EDI to optimize planning and procurement cycles.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/facc15/visible--v1.png"
              alt="visible--v1"
            />
          ),
          title: "Pipeline Visibility",
          description:
            "Track confidence levels by quote to optimize forecast accuracy and monitor competitor activities for strategic advantage.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/facc15/fast-cart.png"
              alt="fast-cart"
            />
          ),
          title: "Integrated eCommerce",
          description:
            "Provide a self-service storefront for customers to place and track orders while simplifying credit card processing and payment management.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/facc15/total-sales.png"
              alt="total-sales"
            />
          ),
          title: "Complex Sales Management",
          description:
            "Handle sophisticated and demanding sales requirements from initial opportunity through order entry to final shipment with comprehensive tools.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/facc15/tags--v1.png"
              alt="tags--v1"
            />
          ),
          title: "Strategic Pricing Intelligence",
          description:
            "Optimize product pricing strategies to increase sales volumes and margins through data-driven decision support.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/dotty/80/facc15/reseller.png"
              alt="reseller"
            />
          ),
          title: "Dealer Network Optimization",
          description:
            "Strengthen channel relationships with portal capabilities that enhance communication and streamline order processing with partners.",
        },
      ],
    },
  },
  {
    slug: "epicor-service-asset-management",
    heroSection: {
      title:
        "Streamlining Your Service Operations for Improved Efficiency and Profitability",
      subContent:
        "Epicor Service & Asset Management software is designed to help businesses manage costs effectively, deliver exceptional customer service, and stand out from the competition. The software offers a comprehensive solution for managing all aspects of customer service, from initial contact to post-sales support, ensuring high levels of after-sales services and customer satisfaction throughout the entire service lifecycle.",
      buttonText: "Demo →",
      image: esam,
      listItems: [
        "Maximize field service operations by running lean processes with comprehensive escalation management and efficient resource allocation.",
        "Gain complete insight into customer SLAs to control contractual obligations and identify potential risks or compliance issues before they impact performance.",
        "Reduce costs by maximizing the utilization of capital assets, improving predictability and productivity, and deferring additional capital expenditure.",
        "Epicor Kinetic Service & Asset Management enhances operational control, visibility, and customer satisfaction throughout the service lifecycle.",
      ],
    },
    featuresSection: {
      title: "Core Capabilities That Drive Service Transformation",
      features: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-filled/64/service.png"
              alt="service"
            />
          ),
          name: "Field Service Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/carbon-copy/64/warranty.png"
              alt="warranty"
            />
          ),
          name: "Service Contract and Warranty Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/work.png"
              alt="work"
            />
          ),
          name: "Maintenance Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-global-made-by-made/50/external-Case-legal-global-made-by-made-4.png"
              alt="external-Case-legal-global-made-by-made-4"
            />
          ),
          name: "Case Management",
        },
      ],
    },
    percentageSection: {
      title: "Service Performance Metrics",
      stats: [
        {
          number: 54,
          label: "Increase in First-Time Resolution Rates",
          description:
            "Integrated field service tools with mobile access empower technicians to resolve issues on the first visit more consistently.",
        },
        {
          number: 41,
          label: "Reduction in Service Delivery Costs",
          description:
            "Optimized scheduling, efficient routing, and preventive maintenance significantly cut down on expenses.",
        },
        {
          number: 72,
          label: "Increase in Service Contract Renewal Rates",
          description:
            "Increase in service contract renewal rates for businesses providing proactive maintenance and high visibility into service performance.",
        },
      ],
    },
    containerSection: {
      content:
        "Epicor Service & Asset Management provides the tools needed to manage your service and asset operations efficiently, improving customer engagement, extending asset lifecycles, and boosting field team productivity with mobile-enabled capabilities.",
    },
    benefitsSection: {
      title: "Benefits of Epicor Service & Asset Management",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/carbon-copy/64/facc15/money.png"
              alt="money"
            />
          ),
          title: "Improved Cash Flow",
          description:
            "Accelerate revenue recognition through faster invoicing, improved service rep-service center communication, and quicker project turnaround.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/conference-background-selected.png"
              alt="conference-background-selected"
            />
          ),
          title: "Enhanced Field Team Capabilities",
          description:
            "Empower technicians with mobile access to knowledge bases, customer service history, warranty information, and service contracts.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/online-maintenance-portal.png"
              alt="online-maintenance-portal"
            />
          ),
          title: "Preventive Maintenance Excellence",
          description:
            "Implement proactive maintenance scheduling that reduces equipment downtime and extends asset lifecycles while improving customer satisfaction.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/facc15/external-resource-digital-globalization-parzival-1997-detailed-outline-parzival-1997.png"
              alt="external-resource-digital-globalization-parzival-1997-detailed-outline-parzival-1997"
            />
          ),
          title: "Efficient Resource Planning",
          description:
            "Optimize technician scheduling and routing with tools designed to maximize productivity and minimize travel time and costs.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-glyph-geotatah/64/facc15/external-collaborative-knowledge-management-glyph-glyph-geotatah.png"
              alt="external-collaborative-knowledge-management-glyph-glyph-geotatah"
            />
          ),
          title: "Collaborative Service Delivery",
          description:
            "Leverage Epicor Kinetic Social Enterprise for improved communication across your organization to provide more value to customers.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-wichaiwi/64/facc15/external-development-business-outline-wichaiwi.png"
              alt="external-development-business-outline-wichaiwi"
            />
          ),
          title: "Return Process Optimization",
          description:
            "Streamline returned material authorization processes to enhance customer satisfaction while controlling warranty costs.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/64/facc15/service--v2.png"
              alt="service--v2"
            />
          ),
          title: "Service Intelligence",
          description:
            "Make data-driven decisions with comprehensive service analytics that highlight performance trends and improvement opportunities.",
        },
      ],
    },
  },
  {
    slug: "epicor-kinetic-crm",
    heroSection: {
      title: "Transform Your Business with a Comprehensive CRM Solution",
      subContent:
        "Streamline your business operations and boost growth by adopting Epicor Kinetic CRM software. This cloud-based solution allows you to manage the entire customer lifecycle efficiently, improving operational efficiency and accelerating growth while delivering exceptional customer experiences at every touchpoint.",
      buttonText: "Demo →",
      image: ekc,
      listItems: [
        "Maintain a 360-degree view of your customers, suppliers, and partners, empowering teams with easy access to all customer data in one centralized platform.",
        "Efficiently manage leads and opportunities for accurate sales forecasting, analyzing potential business by probability, category, and territory.",
        "Build stronger customer relationships, create targeted marketing campaigns, monitor ROI, and perform cost/benefit analysis on promotional activities.",
        "Epicor Kinetic CRM enables real-time customer intelligence and streamlined engagement from first contact to after-sales support.",
      ],
    },
    featuresSection: {
      title: "Core Capabilities That Drive CRM Transformation",
      features: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/contact-card.png"
              alt="contact-card"
            />
          ),
          name: "Contact Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/opportunity.png"
              alt="opportunity"
            />
          ),
          name: "Lead and Opportunity Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/external-case-finance-xnimrodx-lineal-xnimrodx.png"
              alt="external-case-finance-xnimrodx-lineal-xnimrodx"
            />
          ),
          name: "Case Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/speaker_1.png"
              alt="speaker_1"
            />
          ),
          name: "Marketing Management",
        },
      ],
    },
    percentageSection: {
      title: "Customer Engagement Statistics",
      stats: [
        {
          number: 64,
          label: "Increase in Customer Retention Rates",
          description:
            "Businesses using CRM systems with comprehensive lifecycle management experience a significant improvement in retaining customers.",
        },
        {
          number: 43,
          label: "Improvement in Sales Conversion Rates",
          description:
            "Streamlined lead qualification and opportunity management processes drive higher conversion rates for sales teams.",
        },
        {
          number: 39,
          label: "Reduction in Customer Service Response Times",
          description:
            "Companies leveraging case management and communication tools can address customer inquiries more swiftly and effectively.",
        },
      ],
    },
    containerSection: {
      content:
        "Epicor CRM provides businesses with a powerful and integrated platform to manage relationships, increase engagement, and enhance performance across marketing, sales, and service functions—driving long-term growth and loyalty.",
    },
    benefitsSection: {
      title: "Benefits of Epicor CRM",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/facc15/external-forecasting-data-science-and-cyber-security-flatart-icons-solid-flatarticons.png"
              alt="external-forecasting-data-science-and-cyber-security-flatart-icons-solid-flatarticons"
            />
          ),
          title: "Enhanced Responsiveness",
          description:
            "Respond to customer requests quickly and efficiently, improving operational effectiveness and strengthening relationships.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/facc15/external-forecasting-digital-marketing-smashingstocks-mixed-smashing-stocks.png"
              alt="external-forecasting-digital-marketing-smashingstocks-mixed-smashing-stocks"
            />
          ),
          title: "Forecasting Precision",
          description:
            "Analyze sales quotas and forecasts accurately at each level of the sales team to improve business planning and resource allocation.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/facc15/external-skills-business-and-management-kiranshastry-solid-kiranshastry-3.png"
              alt="external-skills-business-and-management-kiranshastry-solid-kiranshastry-3"
            />
          ),
          title: "Proactive Communication",
          description:
            "Foster responsive engagement with customers and prospects through integrated communication tools and automated workflows.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-black-m-oki-orlando/64/facc15/external-business-project-management-outline-black-m-oki-orlando-2.png"
              alt="external-business-project-management-outline-black-m-oki-orlando-2"
            />
          ),
          title: "Streamlined Processes",
          description:
            "Improve productivity by eliminating administrative tasks and creating efficient workflows that enhance customer interactions.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/omnichannel.png"
              alt="omnichannel"
            />
          ),
          title: "Multi-Channel Access",
          description:
            "Keep in touch with customers and prospects through email, phone, social media, and access the entire CRM suite from any device.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/stamp/32/facc15/cloud.png"
              alt="cloud"
            />
          ),
          title: "Cloud Integration",
          description:
            "Seamlessly connect your CRM system with Cloud for a unified user experience that leverages the strengths of both platforms.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/add-shopping-cart--v1.png"
              alt="add-shopping-cart--v1"
            />
          ),
          title: "eCommerce Enhancement",
          description:
            "Manage online customer interactions effectively with integrated Customer Connect capabilities that enhance the digital experience.",
        },
      ],
    },
  },
];

export default solutionData;
