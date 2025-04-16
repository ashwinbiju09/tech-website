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
      title: "What our business consulting services can do for you",
      description:
        "Our business consulting services are designed to help you adapt to change, drive operational efficiency, and grow with confidence. We work closely with your team to simplify workflows, manage risks, and implement practical solutions. Whether you're facing internal challenges or market shifts, our consultants bring clarity and strategic direction. Every solution we offer is tailored to your goals, size, and industry.",
    },
    offeringsSection: {
      departments: [
        {
          title: "Strategy & planning",
          content:
            "We help define clear business goals and create actionable roadmaps to reach them. Our consultants align strategy with market demands and long-term growth. We identify opportunities for innovation and competitive advantage. Your vision is backed by practical steps and measurable outcomes.",
          features: [],
        },
        {
          title: "Digital transformation",
          content:
            "We guide the adoption of new technologies to modernize operations. From legacy systems to cloud platforms, we manage seamless transitions. Our approach ensures your tools support agility and decision-making. Stay relevant in a digital-first business landscape.",
          features: [],
        },
        {
          title: "Process optimization",
          content:
            "We analyze current workflows to identify inefficiencies and redundancies. Processes are restructured for speed, accuracy, and scalability. Automation is introduced where it adds measurable value. The result is leaner operations with better output.",
          features: [],
        },
        {
          title: "Operational efficiency",
          content:
            "We assess performance across teams, systems, and workflows. Our solutions reduce costs, increase productivity, and enhance quality. We prioritize sustainable improvements over short-term fixes. Efficiency becomes a core part of your business culture.",
          features: [],
        },
        {
          title: "Workforce management",
          content:
            "We support hiring, onboarding, and long-term talent development. Our solutions help align workforce capabilities with business needs. We use analytics to identify skill gaps and growth areas. Stronger teams lead to better performance and retention.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights that matter",
      stats: [
        {
          number: 72,
          label: "Accelerated digital initiatives",
          content:
            "Executives say working with consultants speeds up their transformation efforts.",
        },
        {
          number: 65,
          label: "Improved ROI",
          content:
            "Within a year, most companies see stronger financial returns after bringing in experts.",
        },
        {
          number: 58,
          label: "Better Decision-Making",
          content:
            "Leaders report more effective operations thanks to outside guidance.",
        },
      ],
    },
    containerSection: {
      description:
        "We ensure your business applications are aligned with both your operational needs and strategic goals. Our experts assess, refine, and integrate tools that support long-term growth. This results in improved system performance and smarter resource planning. Every application works together to drive efficiency and business value.",
    },
    benefitSection: {
      title: "Key benefits of business consulting services",
      description:
        "Maximize business potential through expert strategy, efficient operations, and technology-driven transformation.",
      benefits: [
        {
          icon: (
            <img
              className="h-10 w-10"
              src="https://img.icons8.com/windows/64/facc15/strategy-board.png"
              alt="strategy-board"
            />
          ),
          title: "Strategic clarity",
          description:
            "Gain a clear vision and actionable roadmap tailored to your goals, ensuring every decision aligns with long-term success.",
        },
        {
          icon: (
            <img
              className="h-10 w-10"
              src="https://img.icons8.com/windows/64/facc15/performance-smartphone.png"
              alt="performance-smartphone"
            />
          ),
          title: "Operational efficiency",
          description:
            "Streamline workflows and reduce costs by identifying inefficiencies and implementing sustainable improvements.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pastel-glyph/64/facc15/network-care.png"
              alt="network-care"
            />
          ),
          title: "Digital enablement",
          description:
            "Transition smoothly to modern platforms and tools that boost agility, support data-driven decisions, and enhance performance.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/facc15/positive-dynamic.png"
              alt="positive-dynamic"
            />
          ),
          title: "Scalable growth",
          description:
            "Leverage expert insights and outsourcing solutions to scale your operations efficiently without compromising quality.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/64/facc15/external-roi-digital-marketing-outline-solidglyph-m-oki-orlando.png"
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
              className="h-8 w-8"
              src="https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/64/facc15/external-Organic-Company-Structure-company-structure-glyph-silhouettes-icons-papa-vector.png"
              alt="external-Organic-Company-Structure-company-structure-glyph-silhouettes-icons-papa-vector"
            />
          ),
          title: "Empowered workforce",
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
              className="h-8 w-8"
              src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/external-productivity-work-from-home-tulpahn-detailed-outline-tulpahn.png"
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
              className="h-8 w-8"
              src="https://img.icons8.com/external-ddara-lineal-ddara/64/external-outsourcing-business-management-ddara-lineal-ddara-2.png"
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
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/lunacy-new--v2.png"
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
      title: "What our process consulting services can do for you",
      description:
        "Managing complex, multi-layered processes can be overwhelming for any organization. Our process consulting services are designed to bring structure, clarity, and efficiency to your workflows. We help document, optimize, and digitize your business processes to ensure they align with strategic goals. With a focus on value, we enable continuous improvement across your entire operational landscape.",
    },
    offeringsSection: {
      departments: [
        {
          title: "End-to-end analysis",
          content:
            "We conduct a detailed evaluation of your workflows from start to finish. Our insights reveal gaps, redundancies, and process dependencies. We document each step and its impact on key stakeholders. This foundation supports better decision-making and smoother execution.",
          features: [],
        },
        {
          title: "Process optimization",
          content:
            "Our team identifies inefficiencies and eliminates non-value-adding steps. We align process goals with broader organizational strategies. Through simplification and redesign, we improve cycle times and quality. The result is faster, leaner, and more reliable operations.",
          features: [],
        },
        {
          title: "Process digitalization",
          content:
            "We help shift manual, paper-based workflows to automated digital systems. Centralized data and tools enhance visibility and collaboration. We ensure all digital upgrades are scalable and system-compatible. Digital transformation becomes a practical, phased journey.",
          features: [],
        },
        {
          title: "Agile transformation",
          content:
            "We implement Agile frameworks to improve adaptability and speed. Your teams learn to collaborate, iterate, and deliver faster. Workshops and coaching ensure adoption of Agile best practices. Agility becomes embedded in your work culture and mindset.",
          features: [],
        },
        {
          title: "IT service management",
          content:
            "We streamline and automate IT services using modern methodologies. From service catalogs to change management, every process is refined. We support traditional, agile, or hybrid service models. Continuous evaluation keeps your IT services high-performing and aligned.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights that matter",
      stats: [
        {
          number: 70,
          label: "Efficiency improvement",
          content:
            "Organizations report smoother operations just months after applying process consulting.",
        },
        {
          number: 55,
          label: "Cost savings",
          content:
            "Many see clear financial benefits following optimization efforts.",
        },
        {
          number: 63,
          label: "Faster collaboration",
          content:
            "Digital workflows lead to stronger teamwork and quicker decisions.",
        },
      ],
    },
    containerSection: {
      description:
        "We help redefine your business strategies by evaluating processes for maximum value and minimum risk. Our approach balances long-term outcomes with immediate performance gains. We prioritize improvements that deliver tangible ROI. The result is smarter, more effective business execution.",
    },
    benefitSection: {
      title: "Key benefits of Process Consulting services",
      description:
        "Redesign and digitize processes to boost clarity, reduce inefficiencies, and drive strategic outcomes across your organization.",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/64/facc15/visible--v1.png"
              alt="visible--v1"
            />
          ),
          title: "End-to-end process visibility",
          description:
            "Gain detailed insights into workflows, gaps, and dependencies to support better decisions and execution.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/64/facc15/system-task.png"
              alt="system-task"
            />
          ),
          title: "Lean & scalable operations",
          description:
            "Remove inefficiencies and align processes with strategic goals to achieve faster, more reliable business outcomes.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/64/facc15/services--v1.png"
              alt="services--v1"
            />
          ),
          title: "Digital process transformation",
          description:
            "Convert manual processes into digital workflows for improved speed, visibility, and collaboration across teams.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/64/facc15/agree-.png"
              alt="agree-"
            />
          ),
          title: "Agile business frameworks",
          description:
            "Adopt agile methods to increase adaptability, responsiveness, and delivery speed across changing business needs.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/computer-support.png"
              alt="computer-support"
            />
          ),
          title: "Stronger IT service management",
          description:
            "Refine ITSM processes for higher service quality, streamlined change management, and consistent IT performance.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/64/facc15/customer-support.png"
              alt="customer-support"
            />
          ),
          title: "Governance & long-term support",
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
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/64/software-box.png"
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
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-geotatah/64/external-implementation-new-product-development-npd-outline-geotatah.png"
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
              className="h-8 w-8"
              src="https://img.icons8.com/material-rounded/64/process.png"
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
      title: "What our technology consulting services can do for you",
      description:
        "In a rapidly evolving digital landscape, aligning technology with your business strategy is more critical than ever. Our technology consulting services are designed to help organizations innovate, automate, and transform through future-ready solutions. From data and AI to blockchain and automation, we guide you through every stage — from planning to execution and long-term support. Our approach keeps you adaptive, secure, and ahead of the curve.",
    },
    offeringsSection: {
      departments: [
        {
          title: "Data & analytics",
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
      title: "Insights that matter",
      stats: [
        {
          number: 91,
          label: "Pursuing digital transformation",
          content:
            "Most companies are actively modernizing to stay ahead in a tech-driven landscape.",
        },
        {
          number: 67,
          label: "CEO Tech Focus",
          content:
            "Top executives see technology as the key to outpacing the competition.",
        },
        {
          number: 88,
          label: "Customer Experience Gains",
          content:
            "AI and automation are helping businesses elevate how they serve their customers.",
        },
      ],
    },
    containerSection: {
      description:
        "We design scalable and resilient IT frameworks that support long-term growth. Our architecture services ensure adaptability, performance, and alignment with business goals. We help future-proof your systems against evolving demands. Efficiency and agility are built into every layer of your tech stack.",
    },
    benefitSection: {
      title: "Key benefits of Process Consulting Services",
      description:
        "Unlock operational excellence with optimized workflows, digital transformation, and agile methodologies.",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/wired/64/facc15/workflow.png"
              alt="workflow"
            />
          ),
          title: "Streamlined workflows",
          description:
            "Identify redundancies and inefficiencies to create lean, efficient processes that boost productivity and speed.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pastel-glyph/64/facc15/network-care.png"
              alt="network-care"
            />
          ),
          title: "Digital transformation",
          description:
            "Shift from manual to automated workflows for better visibility, scalability, and real-time collaboration.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/facc15/external-agile-web-design-and-development-flatart-icons-solid-flatarticons.png"
              alt="external-agile-web-design-and-development-flatart-icons-solid-flatarticons"
            />
          ),
          title: "Agile operations",
          description:
            "Introduce agile practices that enhance adaptability, speed up delivery, and empower cross-functional teams.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/decision-making.png"
              alt="decision-making"
            />
          ),
          title: "Data-driven decisions",
          description:
            "End-to-end process visibility supports smarter decision-making and continuous process improvement.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/wired/64/facc15/cost.png"
              alt="cost"
            />
          ),
          title: "Cost optimization",
          description:
            "Improve efficiency and eliminate non-value-adding activities to reduce operational costs effectively.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/cyber-security.png"
              alt="cyber-security"
            />
          ),
          title: "IT service excellence",
          description:
            "Modernize IT operations through ITSM best practices, ensuring reliable and aligned service delivery across teams.",
        },
      ],
    },

    expertiseSection: {
      items: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pastel-glyph/64/0a1f36/financial-analytics.png"
              alt="financial-analytics"
            />
          ),
          title: "Value Analysis",
          description:
            "We assess the performance and ROI of your existing tech landscape. Our consultants identify areas for improvement across tools, systems, and investments. Value is maximized through cost optimization and capability alignment. You gain clarity on what’s working, what’s not, and what to evolve.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-line512-zulfa-mahendra/64/0a1f36/external-asset-management-saving-and-investment-line512-zulfa-mahendra.png"
              alt="external-asset-management-saving-and-investment-line512-zulfa-mahendra"
            />
          ),
          title: "Asset Management",
          description:
            "We ensure IT assets are tracked, optimized, and aligned with your business strategy. From procurement to retirement, assets are managed for cost-efficiency and compliance. We support licensing, utilization, and governance across your tech estate. Control and visibility reduce risk and unnecessary spend.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/dotty/80/0a1f36/product.png"
              alt="product"
            />
          ),
          title: "Product Selection",
          description:
            "We help choose the right technologies for scalability, performance, and ROI. Products are evaluated for security, integration, and long-term value. Our approach minimizes risk and ensures faster implementation cycles. Every tool is selected with future-readiness in mind.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-glyph-andi-nur-abdillah/64/0a1f36/external-Data-Privacy-cyber-security-(glyph)-glyph-andi-nur-abdillah.png"
              alt="external-Data-Privacy-cyber-security-(glyph)-glyph-andi-nur-abdillah"
            />
          ),
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
      title: "What our SAP managed services can do for you",
      description:
        "In today’s digital-first world, maximizing your SAP environment requires more than basic support — it demands strategic management, automation, and real-time oversight. Our SAP Managed Services help you stabilize operations, reduce complexity, and unlock long-term value from your SAP investments. From infrastructure and performance to compliance and business continuity, we cover every layer with a proactive and scalable approach.",
    },
    offeringsSection: {
      departments: [
        {
          title: "Infrastructure migration",
          content:
            "We oversee SAP environments across cloud, on-premises, and hybrid setups. Our experts ensure smooth migrations with zero business disruption. Infrastructure is continuously optimized for speed, scalability, and uptime. We help build a reliable foundation for innovation and growth.",
          features: [],
        },
        {
          title: "Performance monitoring",
          content:
            "We implement round-the-clock monitoring with intelligent alert systems. Proactive audits identify bottlenecks and prevent unplanned downtime. Security vulnerabilities and compliance gaps are flagged in real time. You stay ahead of issues before they impact business performance.",
          features: [],
        },
        {
          title: "Service quality",
          content:
            "We take full responsibility for SAP updates, patches, and incident resolution. Automation is used for system health checks and quality control. System configurations are aligned with evolving business needs. Our goal is consistent, high-quality SAP performance across all functions.",
          features: [],
        },
        {
          title: "Continuity management",
          content:
            "Our managed disaster recovery and backup services ensure resilience. Planned updates and patches are executed with minimal disruption. We refine processes continually to meet uptime goals and SLAs. Business continuity remains uncompromised, even during transitions.",
          features: [],
        },
        {
          title: "SAP implementation support",
          content:
            "We support both new implementations and existing system enhancements. Certified experts manage deployment, testing, and long-term optimization. Post-implementation, we provide rapid issue resolution and system tuning. Your SAP environment evolves alongside your business.",
          features: [],
        },
        {
          title: "Security compliance",
          content:
            "Our SAP security model covers access control, governance, and threat response. Security Operations Centers (SOCs) ensure 24/7 protection and monitoring. We ensure compliance with industry, geographic, and audit-specific standards. Risk is minimized while data integrity and access remain secure.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights that matter",
      stats: [
        {
          number: 64,
          label: "Reduced downtime",
          content:
            "Organizations experienced fewer disruptions after moving to managed SAP services.",
        },
        {
          number: 58,
          label: "Cost savings",
          content:
            "Many cut expenses by optimizing infrastructure and licensing through managed operations.",
        },
        {
          number: 72,
          label: "Improved security & compliance",
          content:
            "Partnering with service providers strengthened data protection and regulatory readiness.",
        },
      ],
    },
    containerSection: {
      description:
        "We manage cloud-based SAP infrastructure for higher flexibility and performance. Our services ensure cost-effective scaling to meet dynamic business demands. Ongoing monitoring and updates keep systems agile and secure. We help reduce hardware overhead and increase operational speed.",
    },
    benefitSection: {
      title: "Key benefits of SAP managed services",
      description:
        "Maximize performance, security, and scalability with proactive SAP managed services tailored to business continuity and innovation.",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/64/facc15/external-availability-database-solid-solidglyph-m-oki-orlando.png"
              alt="external-availability-database-solid-solidglyph-m-oki-orlando"
            />
          ),
          title: "High availability & uptime",
          description:
            "Round-the-clock monitoring, auditing, and issue resolution ensure stable SAP performance with minimal unplanned downtime.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/cost.png"
              alt="cost"
            />
          ),
          title: "Cost optimization",
          description:
            "Optimize infrastructure and licensing to reduce operational expenses while enhancing long-term SAP value.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/64/facc15/fingerprint-scan.png"
              alt="fingerprint-scan"
            />
          ),
          title: "Enhanced security & compliance",
          description:
            "24/7 SOC support, access controls, and governance keep systems secure and fully compliant with industry standards.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/64/facc15/project-management.png"
              alt="project-management"
            />
          ),
          title: "Scalable infrastructure management",
          description:
            "Support for hybrid, cloud, or on-prem SAP systems ensures flexible and future-ready infrastructure with continuous optimization.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/facc15/conference.png"
              alt="conference"
            />
          ),
          title: "Business continuity",
          description:
            "Disaster recovery, backup automation, and SLA-driven uptime strategies maintain uninterrupted business operations.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/facc15/lifecycle--v1.png"
              alt="lifecycle--v1"
            />
          ),
          title: "Expert lifecycle support",
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
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/ookla-speedtest.png"
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
              className="h-8 w-8"
              src="https://img.icons8.com/pastel-glyph/64/cloud-development--v4.png"
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
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/service--v1.png"
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
      title: "What our SAP AMS services can do for you",
      description:
        "As businesses grow in complexity, managing SAP applications efficiently becomes essential to ensure agility, performance, and ROI. Our SAP Application Management Services (AMS) are built to optimize your SAP landscape, reduce operational costs, and align applications with dynamic business needs. Through a blend of technical, functional, and Basis expertise, we deliver round-the-clock support using flexible global delivery models.",
    },
    offeringsSection: {
      departments: [
        {
          title: "Technical support",
          content:
            "We provide end-to-end technical services to manage, update, and optimize your SAP environment. This includes system configuration, database management, and security enhancements. Our team ensures high system availability and peak performance at all times. We also support ongoing technical improvements to match business growth.",
          features: [],
        },
        {
          title: "Functional support",
          content:
            "We align SAP functionality with evolving business processes and user needs. Our team configures modules, resolves user queries, and supports process efficiency. We validate real-time business scenarios to ensure system accuracy and usability. Continuous support improves operational flow and end-user experience.",
          features: [],
        },
        {
          title: "SAP basis administration",
          content:
            "We manage your SAP infrastructure, ensuring stability across systems and platforms. Services include installation, upgrades, monitoring, and high availability setups. We handle migrations across databases and OS environments with minimal downtime. Backup and recovery frameworks keep your system secure and resilient.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights that matter",
      stats: [
        {
          number: 68,
          label: "Reduced downtime",
          content:
            "Enterprises using SAP AMS report fewer system issues and smoother operations.",
        },
        {
          number: 59,
          label: "Efficiency gains",
          content:
            "Automation and AI integration through AMS helped streamline internal processes.",
        },
        {
          number: 74,
          label: "User satisfaction",
          content:
            "Ongoing support led to a better experience for those working within SAP systems.",
        },
      ],
    },
    containerSection: {
      description:
        "Empower your IT team to drive business outcomes with tailored AMS support. Whether you need dedicated, shared, or onsite assistance, our scalable global delivery models ensure expertise, responsiveness, and cost-effective results—right where you need them.",
    },
    benefitSection: {
      title: "Key benefits of SAP managed services",
      description:
        "Ensure stability, reduce risk, and maximize performance with expert-managed SAP operations tailored to business goals.",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/64/facc15/balance.png"
              alt="balance"
            />
          ),
          title: "Operational stability",
          description:
            "24/7 monitoring, proactive audits, and real-time alerts ensure high availability and uninterrupted SAP performance.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/64/facc15/cheap-2--v1.png"
              alt="cheap-2--v1"
            />
          ),
          title: "Cost efficiency",
          description:
            "Optimize infrastructure and licensing to reduce total cost of ownership while improving operational outcomes.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/64/facc15/business-conference-female-speaker.png"
              alt="business-conference-female-speaker"
            />
          ),
          title: "Business continuity",
          description:
            "Managed disaster recovery and minimal downtime strategies keep critical systems running during updates and disruptions.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/key.png"
              alt="key"
            />
          ),
          title: "Enhanced security & compliance",
          description:
            "Comprehensive governance and SOC-driven monitoring ensure data protection and compliance across global standards.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/64/facc15/external-infrastructure-finance-smashingstocks-glyph-smashing-stocks.png"
              alt="external-infrastructure-finance-smashingstocks-glyph-smashing-stocks"
            />
          ),
          title: "Scalable infrastructure",
          description:
            "Adapt easily to changing demands with cloud, hybrid, or on-prem environments optimized for growth and innovation.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/customer-support.png"
              alt="customer-support"
            />
          ),
          title: "End-to-end SAP lifecycle support",
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
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/low-price.png"
              alt="low-price"
            />
          ),
          title: "Lower operational costs",
          description:
            "Reduce internal IT burden with efficient, expert-led SAP support. Our AMS services optimize resource utilization and free your team for higher-value initiatives.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/business-goal.png"
              alt="business-goal"
            />
          ),
          title: "Business agility",
          description:
            "Rapidly adapt SAP applications to evolving market conditions and business goals. Our agile support frameworks help you stay competitive and responsive.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/delivery--v1.png"
              alt="delivery--v1"
            />
          ),
          title: "Scalable delivery",
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
      title: "What our SAP S/4 HANA migration services can do for you",
      description:
        "Migrating to SAP S/4 HANA is a strategic move toward greater business agility, smarter decision-making, and future-ready operations. Our end-to-end migration services help you transition securely, quickly, and efficiently — whether you're on ECC or another legacy SAP system. From sizing and planning to execution and validation, we deliver a seamless transformation with minimal disruption and maximum value.",
    },
    offeringsSection: {
      departments: [
        {
          title: "Landscape planning",
          content:
            "We assess your current system and design the optimal S/4HANA environment. This includes infrastructure sizing, architecture planning, and deployment options. Cloud, hybrid, or on-prem — we tailor the solution to your needs. A strategic system landscape ensures long-term efficiency and scalability.",
          features: [],
        },
        {
          title: "Migration strategy",
          content:
            "We help choose the right approach — greenfield, brownfield, or bluefield. Detailed pre-migration planning ensures minimal risk and aligned goals. We support deployment flexibility across cloud or on-prem platforms. Post-migration services ensure smooth stabilization and user adoption.",
          features: [],
        },
        {
          title: "Data validation",
          content:
            "We identify and retain only essential data to speed up migration. Redundant, obsolete, or inconsistent data is removed or corrected. Data quality is improved before, during, and after migration. Clean data leads to accurate reporting and better system performance.",
          features: [],
        },
        {
          title: "Implementation readiness",
          content:
            "We align migration activities with business timelines and goals. Project scope, resources, and dependencies are clearly defined. System readiness and compatibility are assessed upfront. This structured approach ensures seamless execution and governance.",
          features: [],
        },
        {
          title: "Concept validation",
          content:
            "We conduct a controlled PoC to test scenarios before full rollout. A sandbox environment helps simulate and validate migration flows. Potential challenges are addressed early through real-time testing. PoC builds confidence and ensures stakeholder alignment.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights that matter",
      stats: [
        {
          number: 57,
          label: "Migration by 2027",
          content:
            "57% of organizations expect to complete S/4 HANA migration by 2027 to meet SAP’s ECC sunset deadline.",
        },
        {
          number: 62,
          label: "Greenfield benefits",
          content:
            "62% of companies using greenfield approaches report improved process redesign and system efficiency.",
        },
        {
          number: 71,
          label: "Cloud deployments",
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
      title: "Key benefits of SAP S/4 HANA migration services",
      description:
        "Migrate smarter and faster with tailored strategies that ensure a secure, agile, and high-performing SAP S/4 HANA environment.",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pastel-glyph/64/facc15/intelligent-person.png"
              alt="intelligent-person"
            />
          ),
          title: "Strategic migration planning",
          description:
            "Thorough assessment and roadmap creation align your business goals with the right migration path—greenfield, brownfield, or bluefield.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/data-backup.png"
              alt="data-backup"
            />
          ),
          title: "Clean & reliable data",
          description:
            "Data validation and cleansing processes ensure quality, accuracy, and consistency during and after the migration.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-juicy-fish/64/facc15/external-flexible-arrows-outline-outline-juicy-fish-2.png"
              alt="external-flexible-arrows-outline-outline-juicy-fish-2"
            />
          ),
          title: "Flexible deployment options",
          description:
            "Whether cloud, hybrid, or on-premise, your system landscape is optimized for scalability, compliance, and performance.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/medium-risk.png"
              alt="medium-risk"
            />
          ),
          title: "Risk-free execution",
          description:
            "Proof of Concept and readiness checks help identify challenges early, enabling smoother implementation with minimal risk.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/dashboard.png"
              alt="dashboard"
            />
          ),
          title: "Improved system performance",
          description:
            "Post-migration optimization ensures faster processing, real-time analytics, and enhanced operational efficiency.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/64/facc15/external-data-architecture-data-engineering-solid-solidglyph-m-oki-orlando.png"
              alt="external-data-architecture-data-engineering-solid-solidglyph-m-oki-orlando"
            />
          ),
          title: "Future-ready architecture",
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
              className="h-8 w-8"
              src="https://img.icons8.com/material-sharp/64/increase-profits.png"
              alt="increase-profits"
            />
          ),
          title: "Faster time to value",
          description:
            "Accelerate your transformation with structured planning and proven execution strategies. Achieve tangible business benefits quickly with our expert-led migration approach.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-wichaiwi/64/external-development-business-outline-wichaiwi.png"
              alt="external-development-business-outline-wichaiwi"
            />
          ),
          title: "Optimized performance",
          description:
            "Experience faster processing, real-time analytics, and streamlined operations with SAP S/4 HANA. Unlock the full value of your system with enhanced responsiveness.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-check-multimedia-kiranshastry-lineal-kiranshastry.png"
              alt="external-check-multimedia-kiranshastry-lineal-kiranshastry"
            />
          ),
          title: "Future-ready foundation",
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
      title: "What our SAP discovery & evaluation services can do for you",
      description:
        "Choosing the right SAP solution is one of the most important strategic decisions a business can make. Our Discovery & Evaluation services guide you through the early stages of transformation by assessing current processes, aligning technology needs, and developing a clear roadmap. With structured analysis and outcome-driven planning, we help ensure your SAP investment delivers long-term value.",
    },
    offeringsSection: {
      departments: [
        {
          title: "Solution mapping",
          content:
            "We define how SAP solutions can align with your business priorities and future growth plans. By analyzing goals and operational needs, we outline the best-fit SAP functionalities. High-level planning includes innovation potential, delivery timelines, and success benchmarks. This strategic blueprint provides a clear path forward for your SAP journey.",
          features: [],
        },
        {
          title: "Investment planning",
          content:
            "We help build a compelling financial case for SAP adoption through detailed cost-benefit analysis. Total Cost of Ownership (TCO) is broken down across implementation, infrastructure, and support. Both tangible and intangible returns—like process efficiency and decision agility—are considered. This empowers leadership to make informed, confident investment decisions.",
          features: [],
        },
        {
          title: "Process optimization",
          content:
            "We examine existing workflows to detect bottlenecks and improvement opportunities. Our analysis translates process performance data into actionable recommendations. Proposed enhancements are mapped against SAP’s capabilities and features. You gain clarity on how SAP will improve efficiency and outcomes.",
          features: [],
        },
        {
          title: "System planning",
          content:
            "We evaluate your current IT environment against future SAP infrastructure needs. Gap analysis reveals where upgrades, integrations, or redesigns are required. A future-state architecture plan is developed, fully aligned with business strategy. This ensures IT infrastructure is scalable, secure, and implementation-ready.",
          features: [],
        },
        {
          title: "Fit analysis",
          content:
            "We assess how SAP solutions align with your current processes and business requirements. Mismatch areas are documented, along with suggestions for standardization or enhancement. Customizations are evaluated for their cost, impact, and necessity. This ensures your chosen SAP path is technically and functionally viable.",
          features: [],
        },
        {
          title: "Integration readiness",
          content:
            "We study your existing systems to identify dependencies and migration challenges. Data, applications, and legacy platforms are analyzed for compatibility with SAP. We outline integration pathways that ensure seamless connectivity and data flow. A phased roadmap is created to support smooth, disruption-free migration.",
          features: [],
        },
        {
          title: "Scope estimation",
          content:
            "We define the complete project scope including business areas, modules, and system touchpoints. System volumes, data complexity, and process depth are factored into effort estimates. Resource, cost, and timeline forecasts are developed to ensure accurate planning. This groundwork supports effective delivery, budgeting, and stakeholder alignment.",
          features: [],
        },
      ],
    },
    insightsSection: {
      title: "Insights that matter",
      stats: [
        {
          number: 50,
          label: "Discovery impact",
          content:
            "Success in ERP projects often depends on a strong foundation built during early evaluation.",
        },
        {
          number: 34,
          label: "Cloud success",
          content:
            "Well-structured SAP assessments play a key role in effective cloud migrations.",
        },
        {
          number: 25,
          label: "Assessment growth",
          content:
            "The rise in cloud-focused evaluations reflects a growing emphasis on early planning.",
        },
      ],
    },
    containerSection: {
      description:
        "Design and build a scalable application framework, establish a robust IT foundation, and create a strategic business case that aligns remote connectivity with maximizing SAP value.",
    },
    benefitSection: {
      title: "Key benefits of SAP S/4 HANA migration services",
      description:
        "Transition seamlessly to SAP S/4 HANA with optimized strategies that drive speed, agility, and long-term business value.",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/facc15/critical-thinking.png"
              alt="critical-thinking"
            />
          ),
          title: "Strategic system design",
          description:
            "Tailored landscape planning ensures the ideal infrastructure, whether on cloud, hybrid, or on-premise, supporting scalability and future growth.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/facc15/change.png"
              alt="change"
            />
          ),
          title: "Accelerated transformation",
          description:
            "Pre-defined roadmaps and expert-led execution reduce complexity, enabling faster migration with minimal business disruption.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/facc15/accuracy.png"
              alt="accuracy"
            />
          ),
          title: "Data accuracy & integrity",
          description:
            "Thorough data cleaning and validation enhances system performance and ensures consistent, reliable reporting post-migration.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/facc15/down3.png"
              alt="down3"
            />
          ),
          title: "Minimal downtime",
          description:
            "Migration strategies and proof-of-concept testing minimize business interruptions, ensuring a smooth go-live experience.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/facc15/light-automation.png"
              alt="light-automation"
            />
          ),
          title: "Process innovation",
          description:
            "Unlock redesigned business processes through Greenfield and hybrid approaches, leading to greater efficiency and modernization.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/facc15/cloud-database.png"
              alt="cloud-database"
            />
          ),
          title: "Cloud scalability",
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
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/scales.png"
              alt="scales"
            />
          ),
          title: "Informed decision-making",
          description:
            "Gain clarity on the most suitable SAP solution through structured analysis and fit-gap assessments. Make confident, value-based decisions for long-term success.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/strategy-board.png"
              alt="strategy-board"
            />
          ),
          title: "Future-ready IT strategy",
          description:
            "Develop a scalable architecture and integration roadmap aligned with growth and innovation goals. Ensure your IT is prepared to support the next stage of transformation.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/project-management.png"
              alt="project-management"
            />
          ),
          title: "Confident project planning",
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
          title: "Deployment Support",
          content:
            "We plan and execute SAP configurations for diverse and interconnected operations. Our methods accommodate varying business models while enforcing system integrity. Through careful planning, we reduce delays and prevent costly rework. You get a scalable SAP foundation aligned with enterprise objectives.",
          features: [],
        },
        {
          title: "Smart Customization",
          content:
            "We help strike the right balance between customization and standard SAP best practices. Our team evaluates business needs to avoid unnecessary or costly modifications. This ensures long-term sustainability and simplifies future upgrades. Tailored configurations enhance value without complicating system management.",
          features: [],
        },
        {
          title: "Data Transition",
          content:
            "We validate, cleanse, and migrate legacy data into SAP systems with precision. Processes ensure consistency, eliminate duplicates, and retain critical information. Our ETL practices maintain data quality throughout the project lifecycle. The outcome is a reliable and audit-ready SAP environment.",
          features: [],
        },
        {
          title: "Performance Optimization",
          content:
            "We assess infrastructure and system behavior to ensure optimal runtime performance. Bottlenecks are addressed through proactive tuning and capacity planning. We fine-tune applications like SAP GUI and Fiori for smoother user experience. Long-term performance is sustained with monitoring and growth management.",
          features: [],
        },
        {
          title: "Ecosystem Enablement",
          content:
            "We enable seamless communication between SAP and third-party or legacy systems. Our team ensures consistent, real-time data exchange across platforms. We manage dependencies and integration priorities to minimize disruption. Robust connectivity supports smoother operations and decision-making.",
          features: [],
        },
        {
          title: "Risk Control",
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
          label: "Lower implementation costs",
          content:
            "Structured rollout models help organizations cut expenses during SAP deployment.",
        },
        {
          number: 25,
          label: "Performance improvement",
          content:
            "Ongoing optimization after go-live drives stronger long-term business outcomes.",
        },
        {
          number: 43,
          label: "User adoption importance",
          content:
            "Getting users on board proves to be the most crucial element in successful implementations.",
        },
      ],
    },
    containerSection: {
      description:
        "Our rollout methodology combines global standardization with local flexibility—starting from business process analysis to template creation, localization, and end-user training—ensuring consistent success across all deployment regions.",
    },
    benefitSection: {
      title: "Key benefits of SAP implementation & rollout services",
      description:
        "Achieve faster deployment, stronger adoption, and scalable SAP performance with structured implementation and rollout strategies.",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/facc15/deployment.png"
              alt="deployment"
            />
          ),
          title: "Standardized yet flexible deployment",
          description:
            "Balance global standardization with local adaptability to meet diverse operational and regulatory needs across regions.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/facc15/doughnut-chart.png"
              alt="doughnut-chart"
            />
          ),
          title: "Seamless data transition",
          description:
            "Accurate validation, cleansing, and migration of legacy data ensures high-quality inputs and an audit-ready SAP environment.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/android/64/facc15/user.png"
              alt="user"
            />
          ),
          title: "High user adoption",
          description:
            "Boost user engagement and confidence with tailored training and intuitive SAP interfaces, driving long-term success.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/high-risk.png"
              alt="high-risk"
            />
          ),
          title: "Risk-controlled rollout",
          description:
            "Mitigate technical and operational risks through proactive governance, real-time monitoring, and contingency planning.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/laptop-settings--v2.png"
              alt="laptop-settings--v2"
            />
          ),
          title: "Optimized system performance",
          description:
            "Enhance SAP performance from day one with fine-tuned infrastructure, capacity planning, and continuous optimization.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/wired/64/facc15/ecosystem.png"
              alt="ecosystem"
            />
          ),
          title: "Connected ecosystem",
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
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/deployment.png"
              alt="deployment"
            />
          ),
          title: "Faster global deployment",
          description:
            "Accelerate time-to-value with structured rollout strategies tailored to both regional and global needs. Rapid deployment meets long-term scalability.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/ookla-speedtest.png"
              alt="ookla-speedtest"
            />
          ),
          title: "Enhanced system performance",
          description:
            "Ensure optimal SAP performance from day one with continuous monitoring, capacity planning, and proactive tuning.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/android/64/user.png"
              alt="user"
            />
          ),
          title: "High user adoption",
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
          title: "Upgrade Strategy",
          content:
            "We evaluate your current SAP environment, enhancement packs, and customizations to define the right upgrade path. Feasibility studies and system readiness checks ensure your upgrade is well-scoped and low-risk. Our roadmap balances technical requirements with business timelines for optimal results. You gain a clear, actionable plan tailored to your organization’s needs.",
          features: [],
        },
        {
          title: "Code Analysis",
          content:
            "We identify custom developments that may be affected by the upgrade. Each item is analyzed for compatibility, redundancy, or optimization potential. Recommended adjustments are documented with risk mitigation strategies. This ensures continuity and efficiency post-upgrade.",
          features: [],
        },
        {
          title: "Technical Execution",
          content:
            "We handle the end-to-end execution of your SAP system upgrade—from sandbox to production. Services include backup, system preparation, technical upgrade, and patch management. Downtime is minimized through proven methodologies and phased rollouts. You benefit from a faster, smoother transition with little to no business disruption.",
          features: [],
        },
        {
          title: "Functional Validation",
          content:
            "We ensure that business processes and workflows perform correctly post-upgrade. Testing covers core modules, custom developments, and integrations. Automated testing tools and real-time feedback reduce manual effort and errors. You gain confidence in your system’s functionality and reliability.",
          features: [],
        },
        {
          title: "Post-Upgrade Optimization ",
          content:
            "We fine-tune your upgraded system to enhance performance, stability, and scalability. System monitoring identifies any bottlenecks introduced during the upgrade. Database and infrastructure improvements are implemented where needed. This results in a faster, more responsive SAP environment.",
          features: [],
        },
        {
          title: "Security Enhancements",
          content:
            "We apply the latest SAP security patches and updates during the upgrade. Access controls, user roles, and audit logs are reviewed and updated as required. We ensure alignment with data protection and industry-specific compliance standards. Your upgraded system is safer, more compliant, and easier to govern.",
          features: [],
        },
        {
          title: "Transition Support",
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
      title: "Key benefits of SAP upgrade services",
      description:
        "Enhance system performance, security, and future readiness through expertly managed SAP upgrade strategies.",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/64/facc15/external-transition-animation-royyan-wijaya-detailed-outline-royyan-wijaya-4.png"
              alt="external-transition-animation-royyan-wijaya-detailed-outline-royyan-wijaya-4"
            />
          ),
          title: "Seamless transition",
          description:
            "Phased execution, backup strategies, and minimal downtime ensure a smooth, disruption-free upgrade experience.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/future.png"
              alt="future"
            />
          ),
          title: "Future-ready architecture",
          description:
            "Unlock the latest SAP features and enhancements to stay agile, scalable, and prepared for ongoing innovation.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/laptop-settings--v2.png"
              alt="laptop-settings--v2"
            />
          ),
          title: "Optimized system performance",
          description:
            "Post-upgrade tuning and infrastructure improvements deliver faster response times and enhanced system stability.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/64/facc15/lock-orientation.png"
              alt="lock-orientation"
            />
          ),
          title: "Improved security & compliance",
          description:
            "Apply the latest patches and access controls to align with evolving compliance requirements and safeguard data.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/64/facc15/support.png"
              alt="support"
            />
          ),
          title: "Protected custom code",
          description:
            "Custom code impact analysis and mitigation strategies ensure continuity and compatibility post-upgrade.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/parakeet-line/64/facc15/group.png"
              alt="group"
            />
          ),
          title: "Empowered users",
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
              className="h-8 w-8"
              src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/64/external-download-video-and-movie-tanah-basah-basic-outline-tanah-basah.png"
              alt="external-download-video-and-movie-tanah-basah-basic-outline-tanah-basah"
            />
          ),
          title: "Minimal downtime",
          description:
            "Upgrade without interrupting operations using proven tools, automation, and phased execution. Business continues while systems improve.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/square.png"
              alt="square"
            />
          ),
          title: "Future-ready systems",
          description:
            "Leverage the latest SAP capabilities to enhance agility, scalability, and long-term innovation. Your systems stay aligned with evolving needs.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/android/64/user.png"
              alt="user"
            />
          ),
          title: "Smooth user adoption",
          description:
            "Empower teams with training, support, and intuitive enhancements for higher satisfaction and productivity post-upgrade.",
        },
      ],
    },
  },
];

export default servicesData;
