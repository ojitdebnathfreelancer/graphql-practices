const products = [
  {
    product_iD: "101",
    product_name: "SmartWatch Pro",
    productCategory: 1,
    price: 199,
    quantity: 150,
  },
  {
    product_iD: "102",
    product_name: "Wireless Earbuds",
    productCategory: 2,
    price: 99,
    quantity: 300,
  },
  {
    product_iD: "103",
    product_name: "HD Action Camera",
    productCategory: 3,
    price: 249,
    quantity: 100,
  },
  {
    product_iD: "104",
    product_name: "Portable Bluetooth Speaker",
    productCategory: 4,
    price: 79,
    quantity: 200,
  },
  {
    product_iD: "105",
    product_name: "Gaming Mouse",
    productCategory: 5,
    price: 49,
    quantity: 250,
  },
];

const categories = [
  {
    id: 1,
    name: "Electronics",
  },
  {
    id: 2,
    name: "Clothing",
  },
  {
    id: 3,
    name: "Home & Kitchen",
  },
  {
    id: 4,
    name: "Sports & Outdoors",
  },
  {
    id: 5,
    name: "Beauty & Personal Care",
  },
];

const reviews = [
  {
    id: 1,
    user: "Alice",
    rating: 4.5,
    comment: "Great service and friendly staff. The food was delicious!",
    productId: "101",
  },
  {
    id: 2,
    user: "Bob",
    rating: 3.2,
    comment: "Decent place, but the wait time was longer than expected.",
    productId: "102",
  },
  {
    id: 3,
    user: "Charlie",
    rating: 5,
    comment:
      "Absolutely fantastic experience! The ambiance and food were top-notch.",
    productId: "103",
  },
  {
    id: 4,
    user: "Diana",
    rating: 2.5,
    comment: "Disappointing service. The food was average at best.",
    productId: "104",
  },
  {
    id: 5,
    user: "Eva",
    rating: 4.8,
    comment: "Incredible food! The flavors were exceptional.",
    productId: "105",
  },
];

export const db = { products, categories, reviews };
