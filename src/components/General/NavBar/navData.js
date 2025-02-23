const navLinks = [
  { name: "About us", path: "/about" },
  {
    name: "Services",
    subMenu: [
      {
        name: "SAP",
        subMenu: [
          { name: "SAP Consulting", path: "#" },
          { name: "SAP Implementation", path: "#" },
          { name: "SAP Migrations", path: "#" },
          { name: "SAP Support", path: "#" },
        ],
      },
      {
        name: "Oracle",
        subMenu: [
          { name: "Oracle Consulting", path: "#" },
          { name: "Oracle Development", path: "#" },
        ],
      },
      {
        name: "Digital Application",
        subMenu: [
          { name: "Application Development & Maintenance", path: "#" },
          { name: "Application Modernization", path: "#" },
          { name: "Application Re-Engineering", path: "#" },
        ],
      },
      {
        name: "DevOps",
        subMenu: [],
      },
      {
        name: "Data, Automation AI",
        subMenu: [
          { name: "Data Engineering", path: "#" },
          { name: "Data Analytics", path: "#" },
          { name: "Data Modernization", path: "#" },
          { name: "Automation AI", path: "#" },
        ],
      },
    ],
  },
  {
    name: "COEs",
    subMenu: [
      {
        name: "AWS",
        subMenu: [
          { name: "AWS Migration", path: "#" },
          { name: "AWS Managed", path: "#" },
          { name: "AWS Transformation", path: "#" },
        ],
      },
      {
        name: "SAP",
        subMenu: [],
      },
      {
        name: "Microsoft",
        subMenu: [],
      },
    ],
  },
  {
    name: "Industries",
    subMenu: [
      { name: "Education", path: "/industries/education" },
      { name: "Oil & Gas", path: "/industries/oil-gas" },
    ],
  },
  { name: "Career", path: "#" },
  { name: "Contact Us", path: "#" },
];

export default navLinks;
