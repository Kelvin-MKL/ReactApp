const dishes = [
  {
    _id: "001",
    name: "En Premium Chirashi Don",
    cuisine: { _id: "c01", name: "Japanese" },
    price: 19,
    restaurant: "EN Sushi",
    liked: true,
  },
  {
    _id: "002",
    name: "California Maki",
    cuisine: { _id: "c01", name: "Japanese" },
    price: 14,
    restaurant: "EN Sushi",
  },
  {
    _id: "003",
    name: "Udon Noodles",
    cuisine: { _id: "c01", name: "Japanese" },
    price: 12,
    restaurant: "Udonya",
  },
  {
    _id: "004",
    name: "BBQ Pork with Rice",
    cuisine: { _id: "c02", name: "Asian" },
    price: 13.5,
    restaurant: "Your Personal Chef",
  },
  {
    _id: "005",
    name: "Seafood Noodle Soup",
    cuisine: { _id: "c02", name: "Asian" },
    price: 15.9,
    restaurant: "Your Personal Chef",
  },
  {
    _id: "006",
    name: "Sweet and Sour Pork",
    cuisine: { _id: "c02", name: "Asian" },
    price: 12,
    restaurant: "I-Thai",
  },
  {
    _id: "007",
    name: "Bibimbap",
    cuisine: { _id: "c03", name: "Korean" },
    price: 14,
    restaurant: "Topokki88",
  },
  {
    _id: "008",
    name: "Bulgogi",
    cuisine: { _id: "c03", name: "Korean" },
    price: 14.9,
    restaurant: "Go Bull",
  },
];

export function getDishes() {
  return dishes;
}
