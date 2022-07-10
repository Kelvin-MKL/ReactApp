const dishes = [
  {
    _id: "001",
    name: "Ramen",
    cuisine: { _id: "c01", name: "Japanese" },
    price: 6,
    starRating: 2.5,
    favourite: true,
  },
  {
    _id: "002",
    name: "Sushi",
    cuisine: { _id: "c01", name: "Japanese" },
    price: 5,
    starRating: 2.5,
  },
  {
    _id: "003",
    name: "Curry Chicken with Rice",
    cuisine: { _id: "c01", name: "Japanese" },
    price: 8,
    starRating: 3.5,
  },
  {
    _id: "004",
    name: "BBQ Pork with Rice",
    cuisine: { _id: "c02", name: "Asian" },
    price: 7,
    starRating: 3.5,
  },
  {
    _id: "005",
    name: "Wonton Noodle Soup",
    cuisine: { _id: "c02", name: "Asian" },
    price: 7,
    starRating: 3.5,
  },
  {
    _id: "006",
    name: "Sweet and Sour Pork",
    cuisine: { _id: "c02", name: "Asian" },
    price: 7,
    starRating: 3.5,
  },
  {
    _id: "007",
    name: "Bibimbap",
    cuisine: { _id: "c03", name: "Korean" },
    price: 7,
    starRating: 4.5,
  },
  {
    _id: "008",
    name: "Bulgogi",
    cuisine: { _id: "c03", name: "Korean" },
    price: 4,
    starRating: 3.5,
  },
];

export function getDishes() {
  return dishes;
}
