export const ROUTE_KEY = "route_key"

export const saveRoute = (route) => 
window.localStorage.setItem(ROUTE_KEY, route)

export const getRoute = () => window.localStorage.getItem(ROUTE_KEY)

export const ROUTES = {
  home: "home",
  products: "products",
  industries: "industries",
  company: "company",
  partnership: "partnership",
  resources: "resources",
  aboutUs: "about",
  cloud: "cloud",
  startUp: "start-up",
  softwareProd: "software-product",
  api: "api",
  whiteLabel: "white-label",
  training: "training",
  ui: "ui",
  staff: "staff",
};

export const PRODUCT_ROUTES = {
  courier: "courrier",
  foodx: "foodx",
  medx: "medx",
  estatex: "estatex",
  school360: "schoolx",
  fintech360: "fintechx",
  thriftx: "thriftx",
  workspaceX: "workspacex",
  orderX: "orderX",
  uberX: "uberX",
};

export const navIcons = {
  darkIcon: "./images/arrow-down-dark.svg",
  lightIcon: "./images/arrow-down.svg",
  darkLogo: "./images/Logo-b.svg",
  redLogo: "./images/Logo-r.svg",
  whiteLogo: "./images/Logo-w.svg"
};