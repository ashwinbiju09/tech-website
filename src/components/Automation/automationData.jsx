import AIHero from "../../assets/automation/Hero/ai-agents_hero-min.jpg";
import AIInfo from "../../assets/automation/Services/ai-agents_overview-min.jpg";
import WorkHero from "../../assets/automation/Hero/workflow_hero-min.jpg";
import WorkInfo from "../../assets/automation/Services/workflow_overview-min.jpg";
import IDPHero from "../../assets/automation/Hero/document_hero-min.jpg";
import IDPInfo from "../../assets/automation/Services/document_overview-min.jpg";
import PIHero from "../../assets/automation/Hero/process-opportunities_hero-min.jpg";
import PIInfo from "../../assets/automation/Services/process-opportunities_overview-min.jpg";
import AOHero from "../../assets/automation/Hero/end-to-end_hero-min.jpg";
import AOInfo from "../../assets/automation/Services/end-to-end_overview-min.jpg";

const automationData = [
  {
    slug: "ai-agents",
    heroSection: {
      image: AIHero,
      title: "Development and Integration of AI Agents",
      description:
        "Build, deploy, and manage adaptive AI agents that enhance workflows, automate complex tasks, and generate real-time insights—without draining human resources.",
    },
    infoSection: {
      image: AIInfo,
      title: "What Is Development and Integration of AI Agents?",
      description:
        "Development and Integration of AI Agent is a solution that empowers businesses with intelligent, data-driven agents to automate routine tasks, optimize resource use, and speed up decision-making through customized workflows and integrated governance.",
    },
    featuresSection: {
      title: "Standout Features",
      description:
        "Leverage powerful AI tools to drive automation, enhance collaboration, and maintain compliance with seamless integration into your current systems.",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-ddara-lineal-ddara/64/0a1f36/external-decision-making-managements-ddara-lineal-ddara.png"
              alt="external-decision-making-managements-ddara-lineal-ddara"
            />
          ),
          title: "Adaptive Decision-Making",
          description:
            "Handle nuanced tasks like recommending product replacements or processing requests, allowing teams to focus on high-value projects.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/0a1f36/collaborating-in-circle.png"
              alt="collaborating-in-circle"
            />
          ),
          title: "Cross-Department Collaboration",
          description:
            "Integrate AI agents across departments and platforms to unify data usage, streamline processes, and drive synchronized performance.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/0a1f36/invisible.png"
              alt="invisible"
            />
          ),
          title: "End-to-End Visibility & Governance",
          description:
            "Ensure full traceability of AI actions with detailed logs and audit trails to support compliance, privacy, and accountability.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/64/0a1f36/fingerprint-accepted.png"
              alt="fingerprint-accepted"
            />
          ),
          title: "Built-In Security & Privacy Controls",
          description:
            "Utilize encryption and permission-based access to maintain confidentiality while maximizing AI capabilities across your organization.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-regular/64/0a1f36/globe--v1.png"
              alt="globe--v1"
            />
          ),
          title: "Real-World Training & Grounding",
          description:
            "Train AI agents using your company’s data for contextual accuracy and alignment with business goals.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-others-pike-picture/64/0a1f36/external-System-Integration-system-others-pike-picture.png"
              alt="external-System-Integration-system-others-pike-picture"
            />
          ),
          title: "Seamless System Integration",
          description:
            "Connect with your internal models, databases, and workflows for uninterrupted performance and real-time operational support.",
        },
      ],
    },
    benefitsSection: {
      title: "Advantages Gained",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-wichaiwi/64/facc15/external-efficiency-workation-outline-wichaiwi.png"
              alt="external-efficiency-workation-outline-wichaiwi"
            />
          ),
          title: "Greater Operational Efficiency",
          description:
            "Delegate repetitive, decision-heavy tasks to AI, freeing teams to focus on strategic growth initiatives.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/collaboration.png"
              alt="collaboration"
            />
          ),
          title: "Enhanced Collaboration",
          description:
            "Enable cross-functional teams like sales, logistics, and support to work under a unified AI infrastructure.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/material-outlined/64/facc15/trust--v1.png"
              alt="trust--v1"
            />
          ),
          title: "Unparalleled Compliance & Trust",
          description:
            "Operate securely with robust privacy measures and transparent, auditable AI governance.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-geotatah/64/facc15/external-competitive-sustainable-competitive-advantage-outline-geotatah.png"
              alt="external-competitive-sustainable-competitive-advantage-outline-geotatah"
            />
          ),
          title: "Competitive Edge & Scalability",
          description:
            "Evolve with the market by scaling your AI agents in line with business growth and changing demands.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/facc15/decision-making.png"
              alt="decision-making"
            />
          ),
          title: "Faster Decision-Making",
          description:
            "Use real-time insights from trained AI agents to drive confident, data-backed decisions instantly.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/64/facc15/external-Resource-human-resources-smashingstocks-mixed-smashing-stocks.png"
              alt="external-Resource-human-resources-smashingstocks-mixed-smashing-stocks"
            />
          ),
          title: "Optimized Resource Allocation",
          description:
            "Streamline operations by letting AI manage routine tasks, reducing overhead and increasing productivity.",
        },
      ],
    },

    ctaSection: {
      description:
        "Let’s build intelligent, adaptive solutions tailored to your business needs. Start automating smarter today.Contact our experts today to Get Started with AI Agents.",
    },
  },
  {
    slug: "workflow-optimization",
    heroSection: {
      image: WorkHero,
      title: "Workflow Optimization",
      description:
        "Automate, connect, and optimize your end-to-end processes with a user-friendly platform that minimizes manual tasks, accelerates development, and delivers consistent, accurate results across your enterprise.",
    },
    infoSection: {
      image: WorkInfo,
      title: "What Is Workflow Optimization?",
      description:
        "Workflow Optimization is an intelligent automation solution that enables both business and technical users to design, orchestrate, and secure complex workflows. With pre-built integrations, custom APIs, and robust governance, it transforms manual tasks into efficient automations that drive productivity and scalability.",
    },
    featuresSection: {
      title: "Standout Features",
      description:
        "Leverage intuitive design tools, flexible integrations, and built-in security to build resilient, scalable workflows that align with your business needs.",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/0a1f36/process.png"
              alt="process"
            />
          ),
          title: "Process Composer",
          description:
            "Create and manage workflows using a visual drag-and-drop interface that simplifies complex process design across departments.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/0a1f36/cloud-database.png"
              alt="cloud-database"
            />
          ),
          title: "Cloud-Enabled Integrations",
          description:
            "Deploy and manage automations anytime, anywhere with pre-built or custom APIs, ensuring speed and reliability at scale.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/quill/64/0a1f36/backend-development.png"
              alt="backend-development"
            />
          ),
          title: "Open Development Environment",
          description:
            "Use popular scripting languages like .NET, Python, Java, and JS for custom logic, offering full flexibility from concept to deployment.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/0a1f36/settings-3.png"
              alt="settings-3"
            />
          ),
          title: "Resilient Automation Framework",
          description:
            "Automate interactions across applications and devices with features like built-in pop-up handling for uninterrupted performance.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/0a1f36/cyber-security.png"
              alt="cyber-security"
            />
          ),
          title: "Built-In Security and Compliance",
          description:
            "Apply role-based access controls and track all workflow changes to maintain enterprise-grade security and regulatory compliance.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/0a1f36/bullet-camera.png"
              alt="bullet-camera"
            />
          ),
          title: "Real-Time Monitoring & Optimization",
          description:
            "Continuously improve operations with actionable analytics, allowing teams to monitor, analyze, and optimize workflows over time.",
        },
      ],
    },
    benefitsSection: {
      title: "Advantages Gained",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/gears.png"
              alt="gears"
            />
          ),
          title: "Faster Automation Deployment",
          description:
            "Accelerate automation initiatives with ready-to-use tools that minimize the need for extensive coding and setup time.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/define-location--v1.png"
              alt="define-location--v1"
            />
          ),
          title: "Higher Accuracy and Reliability",
          description:
            "Reduce human error and ensure quality outcomes with pre-validated processes and structured automation flows.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/facc15/external-productivity-soft-skills-parzival-1997-detailed-outline-parzival-1997.png"
              alt="external-productivity-soft-skills-parzival-1997-detailed-outline-parzival-1997"
            />
          ),
          title: "Improved Productivity",
          description:
            "Free teams from repetitive manual tasks so they can focus on innovation and strategic growth initiatives.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-wichaiwi/64/facc15/external-operational-business-risks-outline-wichaiwi.png"
              alt="external-operational-business-risks-outline-wichaiwi"
            />
          ),
          title: "Lower Operational Costs",
          description:
            "Reduce overhead by eliminating labor-intensive processes and maximizing the efficiency of your workforce.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/glyph-neue/64/facc15/settings-3.png"
              alt="settings-3"
            />
          ),
          title: "Scalable Automation Architecture",
          description:
            "Adapt workflows quickly as business demands evolve, with no need for major development cycles or overhauls.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/sf-black/64/facc15/collaboration.png"
              alt="collaboration"
            />
          ),
          title: "Unified Collaboration Platform",
          description:
            "Empower both technical and non-technical users to contribute to workflow design and execution through a shared automation hub.",
        },
      ],
    },

    ctaSection: {
      description:
        "Discover how automation can reduce errors, boost productivity, and accelerate your business growth. Contact out support team to Optimize My Workflow",
    },
  },
  {
    slug: "intelligent-document-processing",
    heroSection: {
      image: IDPHero,
      title: "Intelligent Document Processing and Automation",
      description:
        "Reimagine how your organization handles large volumes of paperwork. Harness AI to classify, extract, and validate data—delivering accurate information faster and with fewer errors.",
    },
    infoSection: {
      image: IDPInfo,
      title: "What Is Intelligent Document Processing and Automation?",
      description:
        "Intelligent Document Processing and Automation is a service that streamlines data extraction and validation from documents like invoices, contracts, and shipping forms. By replacing manual entry with AI-driven automation, it enhances speed, accuracy, and compliance across your workflows.",
    },
    featuresSection: {
      title: "Standout Features",
      description:
        "Automate end-to-end document handling using pre-processing tools, intelligent extraction, and secure integration—ensuring high data quality and operational efficiency.",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-black-m-oki-orlando/64/0a1f36/external-data-preprocessing-data-engineering-outline-outline-black-m-oki-orlando.png"
              alt="external-data-preprocessing-data-engineering-outline-outline-black-m-oki-orlando"
            />
          ),
          title: "Pre-Processing Tools",
          description:
            "Improve document clarity with automated noise reduction, binarization, and image correction.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/0a1f36/add-rule.png"
              alt="add-rule"
            />
          ),
          title: "Document Classification & Splitting",
          description:
            "Automatically separate and categorize documents to streamline downstream processing.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/0a1f36/external-data-extraction-data-engineering-solid-solidglyph-m-oki-orlando.png"
              alt="external-data-extraction-data-engineering-solid-solidglyph-m-oki-orlando"
            />
          ),
          title: "Advanced Data Extraction",
          description:
            "Capture precise data fields using AI trained to recognize and extract content from any document type.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-black-m-oki-orlando/64/0a1f36/external-data-validation-data-engineering-outline-outline-black-m-oki-orlando.png"
              alt="external-data-validation-data-engineering-outline-outline-black-m-oki-orlando"
            />
          ),
          title: "Flexible Data Validation",
          description:
            "Apply custom rules and AI logic to validate extracted data for improved accuracy and control.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/50/0a1f36/sync-settings.png"
              alt="sync-settings"
            />
          ),
          title: "AI-Driven Workflow Integration",
          description:
            "Incorporate extracted data into enterprise systems quickly through seamless cloud or on-prem integration.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/0a1f36/private2.png"
              alt="private2"
            />
          ),
          title: "Secure Deployment Options",
          description:
            "Deploy in private or public cloud environments while maintaining compliance and data protection standards.",
        },
      ],
    },
    benefitsSection: {
      title: "Advantages Gained",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/50/facc15/conference.png"
              alt="conference"
            />
          ),
          title: "Faster Business Processes",
          description:
            "Accelerate document handling and minimize delays in mission-critical workflows.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/pulsar-line/64/facc15/accuracy.png"
              alt="accuracy"
            />
          ),
          title: "Improved Accuracy",
          description:
            "Reduce costly errors through automated extraction, real-time validation, and quality control.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/64/facc15/test-passed.png"
              alt="test-passed"
            />
          ),
          title: "Enhanced Compliance & Security",
          description:
            "Ensure secure processing of sensitive data and maintain adherence to regulatory standards.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/dotty/64/facc15/low-price.png"
              alt="low-price"
            />
          ),
          title: "Reduced Total Costs",
          description:
            "Lower manual effort and setup expenses using pre-trained AI models and simplified deployment.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/gears--v1.png"
              alt="gears--v1"
            />
          ),
          title: "Scalable Automation",
          description:
            "Expand document processing capabilities easily to meet evolving business demands.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/fluency-systems-filled/64/facc15/merge-arrow.png"
              alt="merge-arrow"
            />
          ),
          title: "Seamless Integration",
          description:
            "Connect effortlessly with existing enterprise applications for uninterrupted data flow and operations.",
        },
      ],
    },

    ctaSection: {
      description:
        "Automate data extraction and validation to save time, reduce errors, and improve compliance across your workflows. Contact our team to automate your document processing",
    },
  },
  {
    slug: "process-intelligence",
    heroSection: {
      image: PIHero,
      title: "Process Intelligence and Opportunity Discovery",
      description:
        "Gain in-depth visibility into your workflows, uncover inefficiencies, and identify areas for automation using AI-powered process analysis and real-time insights.",
    },
    infoSection: {
      image: PIInfo,
      title: "What Is Process Intelligence and Opportunity Discovery?",
      description:
        "Process Intelligence and Opportunity Discovery is an AI-driven analysis tool that captures operational data across systems like mainframes and virtual desktops. It transforms complex workflows into intuitive maps, helping organizations pinpoint automation opportunities while ensuring security and compliance.",
    },
    featuresSection: {
      title: "Standout Features",
      description:
        "Capture, analyze, and visualize real-time process data across platforms to uncover automation potential and ensure compliance with built-in privacy controls.",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-black-m-oki-orlando/64/0a1f36/external-classification-data-science-outline-outline-black-m-oki-orlando.png"
              alt="external-classification-data-science-outline-outline-black-m-oki-orlando"
            />
          ),
          title: "Comprehensive Capture & Classification",
          description:
            "Collect and classify process data from VDIs, mainframes, and other applications to enable thorough and scalable analysis.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/0a1f36/process--v1.png"
              alt="process--v1"
            />
          ),
          title: "Clear Process Mapping",
          description:
            "Visualize workflows through intuitive flow graphs that simplify complex operations for better understanding and optimization.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/0a1f36/for-experienced.png"
              alt="for-experienced"
            />
          ),
          title: "Advanced Process Intelligence",
          description:
            "Leverage AI and computer vision to detect process inefficiencies, anomalies, and automation opportunities in real time.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/64/0a1f36/side-gate-closed.png"
              alt="side-gate-closed"
            />
          ),
          title: "Privacy Enhanced Gateway (PEG)",
          description:
            "Protect sensitive information using built-in tools that redact data and maintain compliance with privacy regulations.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/64/0a1f36/external-social-social-media-basic-others-anggara-putra-36.png"
              alt="external-social-social-media-basic-others-anggara-putra-36"
            />
          ),
          title: "Real-Time Operational Insight",
          description:
            "Gain actionable insights into key performance metrics, enabling data-driven decisions and faster improvements.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/64/0a1f36/private-lock.png"
              alt="private-lock"
            />
          ),
          title: "End-to-End Security & Compliance",
          description:
            "Enforce strict privacy protocols and monitor data access across workflows to reduce legal and compliance risks.",
        },
      ],
    },
    benefitsSection: {
      title: "Advantages Gained",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/64/facc15/performance-macbook.png"
              alt="performance-macbook"
            />
          ),
          title: "Enhanced Efficiency",
          description:
            "Reduce onboarding times by up to 70% and manual data entry by 40%, accelerating your key business processes.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/64/facc15/visible--v1.png"
              alt="visible--v1"
            />
          ),
          title: "Clear Visibility",
          description:
            "Map over 200 end-to-end processes to build a comprehensive understanding of current workflows before automating.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-glyphs/64/facc15/requirements.png"
              alt="requirements"
            />
          ),
          title: "Stronger Compliance",
          description:
            "Ensure data protection and privacy with advanced redaction and access control features.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-outline-black-m-oki-orlando/64/facc15/external-roi-digital-marketing-outline-outline-black-m-oki-orlando-2.png"
              alt="external-roi-digital-marketing-outline-outline-black-m-oki-orlando-2"
            />
          ),
          title: "Rapid ROI on Automation",
          description:
            "Identify and prioritize high-impact automation opportunities, delivering faster results and measurable value.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/facc15/external-optimization-marketing-seo-flatart-icons-solid-flatarticons.png"
              alt="external-optimization-marketing-seo-flatart-icons-solid-flatarticons"
            />
          ),
          title: "Scalable Optimization",
          description:
            "Continuously analyze and refine processes as your business grows and requirements evolve.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/material-outlined/64/facc15/for-experienced.png"
              alt="for-experienced"
            />
          ),
          title: "Unified Process Intelligence",
          description:
            "Centralize insights from diverse systems and platforms to create a single source of operational truth.",
        },
      ],
    },

    ctaSection: {
      description:
        "Discover automation opportunities with real-time insights and drive smarter, faster decisions across your organization. Contact our team to Explore Process Intelligence",
    },
  },
  {
    slug: "automation-orchestration",
    heroSection: {
      image: AOHero,
      title: "End-to-End Automation Orchestration",
      description:
        "Unlock enterprise-wide efficiency by combining generative AI with intelligent automation tools to fast-track development, reduce coding errors, and streamline process execution.",
    },
    infoSection: {
      image: AOInfo,
      title: "What Is End-to-End Automation Orchestration?",
      description:
        "End-to-End Automation Orchestration is a powerful solution that transforms process documentation into API-driven, ready-to-deploy workflows. By using AI-driven tools, it enables both developers and business teams to accelerate automation, minimize manual coding, and scale operations seamlessly.",
    },
    featuresSection: {
      title: "Standout Features",
      description:
        "Combine AI guidance with automation technology to rapidly convert ideas into scalable, resilient workflows that adapt to change and drive sustainable growth.",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/windows/64/0a1f36/autopilot.png"
              alt="autopilot"
            />
          ),
          title: "Autopilot for Instant Transformation",
          description:
            "Instantly convert documented processes into automation workflows without manual coding—accelerating time to deployment.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/0a1f36/automatic.png"
              alt="automatic"
            />
          ),
          title: "Automation Co-Pilot for Developers",
          description:
            "Get AI-driven recommendations and best practices to speed development and focus on value-adding coding tasks.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/0a1f36/fliki.png"
              alt="fliki"
            />
          ),
          title: "Generative Recorder for Self-Healing Automations",
          description:
            "Create adaptive workflows that detect and adjust to system and application changes automatically.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/0a1f36/ai-chatting.png"
              alt="ai-chatting"
            />
          ),
          title: "AI-Assisted Workflows",
          description:
            "Leverage ML insights to uncover optimization opportunities and future-proof your automation strategy.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/64/0a1f36/external-scalable-start-it-up-parzival-1997-detailed-outline-parzival-1997.png"
              alt="external-scalable-start-it-up-parzival-1997-detailed-outline-parzival-1997"
            />
          ),
          title: "Scalable Architecture",
          description:
            "Deploy and manage automation at scale with reusable templates and governance built in.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-ddara-lineal-ddara/64/0a1f36/external-resilience-leadership-success-business-skill-reaction-strong-life-skills-ddara-lineal-ddara.png"
              alt="external-resilience-leadership-success-business-skill-reaction-strong-life-skills-ddara-lineal-ddara"
            />
          ),
          title: "End-to-End Resilience",
          description:
            "Ensure stability and uptime with automation systems that dynamically adjust to change.",
        },
      ],
    },
    benefitsSection: {
      title: "Advantages Gained",
      benefits: [
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/delivery--v1.png"
              alt="delivery--v1"
            />
          ),
          title: "Accelerated Project Delivery",
          description:
            "Speed up development timelines by up to 30% with AI-powered guidance and automation design tools.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/facc15/external-resource-talent-management-flatart-icons-outline-flatarticons.png"
              alt="external-resource-talent-management-flatart-icons-outline-flatarticons"
            />
          ),
          title: "Improved Resource Allocation",
          description:
            "Allow teams to focus on strategic initiatives by minimizing time spent on repetitive coding and maintenance.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-yogi-aprelliyanto-glyph-yogi-aprelliyanto/64/facc15/external-quality-online-marketing-yogi-aprelliyanto-glyph-yogi-aprelliyanto.png"
              alt="external-quality-online-marketing-yogi-aprelliyanto-glyph-yogi-aprelliyanto"
            />
          ),
          title: "Higher Quality & Reliability",
          description:
            "Build robust, self-healing automation systems that adapt to changes and reduce maintenance efforts.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios/64/facc15/piece-of-evidence.png"
              alt="piece-of-evidence"
            />
          ),
          title: "Future-Proof Scalability",
          description:
            "Confidently scale automation across departments with evolving AI capabilities and reusable workflows.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/64/facc15/external-download-video-and-movie-tanah-basah-basic-outline-tanah-basah.png"
              alt="external-download-video-and-movie-tanah-basah-basic-outline-tanah-basah"
            />
          ),
          title: "Reduced Downtime",
          description:
            "Ensure business continuity with systems that self-adjust to application or API changes in real time.",
        },
        {
          icon: (
            <img
              className="h-8 w-8"
              src="https://img.icons8.com/ios-filled/64/facc15/settings-3.png"
              alt="settings-3"
            />
          ),
          title: "Unified Automation Strategy",
          description:
            "Enable business and technical teams to collaborate on a single platform with clear governance and oversight.",
        },
      ],
    },

    ctaSection: {
      description:
        "Transform documentation into resilient, AI-powered workflows and scale automation across your entire organization. Contact our team to Start Automating Smarter",
    },
  },
];

export default automationData;
