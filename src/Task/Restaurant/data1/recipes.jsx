import paneer from "../../../assets/paneer-butter-masala.jpg";
import biryani from "../../../assets/chicken-briyani.jpg";
import dosa from "../../../assets/masala-dosa.jpg";
import chole from "../../../assets/chole-bhature.webp";
import gulab from "../../../assets/soft-gulab-jamun.webp";

export const recipes = [
  {
    id: 1,
    title: "Paneer Butter Masala",
    image: paneer,
    description: "Soft paneer cubes in a rich, creamy tomato gravy.",
    ingredients: ["Paneer", "Tomato", "Butter", "Cream", "Spices"],
  },
  {
    id: 2,
    title: "Chicken Biryani",
    image: biryani,
    description: "Fragrant basmati rice layered with spiced chicken.",
    ingredients: [
      "Basmati rice",
      "Chicken",
      "Yogurt",
      "Onion",
      "Biryani masala",
    ],
  },
  {
    id: 3,
    title: "Masala Dosa",
    image: dosa,
    description: "Crispy rice crepe filled with spiced potato masala.",
    ingredients: ["Dosa batter", "Potato", "Mustard seeds", "Curry leaves"],
  },
  {
    id: 4,
    title: "Chole Bhature",
    image: chole,
    description: "Spicy chickpea curry served with fluffy fried bread.",
    ingredients: ["Chickpeas", "Onion", "Tomato", "Flour", "Spices"],
  },
  {
    id: 5,
    title: "Gulab Jamun",
    image: gulab,
    description: "Soft milk-solid dumplings soaked in rose sugar syrup.",
    ingredients: ["Khoya", "Sugar", "Rose water", "Cardamom"],
  },
];
