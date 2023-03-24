export const prodHeader = [
  { title: "All industries", icon: "./images/ph-menu.svg" },
  { title: "Food", icon: "./images/ph-food.svg" },
  { title: "Transportation", icon: "./images/ph-trans.svg" },
  { title: "Education", icon: "./images/ph-edu.svg" },
  { title: "Health & Lifestyle", icon: "./images/ph-health.svg" },
  { title: "Banking & Finance", icon: "./images/ph-bank.svg" },
  { title: "Productivity", icon: "./images/ph-prod.svg" },
  { title: "E-commerce", icon: "./images/ph-commerce.svg" },
];

export const products = [
  {
    title: "Courrier X Logistics App",
    category: "Transportation",
    url: "",
  },
  {
    title: "Order X Food ordering & delivery APP",
    category: "Food",
    url: "",
  },
  {
    title: "OrderX Restaurant Management & POS App",
    category: "Food",
    url: "",
  },
  {
    title: "Order X Grocery delivery App",
    category: "Food",
    url: "",
  },
  {
    title: "Order X Pharmacy delivery App",
    category: "Health & Lifestyle",
    url: "",
  },
  {
    title: "Order X Gas delivery App",
    category: "Transportation",
    url: "",
  },
  {
    title: "Order X Laundry delivery App",
    category: "Transportation",
    url: "",
  },
  {
    title: "Order X Online Store & Delivery App",
    category: "E-commerce",
    url: "",
  },
  {
    title: "Order X Heatlhcare & Fitness consultation App",
    category: "Health & Lifestyle",
    url: "",
  },
  {
    title: "HotelX- Hotel Management and POS Solution",
    category: "Productivity",
    url: "",
  },
  {
    title: "Uberlike Ride hailling App",
    category: "Transportation",
    url: "",
  },
  {
    title: "Uberlike Taxi hailing App",
    category: "Transportation",
    url: "",
  },
  {
    title: "CryptoX Bitcoin Mining App",
    category: "Banking & Finance",
    url: "",
  },
  {
    title: "CryptoX Trading Investment App",
    category: "Banking & Finance",
    url: "",
  },
  {
    title: "PayX - Loan & Investment App",
    category: "Banking & Finance",
    url: "",
  },
  {
    title: "School 360 LMS solution",
    category: "Education",
    url: "",
  },
  {
    title: "School 360 SMS solution",
    category: "Education",
    url: "",
  },
  {
    title: "TotalX CRM",
    category: "Productivity",
    url: "",
  },
  {
    title: "TotalX ERP",
    category: "Productivity",
    url: "",
  },
  {
    title: "GrowthX Business suite App",
    category: "Productivity",
    url: "",
  },
  {
    title: "TotalX Accounting & Book keeping App",
    category: "Productivity",
    url: "",
  },
];

export const getLimitedList = () => {
  const limitedList = [];
  for (let i = 0; i < 12; i++) {
    limitedList.push(products[i]);
  }

  return limitedList;
};

export const getAllList = () => products;

export const prods = [
  {
    title: "School 360",
    description: "EDUCATION",
    image: "./images/product-16.jpg",
    url: "",
  },
  {
    title: "Order X Food ordering & delivery APP",
    description: "FOOD",
    image: "./images/food.jpg",
    url: "",
  },
  {
    title: "Courrier X Logistics App",
    image: "./images/courrier.jpg",
    description: "TRANSPORTATION",
    url: "",
  },
  {
    title: "Order X Grocery delivery App",
    image: "./images/grocery.jpg",
    description: "FOOD",
    url: "",
  },
  {
    title: "Order X Pharmacy delivery App",
    image: "./images/pharmacy.jpg",
    description: "HEALTH",
    url: "",
  },
  {
    title: "Order X Laundry delivery App",
    image: "./images/product-7.jpg",
    description: "BUSINESS",
    url: "",
  },
  {
    title: "Order X Online Store & Delivery App",
    image: "./images/online-store.jpg",
    description: "BUSINESS",
    url: "",
  },
  {
    title: "Order X Heatlhcare & Fitness consultation App",
    image: "./images/fitness.jpg",
    description: "HEALTH",
    url: "",
  },
  {
    title: "HotelX- Hotel Management and POS Solution",
    image: "./images/hotel.jpg",
    description: "HOUSING",
    url: "",
  },
  {
    title: "Uberlike Ride hailling App",
    image: "./images/taxi.jpg",
    description: "TRANSPORTATION",
    url: "",
  },
  {
    title: "CryptoX Bitcoin Mining App",
    image: "./images/product-13.jpg",
    description: "TRADING",
    url: "",
  },
  {
    title: "CryptoX Trading Investment App",
    image: "./images/product-14.jpg",
    description: "TRADING",
    url: "",
  },
  {
    title: "PayX - Loan & Investment App",
    image: "./images/loan.jpg",
    description: "FINANCE",
    url: "",
  },
  {
    title: "School 360 LMS solution",
    image: "./images/lms.jpg",
    description: "EDUCATION",
    url: "",
  },
  {
    title: "School 360 SMS solution",
    image: "./images/sms.jpg",
    description: "EDUCATION",
    url: "",
  },
  {
    title: "TotalX CRM",
    image: "./images/crm.jpg",
    description: "MANAGEMENT",
    url: "",
  },
  {
    title: "TotalX ERP",
    image: "./images/erp.jpg",
    description: "MANAGEMENT",
    url: "",
  },
  {
    title: "TotalX Accounting & Book keeping App",
    image: "./images/accounting.jpg",
    description: "MANAGEMENT",
    url: "",
  },
];

export const partnerImages = [
  {
    img_url: "./images/google.svg",
    width: "90px",
    url: "https://google.com",
  },
  {
    img_url: "./images/ibm.svg",
    width: "50px",
    url: "https://ibm.com",
  },
  {
    img_url: "./images/microsoft.svg",
    width: "100px",
    url: "https://microsoft.com",
  },
  {
    img_url: "./images/vm.svg",
    width: "100px",
    url: "https://vmware.com",
  },
  {
    img_url: "./images/Huawei.svg",
    width: "100px",
    url: "https://huawei.com",
  },
  {
    img_url: "./images/hp.svg",
    width: "100px",
    url: "https://hp.com",
  },
  {
    img_url: "./images/oracle.svg",
    width: "100px",
    url: "https://oracle.com",
  },
];

export const services = [
  {
    id: 0,
    icon: "./images/roll-brush.svg",
    title: "Cloud Solution & Manangement",
  },
  {
    id: 1,
    icon: "./images/startup.svg",
    title: "Startup Scale-Up & MVP Development",
  },
  {
    id: 2,
    icon: "./images/software.svg",
    title: "Software Product Development",
  },
  {
    id: 3,
    icon: "./images/api.svg",
    title: "API Development & Integration",
  },
  {
    id: 4,
    icon: "./images/white-label.svg",
    title: "White Label App Customizations",
  },
  {
    id: 5,
    icon: "./images/training.svg",
    title: "Training & IT Consultation",
  },
  {
    id: 6,
    icon: "./images/ui.svg",
    title: "UI/UX Design",
  },
  {
    id: 7,
    icon: "./images/team.svg",
    title: "Outsourcing & Team Augmentation",
  },
];

export const serviceDesc = [
  {
    id: 0,
    title: "Cloud Solution & Management",
    description:
      "We provide agile cloud services that help businesses drive innovation and growth. Our managed IT strategies and processes help manage their cloud infrastructure, and ensure data security and regulatory compliance.  With our stable and cost-effective  IT infrastructure, we enable businesses focus on core operations while we handle technical details with scalable solutions.",
    icons: [
      {
        icon: "./images/cloud-ic-1.svg",
        title: "Cloud Management",
      },
      {
        icon: "./images/cloud-ic-2.svg",
        title: "Managed Security",
      },
      {
        icon: "./images/cloud-ic-3.svg",
        title: "Managed DeveOps",
      },
      {
        icon: "./images/cloud-ic-4.svg",
        title: "Managed Support",
      },
    ],
  },

  {
    id: 1,
    title: "Startup Scale-Up & MVP Develoment",
    description:
      "Leverage our expertise to increase your chances of securing funding by effectively pitching your product with a successful MVP. Develop a competitive edge in securing funding with our expert MVP app development team. Our fast-to-release approach delivers a satisfactory usable MVP in just 3-4 months, outperforming idea-only competitors. ",
    icons: [
      {
        icon: "./images/startup-ic-1.svg",
        title: "Validation & Prototype",
      },
      {
        icon: "./images/startup-ic-2.svg",
        title: "Industry Research",
      },
      {
        icon: "./images/startup-ic-3.svg",
        title: "MVP Development",
      },
      {
        icon: "./images/startup-ic-4.svg",
        title: "Product Scale-Up",
      },
    ],
  },

  {
    id: 2,
    title: "Software Product Development",
    description:
      "Our team of experienced developers uses the latest technologies and agile methodologies to deliver high-quality software products that meet your business needs. We understand that every project is unique, and we tailor our solutions to ensure we deliver products that meet your specific requirements.",
    icons: [
      {
        icon: "./images/software-ic-1.svg",
        title: "Fintech Development",
      },
      {
        icon: "./images/software-ic-2.svg",
        title: "Mobile App Development",
      },
      {
        icon: "./images/software-ic-3.svg",
        title: "Enterprise Software Devlopment",
      },
      {
        icon: "./images/software-ic-4.svg",
        title: "Web/Cloud App Development",
      },
    ],
  },

  {
    id: 3,
    title: "API Development & Integration",
    description:
      "Bridge the gaps between your disparate systems, extend your business capabilities and ensure stellar performance with LampNet Solutions API development and integration services. We help your team work efficiently by enabling seamless data sharing across systems, streamlined businesses processes and enhanced collaboration.",
    icons: [
      {
        icon: "./images/api-ic-1.svg",
        title: "Custom API Development",
      },
      {
        icon: "./images/api-ic-2.svg",
        title: "Third Party API Integration",
      },
      {
        icon: "./images/api-ic-3.svg",
        title: "Cloud API Integration & Dev",
      },
      {
        icon: "./images/api-ic-4.svg",
        title: "Microservice Architecture ",
      },
    ],
  },

  {
    id: 4,
    title: "White Label App Customization",
    description:
      "We provide a seamless integration process, allowing businesses to easily incorporate our software into their existing infrastructure to match their unique brand and user needs, without the need for additional development resources. Our white label solutions also come with reliable technical support to ensure a smooth experience for our clients and their end-users.",
    icons: [
      {
        icon: "./images/white-ic-1.svg",
        title: "Customizable User Interface",
      },
      {
        icon: "./images/white-ic-2.svg",
        title: "Branded Mobile Apps",
      },
      {
        icon: "./images/white-ic-3.svg",
        title: "Third Party API Integration",
      },
      {
        icon: "./images/white-ic-4.svg",
        title: "Technical Support",
      },
    ],
  },

  {
    id: 5,
    title: "Training & IT Consultation",
    description:
      "We provide world-class and professional trainings through our industry certified trainers at the LampNet Institute of Technology.  We also offer expert IT consultation to help businesses develop and implement an effective IT strategy. We assist in smooth digital transformation and system integration as well as advise on improvements to your digital customer experience.",
    icons: [
      {
        icon: "./images/training-ic-1.svg",
        title: "Training & Certifications",
      },
      {
        icon: "./images/training-ic-2.svg",
        title: "IT System Evaluation",
      },
      {
        icon: "./images/training-ic-3.svg",
        title: "Project Management",
      },
      {
        icon: "./images/training-ic-4.svg",
        title: "Data Management & Security",
      },
    ],
  },

  {
    id: 6,
    title: "UI/UX Design",
    description:
      "We are a creative in-house design agency that specializes in crafting outstanding customer experiences. Our human-centric designs help businesses thrive by forging strong customer relationships and increasing customer satisfaction by 2X. Trust us to deliver optimal experiences that build strong customer relationships and drive business growth.",
    icons: [
      {
        icon: "./images/ui-ic-1.svg",
        title: "Wireframing & Prototyping",
      },
      {
        icon: "./images/ui-ic-2.svg",
        title: "Website Design",
      },
      {
        icon: "./images/ui-ic-3.svg",
        title: "Mobile Design",
      },
      {
        icon: "./images/ui-ic-4.svg",
        title: "Branding",
      },
    ],
  },

  {
    id: 7,
    title: "Outsourcing & Team Augumentation",
    description:
      "We offer experienced top-notch talent with all the necessary skills to join your in-house team and work on your projects under your direct management. By filling skill and resource gaps in your team, we accelerate project progress and help you meet your goals faster. Trust us to provide the right talent and skills to drive your success.",
    icons: [
      {
        icon: "./images/team-ic-1.svg",
        title: "IT Staff Outsourcing",
      },
      {
        icon: "./images/team-ic-2.svg",
        title: "Team Augumentation",
      },
      {
        icon: "./images/team-ic-3.svg",
        title: "Project-Based Outsourcing",
      },
      {
        icon: "./images/team-ic-4.svg",
        title: "Remote Staffing",
      },
    ],
  },
];
