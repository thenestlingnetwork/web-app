import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/icons";
import { type } from "os";

export const services = [
  {
    image: "/influencer.png",
    name: "Influencer Marketing",
    description: [
      "Perform Campaigns CPI, CPA, CPV, etc",
      "Live Stream / Vod Integration",
      "Brand Endorsement Via celebrity",
    ],
  },
  {
    image: "/talent.png",
    name: "Talent Management",
    description: [
      "Content creation and distribution",
      "Talent Partnership for events: Shoutcasters, host, analyst, cosplays, etc",
      "Esports Team: players, creators, coaches, etc",
    ],
  },
];

export const teams = [
  {
    name: "Gaurav Sawant",
    role: "Founder",
    image: "/gaurav.png",
    description:
      "Ex. exports athlete and one of the OGs. Offers a wonderful blend of knowledge, ideas and experties when it comes to curating and managing esport sIPs, events and talents. He has more than 9 years of hands-oin experince in gaming and cosplays events and has been an active Evangelist in the gaming space for more than 11 years.",
    email: "",
    linkedin: "",
  },
  {
    name: "Tryaksh Sharma",
    role: "Founder",
    image: "/tryaksh.png",
    description:
      "Being a top tier esports athlete and content creator himself, he owns same of best COD teams of india and Asia. Having worked with over 2000 influencers across the gaming and web3, he offers his creativity approach towards crafting quirky marketing stratigies that leave a mark on the audience's mind.",
    email: "",
    linkedin: "https://www.linkedin.com/in/trayaksh-sharma-279617184",
  },
];

export const contacts = {
  meetignUrl: "https://calendly.com/trayaksh_tnn",
  phone: ["+91 8779131414", "+91 8076924861"],
};

export const address =
  "A-303, Aanandimata Appartment, Pakhadi, Kharegaon, Kalwa, Thane - 400605";

export const socials = {
  instagram: {
    url: "https://instagram.com/hypesquad_gg?igshid=Y2I2MzMwZWM3ZA==",
    icon: InstagramIcon,
  },

  facebook: {
    url: "https://www.facebook.com/profile.php?id=100093336257408&mibextid=LQQJ4d",
    icon: FacebookIcon,
  },
  linkedin: {
    url: "https://www.linkedin.com/company/thenestlingnetwork/",
    icon: LinkedinIcon,
  },
};
