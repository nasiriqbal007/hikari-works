import { Settings, Rocket, Diamond } from "lucide-react";

const plansData = [
  {
    id: 1,
    title: "Personal",
    price: "$19.99",
    duration: "/mo",
    features: ["1 Design Revision", "Predictive Dialing", "Phone & Email Support"],
    icon: Settings,
    iconColor: "#F3C522",
    bgIcon: "#FEF6DB",

  },
  {
    id: 2,
    title: "Business",
    price: "$49.99",
    duration: "/mo",
    features: ["5 Design Revisions", "Advanced Analytics", "Priority Support"],
    icon: Rocket,
    iconColor: "#F3C522",
    bgIcon: "#FEF6DB",
  },
  {
    id: 3,
    title: "Enterprise",
    price: "$99.99",
    duration: "/mo",
    features: ["Unlimited Revisions", "Dedicated Manager", "24/7 Support"],
    icon: Diamond,
    iconColor: "#F3C522",
    bgIcon: "#FEF6DB",

  },
];

export default plansData;
