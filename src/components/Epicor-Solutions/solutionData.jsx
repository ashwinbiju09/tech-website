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
    src="https://img.icons8.com/pastel-glyph/100/FFFFFF/intelligent-person.png"
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
              src="https://img.icons8.com/ios/100/FFFFFF/checkout.png"
              alt="checkout"
            />
          ),
          name: "Purchase Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/100/FFFFFF/move-by-trolley.png"
              alt="move-by-trolley"
            />
          ),
          name: "Inventory Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/carbon-copy/100/FFFFFF/garage-closed.png"
              alt="garage-closed"
            />
          ),
          name: "Warehouse Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/100/FFFFFF/trust--v1.png"
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
          description:
            "Average reduction in inventory costs for organizations implementing integrated supply chain management solutions, leading to significant improvements in working capital.",
        },
        {
          number: 68,
          description:
            "Increase in on-time delivery performance reported by companies with end-to-end supply chain visibility compared to those with fragmented systems.",
        },
        {
          number: 35,
          description:
            "Reduction in procurement costs achieved through supplier relationship management and automated purchasing workflows.",
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
              src="https://img.icons8.com/ios-filled/100/FFFFFF/invisible.png"
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
              src="https://img.icons8.com/pastel-glyph/100/FFFFFF/gender-neutral-user.png"
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
              src="https://img.icons8.com/wired/100/FFFFFF/decision.png"
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
              src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/100/FFFFFF/external-regulation-project-management-kmg-design-glyph-kmg-design.png"
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
              src="https://img.icons8.com/external-creatype-outline-colourcreatype/100/FFFFFF/external-edi-data-file-extension-line-creatype-outline-colourcreatype.png"
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
              src="https://img.icons8.com/material-outlined/100/FFFFFF/collaboration.png"
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
              src="https://img.icons8.com/ios-filled/100/FFFFFF/membrane.png"
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
              src="https://img.icons8.com/ios-filled/100/FFFFFF/project.png"
              alt="project"
            />
          ),
          name: "Project Generation",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/100/FFFFFF/billing.png"
              alt="billing"
            />
          ),
          name: "Project Billing",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-wanicon-lineal-wanicon/100/FFFFFF/external-resource-business-model-canvas-wanicon-lineal-wanicon.png"
              alt="external-resource-business-model-canvas-wanicon-lineal-wanicon"
            />
          ),
          name: "Resource Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/100/FFFFFF/signing-a-document.png"
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
          description:
            "Project success rate for organizations with standardized project management practices, compared to just 34% in organizations without standardized processes.",
        },
        {
          number: 28,
          description:
            "Average reduction in project costs through improved resource allocation and reduced workflow inefficiencies with effective project management solutions.",
        },
        {
          number: 77,
          description:
            "Higher stakeholder satisfaction rates reported by companies using integrated project management software compared to those using disconnected systems.",
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
              src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/100/FFFFFF/external-visibility-internet-marketing-kmg-design-glyph-kmg-design.png"
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
              src="https://img.icons8.com/ios-filled/100/FFFFFF/idea-sharing.png"
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
              src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/100/FFFFFF/external-workforce-data-analytics-smashingstocks-hand-drawn-black-smashing-stocks.png"
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
              src="https://img.icons8.com/external-glyph-geotatah/100/FFFFFF/external-collaborative-knowledge-management-glyph-glyph-geotatah.png"
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
              src="https://img.icons8.com/pulsar-line/100/FFFFFF/Profitability.png"
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
              src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/100/FFFFFF/external-Decision-Making-business-startup-2-kmg-design-glyph-kmg-design.png"
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
              src="https://img.icons8.com/ios/100/FFFFFF/administrative-tools.png"
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
              src="https://img.icons8.com/ios-filled/100/FFFFFF/online-support.png"
              alt="online-support"
            />
          ),
          name: "Multi-Mode Manufacturing Support",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/100/FFFFFF/online-support.png"
              alt="online-support"
            />
          ),
          name: "Advanced Scheduling and Tracking",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/100/FFFFFF/online-support.png"
              alt="online-support"
            />
          ),
          name: "Quality Management System",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/100/FFFFFF/online-support.png"
              alt="online-support"
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
          description:
            "Improvement in on-time delivery rates for manufacturers implementing integrated production management systems with real-time scheduling capabilities.",
        },
        {
          number: 47,
          description:
            "Average reduction in production waste reported by companies adopting lean manufacturing technologies and processes.",
        },
        {
          number: 31,
          description:
            "Increase in manufacturing throughput achieved through optimized scheduling and advanced production tracking systems.",
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
              src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/100/FFFFFF/external-agility-digital-transformation-parzival-1997-detailed-outline-parzival-1997.png"
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
              src="https://img.icons8.com/external-outline-wichaiwi/100/FFFFFF/external-operational-business-risks-outline-wichaiwi.png"
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
              src="https://img.icons8.com/ios/100/FFFFFF/connected-people.png"
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
              src="https://img.icons8.com/ios/100/FFFFFF/connected-people.png"
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
              src="https://img.icons8.com/external-icons-smashing-stocks/100/FFFFFF/external-Precision-military-icon-icons-smashing-stocks-2.png"
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
              src="https://img.icons8.com/material-rounded/100/FFFFFF/3-wheel-scooter.png"
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
              src="https://img.icons8.com/ios-filled/100/FFFFFF/lifecycle--v1.png"
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
              src="https://img.icons8.com/ios-filled/50/FFFFFF/accounting.png"
              alt="accounting"
            />
          ),
          name: "Comprehensive Accounting Applications",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/FFFFFF/external-Global-Business-business-startup-2-kmg-design-detailed-outline-kmg-design.png"
              alt="external-Global-Business-business-startup-2-kmg-design-detailed-outline-kmg-design"
            />
          ),
          name: "Global Business Support",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/check-dollar.png"
              alt="check-dollar"
            />
          ),
          name: "Financial Planning and Analysis",
        },
        {
          icon: (
            <img
              className="h=8 w=8"
              src="https://img.icons8.com/ios/50/FFFFFF/investment.png"
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
          description:
            "Average reduction in month-end close time for organizations implementing integrated financial management systems with automated workflows.",
        },
        {
          number: 57,
          description:
            "Improvement in cash flow management reported by companies utilizing advanced financial analytics and forecasting capabilities.",
        },
        {
          number: 38,
          description:
            "Decrease in compliance-related costs through streamlined reporting and automated regulatory controls.",
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
              src="https://img.icons8.com/ios-filled/50/FFFFFF/credit-control.png"
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
              src="https://img.icons8.com/sf-black-filled/64/FFFFFF/money.png"
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
              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/FFFFFF/external-businessmen-business-and-management-kiranshastry-solid-kiranshastry-2.png"
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
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/FFFFFF/external-business-intelligence-information-systems-solid-solidglyph-m-oki-orlando.png"
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
              src="https://img.icons8.com/external-outline-juicy-fish/60/FFFFFF/external-decision-crisis-management-outline-outline-juicy-fish.png"
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
              src="https://img.icons8.com/dotty/80/FFFFFF/administrative-tools.png"
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
              src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/FFFFFF/external-operation-digital-transformation-parzival-1997-detailed-outline-parzival-1997.png"
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
              src="https://img.icons8.com/ios-filled/50/FFFFFF/creativity.png"
              alt="creativity"
            />
          ),
          name: "Smart Demand Planning",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/material-outlined/24/FFFFFF/membrane.png"
              alt="membrane"
            />
          ),
          name: "Material Requirements Planning",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/planning-skill.png"
              alt="planning-skill"
            />
          ),
          name: "Advanced Planning and Scheduling",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-black-m-oki-orlando/32/FFFFFF/external-resource-project-management-outline-black-m-oki-orlando-2.png"
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
          description:
            "Average improvement in resource utilization reported by manufacturers implementing advanced planning and scheduling solutions.",
        },
        {
          number: 44,
          description:
            "Reduction in production lead times achieved through constraint-based scheduling and material requirements planning.",
        },
        {
          number: 67,
          description:
            "Increase in on-time delivery performance when using integrated demand planning and production scheduling systems.",
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
              src="https://img.icons8.com/ios-filled/50/FFFFFF/decision-making.png"
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
              src="https://img.icons8.com/ios-filled/50/FFFFFF/overtime.png"
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
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/supply-chain.png"
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
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/FFFFFF/external-resource-talent-management-flatart-icons-outline-flatarticons.png"
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
              src="https://img.icons8.com/ios-filled/50/FFFFFF/project.png"
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
              src="https://img.icons8.com/external-outline-geotatah/64/FFFFFF/external-coordination-emergency-and-disaster-management-outline-geotatah.png"
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
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/timeline-week.png"
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
              src="https://img.icons8.com/external-outline-geotatah/64/FFFFFF/external-talent-the-global-war-for-talent-outline-geotatah-2.png"
              alt="external-talent-the-global-war-for-talent-outline-geotatah-2"
            />
          ),
          name: "Talent Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/human-resources.png"
              alt="human-resources"
            />
          ),
          name: "Recruitment Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/training.png"
              alt="training"
            />
          ),
          name: "Training & Development",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/FFFFFF/person-growth.png"
              alt="person-growth"
            />
          ),
          name: "Performance Analytics",
        },
      ],
    },
    percentageSection: {
      title: "Workforce Transformation Data",
      stats: [
        {
          number: 73,
          description:
            "Average time savings on administrative HR tasks for companies implementing self-service employee portals and automated workflows.",
        },
        {
          number: 49,
          description:
            "Improvement in employee retention rates reported by organizations with integrated talent management and development programs.",
        },
        {
          number: 62,
          description:
            "Reduction in recruitment cycle time achieved through streamlined applicant tracking and digital onboarding processes.",
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
              src="https://img.icons8.com/wired/64/FFFFFF/settings-3.png"
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
              src="https://img.icons8.com/ios-filled/50/FFFFFF/accessibility2.png"
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
              src="https://img.icons8.com/ios/50/FFFFFF/administrative-tools.png"
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
              src="https://img.icons8.com/pastel-glyph/64/FFFFFF/information--v1.png"
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
              src="https://img.icons8.com/ios-filled/50/FFFFFF/self-service-kiosk.png"
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
              src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/FFFFFF/external-flexibility-freelance-smashingstocks-mixed-smashing-stocks.png"
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
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/ledger.png"
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
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/estimate--v1.png"
              alt="estimate--v1"
            />
          ),
          name: "Estimate and Quote Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/purchase-order--v1.png"
              alt="purchase-order--v1"
            />
          ),
          name: "Order Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/price-tag.png"
              alt="price-tag"
            />
          ),
          name: "Configure Price Quote",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/franchise.png"
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
          description:
            "Average increase in sales conversion rates for organizations implementing integrated quote-to-cash automation systems.",
        },
        {
          number: 36,
          description:
            "Reduction in sales cycle time achieved through streamlined opportunity management and proposal generation processes.",
        },
        {
          number: 65,
          description:
            "Improvement in forecast accuracy reported by companies utilizing pipeline analytics and confidence-level tracking tools.",
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
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/batch-assign--v1.png"
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
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/down3.png"
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
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/visible--v1.png"
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
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/fast-cart.png"
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
              src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/total-sales.png"
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
              src="https://img.icons8.com/ios/50/FFFFFF/tags--v1.png"
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
              src="https://img.icons8.com/dotty/80/FFFFFF/reseller.png"
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
              width="8"
              height="8"
              src="https://img.icons8.com/fluency-systems-filled/100/FFFFFF/service.png"
              alt="service"
            />
          ),
          name: "Field Service Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/carbon-copy/100/FFFFFF/warranty.png"
              alt="warranty"
            />
          ),
          name: "Service Contract and Warranty Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/work.png"
              alt="work"
            />
          ),
          name: "Maintenance Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-global-made-by-made/50/FFFFFF/external-Case-legal-global-made-by-made-4.png"
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
          description:
            "Average improvement in first-time fix rates for organizations implementing integrated field service management solutions with mobile access.",
        },
        {
          number: 41,
          description:
            "Reduction in service delivery costs through optimized scheduling, routing, and preventive maintenance programs.",
        },
        {
          number: 72,
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
              src="https://img.icons8.com/carbon-copy/100/FFFFFF/money.png"
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
              src="https://img.icons8.com/ios/100/FFFFFF/conference-background-selected.png"
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
              src="https://img.icons8.com/ios-filled/100/FFFFFF/online-maintenance-portal.png"
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
              src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/100/FFFFFF/external-resource-digital-globalization-parzival-1997-detailed-outline-parzival-1997.png"
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
              src="https://img.icons8.com/external-glyph-geotatah/100/FFFFFF/external-collaborative-knowledge-management-glyph-glyph-geotatah.png"
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
              src="https://img.icons8.com/external-outline-wichaiwi/100/FFFFFF/external-development-business-outline-wichaiwi.png"
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
              src="https://img.icons8.com/ios-glyphs/100/FFFFFF/service--v2.png"
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
              src="https://img.icons8.com/ios-filled/100/FFFFFF/contact-card.png"
              alt="contact-card"
            />
          ),
          name: "Contact Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/100/FFFFFF/opportunity.png"
              alt="opportunity"
            />
          ),
          name: "Lead and Opportunity Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/100/FFFFFF/external-case-finance-xnimrodx-lineal-xnimrodx.png"
              alt="external-case-finance-xnimrodx-lineal-xnimrodx"
            />
          ),
          name: "Case Management",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/100/FFFFFF/speaker_1.png"
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
          description:
            "Average increase in customer retention rates for businesses implementing integrated CRM solutions with complete customer lifecycle management.",
        },
        {
          number: 43,
          description:
            "Improvement in sales conversion rates achieved through enhanced lead qualification and opportunity management processes.",
        },
        {
          number: 39,
          description:
            "Reduction in customer service response times reported by companies utilizing integrated case management and communication tools.",
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
              src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/100/FFFFFF/external-forecasting-data-science-and-cyber-security-flatart-icons-solid-flatarticons.png"
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
              src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/100/FFFFFF/external-forecasting-data-science-and-cyber-security-flatart-icons-solid-flatarticons.png"
              alt="external-forecasting-data-science-and-cyber-security-flatart-icons-solid-flatarticons"
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
              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/100/FFFFFF/external-skills-business-and-management-kiranshastry-solid-kiranshastry-3.png"
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
              src="https://img.icons8.com/external-outline-black-m-oki-orlando/100/FFFFFF/external-business-project-management-outline-black-m-oki-orlando-2.png"
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
              src="https://img.icons8.com/ios/100/FFFFFF/omnichannel.png"
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
              src="https://img.icons8.com/ios/100/FFFFFF/add-shopping-cart--v1.png"
              alt="add-shopping-cart--v1"
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
              src="https://img.icons8.com/ios/100/FFFFFF/add-shopping-cart--v1.png"
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
