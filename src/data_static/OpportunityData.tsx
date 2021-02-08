import milton from "../assets/17_e_milton.jpg";
import hingham from "../assets/2_hingham.jpg";
import somerville from "../assets/565_somerville.jpg";

// editorconfig-checker-disable-line
const OpportunityData = [
  {
    id: "0",
    address: "565 Somerville Ave",
    city: "Somerville, MA",
    img: [somerville, milton, hingham],
    share: "29.5%",
    contribution: 20000,
    mark: 21283,
    distribution: 1384,
    description:
    // eslint-disable-next-line
      "Lorem ipsum dolor sit amet, \
      consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "1",
    address: "17 East Milton Rd",
    city: "Brookline, MA",
    img: [milton, somerville, hingham],
    share: "20%",
    contribution: 120000,
    mark: 131000,
    distribution: 6193,
    description:
    // eslint-disable-next-line
      "Lorem ipsum dolor sit amet, \
      consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "2",
    address: "2 Hingham St",
    city: "Cambridge, MA",
    img: [hingham, milton, somerville],
    share: "90%",
    contribution: 60000,
    mark: 60500,
    distribution: 0,
    description:
    // eslint-disable-next-line
      "Lorem ipsum dolor sit amet, \
      consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default OpportunityData;