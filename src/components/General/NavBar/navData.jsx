const navLinks = [
  {
    name: "Solutions",
    subMenu: [
      {
        Heading: "ERP Consulting",
        subMenu: [
          {
            name: "SAP Consulting",
            subMenu: [
              { name: "SAP S/4HANA", path: "/sap-solutions/sap-s4-hana" },
              {
                name: "SAP S/4HANA Public Cloud",
                path: "/sap-solutions/sap-s4hana-public-cloud",
              },
              {
                name: "SAP S/4HANA Private Cloud",
                path: "/sap-solutions/sap-s4hana-private-cloud",
              },
              {
                name: "SAP Financial Management",
                path: "/sap-solutions/sap-financial-management",
              },
              {
                name: "SAP Analytics Cloud Planning",
                path: "/sap-solutions/sap-analytics-cloud-planning",
              },
              {
                name: "SAP Group Reporting",
                path: "/sap-solutions/sap-group-reporting",
              },
              {
                name: "SAP PaPM",
                path: "/sap-solutions/sap-profitability-and-performance-management",
              },
              {
                name: "SAP Commerce Cloud",
                path: "/sap-solutions/sap-commerce-cloud",
              },
              {
                name: "SAP Sales Cloud",
                path: "/sap-solutions/sap-sales-cloud",
              },
              {
                name: "SAP Service Cloud",
                path: "/sap-solutions/sap-service-cloud",
              },
              { name: "SAP Emarsys", path: "/sap-solutions/sap-emarsys" },
              {
                name: "SAP Sustainability",
                path: "/sap-solutions/sap-sustainability",
              },
              { name: "SAP E-Mobility", path: "/sap-solutions/sap-e-mobility" },
              { name: "SAP CPI", path: "/sap-solutions/sap-cpi" },
              { name: "SAP Build Apps", path: "/sap-solutions/sap-build-apps" },
              {
                name: "SAP SuccessFactors HCM",
                path: "/sap-solutions/sap-successfactors",
              },
              {
                name: "SAP Business AI",
                path: "/sap-solutions/sap-business-ai",
              },
            ],
          },
          {
            name: "Epicor Consulting",
            subMenu: [
              { name: "Supply Chain", path: "/epicor-solutions/supply-chain" },
              {
                name: "Epicor Project Management",
                path: "/epicor-solutions/epicor-project-management",
              },
              {
                name: "Epicor Production Management",
                path: "/epicor-solutions/epicor-production-management",
              },
              {
                name: "Epicor Financial Management",
                path: "/epicor-solutions/epicor-financial-management",
              },
              {
                name: "Epicor HR Management",
                path: "/epicor-solutions/epicor-hr-management",
              },
              {
                name: "Epicor Service Asset Management",
                path: "/epicor-solutions/epicor-service-asset-management",
              },
              {
                name: "Epicor Kinetic CRM",
                path: "/epicor-solutions/epicor-kinetic-crm",
              },
            ],
          },
        ],
      },
      {
        name: "Enhanced Add-ons",
        subMenu: [
          {
            name: "Asset  Management",
            path: "/enhanced-addons/asset-management-system",
          },
          {
            name: "Digital Retail & Platform",
            path: "/enhanced-addons/digital-retail-platform",
          },
          {
            name: "Distribution Management System",
            path: "/enhanced-addons/distribution-management-system",
          },
          {
            name: "Field Service Management",
            path: "/enhanced-addons/field-service-management",
          },
          {
            name: "Real Estate Management & Systems",
            path: "/enhanced-addons/real-estate-management-systems",
          },
          {
            name: "Sales Force Automation",
            path: "/enhanced-addons/sales-force-automation",
          },
          {
            name: "Subscription Billing & Management",
            path: "/enhanced-addons/subscription-billing-management",
          },
          {
            name: "Vendor Management Solution",
            path: "/enhanced-addons/vendor-management-solution",
          },
          {
            name: "Document Delivery Automation Services",
            path: "/enhanced-addons/document-delivery-automation",
          },
          {
            name: "Compliance Management Software",
            path: "/enhanced-addons/compliance-management-software",
          },
          {
            name: "No-Code Work Platform",
            path: "/enhanced-addons/no-code-work-platform",
          },
          {
            name: "Procurement Software",
            path: "/enhanced-addons/procurement-software",
          },
          {
            name: "Project Management Software",
            path: "/enhanced-addons/project-management-software",
          },
        ],
      },
      {
        name: "AI Automation",
        subMenu: [
          {
            name: "Build AI Agents",
            path: "/ai-automation/ai-agents",
          },
          {
            name: "Workflow Optimization",
            path: "/ai-automation/workflow-optimization",
          },
          {
            name: "Intelligent Document Processing and Automation",
            path: "/ai-automation/intelligent-document-processing",
          },
          {
            name: "Process Intelligence and Opportunity Discovery",
            path: "/ai-automation/process-intelligence",
          },
          {
            name: "End-to-End Automation Orchestration",
            path: "/ai-automation/automation-orchestration",
          },
        ],
      },
    ],
  },
  {
    name: "Services",
    subMenu: [
      {
        name: "Strategy and Consulting",
        subMenu: [
          {
            name: "Business Consulting",
            path: "/services/business-consulting-services",
          },
          {
            name: "Process Consulting",
            path: "/services/process-consulting-services",
          },
          {
            name: "Technology Consulting",
            path: "/services/technology-consulting-services",
          },
        ],
      },
      {
        name: "SAP Support",
        subMenu: [
          {
            name: "SAP Managed Services",
            path: "/services/sap-managed-services",
          },
          {
            name: "SAP AMS",
            path: "/services/application-management-services",
          },
          {
            name: "SAP S/4HANA Migration",
            path: "/services/sap-s4-hana-migration-services",
          },
          {
            name: "SAP Discovery & Evaluation",
            path: "/services/sap-discovery-evaluation-services",
          },
          {
            name: "SAP Implementation & Rollout",
            path: "/services/sap-implementation-rollout-services",
          },
          {
            name: "SAP Upgrade Services",
            path: "/services/sap-upgrade-services",
          },
        ],
      },
    ],
  },
  {
    name: "Industries",
    subMenu: [
      {
        name: "Retail",
        subMenu: [
          {
            name: "Fashion & Apparel",
            path: "/industries/fashion-and-apparel",
          },
          { name: "Grocery", path: "/industries/grocery" },
          { name: "Specialty Retail", path: "/industries/specialty-retail" },
          {
            name: "Healthcare & Wellness",
            path: "/industries/healthcare-wellness",
          },
          { name: "Department Stores", path: "/industries/department-stores" },
          {
            name: "Wholesale Distribution",
            path: "/industries/wholesale-distribution",
          },
          { name: "Gems & Jewelry", path: "/industries/gems-jewelry" },
        ],
      },
      {
        name: "Consumer Products",
        subMenu: [
          { name: "Food & Beverage", path: "/industries/food-beverages" },
          { name: "Consumer Durables", path: "/industries/consumer-durables" },
          {
            name: "Home & Personal Care",
            path: "/industries/home-personal-care",
          },
        ],
      },
      {
        name: "Manufacturing",
        subMenu: [
          {
            name: "Automotive Manufacturing",
            path: "/industries/automotive-manufacturing",
          },
          {
            name: "Process Manufacturing",
            path: "/industries/process-manufacturing",
          },
          {
            name: "Discrete Manufacturing",
            path: "/industries/discrete-manufacturing",
          },
        ],
      },
      {
        name: "Engineering & Construction",
        subMenu: [
          {
            name: "EC&O",
            path: "/industries/engineering-construction-operations",
          },
          { name: "Real Estate", path: "/industries/real-estate" },
        ],
      },
      {
        name: "Oil, Gas, & Energy",
        subMenu: [
          { name: "Power Generation", path: "/industries/power-generation" },
          { name: "Renewable Energy", path: "/industries/renewable-energy" },
          { name: "Energy Retail", path: "/industries/energy-retail" },
          { name: "Smart Grid", path: "/industries/smart-grid" },
          {
            name: "Transmission & Distribution",
            path: "/industries/transmission-distribution",
          },
        ],
      },
      {
        name: "Professional Services",
        subMenu: [
          {
            name: "Information Technology",
            path: "/industries/information-technology",
          },
          { name: "Travel & Tourism", path: "/industries/travel-tourism" },
        ],
      },
      {
        name: "Life Sciences & Healthcare",
        subMenu: [
          {
            name: "Pharmaceutical & Biotech",
            path: "/industries/pharmaceutical-biotech",
          },
          { name: "Medical Devices", path: "/industries/medical-devices" },
          { name: "Hospital & Clinics", path: "/industries/hospital-clinics" },
        ],
      },
      {
        name: "Banking & Financial Services",
        subMenu: [
          { name: "Banking", path: "/industries/banking" },
          { name: "Insurance", path: "/industries/insurance" },
          {
            name: "Financial Institutions",
            path: "/industries/financial-institutions",
          },
        ],
      },
      {
        name: "Education",
        subMenu: [
          {
            name: "Business Information Services",
            path: "/industries/business-information-services",
          },
          {
            name: "Enterprise Services",
            path: "/industries/enterprise-services",
          },
        ],
      },
      {
        name: "High-Tech",
        subMenu: [
          {
            name: "Computer Peripherals",
            path: "/industries/computer-peripherals",
          },
          {
            name: "Contract Manufacturers",
            path: "/industries/contract-manufacturers",
          },
          {
            name: "Distribution Companies",
            path: "/industries/distribution-companies",
          },
        ],
      },
    ],
  },
  { name: "Why Us", path: "/about" },
];

export default navLinks;
