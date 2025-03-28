import bcs from "../../assets/Services/Business/online-news.jpg";
import pcs from "../../assets/Services/Process/hero.jpg";
import tsc from "../../assets/Services/Technology/hero.jpg";
import sms from "../../assets/Services/Managed/hero.jpg";
import ams from "../../assets/Services/AMS/hero.jpg";
import shms from "../../assets/Services/Migration/hero.jpg";
import sdes from "../../assets/Services/Discovery/hero.jpg";
import sirs from "../../assets/Services/Implementation/hero.jpg";
import sus from "../../assets/Services/Upgrade/hero.jpg";

const featureIcon = (
  <img
    className="h-8 w-8"
    src="https://img.icons8.com/pastel-glyph/100/FFFFFF/intelligent-person.png"
    alt="intelligent-person"
  />
);

const servicesData = [
  {
    slug: "business-consulting-services",
    heroSection: {
      title: "Business Consulting Services",
      subContent:
        "Implement a profound strategy to envision, inspire and transform your business goals.",
      image: bcs,
    },
    overviewSection: {
      title: "What Our Business Consulting Services Can Do for You",
      description:
        "Our business consulting services are designed to help you adapt to change, drive operational efficiency, and grow with confidence. We work closely with your team to simplify workflows, manage risks, and implement practical solutions. Whether you're facing internal challenges or market shifts, our consultants bring clarity and strategic direction. Every solution we offer is tailored to your goals, size, and industry.",
    },
    offeringsSection: {
      departments: [
        {
          title: "Strategy & Planning",
          content:
            "We help define clear business goals and create actionable roadmaps to reach them. Our consultants align strategy with market demands and long-term growth. We identify opportunities for innovation and competitive advantage. Your vision is backed by practical steps and measurable outcomes.",
          features: [],
        },
        {
          title: "Digital Transformation",
          content:
            "We guide the adoption of new technologies to modernize operations. From legacy systems to cloud platforms, we manage seamless transitions. Our approach ensures your tools support agility and decision-making. Stay relevant in a digital-first business landscape.",
          features: [],
        },
        {
          title: "Process Optimization",
          content:
            "We analyze current workflows to identify inefficiencies and redundancies. Processes are restructured for speed, accuracy, and scalability. Automation is introduced where it adds measurable value. The result is leaner operations with better output.",
          features: [],
        },
        {
          title: "Operational Efficiency",
          content:
            "We assess performance across teams, systems, and workflows. Our solutions reduce costs, increase productivity, and enhance quality. We prioritize sustainable improvements over short-term fixes. Efficiency becomes a core part of your business culture.",
          features: [],
        },
        {
          title: "Workforce Management",
          content:
            "We support hiring, onboarding, and long-term talent development. Our solutions help align workforce capabilities with business needs. We use analytics to identify skill gaps and growth areas. Stronger teams lead to better performance and retention.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights That Matter",
      stats: [
        {
          number: 72,
          label: "Accelerated Digital Initiatives",
          content:
            "72% of executives believe business consulting accelerates digital initiatives",
        },
        {
          number: 65,
          label: "Improved ROI",
          content:
            "65% of businesses report improved ROI within 12 months of engaging consultants",
        },
        {
          number: 58,
          label: "Better Decision-Making",
          content:
            "58% say external consultants helped improve operational decision-making",
        },
      ],
    },
    containerSection: {
      description:
        "We ensure your business applications are aligned with both your operational needs and strategic goals. Our experts assess, refine, and integrate tools that support long-term growth. This results in improved system performance and smarter resource planning. Every application works together to drive efficiency and business value.",
    },
    benefitSection: {
      title: "Key Benefits of Business Consulting Services",
      description:
        "Maximize business potential through expert strategy, efficient operations, and technology-driven transformation.",
      benefits: [
        {
          icon: (
            <img
              className="h-10 w-10"
              src="https://img.icons8.com/windows/100/FFFFFF/strategy-board.png"
              alt="strategy-board"
            />
          ),
          title: "Strategic Clarity",
          description:
            "Gain a clear vision and actionable roadmap tailored to your goals, ensuring every decision aligns with long-term success.",
        },
        {
          icon: (
            <img
              className="h-10 w-10"
              src="https://img.icons8.com/windows/100/FFFFFF/performance-smartphone.png"
              alt="performance-smartphone"
            />
          ),
          title: "Operational Efficiency",
          description:
            "Streamline workflows and reduce costs by identifying inefficiencies and implementing sustainable improvements.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/decentralized-network.png"
              alt="decentralized-network"
            />
          ),
          title: "Digital Enablement",
          description:
            "Transition smoothly to modern platforms and tools that boost agility, support data-driven decisions, and enhance performance.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/positive-dynamic.png"
              alt="positive-dynamic"
            />
          ),
          title: "Scalable Growth",
          description:
            "Leverage expert insights and outsourcing solutions to scale your operations efficiently without compromising quality.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/8/FFFFFF/external-roi-digital-marketing-outline-solidglyph-m-oki-orlando.png"
              alt="external-roi-digital-marketing-outline-solidglyph-m-oki-orlando"
            />
          ),
          title: "Improved ROI",
          description:
            "Implement strategies that lead to measurable results, including better returns, faster delivery, and smarter resource planning.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/8/FFFFFF/external-Organic-Company-Structure-company-structure-glyph-silhouettes-icons-papa-vector.png"
              alt="external-Organic-Company-Structure-company-structure-glyph-silhouettes-icons-papa-vector"
            />
          ),
          title: "Empowered Workforce",
          description:
            "Align talent development with business goals using data-backed workforce planning and performance strategies.",
        },
      ],
    },
    expertiseSection: {
      items: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/8/FFFFFF/external-productivity-work-from-home-tulpahn-detailed-outline-tulpahn.png"
              alt="external-productivity-work-from-home-tulpahn-detailed-outline-tulpahn"
            />
          ),
          title: "Productivity Improvement",
          description:
            "We identify areas where processes can be redesigned for better output. Through smart adjustments and targeted improvements, productivity rises naturally. Our methods focus on eliminating waste and increasing flow across teams. The outcome: faster delivery, higher quality, and stronger performance.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/external-ddara-lineal-ddara/8/FFFFFF/external-outsourcing-business-management-ddara-lineal-ddara-2.png"
              alt="external-outsourcing-business-management-ddara-lineal-ddara-2"
            />
          ),
          title: "Effective Outsourcing",
          description:
            "We help you access the infrastructure and expertise needed to scale efficiently. Outsourcing non-core tasks frees up internal resources for strategic priorities. Our approach ensures continuity, quality, and cost-effectiveness. You get the tools and talent to grow — without the overhead.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios/8/FFFFFF/lunacy-new--v2.png"
              alt="lunacy-new--v2"
            />
          ),
          title: "Application Optimization",
          description:
            "We ensure your business applications are aligned with both your operational needs and strategic goals. Our experts assess, refine, and integrate tools that support long-term growth. This results in improved system performance and smarter resource planning. Every application works together to drive efficiency and business value.",
        },
      ],
    },
  },
  {
    slug: "process-consulting-services",
    heroSection: {
      title: "Process Consulting Services",
      subContent:
        "Bring clarity, structure, and scalability to your operations through streamlined and digitized processes.",
      image: pcs,
    },
    overviewSection: {
      title: "What Our Process Consulting Services Can Do for You",
      description:
        "Managing complex, multi-layered processes can be overwhelming for any organization. Our process consulting services are designed to bring structure, clarity, and efficiency to your workflows. We help document, optimize, and digitize your business processes to ensure they align with strategic goals. With a focus on value, we enable continuous improvement across your entire operational landscape.",
    },
    offeringsSection: {
      departments: [
        {
          title: "End-to-End Analysis",
          content:
            "We conduct a detailed evaluation of your workflows from start to finish. Our insights reveal gaps, redundancies, and process dependencies. We document each step and its impact on key stakeholders. This foundation supports better decision-making and smoother execution.",
          features: [],
        },
        {
          title: "Process Optimization",
          content:
            "Our team identifies inefficiencies and eliminates non-value-adding steps. We align process goals with broader organizational strategies. Through simplification and redesign, we improve cycle times and quality. The result is faster, leaner, and more reliable operations.",
          features: [],
        },
        {
          title: "Process Digitalization",
          content:
            "We help shift manual, paper-based workflows to automated digital systems. Centralized data and tools enhance visibility and collaboration. We ensure all digital upgrades are scalable and system-compatible. Digital transformation becomes a practical, phased journey.",
          features: [],
        },
        {
          title: "Agile Transformation",
          content:
            "We implement Agile frameworks to improve adaptability and speed. Your teams learn to collaborate, iterate, and deliver faster. Workshops and coaching ensure adoption of Agile best practices. Agility becomes embedded in your work culture and mindset.",
          features: [],
        },
        {
          title: "IT Service Management (ITSM)",
          content:
            "We streamline and automate IT services using modern methodologies. From service catalogs to change management, every process is refined. We support traditional, agile, or hybrid service models. Continuous evaluation keeps your IT services high-performing and aligned.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights That Matter",
      stats: [
        {
          number: 70,
          label: "Efficiency Improvement",
          content:
            "70% of organizations implementing process consulting report improved efficiency within six months",
        },
        {
          number: 55,
          label: "Cost Savings",
          content: "55% experience measurable cost savings post-optimization",
        },
        {
          number: 63,
          label: "Faster Collaboration",
          content:
            "63% see better internal collaboration and faster decision-making after digitalizing workflows",
        },
      ],
    },
    containerSection: {
      description:
        "We help redefine your business strategies by evaluating processes for maximum value and minimum risk. Our approach balances long-term outcomes with immediate performance gains. We prioritize improvements that deliver tangible ROI. The result is smarter, more effective business execution.",
    },
    benefitSection: {
      title: "Key Benefits of Process Consulting Services",
      description:
        "Redesign and digitize processes to boost clarity, reduce inefficiencies, and drive strategic outcomes across your organization.",
      benefits: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/fluency-systems-regular/8/FFFFFF/visible--v1.png"
              alt="visible--v1"
            />
          ),
          title: "End-to-End Process Visibility",
          description:
            "Gain detailed insights into workflows, gaps, and dependencies to support better decisions and execution.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/fluency-systems-regular/8/FFFFFF/system-task.png"
              alt="system-task"
            />
          ),
          title: "Lean & Scalable Operations",
          description:
            "Remove inefficiencies and align processes with strategic goals to achieve faster, more reliable business outcomes.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/fluency-systems-regular/8/FFFFFF/services--v1.png"
              alt="services--v1"
            />
          ),
          title: "Digital Process Transformation",
          description:
            "Convert manual processes into digital workflows for improved speed, visibility, and collaboration across teams.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/fluency-systems-regular/8/FFFFFF/agree-.png"
              alt="agree-"
            />
          ),
          title: "Agile Business Frameworks",
          description:
            "Adopt agile methods to increase adaptability, responsiveness, and delivery speed across changing business needs.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios/8/FFFFFF/computer-support.png"
              alt="computer-support"
            />
          ),
          title: "Stronger IT Service Management",
          description:
            "Refine ITSM processes for higher service quality, streamlined change management, and consistent IT performance.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios-glyphs/8/FFFFFF/customer-support.png"
              alt="customer-support"
            />
          ),
          title: "Governance & Long-Term Support",
          description:
            "Implement scalable governance models with continuous monitoring, compliance, and managed service partnerships.",
        },
      ],
    },
    expertiseSection: {
      items: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios-glyphs/8/FFFFFF/software-box.png"
              alt="software-box"
            />
          ),
          title: "Software Analysis",
          description:
            "We guide the integration of Business Process Management (BPM) tools tailored to your needs. Our team ensures alignment between software capabilities and process goals. We evaluate platforms for usability, scalability, and impact. You get the right technology to support continuous process evolution.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/external-outline-geotatah/8/FFFFFF/external-implementation-new-product-development-npd-outline-geotatah.png"
              alt="external-implementation-new-product-development-npd-outline-geotatah"
            />
          ),
          title: "Implementation & Support",
          description:
            "Our experts roll out solutions through phased, agile implementation methods. We ensure business continuity while integrating new process frameworks. Support is available across all functions and lifecycle stages. Your teams get consistent value from day one to long term.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/material-rounded/8/FFFFFF/process.png"
              alt="process"
            />
          ),
          title: "Process Governance",
          description:
            "We establish frameworks to standardize, monitor, and improve your processes. Best practices and compliance standards are embedded in daily operations. Clear roles, policies, and metrics support transparency and control. Governance becomes a strategic enabler, not just oversight.",
        },
      ],
    },
  },
  {
    slug: "technology-consulting-services",
    heroSection: {
      title: "Technology Consulting Services",
      subContent:
        "Innovate, automate, and transform through future-ready digital solutions that align with your business goals.",
      image: tsc,
    },
    overviewSection: {
      title: "What Our Technology Consulting Services Can Do for You",
      description:
        "In a rapidly evolving digital landscape, aligning technology with your business strategy is more critical than ever. Our technology consulting services are designed to help organizations innovate, automate, and transform through future-ready solutions. From data and AI to blockchain and automation, we guide you through every stage — from planning to execution and long-term support. Our approach keeps you adaptive, secure, and ahead of the curve.",
    },
    offeringsSection: {
      departments: [
        {
          title: "Data & Analytics",
          content:
            "We unlock the full value of your data by building intelligent, insight-driven systems. Our solutions combine structured and unstructured data for a 360° business view. Advanced analytics and real-time dashboards support faster, smarter decisions. You gain improved visibility, predictive capabilities, and data-driven outcomes.",
          features: [],
        },
        {
          title: "Automation",
          content:
            "We design automation strategies that reduce manual workload and increase speed. Combining AI, RPA, and ML, we help you modernize repetitive business processes. Automation is applied to IT tasks, workflows, and back-office operations. This leads to lower costs, fewer errors, and scalable growth.",
          features: [],
        },
        {
          title: "Artificial Intelligence",
          content:
            "We help implement enterprise-grade AI solutions that deliver real business impact. From intelligent decision-making to predictive modeling, we build scalable systems. AI is integrated into workflows to drive efficiency and automation. We guide you through strategy, development, adoption, and scaling.",
          features: [],
        },
        {
          title: "Blockchain",
          content:
            "We consult on blockchain use cases that enhance transparency and agility. Our solutions include smart contracts, secure transactions, and hybrid frameworks. Blockchain is applied to finance, supply chains, and compliance functions. We enable trusted, decentralized systems tailored to your industry.",
          features: [],
        },
        {
          title: "Digital Transformation",
          content:
            "We help align technology upgrades with long-term business strategy. Cloud, AI, and automation are used to optimize core processes. We assess your digital maturity and define a phased transformation plan. The result: smarter operations, better experiences, and business agility.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights That Matter",
      stats: [
        {
          number: 91,
          label: "Pursuing Digital Transformation",
          content:
            "91% of businesses are actively pursuing digital transformation initiatives.",
        },
        {
          number: 67,
          label: "CEO Tech Focus",
          content:
            "67% of CEOs view technology as the primary driver of competitive advantage.",
        },
        {
          number: 88,
          label: "Customer Experience Gains",
          content:
            "88% of organizations improved customer experience through AI and automation.",
        },
      ],
    },
    containerSection: {
      description:
        "We design scalable and resilient IT frameworks that support long-term growth. Our architecture services ensure adaptability, performance, and alignment with business goals. We help future-proof your systems against evolving demands. Efficiency and agility are built into every layer of your tech stack.",
    },
    benefitSection: {
      title: "Key Benefits of Process Consulting Services",
      description:
        "Unlock operational excellence with optimized workflows, digital transformation, and agile methodologies.",
      benefits: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/wired/8/FFFFFF/workflow.png"
              alt="workflow"
            />
          ),
          title: "Streamlined Workflows",
          description:
            "Identify redundancies and inefficiencies to create lean, efficient processes that boost productivity and speed.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/pastel-glyph/8/FFFFFF/network-care.png"
              alt="network-care"
            />
          ),
          title: "Digital Transformation",
          description:
            "Shift from manual to automated workflows for better visibility, scalability, and real-time collaboration.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/8/FFFFFF/external-agile-web-design-and-development-flatart-icons-solid-flatarticons.png"
              alt="external-agile-web-design-and-development-flatart-icons-solid-flatarticons"
            />
          ),
          title: "Agile Operations",
          description:
            "Introduce agile practices that enhance adaptability, speed up delivery, and empower cross-functional teams.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios/8/FFFFFF/decision-making.png"
              alt="decision-making"
            />
          ),
          title: "Data-Driven Decisions",
          description:
            "End-to-end process visibility supports smarter decision-making and continuous process improvement.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/wired/8/FFFFFF/cost.png"
              alt="cost"
            />
          ),
          title: "Cost Optimization",
          description:
            "Improve efficiency and eliminate non-value-adding activities to reduce operational costs effectively.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios/8/FFFFFF/cyber-security.png"
              alt="cyber-security"
            />
          ),
          title: "IT Service Excellence",
          description:
            "Modernize IT operations through ITSM best practices, ensuring reliable and aligned service delivery across teams.",
        },
      ],
    },
    expertiseSection: {
      items: [
        {
          icon: featureIcon,
          title: "Value Analysis",
          description:
            "We assess the performance and ROI of your existing tech landscape. Our consultants identify areas for improvement across tools, systems, and investments. Value is maximized through cost optimization and capability alignment. You gain clarity on what’s working, what’s not, and what to evolve.",
        },
        {
          icon: featureIcon,
          title: "Asset Management",
          description:
            "We ensure IT assets are tracked, optimized, and aligned with your business strategy. From procurement to retirement, assets are managed for cost-efficiency and compliance. We support licensing, utilization, and governance across your tech estate. Control and visibility reduce risk and unnecessary spend.",
        },
        {
          icon: featureIcon,
          title: "Product Selection",
          description:
            "We help choose the right technologies for scalability, performance, and ROI. Products are evaluated for security, integration, and long-term value. Our approach minimizes risk and ensures faster implementation cycles. Every tool is selected with future-readiness in mind.",
        },
        {
          icon: featureIcon,
          title: "Data Privacy & Security",
          description:
            "We build security strategies to protect data from cyber threats and breaches. Our services ensure compliance with global privacy standards and regulations. Security is embedded into infrastructure, applications, and access protocols. You gain peace of mind with end-to-end protection and risk mitigation.",
        },
      ],
    },
  },
  {
    slug: "sap-managed-services",
    heroSection: {
      title: "SAP Managed Services",
      subContent:
        "Stabilize operations, reduce complexity, and maximize value from your SAP investments with proactive and strategic support.",
      image: sms,
    },
    overviewSection: {
      title: "What Our SAP Managed Services Can Do for You",
      description:
        "In today’s digital-first world, maximizing your SAP environment requires more than basic support — it demands strategic management, automation, and real-time oversight. Our SAP Managed Services help you stabilize operations, reduce complexity, and unlock long-term value from your SAP investments. From infrastructure and performance to compliance and business continuity, we cover every layer with a proactive and scalable approach.",
    },
    offeringsSection: {
      departments: [
        {
          title: "Infrastructure & Migration Management",
          content:
            "We oversee SAP environments across cloud, on-premises, and hybrid setups. Our experts ensure smooth migrations with zero business disruption. Infrastructure is continuously optimized for speed, scalability, and uptime. We help build a reliable foundation for innovation and growth.",
          features: [],
        },
        {
          title: "Performance Monitoring & Auditing",
          content:
            "We implement round-the-clock monitoring with intelligent alert systems. Proactive audits identify bottlenecks and prevent unplanned downtime. Security vulnerabilities and compliance gaps are flagged in real time. You stay ahead of issues before they impact business performance.",
          features: [],
        },
        {
          title: "Service Management & Quality Assurance",
          content:
            "We take full responsibility for SAP updates, patches, and incident resolution. Automation is used for system health checks and quality control. System configurations are aligned with evolving business needs. Our goal is consistent, high-quality SAP performance across all functions.",
          features: [],
        },
        {
          title: "Downtime & Continuity Management",
          content:
            "Our managed disaster recovery and backup services ensure resilience. Planned updates and patches are executed with minimal disruption. We refine processes continually to meet uptime goals and SLAs. Business continuity remains uncompromised, even during transitions.",
          features: [],
        },
        {
          title: "SAP Implementation & Lifecycle Support",
          content:
            "We support both new implementations and existing system enhancements. Certified experts manage deployment, testing, and long-term optimization. Post-implementation, we provide rapid issue resolution and system tuning. Your SAP environment evolves alongside your business.",
          features: [],
        },
        {
          title: "Security & Compliance Management",
          content:
            "Our SAP security model covers access control, governance, and threat response. Security Operations Centers (SOCs) ensure 24/7 protection and monitoring. We ensure compliance with industry, geographic, and audit-specific standards. Risk is minimized while data integrity and access remain secure.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights That Matter",
      stats: [
        {
          number: 64,
          label: "Reduced Downtime",
          content:
            "64% of organizations saw a significant reduction in SAP downtime after adopting managed services",
        },
        {
          number: 58,
          label: "Cost Savings",
          content:
            "58% achieved cost savings through managed SAP operations, including infrastructure and license optimization",
        },
        {
          number: 72,
          label: "Improved Security & Compliance",
          content:
            "72% reported stronger data security and compliance readiness with SAP managed service providers",
        },
      ],
    },
    containerSection: {
      description:
        "We manage cloud-based SAP infrastructure for higher flexibility and performance. Our services ensure cost-effective scaling to meet dynamic business demands. Ongoing monitoring and updates keep systems agile and secure. We help reduce hardware overhead and increase operational speed.",
    },
    benefitSection: {
      title: "Key Benefits of SAP Managed Services",
      description:
        "Maximize performance, security, and scalability with proactive SAP managed services tailored to business continuity and innovation.",
      benefits: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/8/FFFFFF/external-availability-database-solid-solidglyph-m-oki-orlando.png"
              alt="external-availability-database-solid-solidglyph-m-oki-orlando"
            />
          ),
          title: "High Availability & Uptime",
          description:
            "Round-the-clock monitoring, auditing, and issue resolution ensure stable SAP performance with minimal unplanned downtime.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios-filled/8/FFFFFF/cost.png"
              alt="cost"
            />
          ),
          title: "Cost Optimization",
          description:
            "Optimize infrastructure and licensing to reduce operational expenses while enhancing long-term SAP value.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/fluency-systems-regular/8/FFFFFF/fingerprint-scan.png"
              alt="fingerprint-scan"
            />
          ),
          title: "Enhanced Security & Compliance",
          description:
            "24/7 SOC support, access controls, and governance keep systems secure and fully compliant with industry standards.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/fluency-systems-regular/8/FFFFFF/project-management.png"
              alt="project-management"
            />
          ),
          title: "Scalable Infrastructure Management",
          description:
            "Support for hybrid, cloud, or on-prem SAP systems ensures flexible and future-ready infrastructure with continuous optimization.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/conference.png"
              alt="conference"
            />
          ),
          title: "Business Continuity",
          description:
            "Disaster recovery, backup automation, and SLA-driven uptime strategies maintain uninterrupted business operations.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/lifecycle--v1.png"
              alt="lifecycle--v1"
            />
          ),
          title: "Expert Lifecycle Support",
          description:
            "Certified professionals guide implementation, performance tuning, and evolution of SAP systems to match business growth.",
        },
      ],
    },
    expertiseSection: {
      items: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios/8/FFFFFF/ookla-speedtest.png"
              alt="ookla-speedtest"
            />
          ),
          title: "SAP Performance Optimization",
          description:
            "We identify inefficiencies across your SAP landscape and fine-tune performance. This includes application tuning, load balancing, and resource optimization. Regular assessments ensure the system performs under all business conditions. Your SAP environment becomes faster, leaner, and more responsive.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/pastel-glyph/8/FFFFFF/cloud-development--v4.png"
              alt="cloud-development--v4"
            />
          ),
          title: "SAP Cloud Managed Services",
          description:
            "From configuration to continuous management, we take care of your SAP cloud. Services include backups, compliance, performance tracking, and system upgrades. You benefit from end-to-end visibility and reliable support at every stage. Our cloud experts ensure you stay current, compliant, and fully supported.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios/8/FFFFFF/service--v1.png"
              alt="service--v1"
            />
          ),
          title: "Benefits of SAP Managed Services",
          description:
            "Increased uptime, reduced costs, stronger security, and expert-led continuity planning are just a few advantages. We deliver scalable innovation and long-term value through strategic management of your SAP systems.",
        },
      ],
    },
  },
  {
    slug: "application-management-services",
    heroSection: {
      title: "SAP Application Management Services (AMS)",
      subContent:
        "Optimize performance, reduce operational costs, and drive agility across your SAP landscape with expert AMS support.",
      image: ams,
    },
    overviewSection: {
      title: "What Our SAP AMS Services Can Do for You",
      description:
        "As businesses grow in complexity, managing SAP applications efficiently becomes essential to ensure agility, performance, and ROI. Our SAP Application Management Services (AMS) are built to optimize your SAP landscape, reduce operational costs, and align applications with dynamic business needs. Through a blend of technical, functional, and Basis expertise, we deliver round-the-clock support using flexible global delivery models.",
    },
    offeringsSection: {
      departments: [
        {
          title: "Technical Support",
          content:
            "We provide end-to-end technical services to manage, update, and optimize your SAP environment. This includes system configuration, database management, and security enhancements. Our team ensures high system availability and peak performance at all times. We also support ongoing technical improvements to match business growth.",
          features: [],
        },
        {
          title: "Functional Support",
          content:
            "We align SAP functionality with evolving business processes and user needs. Our team configures modules, resolves user queries, and supports process efficiency. We validate real-time business scenarios to ensure system accuracy and usability. Continuous support improves operational flow and end-user experience.",
          features: [],
        },
        {
          title: "SAP Basis Administration",
          content:
            "We manage your SAP infrastructure, ensuring stability across systems and platforms. Services include installation, upgrades, monitoring, and high availability setups. We handle migrations across databases and OS environments with minimal downtime. Backup and recovery frameworks keep your system secure and resilient.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights That Matter",
      stats: [
        {
          number: 68,
          label: "Reduced Downtime",
          content:
            "68% of enterprises leveraging SAP AMS reported reduced system downtime and disruptions",
        },
        {
          number: 59,
          label: "Efficiency Gains",
          content:
            "59% improved internal efficiency by integrating AMS with automation and AI",
        },
        {
          number: 74,
          label: "User Satisfaction",
          content:
            "74% of SAP users experienced enhanced user satisfaction through continuous AMS support",
        },
      ],
    },
    containerSection: {
      description:
        "Empower your IT team to drive business outcomes with tailored AMS support. Whether you need dedicated, shared, or onsite assistance, our scalable global delivery models ensure expertise, responsiveness, and cost-effective results—right where you need them.",
    },
    benefitSection: {
      title: "Key Benefits of SAP Managed Services",
      description:
        "Ensure stability, reduce risk, and maximize performance with expert-managed SAP operations tailored to business goals.",
      benefits: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/fluency-systems-regular/8/FFFFFF/balance.png"
              alt="balance"
            />
          ),
          title: "Operational Stability",
          description:
            "24/7 monitoring, proactive audits, and real-time alerts ensure high availability and uninterrupted SAP performance.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/fluency-systems-regular/8/FFFFFF/cheap-2--v1.png"
              alt="cheap-2--v1"
            />
          ),
          title: "Cost Efficiency",
          description:
            "Optimize infrastructure and licensing to reduce total cost of ownership while improving operational outcomes.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/fluency-systems-regular/8/FFFFFF/business-conference-female-speaker.png"
              alt="business-conference-female-speaker"
            />
          ),
          title: "Business Continuity",
          description:
            "Managed disaster recovery and minimal downtime strategies keep critical systems running during updates and disruptions.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios/8/FFFFFF/key.png"
              alt="key"
            />
          ),
          title: "Enhanced Security & Compliance",
          description:
            "Comprehensive governance and SOC-driven monitoring ensure data protection and compliance across global standards.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/8/FFFFFF/external-infrastructure-finance-smashingstocks-glyph-smashing-stocks.png"
              alt="external-infrastructure-finance-smashingstocks-glyph-smashing-stocks"
            />
          ),
          title: "Scalable Infrastructure",
          description:
            "Adapt easily to changing demands with cloud, hybrid, or on-prem environments optimized for growth and innovation.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios-filled/8/FFFFFF/customer-support.png"
              alt="customer-support"
            />
          ),
          title: "End-to-End SAP Lifecycle Support",
          description:
            "From implementation to optimization, benefit from expert-led management at every phase of your SAP journey.",
        },
      ],
    },
    expertiseSection: {
      items: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios-filled/8/FFFFFF/low-price.png"
              alt="low-price"
            />
          ),
          title: "Lower Operational Costs",
          description:
            "Reduce internal IT burden with efficient, expert-led SAP support. Our AMS services optimize resource utilization and free your team for higher-value initiatives.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios-filled/8/FFFFFF/business-goal.png"
              alt="business-goal"
            />
          ),
          title: "Business Agility",
          description:
            "Rapidly adapt SAP applications to evolving market conditions and business goals. Our agile support frameworks help you stay competitive and responsive.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios-filled/8/FFFFFF/delivery--v1.png"
              alt="delivery--v1"
            />
          ),
          title: "Scalable Delivery",
          description:
            "Leverage flexible AMS delivery models that scale with your business. From dedicated support to shared services and onsite expertise, we offer what fits you best.",
        },
      ],
    },
  },
  {
    slug: "sap-s4-hana-migration-services",
    heroSection: {
      title: "SAP S/4 HANA Migration Services",
      subContent:
        "Migrate confidently to SAP S/4 HANA with seamless planning, execution, and support that drives agility and future-readiness.",
      image: shms,
    },
    overviewSection: {
      title: "What Our SAP S/4 HANA Migration Services Can Do for You",
      description:
        "Migrating to SAP S/4 HANA is a strategic move toward greater business agility, smarter decision-making, and future-ready operations. Our end-to-end migration services help you transition securely, quickly, and efficiently — whether you're on ECC or another legacy SAP system. From sizing and planning to execution and validation, we deliver a seamless transformation with minimal disruption and maximum value.",
    },
    offeringsSection: {
      departments: [
        {
          title: "S/4HANA Landscape Planning",
          content:
            "We assess your current system and design the optimal S/4HANA environment. This includes infrastructure sizing, architecture planning, and deployment options. Cloud, hybrid, or on-prem — we tailor the solution to your needs. A strategic system landscape ensures long-term efficiency and scalability.",
          features: [],
        },
        {
          title: "Migration Strategy Development",
          content:
            "We help choose the right approach — greenfield, brownfield, or bluefield. Detailed pre-migration planning ensures minimal risk and aligned goals. We support deployment flexibility across cloud or on-prem platforms. Post-migration services ensure smooth stabilization and user adoption.",
          features: [],
        },
        {
          title: "Data Cleaning & Validation",
          content:
            "We identify and retain only essential data to speed up migration. Redundant, obsolete, or inconsistent data is removed or corrected. Data quality is improved before, during, and after migration. Clean data leads to accurate reporting and better system performance.",
          features: [],
        },
        {
          title: "Implementation Planning & Readiness",
          content:
            "We align migration activities with business timelines and goals. Project scope, resources, and dependencies are clearly defined. System readiness and compatibility are assessed upfront. This structured approach ensures seamless execution and governance.",
          features: [],
        },
        {
          title: "Proof of Concept (PoC)",
          content:
            "We conduct a controlled PoC to test scenarios before full rollout. A sandbox environment helps simulate and validate migration flows. Potential challenges are addressed early through real-time testing. PoC builds confidence and ensures stakeholder alignment.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights That Matter",
      stats: [
        {
          number: 57,
          label: "Migration by 2027",
          content:
            "57% of organizations expect to complete S/4 HANA migration by 2027 to meet SAP’s ECC sunset deadline.",
        },
        {
          number: 62,
          label: "Greenfield Benefits",
          content:
            "62% of companies using greenfield approaches report improved process redesign and system efficiency.",
        },
        {
          number: 71,
          label: "Cloud Deployments",
          content:
            "71% of S/4 HANA migrations are now being deployed on cloud platforms for greater scalability.",
        },
      ],
    },
    containerSection: {
      description:
        "Kickstart your transformation with a clean slate through Greenfield, blend innovation and legacy with Bluefield, or upgrade with minimal disruption via Brownfield. Each path is tailored to fit your needs and strategic vision.",
    },
    benefitSection: {
      title: "Key Benefits of SAP S/4 HANA Migration Services",
      description:
        "Migrate smarter and faster with tailored strategies that ensure a secure, agile, and high-performing SAP S/4 HANA environment.",
      benefits: [
        {
          icon: featureIcon,
          title: "Strategic Migration Planning",
          description:
            "Thorough assessment and roadmap creation align your business goals with the right migration path—greenfield, brownfield, or bluefield.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios/8/FFFFFF/data-backup.png"
              alt="data-backup"
            />
          ),
          title: "Clean & Reliable Data",
          description:
            "Data validation and cleansing processes ensure quality, accuracy, and consistency during and after the migration.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/external-outline-juicy-fish/8/FFFFFF/external-flexible-arrows-outline-outline-juicy-fish-2.png"
              alt="external-flexible-arrows-outline-outline-juicy-fish-2"
            />
          ),
          title: "Flexible Deployment Options",
          description:
            "Whether cloud, hybrid, or on-premise, your system landscape is optimized for scalability, compliance, and performance.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios-filled/8/FFFFFF/medium-risk.png"
              alt="medium-risk"
            />
          ),
          title: "Risk-Free Execution",
          description:
            "Proof of Concept and readiness checks help identify challenges early, enabling smoother implementation with minimal risk.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios/8/FFFFFF/dashboard.png"
              alt="dashboard"
            />
          ),
          title: "Improved System Performance",
          description:
            "Post-migration optimization ensures faster processing, real-time analytics, and enhanced operational efficiency.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/8/FFFFFF/external-data-architecture-data-engineering-solid-solidglyph-m-oki-orlando.png"
              alt="external-data-architecture-data-engineering-solid-solidglyph-m-oki-orlando"
            />
          ),
          title: "Future-Ready Architecture",
          description:
            "Lay the groundwork for continuous innovation with a scalable, cloud-compatible SAP S/4 HANA foundation.",
        },
      ],
    },
    expertiseSection: {
      items: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/material-sharp/8/FFFFFF/increase-profits.png"
              alt="increase-profits"
            />
          ),
          title: "Faster Time to Value",
          description:
            "Accelerate your transformation with structured planning and proven execution strategies. Achieve tangible business benefits quickly with our expert-led migration approach.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/external-outline-wichaiwi/8/FFFFFF/external-development-business-outline-wichaiwi.png"
              alt="external-development-business-outline-wichaiwi"
            />
          ),
          title: "Optimized Performance",
          description:
            "Experience faster processing, real-time analytics, and streamlined operations with SAP S/4 HANA. Unlock the full value of your system with enhanced responsiveness.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/8/FFFFFF/external-check-multimedia-kiranshastry-lineal-kiranshastry.png"
              alt="external-check-multimedia-kiranshastry-lineal-kiranshastry"
            />
          ),
          title: "Future-Ready Foundation",
          description:
            "Prepare your enterprise for innovation with scalable architecture and cloud flexibility. Build a resilient, modern backbone for sustainable growth and digital evolution.",
        },
      ],
    },
  },
  {
    slug: "sap-discovery-evaluation-services",
    heroSection: {
      title: "SAP Discovery & Evaluation Services",
      subContent:
        "Make confident SAP decisions with structured analysis, ROI planning, and a future-ready roadmap tailored to your business.",
      image: sdes,
    },
    overviewSection: {
      title: "What Our SAP Discovery & Evaluation Services Can Do for You",
      description:
        "Choosing the right SAP solution is one of the most important strategic decisions a business can make. Our Discovery & Evaluation services guide you through the early stages of transformation by assessing current processes, aligning technology needs, and developing a clear roadmap. With structured analysis and outcome-driven planning, we help ensure your SAP investment delivers long-term value.",
    },
    offeringsSection: {
      departments: [
        {
          title: "Strategic Solution Mapping",
          content:
            "We define how SAP solutions can align with your business priorities and future growth plans. By analyzing goals and operational needs, we outline the best-fit SAP functionalities. High-level planning includes innovation potential, delivery timelines, and success benchmarks. This strategic blueprint provides a clear path forward for your SAP journey.",
          features: [],
        },
        {
          title: "Investment Justification & ROI Planning",
          content:
            "We help build a compelling financial case for SAP adoption through detailed cost-benefit analysis. Total Cost of Ownership (TCO) is broken down across implementation, infrastructure, and support. Both tangible and intangible returns—like process efficiency and decision agility—are considered. This empowers leadership to make informed, confident investment decisions.",
          features: [],
        },
        {
          title: "Process Insight & Optimization Review",
          content:
            "We examine existing workflows to detect bottlenecks and improvement opportunities. Our analysis translates process performance data into actionable recommendations. Proposed enhancements are mapped against SAP’s capabilities and features. You gain clarity on how SAP will improve efficiency and outcomes.",
          features: [],
        },
        {
          title: "IT Readiness & System Planning",
          content:
            "We evaluate your current IT environment against future SAP infrastructure needs. Gap analysis reveals where upgrades, integrations, or redesigns are required. A future-state architecture plan is developed, fully aligned with business strategy. This ensures IT infrastructure is scalable, secure, and implementation-ready.",
          features: [],
        },
        {
          title: "Solution Fit Analysis",
          content:
            "We assess how SAP solutions align with your current processes and business requirements. Mismatch areas are documented, along with suggestions for standardization or enhancement. Customizations are evaluated for their cost, impact, and necessity. This ensures your chosen SAP path is technically and functionally viable.",
          features: [],
        },
        {
          title: "Migration & Integration Readiness",
          content:
            "We study your existing systems to identify dependencies and migration challenges. Data, applications, and legacy platforms are analyzed for compatibility with SAP. We outline integration pathways that ensure seamless connectivity and data flow. A phased roadmap is created to support smooth, disruption-free migration.",
          features: [],
        },
        {
          title: "Scope Definition & Resource Estimation",
          content:
            "We define the complete project scope including business areas, modules, and system touchpoints. System volumes, data complexity, and process depth are factored into effort estimates. Resource, cost, and timeline forecasts are developed to ensure accurate planning. This groundwork supports effective delivery, budgeting, and stakeholder alignment.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights That Matter",
      stats: [
        {
          number: 50,
          label: "Discovery Impact",
          content:
            "50% of ERP project success hinges on the discovery and evaluation phase.",
        },
        {
          number: 34,
          label: "Cloud Success",
          content:
            "34% of cloud migrations succeed due to structured SAP evaluation strategies.",
        },
        {
          number: 25,
          label: "Assessment Growth",
          content:
            "25% increase in cloud-based assessments shows the growing shift toward early ERP planning.",
        },
      ],
    },
    containerSection: {
      description:
        "Design and build a scalable application framework, establish a robust IT foundation, and create a strategic business case that aligns remote connectivity with maximizing SAP value.",
    },
    benefitSection: {
      title: "Key Benefits of SAP S/4 HANA Migration Services",
      description:
        "Transition seamlessly to SAP S/4 HANA with optimized strategies that drive speed, agility, and long-term business value.",
      benefits: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/critical-thinking.png"
              alt="critical-thinking"
            />
          ),
          title: "Strategic System Design",
          description:
            "Tailored landscape planning ensures the ideal infrastructure, whether on cloud, hybrid, or on-premise, supporting scalability and future growth.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/change.png"
              alt="change"
            />
          ),
          title: "Accelerated Transformation",
          description:
            "Pre-defined roadmaps and expert-led execution reduce complexity, enabling faster migration with minimal business disruption.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/accuracy.png"
              alt="accuracy"
            />
          ),
          title: "Data Accuracy & Integrity",
          description:
            "Thorough data cleaning and validation enhances system performance and ensures consistent, reliable reporting post-migration.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/down3.png"
              alt="down3"
            />
          ),
          title: "Minimal Downtime",
          description:
            "Migration strategies and proof-of-concept testing minimize business interruptions, ensuring a smooth go-live experience.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/light-automation.png"
              alt="light-automation"
            />
          ),
          title: "Process Innovation",
          description:
            "Unlock redesigned business processes through Greenfield and hybrid approaches, leading to greater efficiency and modernization.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/cloud-database.png"
              alt="cloud-database"
            />
          ),
          title: "Cloud Scalability",
          description:
            "Embrace scalable cloud deployments that support real-time insights, agility, and long-term digital transformation goals.",
        },
      ],
    },
    expertiseSection: {
      items: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/scales.png"
              alt="scales"
            />
          ),
          title: "Informed Decision-Making",
          description:
            "Gain clarity on the most suitable SAP solution through structured analysis and fit-gap assessments. Make confident, value-based decisions for long-term success.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/strategy-board.png"
              alt="strategy-board"
            />
          ),
          title: "Future-Ready IT Strategy",
          description:
            "Develop a scalable architecture and integration roadmap aligned with growth and innovation goals. Ensure your IT is prepared to support the next stage of transformation.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/project-management.png"
              alt="project-management"
            />
          ),
          title: "Confident Project Planning",
          description:
            "Set realistic scope, resource, and timeline expectations to support smooth execution and stakeholder buy-in. Plan every phase with accuracy and alignment.",
        },
      ],
    },
  },
  {
    slug: "sap-implementation-rollout-services",
    heroSection: {
      title: "SAP Implementation & Rollout Services",
      subContent:
        "Deploy SAP with precision and scalability through structured, risk-controlled rollouts tailored to global and local business needs.",
      image: sirs,
    },
    overviewSection: {
      title: "What Our SAP Implementation & Rollout Services Can Do for You",
      description:
        "Implementing SAP across a business requires precision, planning, and adaptability. Our SAP Implementation & Rollout services help enterprises deploy SAP systems efficiently, aligning technology with business goals while minimizing risks. Whether it's a single-site launch or a multi-country rollout, we focus on standardization, localization, and end-to-end delivery to drive operational excellence.",
    },
    offeringsSection: {
      departments: [
        {
          title: "Streamlined Deployment of Complex Architectures",
          content:
            "We plan and execute SAP configurations for diverse and interconnected operations. Our methods accommodate varying business models while enforcing system integrity. Through careful planning, we reduce delays and prevent costly rework. You get a scalable SAP foundation aligned with enterprise objectives.",
          features: [],
        },
        {
          title: "Smart Customization Strategies",
          content:
            "We help strike the right balance between customization and standard SAP best practices. Our team evaluates business needs to avoid unnecessary or costly modifications. This ensures long-term sustainability and simplifies future upgrades. Tailored configurations enhance value without complicating system management.",
          features: [],
        },
        {
          title: "Accurate Data Transition Planning",
          content:
            "We validate, cleanse, and migrate legacy data into SAP systems with precision. Processes ensure consistency, eliminate duplicates, and retain critical information. Our ETL practices maintain data quality throughout the project lifecycle. The outcome is a reliable and audit-ready SAP environment.",
          features: [],
        },
        {
          title: "Performance Optimization from Day One",
          content:
            "We assess infrastructure and system behavior to ensure optimal runtime performance. Bottlenecks are addressed through proactive tuning and capacity planning. We fine-tune applications like SAP GUI and Fiori for smoother user experience. Long-term performance is sustained with monitoring and growth management.",
          features: [],
        },
        {
          title: "Integrated Ecosystem Enablement",
          content:
            "We enable seamless communication between SAP and third-party or legacy systems. Our team ensures consistent, real-time data exchange across platforms. We manage dependencies and integration priorities to minimize disruption. Robust connectivity supports smoother operations and decision-making.",
          features: [],
        },
        {
          title: "End-to-End Risk Control Framework",
          content:
            "We proactively identify technical, operational, and financial risks early in the process. Each risk is evaluated, prioritized, and addressed with mitigation plans. We build contingency strategies for issues like system failure or delays. Ongoing reporting ensures accountability and transparency throughout rollout.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights That Matter",
      stats: [
        {
          number: 30,
          label: "Lower Implementation Costs",
          content:
            "30% lower implementation costs are achieved through structured rollout models",
        },
        {
          number: 25,
          label: "Performance Improvement",
          content:
            "25% improvement in long-term business performance is linked to post-go-live optimization",
        },
        {
          number: 43,
          label: "User Adoption Importance",
          content:
            "43% of successful SAP implementations cite user adoption as the most critical success factor",
        },
      ],
    },
    containerSection: {
      description:
        "Our rollout methodology combines global standardization with local flexibility—starting from business process analysis to template creation, localization, and end-user training—ensuring consistent success across all deployment regions.",
    },
    benefitSection: {
      title: "Key Benefits of SAP Implementation & Rollout Services",
      description:
        "Achieve faster deployment, stronger adoption, and scalable SAP performance with structured implementation and rollout strategies.",
      benefits: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/deployment.png"
              alt="deployment"
            />
          ),
          title: "Standardized Yet Flexible Deployment",
          description:
            "Balance global standardization with local adaptability to meet diverse operational and regulatory needs across regions.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/windows/8/FFFFFF/doughnut-chart.png"
              alt="doughnut-chart"
            />
          ),
          title: "Seamless Data Transition",
          description:
            "Accurate validation, cleansing, and migration of legacy data ensures high-quality inputs and an audit-ready SAP environment.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/android/8/FFFFFF/user.png"
              alt="user"
            />
          ),
          title: "High User Adoption",
          description:
            "Boost user engagement and confidence with tailored training and intuitive SAP interfaces, driving long-term success.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios-filled/8/FFFFFF/high-risk.png"
              alt="high-risk"
            />
          ),
          title: "Risk-Controlled Rollout",
          description:
            "Mitigate technical and operational risks through proactive governance, real-time monitoring, and contingency planning.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios/8/FFFFFF/laptop-settings--v2.png"
              alt="laptop-settings--v2"
            />
          ),
          title: "Optimized System Performance",
          description:
            "Enhance SAP performance from day one with fine-tuned infrastructure, capacity planning, and continuous optimization.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/wired/8/FFFFFF/ecosystem.png"
              alt="ecosystem"
            />
          ),
          title: "Connected Ecosystem",
          description:
            "Enable real-time data exchange and integration between SAP and third-party systems for seamless enterprise-wide operations.",
        },
      ],
    },
    expertiseSection: {
      items: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios-filled/8/FFFFFF/deployment.png"
              alt="deployment"
            />
          ),
          title: "Faster Global Deployment",
          description:
            "Accelerate time-to-value with structured rollout strategies tailored to both regional and global needs. Rapid deployment meets long-term scalability.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios/8/FFFFFF/ookla-speedtest.png"
              alt="ookla-speedtest"
            />
          ),
          title: "Enhanced System Performance",
          description:
            "Ensure optimal SAP performance from day one with continuous monitoring, capacity planning, and proactive tuning.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/android/8/FFFFFF/user.png"
              alt="user"
            />
          ),
          title: "High User Adoption",
          description:
            "Empower teams with role-based, hands-on training and intuitive interfaces to boost confidence, engagement, and long-term SAP success.",
        },
      ],
    },
  },
  {
    slug: "sap-upgrade-services",
    heroSection: {
      title: "SAP Upgrade Services",
      subContent:
        "Unlock new capabilities, enhance performance, and future-proof your SAP systems with minimal disruption and maximum value.",
      image: sus,
    },
    overviewSection: {
      title: "What Our SAP Upgrade Services Can Do for You",
      description:
        "Upgrading your SAP environment isn’t just about staying current—it’s about unlocking new capabilities, optimizing system performance, and preparing for the future. Our SAP Upgrade Services are designed to help you move seamlessly to the latest SAP versions while minimizing risk, disruption, and cost. Whether you're upgrading to the latest ECC enhancement pack or transitioning to S/4HANA, we provide end-to-end support to ensure your upgrade adds measurable business value.",
    },
    offeringsSection: {
      departments: [
        {
          title: "Upgrade Assessment & Strategy Planning",
          content:
            "We evaluate your current SAP environment, enhancement packs, and customizations to define the right upgrade path. Feasibility studies and system readiness checks ensure your upgrade is well-scoped and low-risk. Our roadmap balances technical requirements with business timelines for optimal results. You gain a clear, actionable plan tailored to your organization’s needs.",
          features: [],
        },
        {
          title: "Custom Code Impact Analysis",
          content:
            "We identify custom developments that may be affected by the upgrade. Each item is analyzed for compatibility, redundancy, or optimization potential. Recommended adjustments are documented with risk mitigation strategies. This ensures continuity and efficiency post-upgrade.",
          features: [],
        },
        {
          title: "Technical Upgrade Execution",
          content:
            "We handle the end-to-end execution of your SAP system upgrade—from sandbox to production. Services include backup, system preparation, technical upgrade, and patch management. Downtime is minimized through proven methodologies and phased rollouts. You benefit from a faster, smoother transition with little to no business disruption.",
          features: [],
        },
        {
          title: "Functional Validation & Regression Testing",
          content:
            "We ensure that business processes and workflows perform correctly post-upgrade. Testing covers core modules, custom developments, and integrations. Automated testing tools and real-time feedback reduce manual effort and errors. You gain confidence in your system’s functionality and reliability.",
          features: [],
        },
        {
          title: "Performance Optimization Post-Upgrade",
          content:
            "We fine-tune your upgraded system to enhance performance, stability, and scalability. System monitoring identifies any bottlenecks introduced during the upgrade. Database and infrastructure improvements are implemented where needed. This results in a faster, more responsive SAP environment.",
          features: [],
        },
        {
          title: "Security & Compliance Enhancements",
          content:
            "We apply the latest SAP security patches and updates during the upgrade. Access controls, user roles, and audit logs are reviewed and updated as required. We ensure alignment with data protection and industry-specific compliance standards. Your upgraded system is safer, more compliant, and easier to govern.",
          features: [],
        },
        {
          title: "Change Management & Knowledge Transfer",
          content:
            "We provide detailed documentation, training sessions, and user enablement plans. Stakeholders and end-users are engaged throughout to ease the transition. Post-upgrade support includes monitoring, troubleshooting, and continuous improvement. Teams are empowered to fully leverage the upgraded SAP capabilities.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights That Matter",
      stats: [
        {
          number: 48,
          label: "Upgrade Risk Perception",
          content:
            "48% of SAP users delay upgrades due to perceived risk, yet structured upgrade planning reduces disruptions by 60%",
        },
        {
          number: 55,
          label: "Post-Upgrade Gains",
          content:
            "55% of companies report improved performance and user satisfaction within 3 months of upgrading SAP systems",
        },
        {
          number: 66,
          label: "Innovation Readiness",
          content:
            "66% of IT leaders say that regular SAP upgrades are critical to keeping pace with innovation and security standards",
        },
      ],
    },
    containerSection: {
      description:
        "Our upgrade offerings span readiness assessment, value-driven strategy scoping, complete technical execution, and optimization—ensuring your SAP systems are secure, high-performing, and future-ready from day one.",
    },
    benefitSection: {
      title: "Key Benefits of SAP Upgrade Services",
      description:
        "Enhance system performance, security, and future readiness through expertly managed SAP upgrade strategies.",
      benefits: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/8/FFFFFF/external-transition-animation-royyan-wijaya-detailed-outline-royyan-wijaya-4.png"
              alt="external-transition-animation-royyan-wijaya-detailed-outline-royyan-wijaya-4"
            />
          ),
          title: "Seamless Transition",
          description:
            "Phased execution, backup strategies, and minimal downtime ensure a smooth, disruption-free upgrade experience.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios-filled/8/FFFFFF/future.png"
              alt="future"
            />
          ),
          title: "Future-Ready Architecture",
          description:
            "Unlock the latest SAP features and enhancements to stay agile, scalable, and prepared for ongoing innovation.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios/8/FFFFFF/laptop-settings--v2.png"
              alt="laptop-settings--v2"
            />
          ),
          title: "Optimized System Performance",
          description:
            "Post-upgrade tuning and infrastructure improvements deliver faster response times and enhanced system stability.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/fluency-systems-regular/8/FFFFFF/lock-orientation.png"
              alt="lock-orientation"
            />
          ),
          title: "Improved Security & Compliance",
          description:
            "Apply the latest patches and access controls to align with evolving compliance requirements and safeguard data.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/fluency-systems-regular/8/FFFFFF/support.png"
              alt="support"
            />
          ),
          title: "Protected Custom Code",
          description:
            "Custom code impact analysis and mitigation strategies ensure continuity and compatibility post-upgrade.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/parakeet-line/8/FFFFFF/group.png"
              alt="group"
            />
          ),
          title: "Empowered Users",
          description:
            "Engaging training, documentation, and change management promote smooth adoption and long-term productivity.",
        },
      ],
    },
    expertiseSection: {
      items: [
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/8/FFFFFF/external-download-video-and-movie-tanah-basah-basic-outline-tanah-basah.png"
              alt="external-download-video-and-movie-tanah-basah-basic-outline-tanah-basah"
            />
          ),
          title: "Minimal Downtime",
          description:
            "Upgrade without interrupting operations using proven tools, automation, and phased execution. Business continues while systems improve.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/ios/8/FFFFFF/square.png"
              alt="square"
            />
          ),
          title: "Future-Ready Systems",
          description:
            "Leverage the latest SAP capabilities to enhance agility, scalability, and long-term innovation. Your systems stay aligned with evolving needs.",
        },
        {
          icon: (
            <img
              width="8"
              height="8"
              src="https://img.icons8.com/android/8/FFFFFF/user.png"
              alt="user"
            />
          ),
          title: "Smooth User Adoption",
          description:
            "Empower teams with training, support, and intuitive enhancements for higher satisfaction and productivity post-upgrade.",
        },
      ],
    },
  },
];

export default servicesData;
